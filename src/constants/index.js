import { meta, shopify, starbucks, tesla, grambling, alx } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Research Assistant - ML",
        company_name: "Grambling State University",
        icon: grambling,
        iconBg: "#ffd700",
        date: "Jan 2025 - Present",
        points: [
            "Investigated and prototyped AES-GCM encryption for one-time passwords (OTPs), ensuring confidentiality and integrity using Redis for secure storage and rapid retrieval.",
            "Developed a caching mechanism using Redis Sets and TTL to block OTP reuse and automatically expire OTPs after a configurable interval.",
            "Explored advanced ML models to detect fraudulent activity in OTP requests, incorporating dynamic policies to flag anomalies and strengthen security measures.",
            "Proposed and tested methods to dynamically adjust OTP time-to-live (TTL) based on user behavior patterns and integrated additional context signals for continuous risk assessment.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "ALX Africa",
        icon: alx,
        iconBg: "#ff6b35",
        date: "Feb 2023 - Feb 2024",
        points: [
            "Engineered a Kafka-streaming microservice on Kubernetes processing 400K+ events/day across 6 topics, replacing 45-minute manual SQL workflows with REST API calls delivering sub-200ms latency.",
            "Architected an event-driven system using Apache Kafka, F# and S3 that aggregates and serves 10K pricing records via RESTful endpoints.",
            "Collaborated with senior engineers to implement a caching layer for rule feedback and deduplication logic in PostgreSQL, reducing processing time by 70%.",
            "Built a React dashboard visualizing distributed pipeline event timelines in real time, reducing debug/resolution time from 60 minutes to 10 minutes for a 30-engineer team.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/emmaeng700',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/emmanuel-oppong-acheampong',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Go Container',
        description: 'Built a container runtime in Go with process isolation leveraging Linux namespaces. Implemented resource controls using cgroups and set up a secure filesystem environment using chroot.',
        link: 'https://github.com/emmaeng700/distributed-systems',
    },
    {
        iconUrl: car,
        theme: 'btn-back-pink',
        name: 'KubeFlowX',
        description: 'A Kubernetes microservices orchestration tool with Spring Boot and Java K8s client. Features real-time deployment management, scaling, resource configuration, and monitoring with responsive Tailwind CSS interface.',
        link: 'https://github.com/emmaeng700/KubeFlowX',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'NanoSQL',
        description: 'Built a high-performance SQLite-clone database engine in C, implementing B-tree indexing, persistent storage, and custom memory management with optimized page allocation.',
        link: 'https://github.com/emmaeng700/C-Database',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-red',
        name: 'MateMatch',
        description: 'Built a secure web app with Firebase Auth enabling interns to discover, list, and share housing via location-aware features. Used Puppeteer to crawl Airbnb listings and integrated Google Maps API for commute-time calculations.',
        link: 'https://github.com/emmaeng700/matematch',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/emmaeng700',
    }
];