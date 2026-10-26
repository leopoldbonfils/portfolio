import { NextRequest, NextResponse } from 'next/server';
import { AI_SYSTEM_PROMPT, getDeterministicAnswer, ChatMessage } from '@/lib/ai-assistant';

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

    const geminiKey = process.env.GEMINI_API_KEY?.trim();
    const openaiKey = process.env.OPENAI_API_KEY?.trim();

    // 1. Google Gemini Provider
    if (geminiKey) {
      const candidateModels = [
        'gemini-3.8-flash',
        'gemini-3.5-flash',
        'gemini-flash-latest',
        'gemini-3.1-flash-lite',
        'gemini-2.5-flash-lite',
      ];

      for (const model of candidateModels) {
        try {
          // Format multi-turn conversation with system instruction
          const formattedHistory = recentHistory.map((m) => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }],
          }));

          const contents = [
            {
              role: 'user',
              parts: [{ text: `SYSTEM INSTRUCTIONS:\n${AI_SYSTEM_PROMPT}` }],
            },
            {
              role: 'model',
              parts: [{ text: 'Understood. I will answer strictly and truthfully according to Leopold Mugisha’s verified knowledge base.' }],
            },
            ...formattedHistory,
          ];

          const geminiRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ contents }),
              signal: AbortSignal.timeout(5000),
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
          // Try next model or fallback
        }
      }
    }

    // 2. OpenAI / OpenRouter Provider
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
          signal: AbortSignal.timeout(5000),
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

    // 3. High-Accuracy Deterministic Knowledge-Based Engine with Conversation Memory
    const fallback = getDeterministicAnswer(lastUserMessage, recentHistory);

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
