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

// Navegación
export const NAVIGATION = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre mí', href: '/about' },
  { name: 'Proyectos', href: '/projects' },
  { name: 'Contacto', href: '/contact' },
];

// Proyectos de ejemplo
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Plataforma completa de comercio electrónico con React y Node.js',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: '/projects/ecommerce.jpg',
    githubUrl: 'https://github.com/tuusuario/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
  },
  // Agregar más proyectos aquí
];

// Habilidades
export const SKILLS: Skill[] = [
  { name: 'React', level: 'expert', category: 'frontend' },
  { name: 'TypeScript', level: 'advanced', category: 'frontend' },
  { name: 'Node.js', level: 'advanced', category: 'backend' },
  { name: 'PostgreSQL', level: 'intermediate', category: 'database' },
  // Agregar más habilidades aquí
];

// Experiencia laboral
export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    company: 'Tech Company',
    position: 'Senior Developer',
    startDate: '2023-01',
    endDate: '2024-12',
    description: 'Desarrollo de aplicaciones web full-stack...',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
  },
  // Agregar más experiencia aquí
];
