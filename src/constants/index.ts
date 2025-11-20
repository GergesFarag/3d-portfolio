import {
  mobile,
  backend,
  web,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  nest,
  express,
  angular,
  postgres,
  socketio,
  linux,
} from '../assets';

export const aboutMe = `Motivated Computer Science graduate specializing in Full Stack Web Development. Skilled in modern
front-end frameworks such as React and Angular, and experienced with back-end development using
Node.js and related technologies. Adept at building dynamic, responsive, and scalable applications,
with strong teamwork, problem-solving, and continuous learning mindset. Committed to delivering
clean, high-quality software solutions.`;

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Fullstack Web Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
];

const technologies = [
  { name: 'HTML 5', icon: html },
  { name: 'CSS 3', icon: css },
  { name: 'TypeScript', icon: typescript },
  { name: 'React JS', icon: reactjs },
  { name: 'Angular', icon: angular },
  { name: 'Redux Toolkit', icon: redux },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Node JS', icon: nodejs },
  { name: 'ExpressJS', icon: express },
  { name: 'NestJS', icon: nest },
  { name: 'MongoDB', icon: mongodb },
  { name: 'PostgreSQL', icon: postgres },
  { name: 'Socket.io', icon: socketio },
  { name: 'Linux', icon: linux },
  { name: 'git', icon: git },
  { name: 'Docker', icon: docker },
];

const experiences = [
  // 🎓 Education
  {
    title: 'Bachelor of Computer Science',
    company_name: 'Ain Shams University',
    icon: backend,
    iconBg: '#383E56',
    date: '11/2021 – 07/2025',
    points: [
      'Bachelor of Computer Science – Faculty of Computers and Information Science.',
    ],
  },

  // 📘 MEAN STACK COURSE – NTI
  {
    title: 'MEAN Stack Course [120 hrs]',
    company_name: 'NTI',
    icon: web,
    iconBg: '#E6DEDD',
    date: '2024',
    points: [
      'MEAN Stack Course at NTI with 120 hours of contributions and experiences shared.',
    ],
  },
  {
    title: 'NTI – Collaboration Experience',
    company_name: 'NTI',
    icon: web,
    iconBg: '#E6DEDD',
    date: '2024',
    points: [
      'It was a very interesting opportunity to contact with new people and create projects.',
    ],
  },
  {
    title: 'NTI – Hours Breakdown',
    company_name: 'NTI',
    icon: web,
    iconBg: '#E6DEDD',
    date: '2024',
    points: [
      'Total hours spent were divided into 90 hours for technology and 30 hours for soft-skills.',
    ],
  },

  // 📘 UDEMY BACKEND COURSE
  {
    title: 'Node.js, Nest.js, PostgreSQL, GraphQL & Security',
    company_name: 'Udemy',
    icon: web,
    iconBg: '#E6DEDD',
    date: '2024',
    points: [
      'Node.js, Nest.js, PostgreSQL, GraphQL, and Security, Udemy [39 hours].',
    ],
  },

  // 📘 CONNECTX
  {
    title: 'Pre-Master Web Developer',
    company_name: 'ConnectX - Student Activity',
    icon: mobile,
    iconBg: '#383E56',
    date: '2023',
    points: [
      'Engaged in advanced web development projects, collaborative coding practices, and deploying scalable web applications.',
    ],
  },

  // 📘 FRONTEND COURSE – SEF ACADEMY
  {
    title: 'Frontend Course [4 months]',
    company_name: 'SEF Academy',
    icon: mobile,
    iconBg: '#383E56',
    date: '2023',
    points: ['Frontend Course [4 months], SEF Academy.'],
  },

  // 📘 NETWORK FUNDAMENTALS – MAHARA TECH
  {
    title: 'Fundamentals of Networks',
    company_name: 'Mahara Tech',
    icon: web,
    iconBg: '#E6DEDD',
    date: '2023',
    points: ['Fundamentals of Networks, Mahara Tech.'],
  },

  // 📘 WEB SECURE CODE WORKSHOP – CYBERS
  {
    title: 'Web Secure Code Workshop',
    company_name: 'Cybers',
    icon: backend,
    iconBg: '#383E56',
    date: '2024',
    points: ['Web Secure Code Workshop, Cybers.'],
  },

  // 📘 MSP – WEB DEVELOPMENT MEMBER
  {
    title: 'Web Development Member',
    company_name: 'MSP - Student Activity',
    icon: web,
    iconBg: '#E6DEDD',
    date: '2024',
    points: ['Web Development member, MSP - Student Activity.'],
  },
];

const projects = [
  {
    name: 'MoviesMe Backend (Production)',
    description:
      'Production-level backend for a Flutter application enabling AI-generated images and videos, with authentication, payments, OTP, queues, and real-time notifications.',
    tags: [
      { name: 'expressjs', color: 'blue-text-gradient' },
      { name: 'websockets', color: 'green-text-gradient' },
      { name: 'firebase', color: 'pink-text-gradient' },
    ],
    image: '../../public/moviesme.jpeg',
    source_code_link: 'https://github.com/GergesFarag/MoviesMe',
  },
  {
    name: 'DietCraft AI',
    description:
      'AI-based nutrition and meal-planning web app with user authentication, secured APIs, and a responsive UI. Uses ML model from RoboFlow.',
    tags: [
      { name: 'angular', color: 'blue-text-gradient' },
      { name: 'nodejs', color: 'green-text-gradient' },
      { name: 'flask', color: 'pink-text-gradient' },
    ],
    image: "../../public/dietcraft.png",
    source_code_link: 'https://github.com/GergesFarag/DietCraft-Server',
  },
  {
    name: 'Plantry E-Commerce',
    description:
      'Responsive e-commerce website with user and admin dashboards, secured REST APIs, and authentication.',
    tags: [
      { name: 'angular', color: 'blue-text-gradient' },
      { name: 'mongodb', color: 'green-text-gradient' },
      { name: 'bootstrap', color: 'pink-text-gradient' },
    ],
    image: "../../public/plantry.png",
    source_code_link: 'https://github.com/GergesFarag/Plantry_eCommerce',
  },
  {
    name: 'Client Management System',
    description:
      'Full CRUD client management platform with authentication using Node.js, Express, MongoDB, and EJS templates.',
    tags: [
      { name: 'express', color: 'blue-text-gradient' },
      { name: 'mongodb', color: 'green-text-gradient' },
      { name: 'ejs', color: 'pink-text-gradient' },
    ],
    image: "../../public/client.png",
    source_code_link: 'https://github.com/GergesFarag/CRUD_SYSTEM_PROJECT',
  },
  {
    name: 'News Management System',
    description:
      'Console-based C++ system for browsing and managing news with efficient data structures. Awarded A+.',
    tags: [
      { name: 'c++', color: 'blue-text-gradient' },
      { name: 'filesystem', color: 'green-text-gradient' },
    ],
    image: "../../public/news.png",
    source_code_link: 'https://github.com/GergesFarag/News-management-system',
  },
];

const testimonials = [
  {
    testimonial:
      'Gerges consistently delivers reliable backend systems with clean architecture and professional communication.',
    name: 'Instructor Feedback',
    designation: 'Teaching Assistant',
    company: 'Ain Shams University',
    image: 'https://randomuser.me/api/portraits/men/15.jpg',
  },
  {
    testimonial:
      'His ability to integrate multiple services like Firebase, RevenueCat, and Bull Queues makes him stand out.',
    name: 'Team Lead',
    designation: 'Project Supervisor',
    company: 'NTI',
    image: 'https://randomuser.me/api/portraits/men/16.jpg',
  },
];

export { services, technologies, experiences, testimonials, projects };
