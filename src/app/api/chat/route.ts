import { NextRequest, NextResponse } from 'next/server';
import { AI_SYSTEM_PROMPT, getDeterministicAnswer } from '@/lib/ai-assistant';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid request: messages array is required.' },
        { status: 400 }
      );
    }

    const lastUserMessage = messages
      .filter((m) => m.role === 'user')
      .slice(-1)[0]?.content;

    if (!lastUserMessage || typeof lastUserMessage !== 'string') {
      return NextResponse.json(
        { error: 'User message text is missing.' },
        { status: 400 }
      );
    }

    if (lastUserMessage.length > 1000) {
      return NextResponse.json(
        { error: 'Message exceeds maximum length of 1000 characters.' },
        { status: 400 }
      );
    }

    // Limit conversation context to last 6 messages
    const recentHistory = messages.slice(-6);

    const geminiKey = process.env.GEMINI_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    // 1. If Google Gemini API Key is provided
    if (geminiKey) {
      const candidateModels = [
        'gemini-2.5-flash',
        'gemini-flash-latest',
        'gemini-1.5-flash',
      ];

      for (const model of candidateModels) {
        try {
          const contents = [
            {
              role: 'user',
              parts: [
                {
                  text: `${AI_SYSTEM_PROMPT}\n\nVisitor Question: ${lastUserMessage}`,
                },
              ],
            },
          ];

          const geminiRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ contents }),
              signal: AbortSignal.timeout(6000),
            }
          );

          if (geminiRes.ok) {
            const data = await geminiRes.json();
            const candidateText =
              data.candidates?.[0]?.content?.parts?.[0]?.text;

            if (candidateText) {
              return NextResponse.json({
                role: 'assistant',
                content: candidateText,
                provider: model,
              });
            }
          }
        } catch (e) {
          // Try next model or proceed to fallback
        }
      }
    }

    // 2. If OpenAI / OpenRouter API Key is provided
    if (openaiKey) {
      try {
        const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openaiKey}`,
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              { role: 'system', content: AI_SYSTEM_PROMPT },
              ...recentHistory.map((m) => ({ role: m.role, content: m.content })),
            ],
            temperature: 0.3,
            max_tokens: 500,
          }),
          signal: AbortSignal.timeout(6000),
        });

        if (openaiRes.ok) {
          const data = await openaiRes.json();
          const text = data.choices?.[0]?.message?.content;
          if (text) {
            return NextResponse.json({
              role: 'assistant',
              content: text,
              provider: 'gpt-4o-mini',
            });
          }
        }
      } catch (openaiError) {
        // Proceed to fallback
      }
    }

    // 3. Deterministic Knowledge-Based Fallback
    // Accurate, grounded responses based strictly on Leopold's verified data
    const fallback = getDeterministicAnswer(lastUserMessage);

    return NextResponse.json({
      role: 'assistant',
      content: fallback.answer,
      sources: fallback.sources,
      provider: 'verified-knowledge-engine',
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing the chat request.' },
      { status: 500 }
    );
  }
}
