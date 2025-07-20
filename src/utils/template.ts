import { Code, Palette, Zap, Package, Database, Shield } from 'lucide-react';

export const templates = [
  {
    title: 'React + TypeScript + Tailwind',
    description: 'The most popular combination for modern React development',
    command: 'npx rtg-react --typescript --tailwind',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    popular: true,
  },
  {
    title: 'React + JavaScript + Tailwind',
    description: 'Quick setup with Tailwind CSS styling',
    command: 'npx rtg-react --tailwind',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'React + TypeScript + Styled Components',
    description: 'Type-safe React with CSS-in-JS styling',
    command: 'npx rtg-react --typescript --styled-components',
    tags: ['React', 'TypeScript', 'Styled Components', 'CSS-in-JS'],
  },
  {
    title: 'React + Material-UI',
    description: "React with Google's Material Design components",
    command: 'npx rtg-react --mui',
    tags: ['React', 'Material-UI', 'Components', 'Design System'],
  },
  {
    title: 'React + Chakra UI',
    description: 'Simple, modular and accessible component library',
    command: 'npx rtg-react --chakra',
    tags: ['React', 'Chakra UI', 'Accessibility', 'Components'],
  },
  {
    title: 'React + Redux Toolkit',
    description: 'React with Redux for state management',
    command: 'npx rtg-react --redux',
    tags: ['React', 'Redux', 'State Management', 'TypeScript'],
  },
  {
    title: 'React + React Query',
    description: 'Powerful data synchronization for React',
    command: 'npx rtg-react --react-query',
    tags: ['React', 'React Query', 'Data Fetching', 'Cache'],
  },
  {
    title: 'React + React Router',
    description: 'Single page application with routing',
    command: 'npx rtg-react --router',
    tags: ['React', 'React Router', 'SPA', 'Navigation'],
  },
  {
    title: 'Full Stack React',
    description: 'React with Express.js backend and MongoDB',
    command: 'npx rtg-react --fullstack',
    tags: ['React', 'Express.js', 'MongoDB', 'Full Stack'],
  },
];

export const flagCategories = [
  {
    title: 'Styling',
    icon: Palette,
    description: 'Choose your preferred styling solution',
    flags: [
      {
        flag: '--tailwind',
        description: 'Add Tailwind CSS for utility-first styling',
      },
      {
        flag: '--styled-components',
        description: 'CSS-in-JS with styled-components',
      },
      { flag: '--mui', description: 'Material-UI component library' },
      { flag: '--chakra', description: 'Chakra UI for modular components' },
      { flag: '--sass', description: 'Sass/SCSS for enhanced CSS' },
    ],
  },
  {
    title: 'Language',
    icon: Code,
    description: 'Type safety and language preferences',
    flags: [
      { flag: '--typescript', description: 'Add TypeScript for type safety' },
      { flag: '--javascript', description: 'Use JavaScript (default)' },
    ],
  },
  {
    title: 'State Management',
    icon: Database,
    description: 'Manage application state effectively',
    flags: [
      { flag: '--redux', description: 'Redux Toolkit for predictable state' },
      { flag: '--zustand', description: 'Lightweight state management' },
      { flag: '--context', description: 'React Context API setup' },
    ],
  },
  {
    title: 'Data Fetching',
    icon: Zap,
    description: 'Handle server state and API calls',
    flags: [
      { flag: '--react-query', description: 'TanStack Query for server state' },
      { flag: '--swr', description: 'SWR for data fetching' },
      { flag: '--apollo', description: 'Apollo Client for GraphQL' },
    ],
  },
  {
    title: 'Routing',
    icon: Package,
    description: 'Navigation and routing solutions',
    flags: [
      { flag: '--router', description: 'React Router for SPA routing' },
      { flag: '--reach-router', description: 'Reach Router (legacy support)' },
    ],
  },
  {
    title: 'Testing & Quality',
    icon: Shield,
    description: 'Testing and code quality tools',
    flags: [
      { flag: '--testing', description: 'Jest and React Testing Library' },
      { flag: '--eslint', description: 'ESLint for code quality' },
      { flag: '--prettier', description: 'Prettier for code formatting' },
      { flag: '--husky', description: 'Git hooks for quality gates' },
    ],
  },
];

export const quickStartSteps = [
  {
    step: '1',
    title: 'Run the command',
    description: 'Execute the npx command with your desired flags',
    command: 'npx rtg-react --typescript --tailwind',
  },
  {
    step: '2',
    title: 'Navigate to directory',
    description: 'Change into your newly created project directory',
    command: 'cd my-react-app',
  },
  {
    step: '3',
    title: 'Start development',
    description: 'Run the development server and start coding',
    command: 'npm run dev',
  },
];
