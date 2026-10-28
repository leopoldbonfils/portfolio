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
    | 'Portfolio Website Implementation'
    | 'Professional Reasoning'
    | 'Software Engineering Concepts';
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
    answer: 'Leopold Mugisha (Mugisha Leopold Bonfils) is a Full-Stack Developer and Software Engineer in Kigali, Rwanda. He specializes in distributed Java systems (Java RMI), enterprise relational databases (Oracle PL/SQL & MySQL), cross-platform mobile apps (React Native), and modern responsive web applications (Next.js, React, PHP).',
    relevantLinks: [
      { label: 'GitHub Profile', url: 'https://github.com/leopoldbonfils' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mugisha-leopold-697124420/' },
      { label: 'Curriculum Vitae', url: '/Leopold_MUGISHA_CV.pdf' },
    ],
  },
  {
    question: 'Where is Leopold based and where does he live?',
    category: 'Profile & Biography',
    keywords: ['where', 'live', 'location', 'based', 'city', 'country', 'rwanda', 'kigali', 'residence'],
    answer: 'Leopold is based in Kigali, Rwanda. He is available for on-site roles in Kigali, hybrid arrangements, or remote software engineering collaborations worldwide.',
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
    question: 'What coursework has Leopold completed in software engineering?',
    category: 'Education & Academics',
    keywords: ['coursework', 'subjects', 'courses', 'classes', 'curriculum', 'algorithms', 'database course', 'distributed course'],
    answer: 'His university curriculum includes Distributed Systems & Network Programming (Java RMI), Database Management Systems (Oracle SQL, PL/SQL, and MySQL), Object-Oriented Software Engineering (Java), Data Structures & Algorithms, Web Development, Mobile Application Development, and Operating Systems.',
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
    answer: 'Leopold has extensive practical database experience. In Oracle SQL and PL/SQL, he authored production-grade database systems with stored procedures, packaged functions, parameter validation, and recursive audit trail triggers that avoid mutating-table exceptions. In MySQL, he designed normalized (3NF) relational schemas for the Campus Intranet mobile app, Hazard Management System, and Permit Booking portal.',
    relevantLinks: [
      { label: 'Oracle PL/SQL Repository', url: 'https://github.com/leopoldbonfils/oracle_sql_employee_management_system' },
      { label: 'Skills Section', url: '#skills' },
    ],
  },
  {
    question: 'Has Leopold built any mobile applications?',
    category: 'Technical Skills',
    keywords: ['mobile', 'react native', 'app', 'android', 'ios', 'cross-platform', 'mobile developer'],
    answer: 'Yes. Leopold contributed to the Campus Intranet App, a cross-platform mobile application developed with React Native and Node.js. It features user authentication, offline course schedule caching, push notices, and grade inquiry channels.',
    relevantLinks: [
      { label: 'Campus Intranet App Repo', url: 'https://github.com/Danieljospin1/Auca_intranet_app' },
      { label: 'Mobile Case Study', url: '/projects/auca-intranet-app' },
    ],
  },

  // 4. Verified Projects
  {
    question: 'What real projects has Leopold built?',
    category: 'Verified Projects',
    keywords: ['projects', 'built', 'portfolio', 'showcase', 'work', 'code', 'systems', 'repositories'],
    answer: 'Leopold has built six verified open-source and collaborative software projects:\n1. Hazard Management System (Java RMI & MySQL for flood disaster coordination in Rubavu)\n2. Campus Intranet App (React Native mobile portal for university academic schedules)\n3. Oracle SQL Employee Management System (enterprise PL/SQL procedures & audit triggers)\n4. Online Driver Permit Booking System (PHP/MySQL appointment booking platform)\n5. Provisoire-Exam Platform (interactive driving license test simulator in PHP & JS)\n6. FilmNet (modern streaming discovery catalog in JS & PHP).',
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
    question: 'Tell me about the Campus Intranet Mobile App.',
    category: 'Verified Projects',
    keywords: ['auca app', 'auca intranet', 'intranet', 'campus app', 'academic app', 'timetable', 'grades'],
    answer: 'The Campus Intranet App is a cross-platform mobile campus portal built with React Native, Node.js, Express.js, and MySQL. It centralizes course schedules, lecture timetables, exam results, and administrative announcements with JWT authentication and offline caching.',
    relevantLinks: [
      { label: 'Campus Intranet GitHub Repo', url: 'https://github.com/Danieljospin1/Auca_intranet_app' },
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
    keywords: ['experience', 'years of experience', 'seniority', 'junior', 'intern', 'employment', 'career', 'software engineer'],
    answer: 'Leopold is an emerging Software Engineer with 2+ years of hands-on academic, project-based, and collaborative engineering experience. His work is characterized by designing real, functional software systems (distributed Java RMI, PL/SQL databases, and mobile apps). He does not claim decades of corporate employment, but brings deep dedication, solid computer science fundamentals, and clean coding discipline.',
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

  // 11. Professional Reasoning & Candidate Evaluation (Level 2)
  {
    question: 'What value could Leopold bring to our company or team?',
    category: 'Professional Reasoning',
    keywords: ['value', 'bring', 'company', 'team', 'contribute', 'contribution', 'help our team'],
    answer: 'Based on his documented projects and technical skills, Leopold can contribute to building full-stack applications, developing backend services and REST APIs, and working with relational databases. His project experience includes Java and RMI, React Native, Node.js, PHP, MySQL, and Oracle PL/SQL. These projects demonstrate practical exposure to application development, database design, and connecting software components. For junior or entry-level roles, he brings strong computer science fundamentals, modular coding discipline, and enthusiasm to learn and deliver within an engineering team.',
    relevantLinks: [
      { label: 'Explore Verified Projects', url: '#projects' },
      { label: 'Technical Skills', url: '#skills' },
      { label: 'Get in Touch', url: '#contact' },
    ],
  },
  {
    question: 'Why should we hire Leopold for a software engineering role?',
    category: 'Professional Reasoning',
    keywords: ['why hire', 'why should we hire', 'hire him', 'reasons to hire', 'candidate'],
    answer: 'Recruiters and hiring managers consider Leopold because of his solid foundation in backend systems, distributed architectures, and relational databases. Rather than solely building tutorial apps, he has authored real, working software: a Java RMI distributed system for flood disaster coordination, an enterprise Oracle PL/SQL database with automated audit triggers, and a React Native campus mobile app. He demonstrates clean code habits, 3NF schema design, and eagerness to contribute to engineering teams.',
    relevantLinks: [
      { label: 'View Verified Projects', url: '#projects' },
      { label: 'Download Curriculum Vitae', url: '/Leopold_MUGISHA_CV.pdf' },
      { label: 'Contact Section', url: '#contact' },
    ],
  },
  {
    question: 'What makes Leopold a good candidate for a junior developer role?',
    category: 'Professional Reasoning',
    keywords: ['junior developer', 'junior role', 'good candidate', 'entry level', 'suitability'],
    answer: 'Leopold is well-suited for junior or associate software engineering positions because he combines formal academic computer science training with hands-on multi-tier development. He writes clean, modular code, understands relational normalization (3NF) and ACID transactions, builds secure REST APIs with JWT authentication, and collaborates effectively using Git version control.',
    relevantLinks: [
      { label: 'Skills Section', url: '#skills' },
      { label: 'Featured Projects', url: '#projects' },
    ],
  },
  {
    question: 'Which of Leopold’s projects best demonstrates his backend skills?',
    category: 'Professional Reasoning',
    keywords: ['best backend', 'demonstrates backend', 'strongest backend', 'backend project', 'server project'],
    answer: 'Two projects strongly demonstrate his backend and database capabilities:\n1. **Hazard Management System:** Features a multi-threaded Java RMI distributed server handling remote procedure calls, client synchronization, and transactional JDBC queries to MySQL.\n2. **Oracle SQL Employee Management System:** Showcases advanced enterprise database engineering with PL/SQL stored procedures, packages, complex views, and automated audit triggers ensuring zero data anomalies.',
    relevantLinks: [
      { label: 'Hazard System Case Study', url: '/projects/hazard-management-system' },
      { label: 'Oracle PL/SQL Repository', url: 'https://github.com/leopoldbonfils/oracle_sql_employee_management_system' },
    ],
  },
  {
    question: 'Which project should a recruiter or reviewer look at first?',
    category: 'Professional Reasoning',
    keywords: ['review first', 'which project first', 'start reviewing', 'first project', 'recommended project'],
    answer: 'For backend and distributed systems reviewers, we recommend starting with the **Hazard Management System** (Java RMI & MySQL) or the **Oracle SQL Employee Management System** (PL/SQL packages and triggers). For reviewers evaluating full-stack and mobile capabilities, start with the **Campus Intranet Mobile App** (React Native & Node.js REST API).',
    relevantLinks: [
      { label: 'Featured Projects', url: '#projects' },
      { label: 'Complete Projects Archive', url: '/projects' },
    ],
  },
  {
    question: 'What are Leopold’s strongest technical areas?',
    category: 'Professional Reasoning',
    keywords: ['strongest technical areas', 'strongest areas', 'core strengths', 'key strengths'],
    answer: 'Leopold’s strongest technical areas are:\n1. **Relational Database Design & Integrity:** 3NF normalization, PL/SQL packages, stored procedures, audit triggers, and ACID transactions in Oracle Database and MySQL.\n2. **Backend Services & Distributed Architecture:** Java RMI client-server coordination, Node.js/Express.js REST APIs, and JWT authentication.\n3. **Practical Problem-Solving:** Translating real-world operational workflows (disaster response, campus communication, permit booking) into functional, testable software.',
    relevantLinks: [
      { label: 'Skills Section', url: '#skills' },
      { label: 'Verified Projects', url: '#projects' },
    ],
  },
  {
    question: 'What kind of problems can Leopold solve?',
    category: 'Professional Reasoning',
    keywords: ['problems can you solve', 'what kind of problems', 'problems solved', 'capabilities'],
    answer: 'Leopold designs software to solve real operational, administrative, and community challenges:\n• **Emergency Coordination:** Streamlined incident reporting and responder dispatching for flood crisis response in Rubavu District (Hazard Management System).\n• **Administrative Integrity:** Prevented salary discrepancies and maintained historic employee audit trails (Oracle SQL Employee Management).\n• **Campus Communication:** Eliminated fragmented bulletin boards with mobile schedule and grade access (Campus Intranet App).\n• **Resource Scheduling:** Prevented appointment double-booking for driver license applicants (Driver Permit Booking System).',
    relevantLinks: [
      { label: 'Explore Projects Section', url: '#projects' },
    ],
  },

  // 12. General Software Engineering Concepts (Level 3)
  {
    question: 'What is database normalization and how does Leopold apply it?',
    category: 'Software Engineering Concepts',
    keywords: ['database normalization', 'normalization', '1nf', '2nf', '3nf', 'bcnf', 'anomalies'],
    answer: 'Database normalization is the process of structuring a relational database schema to minimize data redundancy and prevent insertion, update, and deletion anomalies. It progresses through normal forms:\n• **1NF:** Eliminates repeating groups and ensures atomic column values.\n• **2NF:** Achieves 1NF and removes partial dependencies on composite primary keys.\n• **3NF:** Achieves 2NF and eliminates transitive dependencies (non-key attributes dependent on other non-key attributes).\n\nLeopold strictly applies 3NF schema design across his database projects (including the Oracle SQL Employee Management System, MySQL Hazard Management System, and Permit Booking portal) to guarantee data consistency and integrity.',
    relevantLinks: [
      { label: 'Oracle SQL Repository', url: 'https://github.com/leopoldbonfils/oracle_sql_employee_management_system' },
      { label: 'Skills Section', url: '#skills' },
    ],
  },
  {
    question: 'How does JWT authentication work and where was it used?',
    category: 'Software Engineering Concepts',
    keywords: ['jwt', 'json web token', 'jwt authentication', 'bearer token', 'token authentication'],
    answer: 'JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as a compact, URL-safe JSON object. A JWT consists of three parts separated by dots:\n1. **Header:** Contains the token type (JWT) and signing algorithm (e.g., HS256).\n2. **Payload:** Contains claims such as user ID, role, and expiration timestamp.\n3. **Signature:** Cryptographically generated using the header, payload, and a secret server key.\n\nBecause the token is cryptographically signed, the server can verify identity statelessly without querying session stores on every request. Leopold implemented JWT authentication in the Campus Intranet mobile application to secure communication between the React Native client and Node.js/Express API endpoints.',
    relevantLinks: [
      { label: 'Campus Intranet App Repo', url: 'https://github.com/Danieljospin1/Auca_intranet_app' },
      { label: 'Mobile Case Study', url: '/projects/auca-intranet-app' },
    ],
  },
  {
    question: 'What is the difference between frontend and backend development?',
    category: 'Software Engineering Concepts',
    keywords: ['difference between frontend and backend', 'frontend vs backend', 'frontend and backend'],
    answer: '• **Frontend Development:** Focuses on the client-side user experience—everything the user sees and interacts with in a browser or mobile app. This involves UI layout, responsive styling, client state management, and user interaction (e.g., React, Next.js, React Native, Tailwind CSS, HTML5/CSS3).\n• **Backend Development:** Focuses on server-side logic, database interactions, authentication, security, and data persistence. This includes building RESTful APIs, handling business rules, managing database transactions, and coordinating distributed services (e.g., Node.js, Express.js, Java RMI, Oracle PL/SQL, MySQL).\n\nLeopold works across both domains as a full-stack developer, designing responsive client interfaces that communicate seamlessly with secure, normalized backend and database services.',
    relevantLinks: [
      { label: 'Skills Section', url: '#skills' },
      { label: 'Featured Projects', url: '#projects' },
    ],
  },
  {
    question: 'How would you design a REST API?',
    category: 'Software Engineering Concepts',
    keywords: ['design a rest api', 'rest api design', 'restful api', 'api design principles'],
    answer: 'A well-designed REST API adheres to key architectural principles:\n1. **Resource-Oriented URIs:** Use nouns representing resources rather than verbs (e.g., `/api/announcements` or `/api/timetables/:id`).\n2. **Standard HTTP Methods:** Use GET (read), POST (create), PUT/PATCH (update), and DELETE (remove) predictably.\n3. **Stateless Communication:** Each request must contain all necessary authentication (e.g., JWT Bearer tokens) and context.\n4. **Meaningful HTTP Status Codes:** Return standard codes like 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), and 500 (Server Error).\n5. **Input Validation & Structured JSON Errors:** Validate payloads against schemas and return consistent error structures.\n\nLeopold applied these principles when building the Node.js/Express REST API endpoints for the Campus Intranet mobile application.',
    relevantLinks: [
      { label: 'Campus Intranet Case Study', url: '/projects/auca-intranet-app' },
      { label: 'Skills Section', url: '#skills' },
    ],
  },
  {
    question: 'How can a relational database maintain data integrity?',
    category: 'Software Engineering Concepts',
    keywords: ['maintain data integrity', 'data integrity', 'database integrity', 'acid', 'constraints', 'triggers'],
    answer: 'Relational databases maintain data integrity through several multi-layered mechanisms:\n1. **Entity Integrity:** Enforced by PRIMARY KEY constraints to guarantee uniqueness and non-null identifiers.\n2. **Referential Integrity:** Enforced by FOREIGN KEY constraints to prevent orphaned records across related tables.\n3. **Domain Integrity:** Enforced by data types, NOT NULL rules, and CHECK constraints.\n4. **User-Defined Integrity:** Business rules implemented via database triggers and stored procedures (e.g., validating salary bounds before insert/update).\n5. **ACID Transactions:** Atomicity, Consistency, Isolation, and Durability ensure all-or-nothing operations with automatic rollback on error.\n\nLeopold applied these safeguards in his Oracle SQL Employee Management System using PL/SQL packages and audit triggers to ensure zero data corruption.',
    relevantLinks: [
      { label: 'Oracle PL/SQL Repository', url: 'https://github.com/leopoldbonfils/oracle_sql_employee_management_system' },
      { label: 'Skills Section', url: '#skills' },
    ],
  },
  {
    question: 'What is Java RMI and how was it used in the Hazard Management System?',
    category: 'Software Engineering Concepts',
    keywords: ['java rmi', 'remote method invocation', 'rmi server', 'distributed java'],
    answer: 'Java Remote Method Invocation (RMI) is a mechanism that allows an object running on one Java Virtual Machine (JVM) to invoke methods on an object executing in another JVM across a network. It uses stubs (client proxies) and skeletons (server dispatchers) to marshal and unmarshal parameters over network sockets.\n\nIn the Hazard Management System, Leopold used Java RMI to build a centralized server architecture coordinating flood emergency response terminals in Rubavu District. Field reporting clients invoked remote server methods to record incidents and query relief inventory in real-time with synchronized JDBC database persistence.',
    relevantLinks: [
      { label: 'Hazard Management System Repo', url: 'https://github.com/leopoldbonfils/HazardManagementSystemRMIServer' },
      { label: 'Case Study', url: '/projects/hazard-management-system' },
    ],
  },
];

export const suggestedQuestions = [
  'Who is Leopold Mugisha?',
  'Where is he based & is he available to hire?',
  'What real projects has he built?',
  'Tell me about the Hazard Management System.',
  'Explain his Campus Intranet mobile app.',
  'What database & backend technologies does he use?',
  'What is his educational background?',
  'How was this portfolio website built?',
];
