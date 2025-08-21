import { LINKS } from '@/lib/config/links';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  href: string;
  images: string[];
  tags: string[];
  techStack: string[];
  status: 'Live' | 'In Development' | 'Completed';
  year: string;
  featured?: boolean;
  github: string | null;
}

export const PROJECTS: Project[] = [
  {
    id: 'adden-ai',
    title: 'AddenAI',
    description:
      'A codeless AI solution platform for optimizing ad accounts and campaigns for boosting growth and marketing performance.',
    longDescription:
      'AddenAI revolutionizes digital marketing with AI-powered campaign optimization. Built for marketing teams who want to maximize ROI without technical complexity, it provides intelligent insights and automated optimizations.',
    href: 'https://adden.ai/sign-in',
    images: ['adden1.png', 'adden2.png'],
    tags: ['Frontend Lead', 'Work', 'AI/ML'],
    techStack: [
      'React',
      'TypeScript',
      'Next.js',
      'TailwindCSS',
      'FastAPI',
      'PostgreSQL',
    ],
    status: 'Live',
    year: '2024',
    featured: true,
    github: null,
  },
  {
    id: 'quizfoundry',
    title: 'QuizFoundry',
    description:
      'A webapp where you can create quizzes quickly and easily with the power of AI. You can also share them with others or attempt public quizzes.',
    longDescription:
      'QuizFoundry is a platform for quickly creating and sharing quizzes with the power of AI.',
    href: 'https://quizfoundry.carboxy.xyz',
    images: ['quizfoundry1.png'],
    tags: ['Frontend', 'Backend', 'UI/UX', 'AI/ML'],
    techStack: [
      'React',
      'TypeScript',
      'Next.js',
      'Express',
      'PostgreSQL',
      'TailwindCSS',
    ],
    status: 'In Development',
    year: '2025',
    featured: true,
    github: LINKS.github + '/quizfoundry',
  },
  {
    id: 'effichron',
    title: 'Effichron',
    description:
      'A minimalist time tracking tool with features like cloud sync, always-on timer, sessions history meant for seamlessly tracking your productivity. This is an old project that does not reflect my current skillset.',
    longDescription:
      'Effichron is a beautifully designed productivity tool that helps you track time effortlessly. With real-time sync across devices and intuitive session management, it makes time tracking feel natural and unobtrusive.',
    images: ['effichron1.png', 'effichron2.png', 'effichron3.png'],
    href: 'https://effichron.carboxy.xyz',
    tags: ['Frontend', 'Backend', 'UI/UX', 'Old Project'],
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'TailwindCSS'],
    status: 'Live',
    year: '2023',
    featured: true,
    github: LINKS.github + '/effichron',
  },
];

export const getFeaturedProjects = () =>
  PROJECTS.filter((project) => project.featured);

export const getProjectsByStatus = (status: Project['status']) =>
  PROJECTS.filter((project) => project.status === status);

export const getProjectsByYear = (year: string) =>
  PROJECTS.filter((project) => project.year === year);

export const getProjectById = (id: string) =>
  PROJECTS.find((project) => project.id === id);

export const PROJECT_CATEGORIES = {
  ALL: 'All Projects',
  WEB: 'Web Applications',
  AI: 'AI/ML',
  PRODUCTIVITY: 'Productivity',
  EDUCATION: 'Education',
  DATA: 'Data Tools',
} as const;

export const getProjectsByCategory = (
  category: keyof typeof PROJECT_CATEGORIES
) => {
  if (category === 'ALL') return PROJECTS;

  const categoryMap = {
    WEB: ['Frontend', 'Backend'],
    AI: ['AI/ML'],
    PRODUCTIVITY: ['Productivity'],
    EDUCATION: ['Education'],
    DATA: ['Data'],
  };

  const relevantTags = categoryMap[category];
  return PROJECTS.filter((project) =>
    project.tags.some((tag) => relevantTags.includes(tag))
  );
};
