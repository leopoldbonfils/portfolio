export interface EducationItem {
  period: string;
  institution: string;
  credential: string;
  location: string;
  details: string[];
}

export const educationList: EducationItem[] = [
  {
    period: '2023 — 2026 (In Progress)',
    institution: 'Adventist University of Central Africa (AUCA)',
    credential: 'B.Sc. in Software Engineering',
    location: 'Kigali, Rwanda',
    details: [
      'Comprehensive study of computer science fundamentals, software architecture, and algorithm analysis.',
      'Key Coursework: Object-Oriented Programming (Java), Database Systems & PL/SQL, Distributed Systems, Web & Mobile Engineering, Operating Systems.',
      'Active collaborator on university software initiatives including the campus intranet project.'
    ]
  },
  {
    period: '2019 — 2022',
    institution: 'Groupe Scolaire Muhura',
    credential: 'Advanced Level Certificate (A’level)',
    location: 'Rwanda',
    details: [
      'Focused on rigorous mathematics and science foundation prior to university software engineering enrollment.'
    ]
  },
  {
    period: '2016 — 2018',
    institution: 'Gihozo St. Peter',
    credential: 'Ordinary Level Certificate (O’level)',
    location: 'Rwanda',
    details: [
      'Core general sciences and foundational academics.'
    ]
  },
  {
    period: '2009 — 2015',
    institution: 'Gatsata Catholique',
    credential: 'Primary School Education',
    location: 'Kigali, Rwanda',
    details: [
      'Primary educational foundation in Kigali.'
    ]
  }
];
