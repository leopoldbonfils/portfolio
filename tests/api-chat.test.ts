import { POST } from '../src/app/api/chat/route';
import { NextRequest } from 'next/server';

interface ApiTestResult {
  name: string;
  passed: boolean;
  notes: string;
}

const apiResults: ApiTestResult[] = [];

function createNextRequest(body: any): NextRequest {
  return new NextRequest('http://localhost:3000/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

console.log('================================================================');
console.log('RUNNING API ROUTE (/api/chat) INTEGRATION TEST SUITE');
console.log('Testing payload validation, fallback behavior & mocked LLM providers');
console.log('================================================================\n');

async function runApiTests() {
  const originalFetch = global.fetch;
  const originalGeminiKey = process.env.GEMINI_API_KEY;
  const originalOpenAIKey = process.env.OPENAI_API_KEY;

  try {
    // -------------------------------------------------------------------------
    // Test 1: Validation - Missing messages field
    // -------------------------------------------------------------------------
    {
      const req = createNextRequest({});
      const res = await POST(req);
      const data = await res.json();
      const passed = res.status === 400 && data.error.includes('messages array is required');
      apiResults.push({
        name: 'Validation: Missing messages payload returns 400',
        passed,
        notes: passed
          ? 'Status 400 with expected validation message'
          : `Failed: status=${res.status}, body=${JSON.stringify(data)}`,
      });
    }

    // -------------------------------------------------------------------------
    // Test 2: Validation - Empty messages array
    // -------------------------------------------------------------------------
    {
      const req = createNextRequest({ messages: [] });
      const res = await POST(req);
      const data = await res.json();
      const passed = res.status === 400 && data.error.includes('messages array is required');
      apiResults.push({
        name: 'Validation: Empty messages array returns 400',
        passed,
        notes: passed
          ? 'Status 400 with expected validation message'
          : `Failed: status=${res.status}, body=${JSON.stringify(data)}`,
      });
    }

    // -------------------------------------------------------------------------
    // Test 3: Validation - Message exceeds 1000 characters
    // -------------------------------------------------------------------------
    {
      const longMessage = 'A'.repeat(1050);
      const req = createNextRequest({
        messages: [{ role: 'user', content: longMessage }],
      });
      const res = await POST(req);
      const data = await res.json();
      const passed = res.status === 400 && data.error.includes('maximum length of 1000 characters');
      apiResults.push({
        name: 'Validation: Message > 1000 chars returns 400',
        passed,
        notes: passed
          ? 'Status 400 with maximum length error'
          : `Failed: status=${res.status}, body=${JSON.stringify(data)}`,
      });
    }

    // -------------------------------------------------------------------------
    // Test 4: Deterministic Fallback without AI Credentials
    // -------------------------------------------------------------------------
    {
      process.env.GEMINI_API_KEY = '';
      process.env.OPENAI_API_KEY = '';

      const req = createNextRequest({
        messages: [{ role: 'user', content: 'Where does Leopold live?' }],
      });
      const res = await POST(req);
      const data = await res.json();

      const passed =
        res.status === 200 &&
        data.role === 'assistant' &&
        data.provider === 'verified-knowledge-engine' &&
        data.content.includes('Kigali, Rwanda') &&
        Array.isArray(data.sources) &&
        data.sources.length > 0;

      apiResults.push({
        name: 'Deterministic Fallback: Executes cleanly without provider API keys',
        passed,
        notes: passed
          ? `Status 200, provider=${data.provider}, sources=${data.sources?.length}`
          : `Failed: status=${res.status}, body=${JSON.stringify(data)}`,
      });
    }

    // -------------------------------------------------------------------------
    // Test 5: Mocked Google Gemini Provider Success
    // -------------------------------------------------------------------------
    {
      process.env.GEMINI_API_KEY = 'mock-gemini-key-12345';
      process.env.OPENAI_API_KEY = '';

      const mockGeminiReply =
        'Mocked Gemini response: REST APIs expose resources through HTTP methods such as GET and POST.';

      global.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
        const urlStr = input.toString();
        if (urlStr.includes('generativelanguage.googleapis.com')) {
          return new Response(
            JSON.stringify({
              candidates: [
                {
                  content: {
                    parts: [{ text: mockGeminiReply }],
                  },
                },
              ],
            }),
            {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            }
          );
        }
        return originalFetch(input, init);
      };

      const req = createNextRequest({
        messages: [{ role: 'user', content: 'Explain REST APIs.' }],
      });
      const res = await POST(req);
      const data = await res.json();

      const passed =
        res.status === 200 &&
        data.content === mockGeminiReply &&
        data.provider === 'gemini-3.5-flash-lite';

      apiResults.push({
        name: 'Mocked Gemini Provider: Returns LLM candidate response',
        passed,
        notes: passed
          ? `Status 200, provider=${data.provider}, content matched`
          : `Failed: status=${res.status}, body=${JSON.stringify(data)}`,
      });
    }

    // -------------------------------------------------------------------------
    // Test 6: Mocked Gemini Failure -> Graceful Fallback to Verified Engine
    // -------------------------------------------------------------------------
    {
      process.env.GEMINI_API_KEY = 'mock-failing-key';
      process.env.OPENAI_API_KEY = '';

      global.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
        const urlStr = input.toString();
        if (urlStr.includes('generativelanguage.googleapis.com')) {
          return new Response(JSON.stringify({ error: 'Service Unavailable' }), {
            status: 503,
            headers: { 'Content-Type': 'application/json' },
          });
        }
        return originalFetch(input, init);
      };

      const req = createNextRequest({
        messages: [{ role: 'user', content: 'What are his technical skills?' }],
      });
      const res = await POST(req);
      const data = await res.json();

      const passed =
        res.status === 200 &&
        data.provider === 'verified-knowledge-engine' &&
        data.content.includes('Java') &&
        data.content.includes('Oracle') &&
        Array.isArray(data.sources);

      apiResults.push({
        name: 'Mocked Gemini Outage: Recovers and serves deterministic answer',
        passed,
        notes: passed
          ? `Status 200, provider=${data.provider}, graceful fallback verified`
          : `Failed: status=${res.status}, body=${JSON.stringify(data)}`,
      });
    }

    // -------------------------------------------------------------------------
    // Test 7: Mocked OpenAI Provider Success
    // -------------------------------------------------------------------------
    {
      process.env.GEMINI_API_KEY = '';
      process.env.OPENAI_API_KEY = 'mock-openai-key-67890';

      const mockOpenAIReply =
        'Mocked OpenAI response: REST APIs expose resources through HTTP methods such as GET and POST.';

      global.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
        const urlStr = input.toString();
        if (urlStr.includes('api.openai.com')) {
          return new Response(
            JSON.stringify({
              choices: [
                {
                  message: { content: mockOpenAIReply },
                },
              ],
            }),
            {
              status: 200,
              headers: { 'Content-Type': 'application/json' },
            }
          );
        }
        return originalFetch(input, init);
      };

      const req = createNextRequest({
        messages: [{ role: 'user', content: 'Explain REST APIs.' }],
      });
      const res = await POST(req);
      const data = await res.json();

      const passed =
        res.status === 200 &&
        data.content === mockOpenAIReply &&
        data.provider === 'gpt-4o-mini';

      apiResults.push({
        name: 'Mocked OpenAI Provider: Returns OpenAI candidate response',
        passed,
        notes: passed
          ? `Status 200, provider=${data.provider}, content matched`
          : `Failed: status=${res.status}, body=${JSON.stringify(data)}`,
      });
    }

    // -------------------------------------------------------------------------
    // Test 8: Topic Change Ignores Stale Technical History
    // -------------------------------------------------------------------------
    {
      process.env.GEMINI_API_KEY = 'mock-stale-response-key';
      process.env.OPENAI_API_KEY = '';
      let providerCalls = 0;
      global.fetch = async (): Promise<Response> => {
        providerCalls += 1;
        return new Response(
          JSON.stringify({
            candidates: [
              {
                content: {
                  parts: [{ text: 'REST APIs follow resource-oriented architectural principles.' }],
                },
              },
            ],
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      };

      const req = createNextRequest({
        messages: [
          { role: 'user', content: 'Explain REST APIs.' },
          { role: 'assistant', content: 'REST APIs expose resources over HTTP.' },
          { role: 'user', content: 'How would you describe yourself in three words?' },
        ],
      });
      const res = await POST(req);
      const data = await res.json();
      const content = String(data.content || '').toLowerCase();
      const passed =
        res.status === 200 &&
        providerCalls === 0 &&
        data.provider === 'verified-knowledge-engine' &&
        content.includes('curious') &&
        content.includes('adaptable') &&
        !content.includes('architectural principles');

      apiResults.push({
        name: 'Topic Change: Personal question after REST uses verified personal answer',
        passed,
        notes: passed
          ? 'Personal intent answered deterministically; stale response provider was not called'
          : `Failed: status=${res.status}, calls=${providerCalls}, body=${JSON.stringify(data)}`,
      });
    }

    // -------------------------------------------------------------------------
    // Test 9: Empty Provider Content Falls Back to a Relevant Technical Answer
    // -------------------------------------------------------------------------
    {
      process.env.GEMINI_API_KEY = 'mock-empty-response-key';
      process.env.OPENAI_API_KEY = '';

      global.fetch = async (): Promise<Response> =>
        new Response(
          JSON.stringify({ candidates: [{ content: { parts: [{ text: '   ' }] } }] }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );

      const req = createNextRequest({
        messages: [{ role: 'user', content: 'Explain REST APIs.' }],
      });
      const res = await POST(req);
      const data = await res.json();
      const passed =
        res.status === 200 &&
        data.provider === 'verified-knowledge-engine' &&
        data.content.includes('Resource-Oriented URIs') &&
        data.content.includes('HTTP Methods');

      apiResults.push({
        name: 'Empty Gemini Response: Falls back to matching REST explanation',
        passed,
        notes: passed
          ? 'Empty candidate rejected and deterministic technical answer returned'
          : `Failed: status=${res.status}, body=${JSON.stringify(data)}`,
      });
    }

    // -------------------------------------------------------------------------
    // Test 10: Irrelevant Provider Content Is Rejected
    // -------------------------------------------------------------------------
    {
      process.env.GEMINI_API_KEY = 'mock-irrelevant-response-key';
      process.env.OPENAI_API_KEY = '';

      global.fetch = async (): Promise<Response> =>
        new Response(
          JSON.stringify({
            candidates: [
              {
                content: {
                  parts: [{ text: 'Leopold is curious, adaptable, and solution-oriented.' }],
                },
              },
            ],
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );

      const req = createNextRequest({
        messages: [{ role: 'user', content: 'Explain REST APIs.' }],
      });
      const res = await POST(req);
      const data = await res.json();
      const passed =
        res.status === 200 &&
        data.provider === 'verified-knowledge-engine' &&
        data.content.includes('Resource-Oriented URIs') &&
        !data.content.includes('solution-oriented');

      apiResults.push({
        name: 'Irrelevant Gemini Content: Rejected in favor of current technical intent',
        passed,
        notes: passed
          ? 'Off-topic model output rejected; matching REST explanation returned'
          : `Failed: status=${res.status}, body=${JSON.stringify(data)}`,
      });
    }

    // -------------------------------------------------------------------------
    // Test 11: Technical Question After Personal Question Remains Technical
    // -------------------------------------------------------------------------
    {
      process.env.GEMINI_API_KEY = '';
      process.env.OPENAI_API_KEY = '';

      const req = createNextRequest({
        messages: [
          { role: 'user', content: 'How would you describe yourself in three words?' },
          { role: 'assistant', content: 'Curious, adaptable, and solution-oriented.' },
          { role: 'user', content: 'Explain REST APIs.' },
        ],
      });
      const res = await POST(req);
      const data = await res.json();
      const passed =
        res.status === 200 &&
        data.provider === 'verified-knowledge-engine' &&
        data.content.includes('Resource-Oriented URIs') &&
        data.content.includes('HTTP Methods');

      apiResults.push({
        name: 'Topic Change: Technical question after personal question gets technical answer',
        passed,
        notes: passed
          ? 'Current technical intent answered without inheriting personal context'
          : `Failed: status=${res.status}, body=${JSON.stringify(data)}`,
      });
    }
  } finally {
    // Restore original globals and environment
    global.fetch = originalFetch;
    process.env.GEMINI_API_KEY = originalGeminiKey;
    process.env.OPENAI_API_KEY = originalOpenAIKey;
  }

  // ---------------------------------------------------------------------------
  // Summary
  // ---------------------------------------------------------------------------
  console.log('\n--- DETAILED API INTEGRATION TEST RESULTS ---');
  let passedCount = 0;
  apiResults.forEach((r, idx) => {
    if (r.passed) passedCount++;
    console.log(`[${r.passed ? 'PASS' : 'FAIL'}] #${idx + 1} ${r.name}\n      -> ${r.notes}`);
  });

  console.log('\n================================================================');
  console.log(
    `API INTEGRATION TESTS: ${apiResults.length} | PASSED: ${passedCount} | FAILED: ${
      apiResults.length - passedCount
    }`
  );
  console.log('================================================================\n');

  if (passedCount !== apiResults.length) {
    process.exit(1);
  }
}

runApiTests().catch((err) => {
  console.error('Fatal test error in api-chat.test.ts:', err);
  process.exit(1);
});
