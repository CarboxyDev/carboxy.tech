export interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  images: string[];
  tags: string[];
  techStack: string[];
  status: 'Live' | 'In Development' | 'Completed';
  year: number;
  featured?: boolean;
  github: string | null;
}

export const PROJECTS: Project[] = [
  {
    id: 'adden-ai',
    title: 'AddenAI',
    description:
      'A codeless AI solution platform for optimizing ad accounts and campaigns for boosting growth and marketing performance.',
    href: 'https://adden.ai/sign-in',
    images: ['adden1.png', 'adden2.png'],
    tags: ['Frontend Lead', 'Work', 'AI/ML'],
    techStack: ['TypeScript', 'React', 'Next.js', 'TailwindCSS', 'FastAPI'],
    status: 'Live',
    year: 2024,
    featured: true,
    github: null,
  },
  {
    id: 'quizfoundry',
    title: 'QuizFoundry',
    description:
      'QuizFoundry is a platform for quickly creating and sharing quizzes with the power of AI.',
    href: 'https://quizfoundry.carboxy.xyz',
    images: ['quizfoundry1.png'],
    tags: ['Frontend', 'Backend', 'UI/UX', 'AI/ML'],
    techStack: ['TypeScript', 'React', 'Next.js', 'Express', 'TailwindCSS'],
    status: 'In Development',
    year: 2025,
    featured: true,
    github: 'https://github.com/CarboxyDev/quizfoundry',
  },
  {
    id: 'buy-or-bye',
    title: 'Buy or Bye',
    description:
      'Make smarter purchase decisions. BuyOrBye is a website that helps you make smarter purchase decisions by analyzing your needs and preferences and providing you with a smart AI-powered verdict.',
    images: ['buyorbye1.png'],
    href: 'https://buyorbye.carboxy.xyz/',
    tags: ['Frontend', 'Backend', 'UI/UX'],
    techStack: ['TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Gemini SDK'],
    status: 'Live',
    year: 2025,
    featured: true,
    github: 'https://github.com/CarboxyDev/buyorbye',
  },
];

export const getFeaturedProjects = () =>
  PROJECTS.filter((project) => project.featured);
