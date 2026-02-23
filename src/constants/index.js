import { meta, shopify, starbucks, tesla, grambling, alx, nu, buildql, ericsson, noon, jpmorgan, wellsfargo, hpe, forage } from "../assets/images";
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
        title: "JPMorgan Chase Software Engineering Job Simulation",
        company_name: "Forage",
        icon: jpmorgan,
        iconBg: "#003874",
        date: "Jan 2026 - Feb 2026",
        points: [
            "Integrated Kafka into a Spring Boot microservice to consume and deserialize high-volume transaction messages using a configurable topic and embedded Kafka test framework.",
            "Implemented transaction validation and persistence logic with Spring Data JPA and an H2 SQL database, including entity modeling and balance updates across relational User records.",
            "Connected the service to an external REST Incentive API using RestTemplate, processing incentive responses and incorporating them into transactional workflows.",
            "Developed a REST endpoint for querying user balances, returning JSON responses through a Spring controller while maintaining clean architectural boundaries.",
            "Verified system behavior using Maven test suites and debugger-driven inspection, ensuring reliability across message ingestion, database operations, and external API interactions.",
        ],
    },
    {
        title: "Wells Fargo Software Engineering Job Simulation",
        company_name: "Forage",
        icon: wellsfargo,
        iconBg: "#d71e28",
        date: "Jan 2026 - Feb 2026",
        points: [
            "Understood relevant requirements for building a system to manage financial portfolios.",
            "Figured out what data the system needed to keep track of.",
            "Drafted a visual representation of the data as an entity relationship diagram (ERD).",
            "Used the IntelliJ developer application to implement the ERD and published it to GitHub.",
        ],
    },
    {
        title: "Hewlett Packard Enterprise Software Engineering Job Simulation",
        company_name: "Forage",
        icon: hpe,
        iconBg: "#01a982",
        date: "Feb 2026",
        points: [
            "Wrote a proposal for a RESTful web service to manage a list of employees.",
            "Built a web server application in Java Spring Boot that can accept and respond to HTTP requests as well as support uploading JSON data.",
            "Developed and ran a set of unit tests to assess the Java Spring Boot application's performance.",
        ],
    },
    {
        title: "Quantium Data Analytics Job Simulation",
        company_name: "Forage",
        icon: forage,
        iconBg: "#6c3fc5",
        date: "Feb 2026",
        points: [
            "Completed a job simulation focused on Data Analytics and Commercial Insights for the data science team.",
            "Developed expertise in data preparation and customer analytics, utilizing transaction datasets to extract valuable insights and deliver data-driven commercial recommendations.",
            "Extended analytical capabilities to identify benchmark stores for conducting uplift testing on trial store layouts, enabling evidence-based decision-making.",
            "Leveraged data analytics and insights to create comprehensive reports for the Category Manager, facilitating informed strategic decisions and enhancing commercial applications.",
        ],
    },
    {
        title: "Software Engineer Apprentice",
        company_name: "Ericsson",
        icon: ericsson,
        iconBg: "#0082f0",
        date: "May 2025 - Aug 2025",
        points: [
            "Engineered a Kafka-streaming microservice (Kubernetes, REST API) processing 400K+ daily events across 6 topics, replacing manual SQL workflows and achieving sub-200ms latency.",
            "Architected an event-driven system (Apache Kafka, F#, S3) aggregating 10K+ pricing records into RESTful endpoints, enabling real-time access to previously disconnected historical trade data.",
            "Built a React dashboard visualizing distributed pipeline timelines in real time, reducing debugging and resolution time from 60 minutes to 10 minutes for a 30-engineer team.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Noon",
        icon: noon,
        iconBg: "#ffd500",
        date: "Jun 2023 - Sep 2023",
        points: [
            "Developed a scalable IoT data pipeline (Kafka Connect, MQTT, PostgreSQL) streamlining sensor data processing and reducing downtime detection by 40%.",
            "Created 50+ automated unit & integration tests (SpringBoot, JUnit, Postman), improving backend reliability by 80% through rigorous edge-case handling in concurrent environments.",
            "Implemented a real-time push notification system (Google Firebase) delivering status updates with under 10ms latency for optimized device monitoring.",
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