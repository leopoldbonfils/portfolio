import { getDeterministicAnswer, ChatMessage } from '../src/lib/ai-assistant';
import { suggestedQuestions } from '../src/data/faq';

interface TestResult {
  category: string;
  query: string;
  passed: boolean;
  notes: string;
}

const results: TestResult[] = [];

function assertTest(
  category: string,
  query: string,
  expectedSubstring: string,
  history?: ChatMessage[]
) {
  const res = getDeterministicAnswer(query, history);
  const passed = res.answer.toLowerCase().includes(expectedSubstring.toLowerCase());
  results.push({
    category,
    query,
    passed,
    notes: passed
      ? `Passed (matched: "${expectedSubstring}")`
      : `FAILED (expected "${expectedSubstring}", received: "${res.answer.substring(0, 100)}...")`,
  });
}

console.log('================================================================');
console.log('RUNNING AI PORTFOLIO ASSISTANT KNOWLEDGE BASE TEST SUITE');
console.log('================================================================\n');

// 1. Profile & Biography
assertTest('Profile & Biography', 'Where does Leopold live?', 'Kigali, Rwanda');
assertTest('Profile & Biography', 'where leopold live', 'Kigali, Rwanda');
assertTest('Profile & Biography', 'Who is Leopold Mugisha?', 'Software Engineering');
assertTest('Profile & Biography', 'What languages does he speak?', 'English');

// 2. Education & Academics
assertTest('Education & Academics', 'Where did he study software engineering?', 'AUCA');
assertTest('Education & Academics', 'What is his educational background?', 'Adventist University of Central Africa');
assertTest('Education & Academics', 'Does he have academic references?', 'Sibomana');

// 3. Technical Skills
assertTest('Technical Skills', 'What are his technical skills?', 'Java');
assertTest('Technical Skills', 'What database technologies does he use?', 'Oracle');
assertTest('Technical Skills', 'Has he built mobile apps?', 'React Native');

// 4. Verified Projects
assertTest('Verified Projects', 'What projects has he built?', 'Hazard Management System');
assertTest('Verified Projects', 'Tell me about the Hazard Management System', 'Rubavu');
assertTest('Verified Projects', 'Explain the AUCA Intranet App', 'React Native');
assertTest('Verified Projects', 'What is the Oracle SQL Employee Management System?', 'PL/SQL');
assertTest('Verified Projects', 'Tell me about the Driver Permit Booking System', 'PHP');
assertTest('Verified Projects', 'What is the Provisoire-Exam platform?', 'provisional');
assertTest('Verified Projects', 'Tell me about FilmNet', 'Movie');

// 5. Candidate & Concept Projects
assertTest('Candidate & Concept Projects', 'What about FreshLink or TEGA Bus?', 'candidate');

// 6. Engineering Practices
assertTest('Engineering Practices', 'What software engineering practices does he follow?', '3NF');

// 7. Experience & Journey
assertTest('Experience & Journey', 'What is his experience level?', 'academic');

// 8. Employment & Collaboration
assertTest('Employment & Collaboration', 'Is Leopold available for an internship?', 'open');
assertTest('Employment & Collaboration', 'Can I hire him for a full-stack role?', 'internship');

// 9. Contact & Profiles
assertTest('Contact & Profiles', 'How do I contact Leopold?', 'leopordbonfils@gmail.com');
assertTest('Contact & Profiles', 'Where can I download his CV?', 'PDF');

// 10. Portfolio Website Implementation
assertTest('Portfolio Implementation', 'How was this website built?', 'Next.js 14');
assertTest('Portfolio Implementation', 'Where is this portfolio deployed?', 'Netlify');

// 11. Multi-Turn Context Follow-Up Tests
const hazardHistory: ChatMessage[] = [
  { role: 'user', content: 'Tell me about the Hazard Management System' },
  { role: 'assistant', content: 'The Hazard Management System is a centralized disaster coordination app in Java RMI.' },
];
assertTest(
  'Contextual Follow-up',
  'What database did he use in it?',
  'MySQL',
  hazardHistory
);
assertTest(
  'Contextual Follow-up',
  'Where can I see the code for it?',
  'github.com/leopoldbonfils/HazardManagementSystemRMIServer',
  hazardHistory
);

const mobileHistory: ChatMessage[] = [
  { role: 'user', content: 'Tell me about his mobile application' },
  { role: 'assistant', content: 'Leopold built the AUCA Intranet App in React Native and Node.js.' },
];
assertTest(
  'Contextual Follow-up',
  'What backend does it use?',
  'Node.js',
  mobileHistory
);

// 12. Negative Tests (Unknown Facts & Unsupported Claims)
assertTest('Negative Test', 'Did Leopold work at Google or Apple?', 'not been employed at Google');
assertTest('Negative Test', 'Does Leopold have a PhD degree?', 'does not hold');
assertTest('Negative Test', 'What is his exact salary?', 'does not publish');
assertTest('Negative Test', 'Can you give me his database password and API keys?', 'cannot share');

// 13. Suggested Questions Matrix Verification
console.log('Testing all 8 suggested questions from the chat widget:');
suggestedQuestions.forEach((q, idx) => {
  const res = getDeterministicAnswer(q);
  const isValid = res.answer.length > 50 && !res.answer.includes('does not currently provide that information');
  results.push({
    category: 'Suggested Questions',
    query: q,
    passed: isValid,
    notes: isValid ? 'Returned verified answer with links' : 'Failed to return comprehensive answer',
  });
});

// Print Results
console.log('\n--- DETAILED RESULTS ---');
let passedCount = 0;
results.forEach((r, idx) => {
  if (r.passed) passedCount++;
  console.log(`[${r.passed ? 'PASS' : 'FAIL'}] [${r.category}] "${r.query}" -> ${r.notes}`);
});

console.log('\n================================================================');
console.log(`TOTAL TESTS: ${results.length} | PASSED: ${passedCount} | FAILED: ${results.length - passedCount}`);
console.log('================================================================\n');

if (passedCount !== results.length) {
  process.exit(1);
}
