import type { Metadata, Site, Socials } from "./types.ts";

export const SITE: Site = {
    TITLE: "Tarun Kavipurapu",
    DESCRIPTION: "Tarun's Website",
    EMAIL: "tarunsharmakavipurapu@gmail.com",
    NUM_POSTS_ON_HOMEPAGE: 5,
    NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
    TITLE: "Home",
    DESCRIPTION: "Home page of Tarun's blog and portfolio.",
};

export const BLOG: Metadata = {
    TITLE: "Blog",
    DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
    TITLE: "Projects",
    DESCRIPTION:
        "A collection of my projects with links to repositories and live demos.",
};

export const EXPERIENCE: Metadata = {
    TITLE: "Experience",
    DESCRIPTION: "A summary of my work experience and key projects.",
}

export const SOCIALS: Socials = [
    {
        NAME: "X (formerly Twitter)",
        HREF: "https://x.com/TarunKavipurapu",
    },
    {
        NAME: "GitHub",
        HREF: "https://github.com/tarun-kavipurapu",
    },
    {
        NAME: "LinkedIn",
        HREF: "https://www.linkedin.com/in/tarun-kavipurapu-ab820b226/",
    },
];

export const EXPERIENCE_DETAILS = [
    {
        title: "Backend Developer",
        company: "Lendmefy",
        period: "Mar 2024 – Aug 2024",
        link: "https://lendmefy.com/",
        details: {
            "Tech Stack": "Node.js, NATS, Redis, AWS, MongoDB",
            "Key Projects": "Crypto Exchange Integration (15+ major platforms including ByBit, Bitget, Swyftx)",
            "Impact": [
                "Developed real-time chat feature using WebSocket and Gorilla WebSocket library" ,
                "Implemented JWT-based stateless authentication and role-based access control.",
                "Designed PostgreSQL schema with database transactions for data integrity",
            ]
        }
    },

];