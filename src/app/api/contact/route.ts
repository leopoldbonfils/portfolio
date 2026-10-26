import { NextRequest, NextResponse } from 'next/server';

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // 1. Validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Please provide name, email, and message.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Rate limiting / payload size guard
    if (body.message.length > 3000) {
      return NextResponse.json(
        { error: 'Message exceeds maximum allowable length (3000 characters).' },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY?.trim();

    if (resendKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['leopordbonfils@gmail.com'],
            reply_to: body.email,
            subject: `Portfolio Message: ${body.subject || 'New Contact Request'} from ${body.name}`,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
                <h2 style="color: #e69d43; margin-top: 0;">New Message from Portfolio Website</h2>
                <p><strong>Sender Name:</strong> ${body.name}</p>
                <p><strong>Sender Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
                <p><strong>Subject:</strong> ${body.subject || 'Portfolio Inquiry'}</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                <p style="white-space: pre-wrap; line-height: 1.5; color: #333;">${body.message}</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                <p style="font-size: 12px; color: #888;">This email was sent via your Next.js Portfolio contact form powered by Resend.</p>
              </div>
            `,
          }),
        });

        if (resendRes.ok) {
          return NextResponse.json({
            success: true,
            delivered: true,
            message: 'Your message has been sent successfully! Leopold will get back to you soon.',
          });
        } else {
          const errData = await resendRes.json();
          console.error('Resend delivery error:', errData);
        }
      } catch (sendErr) {
        console.error('Failed to dispatch email via Resend:', sendErr);
      }
    }

    // Direct fallback if delivery failed or key was not valid
    const subject = encodeURIComponent(body.subject || 'Portfolio Inquiry');
    const mailBody = encodeURIComponent(`From: ${body.name} (${body.email})\n\n${body.message}`);

    return NextResponse.json({
      success: true,
      delivered: false,
      message:
        'Message received! You can also click below to confirm in your email client.',
      directMailto: `mailto:leopordbonfils@gmail.com?subject=${subject}&body=${mailBody}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Server error processing contact request.' },
      { status: 500 }
    );
  }
}
