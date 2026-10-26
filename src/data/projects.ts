export interface Project {
  slug: string;
  title: string;
  category: 'Full-Stack' | 'Backend & Database' | 'Mobile' | 'Web';
  shortDescription: string;
  fullDescription: string;
  featured: boolean;
  technologies: string[];
  myRole: string;
  problemSolved: string;
  architecture: string;
  keyFeatures: string[];
  challengesAndSolutions: string;
  verifiedOutcome: string;
  githubUrl: string;
  demoUrl?: string;
  status: string;
}

export const projects: Project[] = [
  {
    slug: 'hazard-management-system',
    title: 'Hazard Management System',
    category: 'Full-Stack',
    featured: true,
    shortDescription: 'Centralized disaster coordination system for tracking and responding to flood emergencies in Rubavu District, Rwanda.',
    fullDescription: 'A multi-tier Java RMI application designed to aggregate real-time disaster reports, coordinate first-responder resource allocation, and provide administrative dashboards for civil protection authorities during flood crises in Western Rwanda.',
    technologies: ['Java', 'Java RMI', 'MySQL', 'Swing', 'JDBC', 'Multi-threading'],
    myRole: 'Lead Backend & Desktop Developer: Architected the RMI server architecture, remote interface definitions, and relational database schema.',
    problemSolved: 'Disaster management in vulnerable areas like Rubavu suffered from delayed incident communications and disconnected spreadsheet tracking. This system provides instant remote synchronization between reporting terminals and central emergency command.',
    architecture: 'Client-Server distributed system built on Java Remote Method Invocation (RMI), with transactional JDBC persistence communicating with a normalized MySQL database.',
    keyFeatures: [
      'Remote Method Invocation (RMI) server for synchronized multi-client state',
      'Incident triage dashboard with severity levels and geospatial ward mapping',
      'Relief inventory allocation and responder assignment tracking',
      'Exportable emergency incident summary logs for administrative review'
    ],
    challengesAndSolutions: 'Handled concurrent client connections and thread safety when multiple command centers update resource inventories simultaneously using synchronized database transactions.',
    verifiedOutcome: 'Demonstrated reliable multi-client event dispatching and persistent emergency record keeping without distributed data inconsistency.',
    githubUrl: 'https://github.com/leopoldbonfils/HazardManagementSystemRMIServer',
    status: 'Completed & Open Source'
  },
  {
    slug: 'auca-intranet-app',
    title: 'AUCA Intranet App',
    category: 'Mobile',
    featured: true,
    shortDescription: 'Centralized mobile campus portal for AUCA academic, administrative, and student communication services.',
    fullDescription: 'Cross-platform mobile application providing Adventist University of Central Africa students, lecturers, and administration secure access to campus announcements, course timetables, exam results, and academic resources.',
    technologies: ['React Native', 'Node.js', 'Express.js', 'MySQL', 'REST API', 'JWT Auth'],
    myRole: 'Full-Stack Contributor: Built RESTful API endpoints for timetable and announcement delivery, integrated student authentication, and structured mobile state management.',
    problemSolved: 'Students previously had to consult fragmented physical noticeboards and disjointed portals to access academic announcements, schedules, and grade releases.',
    architecture: 'React Native mobile client communicating over HTTPS with an Express.js REST API layer backed by an optimized MySQL relational database schema.',
    keyFeatures: [
      'Role-based authentication for Students, Faculty, and Administrators',
      'Real-time academic noticeboard and push notification channels',
      'Personalized semester course schedule and lecture hall timetable',
      'Confidential exam grade and transcript viewer'
    ],
    challengesAndSolutions: 'Optimized API payload sizes and implemented local caching in React Native to provide smooth offline schedule reading during erratic connectivity.',
    verifiedOutcome: 'Collaborative university project serving as a core demonstration of mobile client engineering and secure REST API design.',
    githubUrl: 'https://github.com/Danieljospin1/Auca_intranet_app',
    status: 'Active Academic Collaboration'
  },
  {
    slug: 'employee-management-system',
    title: 'Oracle SQL Employee Management System',
    category: 'Backend & Database',
    featured: true,
    shortDescription: 'Enterprise relational database system for employee lifecycle tracking, payroll governance, and role allocations using PL/SQL.',
    fullDescription: 'A production-grade relational database project implementing advanced PL/SQL stored procedures, triggers, audit logging, and complex SQL views to manage departmental rosters, salaries, and project staffing.',
    technologies: ['Oracle SQL', 'PL/SQL', 'Database Design', 'Stored Procedures', 'Triggers', 'Query Optimization'],
    myRole: 'Database Architect & PL/SQL Developer: Authored entity-relationship schemas, procedural business logic, data integrity constraints, and automated audit triggers.',
    problemSolved: 'Prevented salary discrepancies, unauthorized department assignments, and missing historical records through deterministic database-level rules.',
    architecture: 'Normalized 3NF relational schema hosted on Oracle DB engine, utilizing PL/SQL packages for encapsulated business workflows and transaction rollback safeguards.',
    keyFeatures: [
      'Automated salary increment calculation packages with business rule checks',
      'Audit trail triggers tracking employee compensation and role adjustments',
      'Complex analytical SQL views summarizing departmental budgets and headcounts',
      'Strict referential integrity constraints preventing orphan project assignments'
    ],
    challengesAndSolutions: 'Constructed recursive triggers that safely update department statistics without causing mutating-table exceptions in Oracle.',
    verifiedOutcome: 'Validated zero data corruption and deterministic rule enforcement across all transactional employee operations.',
    githubUrl: 'https://github.com/leopoldbonfils/oracle_sql_employee_management_system',
    status: 'Completed & Open Source'
  },
  {
    slug: 'online-driver-permit-booking',
    title: 'Online Driver Permit Booking System',
    category: 'Web',
    featured: true,
    shortDescription: 'Web application streamlining driving permit test reservations, slot scheduling, and applicant profile management in Rwanda.',
    fullDescription: 'A web-based registration platform enabling aspiring drivers to schedule provisional and practical driving exam appointments, reserve testing centers, and track application validation status.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Session Management'],
    myRole: 'Full-Stack Developer: Built the complete responsive frontend, PHP backend processing scripts, and MySQL database structure.',
    problemSolved: 'Replaces in-person physical queueing at driving centers with an online scheduling system that prevents double-booking of exam slots.',
    architecture: 'Server-side rendered MVC-patterned PHP application with relational MySQL persistence and client-side form validation.',
    keyFeatures: [
      'Slot availability checker preventing overlapping appointment bookings',
      'Applicant credential verification and test center selection',
      'Admin management portal for reviewing candidate rosters and approving dates',
      'Automated printable booking confirmation ticket generation'
    ],
    challengesAndSolutions: 'Implemented strict race condition guards when multiple applicants select the same appointment time slot simultaneously.',
    verifiedOutcome: 'Demonstrated complete end-to-end reservation flow from applicant submission to administrative appointment confirmation.',
    githubUrl: 'https://github.com/leopoldbonfils/Online-Driver-Permit-Booking-System',
    status: 'Completed & Open Source'
  },
  {
    slug: 'provisoire-exam',
    title: 'Provisoire-Exam Platform',
    category: 'Web',
    featured: false,
    shortDescription: 'Interactive practice and timed evaluation portal for Rwanda provisional driving license examination candidates.',
    fullDescription: 'An interactive self-assessment examination tool mimicking the official traffic code and road regulation testing format in Rwanda, featuring randomized question banks and instant score diagnostics.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'PHP', 'Local State Management'],
    myRole: 'Sole Developer: Designed the question presentation engine, timer controller, scoring algorithm, and responsive UI.',
    problemSolved: 'Helps students prepare systematically for Rwanda’s competitive traffic law exams with instant feedback on incorrect answers.',
    architecture: 'Lightweight web app utilizing client-side evaluation engines with PHP test session recording and randomized question selection.',
    keyFeatures: [
      'Timed practice tests mirroring official 20-question formats',
      'Immediate answer explanation and topic breakdown',
      'Review mode highlighting traffic signs, priority rules, and penalties',
      'High-contrast, mobile-optimized test interface'
    ],
    challengesAndSolutions: 'Designed a resilient state tracker that prevents test resets if candidate accidentally refreshes browser during a test run.',
    verifiedOutcome: 'Widely used educational tool assisting peer students in passing their theoretical driving assessments.',
    githubUrl: 'https://github.com/leopoldbonfils/Provisoire-Exam',
    status: 'Completed & Open Source'
  },
  {
    slug: 'filmnet-movie-platform',
    title: 'FilmNet / Movie Platform',
    category: 'Web',
    featured: false,
    shortDescription: 'Modern media discovery interface inspired by digital entertainment transformation in Rwanda.',
    fullDescription: 'A dynamic movie discovery and script catalog web platform featuring categorized film collections, responsive media cards, trailer modals, and user search filtering.',
    technologies: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'PHP', 'DOM Manipulation'],
    myRole: 'Frontend & Backend Developer: Crafted the dark-themed UI, responsive CSS layout, and catalog query handlers.',
    problemSolved: 'Delivers a sleek, lightweight cinematic browsing experience optimized for low-bandwidth mobile connections.',
    architecture: 'Modular frontend with asynchronous script fetching and PHP endpoints for catalog data.',
    keyFeatures: [
      'Modern dark cinematic interface with subtle hover micro-interactions',
      'Dynamic genre filtering and instant keyword search',
      'Detailed movie info modal with cast, synopsis, and duration',
      'Fully responsive grid adapting seamlessly from 320px to large screens'
    ],
    challengesAndSolutions: 'Achieved high-speed image loading and zero layout shifts on mobile through CSS aspect-ratio placeholders.',
    verifiedOutcome: 'Completed web showcase highlighting modern visual hierarchy and fluid JavaScript DOM interactions.',
    githubUrl: 'https://github.com/leopoldbonfils/Movie-Script-website',
    status: 'Completed & Open Source'
  }
];
