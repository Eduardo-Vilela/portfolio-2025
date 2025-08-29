import { Project, Skill } from '@/types';

// Navegación
export const NAVIGATION = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre mí', href: '#sobreMi' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contacto', href: '#contacto' },
];

// Información personal
export const PERSONAL_INFO = {
  name: 'Eduardo Vilela',
  title: 'FRONTEND DEVELOPER',
  subtitle: 'I design beautifully simple things and I love what I do.',
  subtitle2: 'Just simple like that!',
  buttonText: 'Hablemos',
  phone: '(+54) 221 - 6776051',
  address: 'Calle Falsa 123, Ciudad, País',
  email: 'eduardovilela22@gmail.com',
  redes: [
    { id: '1', name: 'github-icon', url: 'https://github.com/tuusuario' },
    { id: '2', name: 'linkedin-icon', url: 'https://linkedin.com/in/tuusuario' },
    { id: '4', name: 'instagram-icon', url: 'https://instagram.com/tuusuario' },
    { id: '5', name: 'facebook', url: 'https://facebook.com/tuusuario' },
    { id: '6', name: 'whatsapp-icon', url: 'https://whatsapp.com/tuusuario' },
  ],
};

// About
export const PERSONAL_ABOUT = {
  title: 'Acerca de mi',
  context1: '¡Hola! Soy Eduardo Vilela, un desarrollador frontend apasionado y creativo, dedicado a crear experiencias web atractivas, responsivas y fáciles de usar. Con una perspectiva innovadora y una gran atención al detalle, aporto tanto habilidades técnicas como visión creativa a cada proyecto en el que trabajo.',
  context2:'He perfeccionado mis habilidades en HTML, CSS, JavaScript y frameworks frontend modernos, además de comprender los principios de UI/UX. Me entusiasma transformar ideas en interfaces interactivas, visualmente atractivas y accesibles que ofrezcan experiencias digitales fluidas.',
  about: 'Desarrollador apasionado por crear soluciones digitales innovadoras...',
  aboutImage:'/images/about1.png'
};

// Proyectos de ejemplo
export const WORKS: Project[] = [
  
  {
    id: '1',
    title: 'Oceano consulting',
    description: 'Consultoría para la transformación Digital',
    technologies: ['React', 'Next', 'Css', 'Html', 'JavaScript'],
    imageUrl: '/projects/Oceano.png',
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    liveUrl: 'https://www.oceano-consulting.com/',
    featured: true,
  },
  {
    id: '2',
    title: 'Solventa Colombia',
    description: 'Préstamos en línea sin papeleos ni filas',
    technologies: ['React', 'Next', 'Css', 'Html', 'Bootstrap', 'JavaScript', 'Wordpress', 'Vue', 'Php', 'Jquery', 'Laravel', 'MySql'],
    imageUrl: '/projects/SolventaCo.png',
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    liveUrl: 'https://solventa.co/',
    featured: true,
  },
  {
    id: '3',
    title: 'Solventa Peru',
    description: 'Préstamos en línea sin papeleos ni filas',
    technologies: ['React', 'Next', 'Css', 'Html', 'Bootstrap', 'JavaScript', 'Wordpress', 'Vue', 'Php', 'Jquery', 'Laravel', 'MySql'],
    imageUrl: '/projects/SolventaPe.png',
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    liveUrl: 'https://solventa.pe/',
    featured: true,
  },
  {
    id: '4',
    title: 'Solventa Mexico',
    description: 'Préstamos en línea sin papeleos ni filas',
    technologies: ['React', 'Next', 'Css', 'Html', 'Bootstrap', 'JavaScript', 'Wordpress', 'Vue', 'Php', 'Jquery', 'Laravel', 'MySql'],
    imageUrl: '/projects/SolventaMx.png',
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    liveUrl: 'https://solventa.mx/',
    featured: true,
  },
  {
    id: '5',
    title: 'Solventa Colombia APP',
    description: 'Aplicacion',
    technologies: ['React Native', 'Expo','TypeScript', 'Tailwind'],
    imageUrl: '/projects/SolventaApp.png',
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
  },
  {
    id: '6',
    title: '2M Mudanzas',
    description: 'Hacé tu mudanza hoy',
    technologies: ['React', 'Next', 'Css', 'Html', 'JavaScript'],
    imageUrl: '/projects/2Mudanzas.png',
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    liveUrl: 'https://www.2mmudanzas.com/',
    featured: true,
  },
  {
    id: '7',
    title: 'Brip Travel',
    description: 'Viajá al mejor precio!',
    technologies: ['React', 'Next', 'Css', 'Html', 'JavaScript'],
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

