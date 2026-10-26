export interface FAQItem {
  question: string;
  answer: string;
  category: 'Overview' | 'Projects' | 'Technical Skills' | 'Experience' | 'Contact';
  relevantLinks?: { label: string; url: string }[];
}

export const faqList: FAQItem[] = [
  {
    question: 'Who is Leopold Mugisha?',
    category: 'Overview',
    answer: 'Leopold Mugisha (Mugisha Leopold Bonfils) is a Full-Stack Developer and Software Engineering student at the Adventist University of Central Africa (AUCA) in Kigali, Rwanda. He specializes in distributed Java systems, Oracle PL/SQL databases, RESTful Node.js APIs, and modern React/Next.js web applications with an emphasis on clean code and practical problem-solving.',
    relevantLinks: [
      { label: 'GitHub Profile', url: 'https://github.com/leopoldbonfils' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mugisha-leopold-697124420/' }
    ]
  },
  {
    question: 'What are his strongest technical skills?',
    category: 'Technical Skills',
    answer: 'His verified technical core spans: (1) Languages: Java, TypeScript, JavaScript, SQL, PL/SQL, PHP, and Python. (2) Backend & Databases: Oracle SQL, PL/SQL stored procedures & triggers, MySQL, Java RMI, Node.js/Express.js REST APIs. (3) Frontend & Mobile: React, Next.js, React Native, Tailwind CSS, HTML5/CSS3. (4) Practices: Git, Relational Normalization (3NF), and Clean Architecture.',
    relevantLinks: [
      { label: 'Explore Skills Section', url: '#skills' }
    ]
  },
  {
    question: 'What projects has Leopold built?',
    category: 'Projects',
    answer: 'Leopold has built several verified real-world applications: 1) Hazard Management System (Java RMI & MySQL for flood disaster coordination in Rubavu), 2) Oracle SQL Employee Management System (enterprise PL/SQL procedures and audit triggers), 3) AUCA Intranet App (React Native mobile portal for university academic schedules), 4) Online Driver Permit Booking System (PHP/MySQL appointment booking portal), 5) Provisoire-Exam Platform (interactive driving license test simulator), and 6) FilmNet (modern streaming discovery platform).',
    relevantLinks: [
      { label: 'View All Projects', url: '#projects' },
      { label: 'GitHub Repositories', url: 'https://github.com/leopoldbonfils' }
    ]
  },
  {
    question: 'What is his experience with backend and database development?',
    category: 'Technical Skills',
    answer: 'Leopold has deep practical experience in database systems and backend architecture. In Oracle SQL and PL/SQL, he authored stored procedures, transaction packages, and automated audit triggers with zero mutating-table exceptions. In Java, he engineered distributed RMI servers and JDBC persistence layers. In Node.js/Express, he built RESTful endpoints handling JWT authentication for mobile clients.',
    relevantLinks: [
      { label: 'Hazard Management System Repo', url: 'https://github.com/leopoldbonfils/HazardManagementSystemRMIServer' },
      { label: 'Oracle PL/SQL Repo', url: 'https://github.com/leopoldbonfils/oracle_sql_employee_management_system' }
    ]
  },
  {
    question: 'Has he built any mobile applications?',
    category: 'Projects',
    answer: 'Yes! Leopold contributed to the AUCA Intranet App, a cross-platform mobile application built with React Native and Node.js. It allows students and lecturers at the Adventist University of Central Africa to securely view timetables, announcements, and exam results with offline caching.',
    relevantLinks: [
      { label: 'AUCA Intranet Repo', url: 'https://github.com/Danieljospin1/Auca_intranet_app' }
    ]
  },
  {
    question: 'What is his educational background?',
    category: 'Experience',
    answer: 'Leopold is currently pursuing a Bachelor of Science in Software Engineering at the Adventist University of Central Africa (AUCA) in Kigali (2023–2026). Prior to university, he completed his Advanced Level (A’level) studies at Groupe Scolaire Muhura (2019–2022) and Ordinary Level (O’level) at Gihozo St. Peter (2016–2018).',
    relevantLinks: [
      { label: 'Education Section', url: '#education' },
      { label: 'Download Curriculum Vitae', url: '/Leopold_MUGISHA_CV.pdf' }
    ]
  },
  {
    question: 'Where is he located and is he available for hire?',
    category: 'Overview',
    answer: 'Leopold is located in Kigali, Rwanda (Gasabo District). He is actively open to software engineering internships, junior developer roles, and full-stack project collaborations.',
    relevantLinks: [
      { label: 'Get in Touch', url: '#contact' }
    ]
  },
  {
    question: 'How can I contact Leopold directly?',
    category: 'Contact',
    answer: 'You can reach Leopold via email at leopordbonfils@gmail.com, by telephone at +250 784 403 935, via LinkedIn at linkedin.com/in/mugisha-leopold-697124420/, or on GitHub at github.com/leopoldbonfils.',
    relevantLinks: [
      { label: 'Email Leopold', url: 'mailto:leopordbonfils@gmail.com' },
      { label: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/mugisha-leopold-697124420/' }
    ]
  }
];

export const suggestedQuestions = [
  'Who is this developer?',
  'What projects has he built?',
  'What technologies does he use?',
  'Tell me about the Hazard Management System.',
  'What is his experience with backend & databases?',
  'Has he built any mobile applications?',
  'What is his educational background?',
  'How can I contact him?'
];
