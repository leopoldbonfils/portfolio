export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    verifiedContext: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Core Programming Languages',
    description: 'Foundational languages used across academic and personal engineering projects.',
    skills: [
      { name: 'Java', level: 'Advanced', verifiedContext: 'Used in Hazard Management System (RMI distributed server, Swing, JDBC)' },
      { name: 'TypeScript & JavaScript', level: 'Proficient', verifiedContext: 'Used in Next.js web applications, React frontends, and Node.js APIs' },
      { name: 'SQL & PL/SQL', level: 'Advanced', verifiedContext: 'Authored stored procedures, triggers, audit logging in Oracle and MySQL' },
      { name: 'Python', level: 'Intermediate', verifiedContext: 'Used for scripting, automation, and algorithmic problem solving' },
      { name: 'PHP', level: 'Proficient', verifiedContext: 'Built backends for Driver Permit Booking and Provisoire Exam portals' }
    ]
  },
  {
    title: 'Frontend & UI Engineering',
    description: 'Modern component architectures, design systems, and responsive layouts.',
    skills: [
      { name: 'React', level: 'Proficient', verifiedContext: 'Component lifecycles, hooks, context API, and modular architecture' },
      { name: 'Next.js (App Router)', level: 'Proficient', verifiedContext: 'Server & Client components, file-based routing, SEO optimization' },
      { name: 'Tailwind CSS & CSS3', level: 'Advanced', verifiedContext: 'Design systems, responsive flex/grid layouts, micro-animations' },
      { name: 'HTML5 & Semantic Web', level: 'Advanced', verifiedContext: 'Accessible landmarks, clean semantic structure, SEO fundamentals' }
    ]
  },
  {
    title: 'Backend, Distributed Systems & APIs',
    description: 'Server architectures, distributed computing, and RESTful service layers.',
    skills: [
      { name: 'Node.js & Express.js', level: 'Proficient', verifiedContext: 'Built REST API endpoints for Campus Intranet portal' },
      { name: 'Java RMI (Remote Method Invocation)', level: 'Proficient', verifiedContext: 'Implemented distributed client-server event coordination' },
      { name: 'RESTful API Design', level: 'Proficient', verifiedContext: 'JSON schemas, status codes, query pagination, secure authentication' },
      { name: 'Authentication & Security', level: 'Intermediate', verifiedContext: 'JWT token lifecycles, password hashing, SQL injection prevention' }
    ]
  },
  {
    title: 'Databases & Data Management',
    description: 'Relational data modeling, ACID transactions, and procedure authoring.',
    skills: [
      { name: 'Oracle Database', level: 'Proficient', verifiedContext: 'Enterprise schema architecture, PL/SQL packages, audit triggers' },
      { name: 'MySQL', level: 'Advanced', verifiedContext: 'Primary relational store for Campus Intranet, Permit Booking, and Java JDBC' },
      { name: 'JDBC & Connection Pooling', level: 'Proficient', verifiedContext: 'Java database connectivity, transactional commit/rollback handlers' },
      { name: 'Schema Normalization (3NF)', level: 'Advanced', verifiedContext: 'Relational modeling, primary/foreign key constraints, indexing' }
    ]
  },
  {
    title: 'Mobile & Tooling',
    description: 'Cross-platform app development and developer workflows.',
    skills: [
      { name: 'React Native', level: 'Intermediate', verifiedContext: 'Mobile interface development for the Campus Intranet mobile app' },
      { name: 'Git & GitHub', level: 'Proficient', verifiedContext: 'Version control, branch management, code collaboration, pull requests' },
      { name: 'Clean Architecture Principles', level: 'Proficient', verifiedContext: 'Modular design, separation of concerns, testable clean code' }
    ]
  }
];
