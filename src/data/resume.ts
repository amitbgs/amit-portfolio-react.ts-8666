export const personal = {
  name: 'Amit Kumar Akela',
  title: 'Senior Software Engineer',
  sub: 'Full Stack .NET + React Developer',
  location: 'Noida, Uttar Pradesh, India',
  email: 'amitbgs678@gmail.com',
  phone: '+91-6299236405',
  linkedin: 'https://linkedin.com/in/amit-a-297050199',
};

export const roles = ['.NET Core Developer','React.js Engineer','Full Stack Architect','API Design Specialist','Healthcare Tech Builder'];

export const stats = [
  { value:'3.6+', label:'Years Exp.' },
  { value:'10+',  label:'Projects'   },
  { value:'25%',  label:'DB Boost'   },
  { value:'99.9%',label:'Uptime'     },
];

export const bio = [
  'Senior Full Stack Engineer with <b>3.6+ years</b> shipping production web applications using <b>ASP.NET Core</b> and <b>React.js</b>. I design clean REST APIs, build performant component-driven UIs, and architect systems that scale.',
  'Specialised in <b>healthcare platforms</b> — provider dashboards, radiology workflows, prescription management, and real-time <b>Twilio telehealth</b> video consultations.',
];

export const infoItems = [
  { icon:'📍', label:'Location',   val:'Noida, India'          },
  { icon:'💼', label:'Experience', val:'3.6+ Years'            },
  { icon:'🎓', label:'Education',  val:'B.Tech CS, 2021'       },
  { icon:'📞', label:'Phone',      val:'+91-6299236405'        },
  { icon:'✉️', label:'Email',      val:'amitbgs678@gmail.com'  },
  { icon:'🔗', label:'LinkedIn',   val:'amit-a-297050199'      },
];

export interface SkillBar  { name: string; pct: number }
export interface SkillGroup{ cat: string; icon: string; color: 'rx'|'dn'|'pu'; bars: SkillBar[] }

export const skillGroups: SkillGroup[] = [
  { cat:'Backend (.NET)', icon:'⚙️', color:'dn', bars:[
    {name:'ASP.NET Core / Web API',pct:95},{name:'C# / .NET',pct:93},
    {name:'Entity Framework Core',pct:88},{name:'RESTful Services',pct:92},{name:'Microservices',pct:80}]},
  { cat:'Frontend (React)', icon:'⚛️', color:'rx', bars:[
    {name:'React.js / Hooks',pct:90},{name:'Redux / State Mgmt',pct:84},
    {name:'TypeScript',pct:88},{name:'HTML5 / CSS3 / SCSS',pct:92},{name:'JavaScript ES6+',pct:90}]},
  { cat:'Database', icon:'🗄️', color:'dn', bars:[
    {name:'MS SQL Server',pct:90},{name:'Stored Procedures',pct:88},
    {name:'LINQ / EF Queries',pct:85},{name:'Query Optimisation',pct:82},{name:'Triggers / Indexing',pct:80}]},
  { cat:'Security & Auth', icon:'🔐', color:'rx', bars:[
    {name:'OAuth 2.0 / OIDC',pct:83},{name:'JWT Authentication',pct:88},
    {name:'Role-Based Access',pct:90},{name:'API Security',pct:85}]},
  { cat:'Cloud & DevOps', icon:'☁️', color:'pu', bars:[
    {name:'AWS S3',pct:78},{name:'CI/CD Pipelines',pct:75},
    {name:'Git / GitHub',pct:93},{name:'Docker (basics)',pct:65}]},
  { cat:'Integrations', icon:'🔗', color:'rx', bars:[
    {name:'Twilio Video / Voice',pct:85},{name:'Third-party REST APIs',pct:88},
    {name:'Webhooks',pct:80},{name:'Postman / Testing',pct:88}]},
];

export const techStack = [
  {l:'ASP.NET Core',c:'dn'},{l:'React.js',c:'rx'},{l:'C#',c:'dn'},{l:'TypeScript',c:'rx'},
  {l:'SQL Server',c:'dn'},{l:'Redux',c:'rx'},{l:'Entity Framework',c:'dn'},{l:'REST APIs',c:'rx'},
  {l:'Twilio',c:'pu'},{l:'JWT',c:'pu'},{l:'OAuth 2.0',c:'pu'},{l:'AWS S3',c:'pu'},
  {l:'Git',c:'rx'},{l:'LINQ',c:'dn'},{l:'CI/CD',c:'pu'},{l:'WinForms',c:'dn'},
  {l:'React Hooks',c:'rx'},{l:'Axios',c:'rx'},{l:'React Router',c:'rx'},{l:'Postman',c:'pu'},
];

export interface Tech    { l: string; c: string }
export interface Project {
  num: string; title: string; domain: string; featured?: boolean;
  desc: string; bullets: string[]; tech: Tech[];
}

export const projects: Project[] = [
  {
    num:'01', featured:true,
    title:'Patient · Provider · Radiology · Pharmacy · SuperAdmin System',
    domain:'Healthcare',
    desc:'Enterprise healthcare platform with five user roles, real-time Twilio video consultations, automated prescription routing, and end-to-end radiology workflows.',
    bullets:[
      'ASP.NET Core Web API + React.js frontend with JWT RBAC across 5 distinct roles',
      'React provider dashboard for creating and routing medical tests to radiology users',
      'Twilio Video API for live video/audio/chat telehealth consultations',
      'Automated pharmacy lookup via geolocation API based on patient address',
      'End-to-end prescription and radiology report workflow with document management',
    ],
    tech:[{l:'ASP.NET Core',c:'dn'},{l:'React.js',c:'rx'},{l:'Redux',c:'rx'},{l:'SQL Server',c:'dn'},{l:'Twilio',c:'pu'},{l:'JWT',c:'pu'}],
  },
  {
    num:'02', title:'Referral & Community Management System', domain:'Healthcare',
    desc:'Patient referral tracking and community portal connecting providers, specialists, and patients through a unified React + .NET platform.',
    bullets:[
      'React referral module for end-to-end provider-to-specialist tracking',
      'Community portal with role-based access for referrers and community members',
      'Secure document workflows with RBAC and complete audit trail',
    ],
    tech:[{l:'ASP.NET Core',c:'dn'},{l:'React.js',c:'rx'},{l:'SQL Server',c:'dn'},{l:'OAuth 2.0',c:'pu'}],
  },
  {
    num:'03', title:'Client Dashboard Portal', domain:'Enterprise',
    desc:'Responsive React SPA for data visualisation and user management with optimised API pipelines and role-based routing.',
    bullets:[
      'Reusable React component library for charts, tables, and data displays',
      'React Router guards with role-based access control per user type',
      'Axios API optimisation reducing data latency by 35%',
    ],
    tech:[{l:'React.js',c:'rx'},{l:'Redux',c:'rx'},{l:'ASP.NET Core',c:'dn'},{l:'Axios',c:'rx'}],
  },
  {
    num:'04', title:'Doctor & Appointment Management', domain:'Healthcare',
    desc:'Full-featured appointment scheduling with React calendars, admin dashboards, and real-time SQL data consistency.',
    bullets:[
      'React calendar UI with drag-and-drop appointment scheduling',
      'Admin dashboard analytics improving scheduling efficiency by 40%',
      'SQL triggers and stored procedures ensuring real-time data integrity',
    ],
    tech:[{l:'React.js',c:'rx'},{l:'ASP.NET Core',c:'dn'},{l:'SQL Server',c:'dn'}],
  },
  {
    num:'05', title:'File Management & Automation Tools', domain:'Enterprise',
    desc:'Desktop automation suite for multi-format file conversion, AWS S3 integration, and legacy WinForms optimisation.',
    bullets:[
      'Export/import utilities for PDF, DOCX, and XML formats',
      'AWS S3 integration for cloud-based file retrieval and storage',
      'WinForms performance optimisation — 30% improvement',
    ],
    tech:[{l:'C#',c:'dn'},{l:'.NET',c:'dn'},{l:'WinForms',c:'dn'},{l:'AWS S3',c:'pu'}],
  },
];

export const workExp = {
  title:'Senior Software Engineer',
  sub:'Full Stack .NET + React Developer',
  company:'Chetu India Pvt Ltd',
  location:'Noida, India',
  period:'Dec 2022 – Jun 2026',
  bullets:[
    'Designed REST APIs and full-stack apps using ASP.NET Core, React.js, EF Core, SQL Server',
    'Reduced DB response time 25% through advanced query tuning and indexing',
    'Built reusable React components and backend modules, cutting dev effort by 20%',
    'Collaborated with QA, UI, and DevOps ensuring 99.9% uptime and release quality',
    'Mentored junior engineers, led code reviews, and implemented CI/CD improvements',
  ],
  tech:['ASP.NET Core','React.js','C#','SQL Server','Twilio','JWT'],
};

export const education = [
  {degree:'B.Tech — Computer Science',inst:'Rashtrakavi Ramdhari Singh Dinkar College of Engineering',board:'Aryabhatta Knowledge University, Patna',year:'2017–2021'},
  {degree:'Intermediate (12th) — BSEB',inst:'Patna, Bihar, India',board:'',year:'2015–2017'},
  {degree:'High School (10th) — BSEB', inst:'Patna, Bihar, India',board:'',year:'2014–2015'},
];

export const achievements = [
  {icon:'⚡',text:'Improved application load time 30% via SQL and API optimisation'},
  {icon:'📈',text:'Reduced DB response time 25% with advanced query tuning and indexing'},
  {icon:'🚀',text:'Delivered multiple enterprise healthcare platforms with 99.9% uptime'},
  {icon:'👥',text:'Mentored junior engineers and led code-review culture across teams'},
  {icon:'🏥',text:'Built real-time telehealth features serving hundreds of patients daily'},
];
