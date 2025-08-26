import { Project, Skill, Experience } from '@/types';

// Información personal
export const PERSONAL_INFO = {
  name: 'Tu Nombre',
  title: 'Full Stack Developer',
  email: 'tu@email.com',
  location: 'Ciudad, País',
  about: 'Desarrollador apasionado por crear soluciones digitales innovadoras...',
  github: 'https://github.com/tuusuario',
  linkedin: 'https://linkedin.com/in/tuusuario',
  twitter: 'https://twitter.com/tuusuario',
};

// About
export const PERSONAL_ABOUT = {
  title: 'About me',
  context1: 'Hello! I’m Eduardo Vilela, a passionate and creative Frontend Developer dedicated to building engaging, responsive, and user-friendly web experiences. With a fresh perspective and a strong attention to detail, I bring both technical skill and creative vision to every project I work on.',
  context2:'I have honed my skills in HTML, CSS, JavaScript, and modern frontend frameworks, alongside an understanding of UI/UX principles. I’m excited to transform ideas into interactive, visually appealing, and accessible interfaces that deliver seamless digital experiences.',
  about: 'Desarrollador apasionado por crear soluciones digitales innovadoras...',
  aboutImage:'/images/about1.png'
};


// Navegación
export const NAVIGATION = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre mí', href: '/about' },
  { name: 'Proyectos', href: '/projects' },
  { name: 'Contacto', href: '/contact' },
];

// Proyectos de ejemplo
export const WORKS: Project[] = [
  
  {
    id: '1',
    title: 'Oceano consulting',
    description: 'Consultoría para la transformación Digital',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: '/projects/Oceano.png',
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    liveUrl: 'https://www.oceano-consulting.com/',
    featured: true,
  },
  {
    id: '2',
    title: 'Solventa Colombia',
    description: 'Préstamos en línea sin papeleos ni filas',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: '/projects/SolventaCo.png',
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    liveUrl: 'https://solventa.co/',
    featured: true,
  },
  {
    id: '3',
    title: 'Solventa Peru',
    description: 'Préstamos en línea sin papeleos ni filas',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: '/projects/SolventaPe.png',
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    liveUrl: 'https://solventa.pe/',
    featured: true,
  },
  {
    id: '4',
    title: 'Solventa Mexico',
    description: 'Préstamos en línea sin papeleos ni filas',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: '/projects/SolventaMx.png',
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    liveUrl: 'https://solventa.mx/',
    featured: true,
  },
  {
    id: '5',
    title: 'Solventa Colombia APP',
    description: 'Aplicacion',
    technologies: ['React Native', 'Expo','TypeScript'],
    imageUrl: '/projects/SolventaApp.png',
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
  },
  {
    id: '6',
    title: '2M Mudanzas',
    description: 'Hacé tu mudanza hoy',
    technologies: ['React Native', 'Expo','TypeScript'],
    imageUrl: '/projects/2Mudanzas.png',
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    liveUrl: 'https://www.2mmudanzas.com/',
    featured: true,
  },
  {
    id: '7',
    title: 'Brip Travel',
    description: 'Viajá al mejor precio!',
    technologies: ['React Native', 'Expo','TypeScript'],
    imageUrl: '/projects/BripTravel.png',
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    liveUrl: 'https://briptravel.com.ar/',
    featured: true,
  },

  // Agregar más proyectos aquí
];

// Habilidades
export const SKILLS: Skill[] = [
  { id: '1', name: 'React', level: 'expert', category: 'frontend' },
  { id: '2', name: 'TypeScript', level: 'advanced', category: 'frontend' },
  { id: '3', name: 'Node.js', level: 'advanced', category: 'backend' },
  { id: '4', name: 'PostgreSQL', level: 'intermediate', category: 'database' },
  // Agregar más habilidades aquí
];

