export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  type: 'Project Leadership' | 'Academic Collaboration' | 'Software Engineering';
  location: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export const experienceList: ExperienceItem[] = [
  {
    period: '2023 — Present',
    role: 'Student Software Engineer & System Architect',
    organization: 'Adventist University of Central Africa (AUCA)',
    type: 'Software Engineering',
    location: 'Kigali, Rwanda',
    description: 'Designing full-stack, distributed, and database-driven solutions addressing real regional challenges in Rwanda and university administration.',
    technologies: ['Java', 'Java RMI', 'Oracle PL/SQL', 'MySQL', 'React Native', 'Node.js', 'Next.js'],
    highlights: [
      'Architected Java RMI distributed client-server application for disaster hazard coordination during Rubavu district flooding.',
      'Authored production-level Oracle PL/SQL stored procedures and automated audit triggers for enterprise employee management.',
      'Contributed to the AUCA Intranet mobile application for centralized student scheduling and grade communications.',
      'Built and open-sourced driving permit booking and license preparation software in PHP & MySQL.'
    ]
  },
  {
    period: '2024 — Present',
    role: 'Full-Stack Developer (Collaborative Initiatives)',
    organization: 'Academic & Community Tech Projects',
    type: 'Project Leadership',
    location: 'Kigali, Rwanda',
    description: 'Collaborating in peer engineering teams, managing Git version control workflows, authoring clean documentation, and building accessible user interfaces.',
    technologies: ['JavaScript', 'TypeScript', 'Express.js', 'React', 'Tailwind CSS', 'Git'],
    highlights: [
      'Engineered cross-platform mobile interfaces in React Native with offline caching.',
      'Implemented relational schemas adhering strictly to third normal form (3NF).',
      'Actively exploring scalable cloud deployment and modern web performance optimization.'
    ]
  }
];
