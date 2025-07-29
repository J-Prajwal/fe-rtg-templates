import { Code, Palette, Package, Database, Shield } from 'lucide-react';

export const templates = [
  {
    title: 'React + TypeScript + Tailwind',
    description: 'The most popular combination for modern React development',
    command: 'npx rtg-template react my-react-app --typescript --tailwind',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    // popular: true,
  },
  {
    title: 'React + JavaScript + Tailwind',
    description: 'Quick setup with Tailwind CSS styling',
    command: 'npx rtg-template react my-react-app --tailwind',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'React + TypeScript + Styled Components',
    description: 'Type-safe React with CSS-in-JS styling',
    command:
      'npx rtg-template react my-react-app --typescript --styled-components',
    tags: ['React', 'TypeScript', 'Styled Components', 'CSS-in-JS'],
  },
  {
    title: 'React + Material-UI',
    description: "React with Google's Material Design components",
    command: 'npx rtg-template react my-react-app --mui',
    tags: ['React', 'Material-UI', 'Components', 'Design System'],
  },
  {
    title: 'React + Chakra UI',
    description: 'Simple, modular and accessible component library',
    command: 'npx rtg-template react my-react-app --chakra',
    tags: ['React', 'Chakra UI', 'Accessibility', 'Components'],
  },
  {
    title: 'React + Redux Toolkit',
    description: 'React with Redux for state management',
    command: 'npx rtg-template react my-react-app --redux',
    tags: ['React', 'Redux', 'State Management', 'TypeScript'],
  },
  {
    title: 'React + React Router',
    description: 'Single page application with routing',
    command: 'npx rtg-template react my-react-app --router',
    tags: ['React', 'React Router', 'SPA', 'Navigation'],
  },
  {
    title: 'React TypeScript Template',
    description: 'React with TypeScript and modern tooling',
    command: 'npx rtg-template react-ts my-react-app',
    tags: ['React', 'TypeScript', 'Vite', 'Modern'],
  },
  // {
  //   title: 'React + React Query',
  //   description: 'Powerful data synchronization for React',
  //   command: 'npx rtg-template react my-react-app --react-query',
  //   tags: ['React', 'React Query', 'Data Fetching', 'Cache'],
  // },
  // {
  //   title: 'Next.js Application',
  //   description: 'Full-stack React framework with server-side rendering',
  //   command: 'npx rtg-template next my-next-app --typescript --tailwind',
  //   tags: ['Next.js', 'React', 'TypeScript', 'SSR'],
  // },
  // {
  //   title: 'Next.js with Authentication',
  //   description: 'Next.js with built-in authentication setup',
  //   command: 'npx rtg-template next my-next-app --auth',
  //   tags: ['Next.js', 'React', 'Authentication', 'Full Stack'],
  // },
  // {
  //   title: 'Node.js API',
  //   description: 'Express.js API with TypeScript and database support',
  //   command: 'npx rtg-template node-api my-api --typescript',
  //   tags: ['Node.js', 'Express.js', 'TypeScript', 'API'],
  // },
  // {
  //   title: 'Node.js API with MongoDB',
  //   description: 'Express.js API with MongoDB database',
  //   command: 'npx rtg-template node-api my-api --mongodb',
  //   tags: ['Node.js', 'Express.js', 'MongoDB', 'API'],
  // },
  // {
  //   title: 'Node.js API with MySQL',
  //   description: 'Express.js API with MySQL database',
  //   command: 'npx rtg-template node-api my-api --mysql',
  //   tags: ['Node.js', 'Express.js', 'MySQL', 'API'],
  // },
  // {
  //   title: 'Node.js API with PostgreSQL',
  //   description: 'Express.js API with PostgreSQL database',
  //   command: 'npx rtg-template node-api my-api --postgres',
  //   tags: ['Node.js', 'Express.js', 'PostgreSQL', 'API'],
  // },
  // {
  //   title: 'NestJS Application',
  //   description: 'Scalable Node.js framework with TypeScript',
  //   command: 'npx rtg-template nestjs my-nest-app',
  //   tags: ['NestJS', 'TypeScript', 'Node.js', 'Enterprise'],
  // },
  // {
  //   title: 'NestJS with Prisma',
  //   description: 'NestJS with Prisma ORM for database management',
  //   command: 'npx rtg-template nestjs my-nest-app --prisma',
  //   tags: ['NestJS', 'TypeScript', 'Prisma', 'ORM'],
  // },
  // {
  //   title: 'NestJS with PostgreSQL',
  //   description: 'NestJS with PostgreSQL database',
  //   command: 'npx rtg-template nestjs my-nest-app --postgres',
  //   tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'Database'],
  // },
  // {
  //   title: 'NestJS with MySQL',
  //   description: 'NestJS with MySQL database',
  //   command: 'npx rtg-template nestjs my-nest-app --mysql',
  //   tags: ['NestJS', 'TypeScript', 'MySQL', 'Database'],
  // },
  // {
  //   title: 'FastAPI Python App',
  //   description: 'Modern Python web framework with automatic API docs',
  //   command: 'npx rtg-template fastapi my-fastapi-app',
  //   tags: ['FastAPI', 'Python', 'API', 'Async'],
  // },
  // {
  //   title: 'FastAPI with MySQL',
  //   description: 'FastAPI with MySQL database integration',
  //   command: 'npx rtg-template fastapi my-fastapi-app --mysql',
  //   tags: ['FastAPI', 'Python', 'MySQL', 'Database'],
  // },
  // {
  //   title: 'FastAPI with PostgreSQL',
  //   description: 'FastAPI with PostgreSQL database integration',
  //   command: 'npx rtg-template fastapi my-fastapi-app --postgres',
  //   tags: ['FastAPI', 'Python', 'PostgreSQL', 'Database'],
  // },
  // {
  //   title: 'Full Stack React',
  //   description: 'React with Express.js backend and MongoDB',
  //   command: 'npx rtg-template react my-react-app --fullstack',
  //   tags: ['React', 'Express.js', 'MongoDB', 'Full Stack'],
  // },
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
  // {
  //   title: 'Data Fetching',
  //   icon: Zap,
  //   description: 'Handle server state and API calls',
  //   flags: [
  //     { flag: '--react-query', description: 'TanStack Query for server state' },
  //     { flag: '--swr', description: 'SWR for data fetching' },
  //     { flag: '--apollo', description: 'Apollo Client for GraphQL' },
  //   ],
  // },
  {
    title: 'Routing',
    icon: Package,
    description: 'Navigation and routing solutions',
    flags: [
      { flag: '--router', description: 'React Router for SPA routing' },
      { flag: '--reach-router', description: 'Reach Router (legacy support)' },
    ],
  },
  // {
  //   title: 'Authentication',
  //   icon: Shield,
  //   description: 'Authentication and security features',
  //   flags: [
  //     { flag: '--auth', description: 'Add authentication setup' },
  //     { flag: '--jwt', description: 'JWT-based authentication' },
  //     { flag: '--oauth', description: 'OAuth integration' },
  //   ],
  // },
  // {
  //   title: 'Database',
  //   icon: Database,
  //   description: 'Database and ORM options',
  //   flags: [
  //     { flag: '--mongodb', description: 'MongoDB database integration' },
  //     { flag: '--mysql', description: 'MySQL database integration' },
  //     { flag: '--postgres', description: 'PostgreSQL database integration' },
  //     { flag: '--prisma', description: 'Prisma ORM for database management' },
  //   ],
  // },
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
  {
    title: 'Project Setup',
    icon: Package,
    description: 'Project configuration options',
    flags: [
      { flag: '--no-install', description: 'Skip dependency installation' },
      { flag: '--no-git', description: 'Skip git initialization' },
      { flag: '--interactive', description: 'Run in interactive mode' },
      { flag: '--repo', description: 'Use custom template repository' },
    ],
  },
];

export const quickStartSteps = [
  {
    step: '1',
    title: 'Run the command',
    description: 'Execute the npx command with your desired flags',
    command: 'npx rtg-template react my-app --typescript --tailwind',
  },
  {
    step: '2',
    title: 'Navigate to directory',
    description: 'Change into your newly created project directory',
    command: 'cd my-app',
  },
  {
    step: '3',
    title: 'Start development',
    description: 'Run the development server and start coding',
    command: 'npm run dev',
  },
];
