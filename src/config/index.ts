import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Inioluwa Akintokun — Full-Stack Developer",
  author: "Inioluwa Gloria Akintokun",
  description:
    "Full-Stack web developer specializing in web application development and maintenance for real clients.",
  lang: "en",
  siteLogo: "/ini-small1.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/INI_TOKUN" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/inioluwa-akintokun/" },
    { text: "Github", href: "https://github.com/glowzaq" },
  ],
  socialImage: "/new-port.png",
  canonicalURL: "https://latest-portfolio-flame-eight.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Inioluwa Akintokun",
    specialty: "Full-Stack Developer",
    summary:
      "Full-Stack web developer specializing in web application development and maintenance for real clients.",
    email: "inioluwaakintokun@gmail.com",
  },
  experience: [
    {
      company: "SQI College of ICT",
      position: "Cybersecurity Instructor",
      startDate: "May 2025",
      endDate: "Present",
      summary: [
        "Instruct 20 + students in network and application security, translating complex concepts into accessible lessons.",
        "Teach system architecture fundamentals spanning OS internals, TCP / IP, cloud networking, and encryption protocols.",
        "Deliver hands - on labs in vulnerability scanning, packet analysis, and Linux / Windows system hardening.",
        "Develop structured curriculum covering IAM, secure SDLC, and defensive network architecture(VPC, WAF, ACLs)."
      ]
    },
    {
      company: "Freelance",
      position: "Full-stack Developer",
      startDate: "June 2026",
      endDate: "Present",
      summary: [
        "Architected a full-stack church management platform from the ground up using Next.js, TypeScript, Prisma, and PostgreSQL, now used by 200+ active members to manage events, attendance, donations, and announcements.",
        "Identified a critical data-integrity flaw where overlapping Members and Users tables caused conflicting records redesigned the schema and merged them into a single unified structure, eliminating the conflict at the source.",
        "Containerized the entire application with Docker to standardize the development environment, laying the groundwork for a planned AWS production deployment."
      ],
    },
    {
      company: "Freelance",
      position: "Full-stack Developer",
      startDate: "July 2026",
      endDate: "Present",
      summary: [
        "Delivered a full-stack appointment booking platform as freelance client work, using Next.js, TypeScript, Prisma ORM, and PostgreSQL now serving 10+ users.",
        "Owned the entire build independently as sole freelance developer, from database architecture and backend logic through to frontend UI and deployment on Vercel.",
        "Managed the client relationship directly throughout development, translating business requirements, booking flow, appointment scheduling, client management — into technical decisions without a team or spec handoff.",
      ],
    },
  ],
  projects: [
    {
      name: "Glowbank Application",
      summary: "A banking application simulating transfers, withdrawals, and deposits using React, Node.js, Express, MongoDB.",
      linkSource: "https://github.com/glowzaq/glowbank",
      linkPreview: "https://glowbank.vercel.app",
      image: "/glowbank.png",
    },
    {
      name: "WikiDev",
      summary: "A developer-focused Q&A learning platform using Next.js, TypeScript, Node.js, MongoDB, and GraphQL.",
      linkPreview: "https://wikidev.onrender.com",
      linkSource: "https://github.com/glowzaq/wikidev",
      image: "/wikii.png",
    },
    {
      name: "E-Voting System",
      summary: "An object-oriented architecture structuring voting logic, ballot handling, and result tabulation.",
      linkPreview: "https://e-voting-system-exbn.onrender.com/",
      linkSource: "https://github.com/glowzaq/e-voting-system",
      image: "/evote.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Inioluwa Akintokun, a Full Stack Developer who builds real applications for real clients not just polished side projects. My path here started somewhere unexpected: a degree in Crop Science, where I learned to think in systems, test assumptions, and work through problems methodically before touching a line of code.
      I currently work full-time as a cybersecurity instructor, teaching network and application security to 20+ students, work that's sharpened how I think about authentication, data integrity, and explaining technical decisions clearly. Alongside that, I design and ship full-stack applications end-to-end for paying clients on a freelance basis, using Next.js, TypeScript, Node.js, and PostgreSQL. I'm now looking to bring that same hands-on delivery into a full-time development role.`,
    image: "/ini-big1.jpeg",
  },
};

// #5755ff
