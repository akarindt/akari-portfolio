import { v4 as uuidv4 } from 'uuid';

export type ProjectsType = {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    techs: string[];
    tags: string[];
    link: string;
};

const projects: ProjectsType[] = [
    {
        id: uuidv4(),
        title: 'KafkaBOT',
        description: 'A multi-purpose Discord bot that i made for fun.',
        createdAt: '2024-08-06',
        techs: ['Typescript', 'PostgreSQL'],
        tags: ['DiscordJS', 'NodeJS', 'Typescript', 'PostgreSQL'],
        link: 'https://github.com/akarindt/KafkaBOT',
    },
    {
        id: uuidv4(),
        title: 'linkedin-auto-connect',
        description: 'A tool to automate sending connection requests on LinkedIn & follow peoples.',
        createdAt: '2025-02-20',
        techs: ['Typescript', 'Puppeteer'],
        tags: ['Puppeteer', 'Typescript', 'Automation', 'LinkedIn', 'Web Scraping'],
        link: 'https://github.com/akarindt/linkedin-auto-connect',
    },
    {
        id: uuidv4(),
        title: 'akari-portfolio',
        description: 'My personal portfolio website, built with React and Tailwind CSS with windows 10 style UI.',
        createdAt: '2025-11-06',
        techs: ['React', 'Tailwind CSS', 'Vite', 'TypeScript'],
        tags: ['React', 'Tailwind CSS', 'Portfolio'],
        link: 'https://github.com/akarindt/akari-portfolio',
    },
];

export default projects;
