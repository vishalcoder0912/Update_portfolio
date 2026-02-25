// ============================================
// PORTFOLIO DATA — Vishal Kumar
// ============================================

export const personalInfo = {
  name: "Vishal Kumar",
  title: "BCA Student & Developer",
  tagline: "& Cybersecurity Learner",
  summary: "Passionate BCA student from IMS Noida building real-world projects with C/C++, Python, and the MERN stack. Currently diving deep into cybersecurity while shipping apps that solve real problems.",
  email: "vishal.kumar.1304200504@gmail.com",
  phone: "+91 93197 58795",
  location: "Noida, Sector 45, UP",
  resumeUrl: "/Vishal_Resume.pdf",
  social: {
    github: "https://github.com/vishalcoder0912",
    linkedin: "https://linkedin.com/in/vishal-kumar",
    twitter: "https://twitter.com/VishalXTech",
  },
};

export const aboutMe = {
  bio: [
    "I'm a BCA student at IMS Noida with hands-on experience in programming, event coordination, and customer support. I love building things — from terminal-based banking systems in C++ to full-stack web apps using the MERN stack.",
    "Currently leveling up in cybersecurity and MERN stack development. I believe in learning by doing: every project I ship teaches me something new. I'm a self-described 'jack of all trades' and proud of it.",
  ],
  strengths: [
    { icon: "🔒", label: "Cybersecurity Learner", desc: "Actively studying ethical hacking, network security & CTFs" },
    { icon: "💻", label: "Full-Stack Curious", desc: "Building MERN apps — from backend APIs to polished UIs" },
    { icon: "🎤", label: "Leader & Communicator", desc: "1st in Debate, Head of Discipline Committee, Radio Host" },
    { icon: "📸", label: "Creative Producer", desc: "Photography, videography & podcast production experience" },
  ],
  techStack: [
    "C", "C++", "Python", "HTML", "CSS", "JavaScript",
    "React", "Node.js", "MongoDB", "Git", "Canva", "TypeScript"
  ],
};

export const skills = [
  {
    category: "Programming",
    icon: "◈",
    items: [
      { name: "C / C++", level: 80 },
      { name: "Python", level: 72 },
      { name: "JavaScript", level: 65 },
      { name: "TypeScript", level: 50 },
      { name: "HTML / CSS", level: 85 },
    ],
  },
  {
    category: "MERN Stack",
    icon: "◉",
    items: [
      { name: "React.js", level: 60 },
      { name: "Node.js / Express", level: 55 },
      { name: "MongoDB", level: 55 },
      { name: "REST APIs", level: 62 },
      { name: "Tailwind CSS", level: 58 },
    ],
  },
  {
    category: "Cybersecurity",
    icon: "◎",
    items: [
      { name: "Networking Fundamentals", level: 60 },
      { name: "Linux & Shell", level: 55 },
      { name: "OWASP Top 10", level: 45 },
      { name: "CTF Challenges", level: 40 },
      { name: "Ethical Hacking (Learning)", level: 40 },
    ],
  },
  {
    category: "Tools & Soft Skills",
    icon: "◇",
    items: [
      { name: "Git / GitHub", level: 78 },
      { name: "Canva", level: 85 },
      { name: "Leadership", level: 90 },
      { name: "Teamwork", level: 92 },
      { name: "Communication", level: 88 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Uber Clone",
    description: "Full-stack ride-hailing app built with the MERN stack. Features user and driver authentication, live location simulation, and trip booking flow — a hands-on deep dive into real-world app architecture.",
    tags: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    github: "https://github.com/Vishal-Mernstack/uber-clone",
    live: null,
    featured: true,
    gradient: "linear-gradient(135deg, #0f1923 0%, #1a1f2e 100%)",
    accent: "#f5a623",
  },
  {
    id: 2,
    title: "Health Hub",
    description: "Healthcare platform built with TypeScript and React. Provides a clean interface for health tracking and resource discovery. Demonstrates component architecture and type-safe development practices.",
    tags: ["TypeScript", "React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/vishalcoder0912/health-hub-main--1-",
    live: null,
    featured: true,
    gradient: "linear-gradient(135deg, #0d2e1a 0%, #0d1a2e 100%)",
    accent: "#2dd4bf",
  },
  {
    id: 3,
    title: "Banking System",
    description: "Command-line banking application built in C, C++ and Python. Manages user accounts, deposits, withdrawals, and transaction history — my first major project and still a personal favourite.",
    tags: ["C", "C++", "Python", "File I/O"],
    github: "https://github.com/vishalcoder0912",
    live: null,
    featured: false,
    gradient: "linear-gradient(135deg, #1a1a0d 0%, #2e2e0d 100%)",
    accent: "#facc15",
  },
  {
    id: 4,
    title: "Smart Budget Buddy",
    description: "Personal finance tracker built with TypeScript. Helps users log income and expenses, view summaries, and stay on top of their monthly budget — a practical tool with a clean interface.",
    tags: ["TypeScript", "React", "Local Storage"],
    github: "https://github.com/vishalcoder0912/smart-budget-buddy",
    live: null,
    featured: false,
    gradient: "linear-gradient(135deg, #1a0d2e 0%, #2e0d1a 100%)",
    accent: "#f472b6",
  },
  {
    id: 5,
    title: "Care Flow",
    description: "A TypeScript-based web app focused on streamlining care coordination workflows. Built with React and a modular component structure to support clean data flow and maintainability.",
    tags: ["TypeScript", "React", "Tailwind CSS"],
    github: "https://github.com/vishalcoder0912/care-flow",
    live: null,
    featured: false,
    gradient: "linear-gradient(135deg, #0d1a2e 0%, #1a2e2e 100%)",
    accent: "#60a5fa",
  },
  {
    id: 6,
    title: "Restaurant Website",
    description: "Responsive static restaurant website built with pure HTML and CSS. Focused on delivering a clean, engaging user interface — one of my first front-end projects and a foundation for everything since.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/vishalcoder0912/portfolio-website",
    live: null,
    featured: false,
    gradient: "linear-gradient(135deg, #2e1a0d 0%, #1a0d0d 100%)",
    accent: "#fb923c",
  },
];

export const experience = [
  {
    id: 1,
    role: "Event Coordinator & Media Producer",
    company: "Radio Salam Namaste",
    companyUrl: "#",
    duration: "Aug 2023 — Jun 2024",
    location: "Noida, UP",
    type: "Volunteer / Part-time",
    achievements: [
      "Coordinated on-ground events and managed end-to-end event planning logistics",
      "Handled photography, videography, and podcast recordings for the station",
      "Built strong teamwork and cross-functional communication skills in a fast-paced media environment",
      "Gained hands-on experience in content production and audience engagement",
    ],
  },
  {
    id: 2,
    role: "Customer Support Executive",
    company: "Lumax",
    companyUrl: "#",
    duration: "Apr 2022 — Aug 2022",
    location: "Noida, UP",
    type: "Internship",
    achievements: [
      "Handled inbound and outbound customer calls, recorded feedback accurately, and escalated issues as needed",
      "Collaborated with team members to enhance service delivery and maintain SLA targets",
      "Developed strong communication, multitasking, and problem-solving skills under pressure",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "IMS Noida, Uttar Pradesh",
    year: "2023 — Present",
    grade: "Pursuing",
    highlights: [
      "Specialization in Advanced Manufacturing & emerging tech",
      "Active member — Discipline Committee Head",
      "Continuously building projects alongside coursework",
    ],
  },
  {
    degree: "Higher Secondary Education (Commerce)",
    institution: "Amar School, Sector 39, Noida",
    year: "2021 — 2023",
    grade: "Commerce Stream",
    highlights: [
      "1st Place — School Debate Competition",
      "Developed leadership and public speaking foundation",
    ],
  },
  {
    degree: "C / C++ Programming Certification",
    institution: "Udemy",
    year: "2022",
    grade: "Certified",
    highlights: [
      "Completed comprehensive C and C++ programming course",
      "Applied skills directly to Banking System project",
    ],
  },
];
