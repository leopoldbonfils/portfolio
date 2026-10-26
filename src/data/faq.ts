export interface FAQItem {
  question: string;
  category:
    | 'Profile & Biography'
    | 'Education & Academics'
    | 'Technical Skills'
    | 'Verified Projects'
    | 'Candidate & Concept Projects'
    | 'Engineering Practices'
    | 'Experience & Journey'
    | 'Employment & Collaboration'
    | 'Contact & Profiles'
    | 'Portfolio Website Implementation';
  answer: string;
  keywords: string[];
  relevantLinks?: { label: string; url: string }[];
}

export const faqList: FAQItem[] = [
  // 1. Profile & Biography
  {
    question: 'Who is Leopold Mugisha?',
    category: 'Profile & Biography',
    keywords: ['who', 'leopold', 'mugisha', 'bonfils', 'about', 'bio', 'profile', 'developer', 'identity'],
    answer: 'Leopold Mugisha (Mugisha Leopold Bonfils) is a Full-Stack Developer and Software Engineering student at the Adventist University of Central Africa (AUCA) in Kigali, Rwanda. He specializes in distributed Java systems (Java RMI), enterprise relational databases (Oracle PL/SQL & MySQL), cross-platform mobile apps (React Native), and modern responsive web applications (Next.js, React, PHP).',
    relevantLinks: [
      { label: 'GitHub Profile', url: 'https://github.com/leopoldbonfils' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mugisha-leopold-697124420/' },
      { label: 'Curriculum Vitae', url: '/Leopold_MUGISHA_CV.pdf' },
    ],
  },
  {
    question: 'Where is Leopold based and where does he live?',
    category: 'Profile & Biography',
    keywords: ['where', 'live', 'location', 'based', 'city', 'country', 'rwanda', 'kigali', 'gasabo', 'gatsata', 'residence'],
    answer: 'Leopold is based in Kigali, Rwanda (Gasabo District, Gatsata Sector, Nyamugari Cell). He is available for on-site roles in Kigali, hybrid arrangements, or remote software engineering collaborations worldwide.',
    relevantLinks: [
      { label: 'Contact Section', url: '#contact' },
      { label: 'Email Leopold', url: 'mailto:leopordbonfils@gmail.com' },
    ],
  },
  {
    question: 'What languages does Leopold speak?',
    category: 'Profile & Biography',
    keywords: ['language', 'speak', 'spoken', 'kinyarwanda', 'english', 'french', 'communication'],
    answer: 'Leopold speaks fluent English (used for all professional software engineering, technical documentation, and coursework) and native Kinyarwanda.',
    relevantLinks: [
      { label: 'About Section', url: '#about' },
    ],
  },
  {
    question: 'What are Leopold’s personal interests and hobbies?',
    category: 'Profile & Biography',
    keywords: ['hobby', 'hobbies', 'interests', 'sport', 'football', 'basketball', 'free time'],
    answer: 'Outside of coding and software architecture, Leopold is an avid sports enthusiast who enjoys playing and watching football and basketball, as well as researching modern distributed system patterns and open-source software.',
    relevantLinks: [
      { label: 'About Section', url: '#about' },
    ],
  },

  // 2. Education & Academics
  {
    question: 'What is Leopold’s educational background?',
    category: 'Education & Academics',
    keywords: ['education', 'degree', 'university', 'college', 'auca', 'school', 'academics', 'qualification', 'bachelor'],
    answer: 'Leopold is currently pursuing a Bachelor of Science (B.Sc.) in Software Engineering at the Adventist University of Central Africa (AUCA) in Kigali, Rwanda (2023–2026). Prior to university, he earned his Advanced Level (A’Level) certificate at Groupe Scolaire Muhura (2019–2022) with a strong foundation in science and mathematics, and his Ordinary Level (O’Level) at Gihozo St. Peter (2016–2018).',
    relevantLinks: [
      { label: 'Education Section', url: '#education' },
      { label: 'Download CV (PDF)', url: '/Leopold_MUGISHA_CV.pdf' },
    ],
  },
  {
    question: 'What coursework has Leopold completed at AUCA?',
    category: 'Education & Academics',
    keywords: ['coursework', 'subjects', 'courses', 'classes', 'curriculum', 'algorithms', 'database course', 'distributed course'],
    answer: 'His university curriculum at AUCA includes Distributed Systems & Network Programming (Java RMI), Database Management Systems (Oracle SQL, PL/SQL, and MySQL), Object-Oriented Software Engineering (Java), Data Structures & Algorithms, Web Development, Mobile Application Development, and Operating Systems.',
    relevantLinks: [
      { label: 'Education Section', url: '#education' },
    ],
  },
  {
    question: 'Does Leopold have academic or professional references?',
    category: 'Education & Academics',
    keywords: ['reference', 'references', 'referee', 'recommendation', 'professors'],
    answer: 'Yes, verified references from his academic journey include senior faculty members Sibomana Athanase, Harerimana Tite, and Ndagijimana Pie. Official phone contact details and reference letters can be provided for formal recruitment verification upon request.',
    relevantLinks: [
      { label: 'Download Curriculum Vitae', url: '/Leopold_MUGISHA_CV.pdf' },
    ],
  },

  // 3. Technical Skills
  {
    question: 'What are Leopold’s core technical skills and stack?',
    category: 'Technical Skills',
    keywords: ['skills', 'stack', 'tech', 'technologies', 'proficient', 'programming', 'tools', 'competencies'],
    answer: 'Leopold’s verified technical capabilities span 5 pillars:\n1. Core Languages: Java, TypeScript, JavaScript (ES6+), SQL, PL/SQL, PHP, Python.\n2. Backend & Distributed Systems: Java RMI, Node.js, Express.js, RESTful API Design, JWT Authentication.\n3. Databases: Oracle Database (PL/SQL packages, stored procedures, triggers, audit logging), MySQL, JDBC.\n4. Frontend & Mobile: React, Next.js 14 (App Router), React Native, Tailwind CSS, HTML5/CSS3.\n5. Architecture & Practices: 3NF Relational Normalization, Clean Architecture, Git, Linux/Bash.',
    relevantLinks: [
      { label: 'Explore Skills Section', url: '#skills' },
      { label: 'GitHub Repositories', url: 'https://github.com/leopoldbonfils' },
    ],
  },
  {
    question: 'What is his experience with database design and PL/SQL?',
    category: 'Technical Skills',
    keywords: ['database', 'plsql', 'pl/sql', 'oracle', 'sql', 'mysql', 'trigger', 'stored procedure', 'normalization'],
    answer: 'Leopold has extensive practical database experience. In Oracle SQL and PL/SQL, he authored production-grade database systems with stored procedures, packaged functions, parameter validation, and recursive audit trail triggers that avoid mutating-table exceptions. In MySQL, he designed normalized (3NF) relational schemas for the AUCA Intranet mobile app, Hazard Management System, and Permit Booking portal.',
    relevantLinks: [
      { label: 'Oracle PL/SQL Repository', url: 'https://github.com/leopoldbonfils/oracle_sql_employee_management_system' },
      { label: 'Skills Section', url: '#skills' },
    ],
  },
  {
    question: 'Has Leopold built any mobile applications?',
    category: 'Technical Skills',
    keywords: ['mobile', 'react native', 'app', 'android', 'ios', 'cross-platform', 'mobile developer'],
    answer: 'Yes. Leopold contributed to the AUCA Intranet App, a cross-platform mobile application developed with React Native and Node.js. It features student authentication, offline course schedule caching, push notices, and grade inquiry channels.',
    relevantLinks: [
      { label: 'AUCA Intranet App Repo', url: 'https://github.com/Danieljospin1/Auca_intranet_app' },
      { label: 'Mobile Case Study', url: '/projects/auca-intranet-app' },
    ],
  },

  // 4. Verified Projects
  {
    question: 'What real projects has Leopold built?',
    category: 'Verified Projects',
    keywords: ['projects', 'built', 'portfolio', 'showcase', 'work', 'code', 'systems', 'repositories'],
    answer: 'Leopold has built six verified open-source and collaborative software projects:\n1. Hazard Management System (Java RMI & MySQL for flood disaster coordination in Rubavu)\n2. AUCA Intranet App (React Native mobile portal for university academic schedules)\n3. Oracle SQL Employee Management System (enterprise PL/SQL procedures & audit triggers)\n4. Online Driver Permit Booking System (PHP/MySQL appointment booking platform)\n5. Provisoire-Exam Platform (interactive driving license test simulator in PHP & JS)\n6. FilmNet (modern streaming discovery catalog in JS & PHP).',
    relevantLinks: [
      { label: 'Featured Projects Section', url: '#projects' },
      { label: 'Complete Projects Archive', url: '/projects' },
      { label: 'GitHub Profile', url: 'https://github.com/leopoldbonfils' },
    ],
  },
  {
    question: 'Tell me about the Hazard Management System.',
    category: 'Verified Projects',
    keywords: ['hazard', 'hazard management', 'flood', 'rubavu', 'rmi', 'java', 'disaster', 'emergency'],
    answer: 'The Hazard Management System is a centralized disaster coordination application built with Java, Java RMI (Remote Method Invocation), Swing, and MySQL. It was developed to coordinate flood emergency responses in Rubavu District, Western Rwanda. It features real-time incident reporting, resource inventory allocation, remote server event dispatching, and administrative incident summaries.',
    relevantLinks: [
      { label: 'Hazard System GitHub Repo', url: 'https://github.com/leopoldbonfils/HazardManagementSystemRMIServer' },
      { label: 'View Case Study', url: '/projects/hazard-management-system' },
    ],
  },
  {
    question: 'Tell me about the AUCA Intranet App.',
    category: 'Verified Projects',
    keywords: ['auca app', 'auca intranet', 'intranet', 'campus app', 'student app', 'timetable', 'grades'],
    answer: 'The AUCA Intranet App is a cross-platform mobile campus portal built with React Native, Node.js, Express.js, and MySQL. It centralizes student course schedules, lecture timetables, exam results, and administrative announcements with JWT authentication and offline caching.',
    relevantLinks: [
      { label: 'AUCA Intranet GitHub Repo', url: 'https://github.com/Danieljospin1/Auca_intranet_app' },
      { label: 'View Case Study', url: '/projects/auca-intranet-app' },
    ],
  },
  {
    question: 'Tell me about the Oracle SQL Employee Management System.',
    category: 'Verified Projects',
    keywords: ['oracle', 'employee', 'employee management', 'plsql project', 'stored procedures', 'triggers project'],
    answer: 'This is a database-driven enterprise project demonstrating advanced relational schema design, 3NF normalization, PL/SQL packages, stored procedures, and automated audit triggers in Oracle Database. It manages employee compensation, departmental assignments, and historic role changes with zero data anomalies.',
    relevantLinks: [
      { label: 'Oracle SQL GitHub Repo', url: 'https://github.com/leopoldbonfils/oracle_sql_employee_management_system' },
      { label: 'View Case Study', url: '/projects/employee-management-system' },
    ],
  },
  {
    question: 'Tell me about the Online Driver Permit Booking System.',
    category: 'Verified Projects',
    keywords: ['permit', 'driver permit', 'booking', 'booking system', 'driving test', 'licence booking'],
    answer: 'The Online Driver Permit Booking System is a web application developed with PHP, MySQL, JavaScript, and HTML/CSS. It streamlines driving exam slot reservations, testing center selection, and applicant profile verification in Rwanda to prevent double-booking and physical queueing.',
    relevantLinks: [
      { label: 'Driver Permit GitHub Repo', url: 'https://github.com/leopoldbonfils/Online-Driver-Permit-Booking-System' },
      { label: 'View Case Study', url: '/projects/online-driver-permit-booking' },
    ],
  },
  {
    question: 'Tell me about the Provisoire-Exam Platform.',
    category: 'Verified Projects',
    keywords: ['provisoire', 'provi', 'exam', 'driver test', 'traffic code', 'provisoire-exam', 'driving exam'],
    answer: 'Provisoire-Exam is an interactive exam practice portal designed to assist candidates preparing for Rwanda’s official provisional driving license exam. It features randomized question banks, timed test sessions, and immediate diagnostic scoring on Rwandan traffic code regulations.',
    relevantLinks: [
      { label: 'Provisoire-Exam GitHub Repo', url: 'https://github.com/leopoldbonfils/Provisoire-Exam' },
      { label: 'View Case Study', url: '/projects/provisoire-exam' },
    ],
  },
  {
    question: 'Tell me about the FilmNet Movie Platform.',
    category: 'Verified Projects',
    keywords: ['filmnet', 'movie', 'film', 'movie script', 'streaming', 'cinema'],
    answer: 'FilmNet is a cinematic media discovery platform featuring responsive film cards, dynamic genre filtering, search, and detail modals. Built with modern JavaScript (ES6+), HTML5, CSS3, and PHP, it showcases fluid UI transitions and clean responsive layouts.',
    relevantLinks: [
      { label: 'FilmNet GitHub Repo', url: 'https://github.com/leopoldbonfils/Movie-Script-website' },
      { label: 'View Case Study', url: '/projects/filmnet-movie-platform' },
    ],
  },

  // 5. Candidate & Concept Projects
  {
    question: 'What about FreshLink, TEGA Bus, Nile Movie, or Rwanda Software Web Store?',
    category: 'Candidate & Concept Projects',
    keywords: ['freshlink', 'tega', 'tega bus', 'nile movie', 'dioli', 'diolichat', 'rwanda web store', 'store'],
    answer: 'FreshLink, TEGA Bus, Nile Movie, and Rwanda Software Web Store (DioliChat) are candidate and concept development ideas explored in software engineering coursework or early prototypes. Unlike Leopold’s six primary repositories, they are not currently verified as completed, standalone public production deployments.',
    relevantLinks: [
      { label: 'Explore Verified Works', url: '#projects' },
      { label: 'GitHub Profile', url: 'https://github.com/leopoldbonfils' },
    ],
  },

  // 6. Engineering Practices
  {
    question: 'What software engineering practices does Leopold follow?',
    category: 'Engineering Practices',
    keywords: ['practices', 'principles', 'clean code', 'architecture', 'methodology', 'agile', 'git workflow', 'design patterns'],
    answer: 'Leopold adheres to modular clean architecture, separation of concerns, 3NF database normalization, transactional integrity (ACID), secure REST API practices (input validation, JWT authentication, parameter binding to prevent SQL injection), and structured Git version control with clean commit histories.',
    relevantLinks: [
      { label: 'About Section', url: '#about' },
      { label: 'Skills Section', url: '#skills' },
    ],
  },

  // 7. Experience & Journey
  {
    question: 'What is Leopold’s professional experience level?',
    category: 'Experience & Journey',
    keywords: ['experience', 'years of experience', 'seniority', 'junior', 'intern', 'employment', 'career', 'student engineer'],
    answer: 'Leopold is an emerging Software Engineer with 2+ years of hands-on academic, project-based, and collaborative engineering experience at AUCA. His work is characterized by designing real, functional software systems (distributed Java RMI, PL/SQL databases, and mobile apps). He does not claim decades of corporate employment, but brings deep dedication, solid computer science fundamentals, and clean coding discipline.',
    relevantLinks: [
      { label: 'Experience Timeline', url: '#experience' },
      { label: 'Download Curriculum Vitae', url: '/Leopold_MUGISHA_CV.pdf' },
    ],
  },

  // 8. Employment & Collaboration
  {
    question: 'Is Leopold available for employment, internships, or freelance work?',
    category: 'Employment & Collaboration',
    keywords: ['hire', 'available', 'internship', 'job', 'employment', 'contract', 'freelance', 'work with him', 'opportunity'],
    answer: 'Yes! Leopold is actively open to software engineering internships, junior developer positions, and full-stack project collaborations. He is flexible regarding on-site work in Kigali, hybrid arrangements, or remote positions with international teams.',
    relevantLinks: [
      { label: 'Contact Section', url: '#contact' },
      { label: 'Email Directly', url: 'mailto:leopordbonfils@gmail.com' },
    ],
  },
  {
    question: 'What are his salary expectations and compensation requirements?',
    category: 'Employment & Collaboration',
    keywords: ['salary', 'rate', 'compensation', 'pay', 'pricing', 'cost', 'money', 'budget'],
    answer: 'Leopold does not publish fixed salary or rate numbers on this portfolio. Compensation depends on role requirements, project scope, and contract terms. Please reach out directly to leopordbonfils@gmail.com or submit the contact form to discuss opportunities.',
    relevantLinks: [
      { label: 'Contact Section', url: '#contact' },
    ],
  },

  // 9. Contact & Profiles
  {
    question: 'How can I contact Leopold directly?',
    category: 'Contact & Profiles',
    keywords: ['contact', 'email', 'phone', 'whatsapp', 'linkedin', 'github', 'reach', 'call', 'talk'],
    answer: 'You can contact Leopold through any of the following verified channels:\n• Email: leopordbonfils@gmail.com\n• Phone / WhatsApp: +250 784 403 935\n• LinkedIn: https://www.linkedin.com/in/mugisha-leopold-697124420/\n• GitHub: https://github.com/leopoldbonfils\n• Contact Form: Located at the bottom of this portfolio.',
    relevantLinks: [
      { label: 'Email Leopold', url: 'mailto:leopordbonfils@gmail.com' },
      { label: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/mugisha-leopold-697124420/' },
      { label: 'GitHub Profile', url: 'https://github.com/leopoldbonfils' },
      { label: 'Fill Contact Form', url: '#contact' },
    ],
  },
  {
    question: 'Where can I download Leopold’s résumé or CV?',
    category: 'Contact & Profiles',
    keywords: ['resume', 'cv', 'curriculum vitae', 'download cv', 'pdf', 'credentials'],
    answer: 'You can download Leopold’s official Curriculum Vitae (PDF) directly from the header navigation or footer of this website, or via the link below.',
    relevantLinks: [
      { label: 'Download Leopold Mugisha CV (PDF)', url: '/Leopold_MUGISHA_CV.pdf' },
    ],
  },

  // 10. Portfolio Website Implementation
  {
    question: 'How was this portfolio website built?',
    category: 'Portfolio Website Implementation',
    keywords: ['portfolio', 'website', 'built', 'how was this built', 'tech stack', 'nextjs', 'tailwind', 'particles', 'canvas', 'ai assistant'],
    answer: 'This portfolio website was custom-engineered using Next.js 14 with the App Router, React 18, TypeScript, and Tailwind CSS. Key features include an interactive HTML5 Canvas Particle Constellation background (ParticleBackground.tsx), an AI Portfolio Assistant (/api/chat) with Google Gemini and grounded deterministic fallback, and Resend-powered contact form delivery.',
    relevantLinks: [
      { label: 'Portfolio Source Code on GitHub', url: 'https://github.com/leopoldbonfils/portfolio' },
      { label: 'Top of Page', url: '#home' },
    ],
  },
  {
    question: 'Where is this portfolio hosted and deployed?',
    category: 'Portfolio Website Implementation',
    keywords: ['host', 'hosted', 'hosting', 'deploy', 'deployment', 'netlify', 'vercel'],
    answer: 'The website is continuously deployed on Netlify using @netlify/plugin-nextjs and netlify.toml, synced directly to Leopold’s GitHub repository (leopoldbonfils/portfolio).',
    relevantLinks: [
      { label: 'GitHub Repository', url: 'https://github.com/leopoldbonfils/portfolio' },
    ],
  },
];

export const suggestedQuestions = [
  'Who is Leopold Mugisha?',
  'Where is he based & is he available to hire?',
  'What real projects has he built?',
  'Tell me about the Hazard Management System.',
  'Explain his AUCA Intranet mobile app.',
  'What database & backend technologies does he use?',
  'What is his educational background?',
  'How was this portfolio website built?',
];
