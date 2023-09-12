import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
import styled from 'components/Navbar/Navbar.module.css';

import Work1 from 'assets/Work1.jpg';
import Work2 from 'assets/Work2.png';
import Work3 from 'assets/Work3.jpg';
import Work4 from 'assets/Work4.jpg';
import Work5 from 'assets/Work5.png';
import Work6 from 'assets/Work6.png';

import Theme1 from 'assets/purple.png';
import Theme2 from 'assets/red.png';
import Theme3 from 'assets/blueviolet.png';
import Theme4 from 'assets/blue.png';
import Theme5 from 'assets/goldenrod.png';
import Theme6 from 'assets/magenta.png';
import Theme7 from 'assets/yellowgreen.png';
import Theme8 from 'assets/orange.png';
import Theme9 from 'assets/green.png';
import Theme10 from 'assets/yellow.png';

import {
  LinkTypes,
  PersonalInfo,
  PortfolioItemTypes,
  ResumeEntry,
  Skill,
  Stats,
  Theme,
} from 'data';

export const links: LinkTypes[] = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className={styled.navIcon} />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className={styled.navIcon} />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className={styled.navIcon} />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className={styled.navIcon} />,
    path: '/contact',
  },
];

export const personalInfo: PersonalInfo[] = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Razmik',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Tadevosyan',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '24 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Armenian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Yerevan, Armenia',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+374 77581147',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'raz.tadeosyan@gmail.com',
  },

  {
    id: 9,
    title: 'Languages : ',
    description: 'Armenian, English, Russian',
  },
];

export const stats: Stats[] = [
  {
    id: 1,
    no: '2+',
    title: 'Years of work <br /> Experience',
  },

  {
    id: 2,
    no: '5+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '3+',
    title: 'Years of Software Develompent <br /> Experience',
  },

  {
    id: 4,
    no: '1',
    title: ' Certification',
  },
];

export const resume: ResumeEntry[] = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - 2023',
    title: 'React Developer <span> Web Foundation </span>',
    desc: '    UI Components Designing & Application Interface Coding <br /> • Identified web-based user interactions and developed highly-responsive user interface components via React concept    • Translated designs & wireframes into high-quality code and     wrote application interface code via JavaScript following     React.js workflows <br />        Code Debugging & Front-end Architecture <br />    • Troubleshot interface software and debugged application     codes to improve functionality and performance    • Developed and implemented front-end architecture to support     user interface concepts with 100% accuracy        Application Development & UI Designing <br />    • Coordinated with the development team of 8 to discuss user interface ideas and applications    • Reviewed application requirements and interface designs to ensure compatibility with existing applications',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2020 - 2021',
    title: 'Frontend Developer <span> Kangaroo Delivery </span>',
    desc: '&nbsp; Webpage Designing & Optimization <br /> • Determined the structure and design of web pages based on user requirements and balanced functional & aesthetic designs <br /> • Created features to enhance the user experience while ensuring that the web design is optimized for smartphones <br /> • Employed a variety of languages such as HTML and CSS to write & create user-friendly web pages <br /> &nbsp; Coding & Website Improvement <br /> • Built reusable code for future use and optimized web pages for 5 applications for maximum speed and scalability <br /> • Managed brand consistency throughout the design andmaintained & improved the companys website by adding more features and functionality',
  },
  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Bachelor Degree <span> NPUA </span>',
    desc: `I have graduated from the National Polytechnic University of Armenia (NPUA) with a Bachelor's degree in Computer Engineering. Throughout my time at NPUA, I acquired a strong foundation in various areas of computer engineering, including hardware and software development, computer systems, and programming languages. The comprehensive education and practical experiences I gained during my studies have prepared me to excel in the field of computer engineering. I am now eager to apply my knowledge and skills in a professional setting, contributing to technological advancements and innovation in Armenia and beyond.`,
  },
  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'Technician Engineer <span> Abovyan State Collage </span>',
    desc: 'My time at Abovyan State College was transformative. I excelled academically, gaining a strong foundation in technical knowledge. Practical, hands-on learning was emphasized, and I actively participated in workshops and labs. Collaborative projects honed my teamwork and communication skills. I became adept at problem-solving and developed a commitment to lifelong learning. This education forms the bedrock of my career in Technician Engineering.',
  },
];

export const skills: Skill[] = [
  {
    id: 1,
    title: 'Html',
    percentage: 85,
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: 80,
  },

  {
    id: 3,
    title: 'Css',
    percentage: 80,
  },

  {
    id: 4,
    title: 'TypeScript',
    percentage: 60,
  },

  {
    id: 5,
    title: 'Redux',
    percentage: 75,
  },

  {
    id: 6,
    title: 'Material UI, Antd Design',
    percentage: 75,
  },

  {
    id: 7,
    title: 'React Query',
    percentage: 75,
  },

  {
    id: 8,
    title: 'React',
    percentage: 85,
  },
];

export const portfolio: PortfolioItemTypes[] = [
  {
    id: 1,
    img: Work1,
    title: 'E-commerce Store',
    details: [
      {
        id: 1,
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        id: 2,
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        id: 3,
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        id: 4,
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Task Management App',
    details: [
      {
        id: 1,
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        id: 2,
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        id: 3,
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        id: 4,
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Movie Recommendation App',
    details: [
      {
        id: 1,
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        id: 2,
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        id: 3,
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        id: 4,
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'React Weather App',
    details: [
      {
        id: 1,
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        id: 2,
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        id: 3,
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        id: 4,
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'React Chat Application',
    details: [
      {
        id: 1,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        id: 2,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        id: 3,
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        id: 4,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'React Quiz App',
    details: [
      {
        id: 1,
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        id: 2,
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        id: 3,
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        id: 4,
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes: Theme[] = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
