export interface ProfileData {
  name: string;
  fullName: string;
  role: string;
  headline: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  status: string;
  availability: boolean;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  avatarUrl: string;
  languages: { name: string; level: string }[];
  hobbies: string[];
}

export const profile: ProfileData = {
  name: 'Leopold Mugisha',
  fullName: 'Mugisha Leopold Bonfils',
  role: 'Full-Stack Developer',
  headline: 'Building thoughtful digital products, from intuitive interfaces to reliable backend systems.',
  shortBio: 'Software engineering student at the Adventist University of Central Africa (AUCA) focused on clean architecture, relational databases, backend APIs, and modern responsive web applications.',
  fullBio: [
    'I am currently pursuing a Bachelor of Science in Software Engineering at the Adventist University of Central Africa (AUCA) in Kigali, Rwanda.',
    'My core focus centers on building practical, reliable applications—spanning distributed Java RMI systems for disaster hazard management, complex Oracle PL/SQL database systems, RESTful Node.js APIs, and modern React & React Native client interfaces.',
    'I believe in decomposing complex problems into clean, testable components, designing normalized and resilient data models, and delivering tools that directly solve real-world community and institutional challenges.'
  ],
  location: 'Kigali, Rwanda',
  status: 'Open to internships & collaborations',
  availability: true,
  email: 'leopordbonfils@gmail.com',
  phone: '+250 784 403 935',
  github: 'https://github.com/leopoldbonfils',
  linkedin: 'https://www.linkedin.com/in/mugisha-leopold-697124420/',
  resumeUrl: '/Leopold_MUGISHA_CV.pdf',
  avatarUrl: '/image.png',
  languages: [
    { name: 'English', level: 'Fluent / Native Professional' },
    { name: 'Kinyarwanda', level: 'Native' }
  ],
  hobbies: ['Football', 'Basketball', 'System Architecture & Open-Source Research']
};
