// ─────────────────────────────────────────────────────────────────────────────
// Personal info & site data — edit this file to update the portfolio.
// ─────────────────────────────────────────────────────────────────────────────

export const personal = {
  name: "Malik Kashif Abbas",
  initials: "MK",
  role: "AI Application Engineer · Full Stack Developer (MERN & Python)",
  title: "AI Application Engineer & Full Stack Developer",
  company: "HyperNym & Metis International",
  companyUrl: "https://hypernym.io",
  currentPosition: "Full Stack Developer",
  // Words that rotate in the typing animation — now SPECIALTIES, not titles.
  tagline: [
    "LLM Agents & RAG",
    "AI Application Engineering",
    "MERN Full-Stack Apps",
    "Python Microservices",
    "CRM Integrations",
  ],
  headline: {
    pre: "I build",
    accent1: "AI-powered products",
    middle: "and full-stack web apps that make it into",
    accent2: "production",
    end: ".",
  },
  description:
    "1+ year shipping MERN + MySQL apps and Python AI with FastAPI, LangChain, LangGraph and RAG. Now a Full Stack Developer at HyperNym & Metis International, building Django microservices with Kafka and Angular frontends.",
  email: "malikkashifabbas28@gmail.com",
  linkedin: "https://www.linkedin.com/in/malik-kashif-abbas-52bab13a6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "https://github.com/malikkashifabbas",
  whatsapp: "+92 305 6424646",
  // wa.me needs the number in international format with no "+" or spaces.
  whatsappUrl:
    "https://wa.me/923056424646?text=" +
    encodeURIComponent("Hi Kashif, I found your portfolio and would like to connect."),
  resumeUrl: "/resume.pdf",
  stats: {
    projectsShipped: "5+",
    currentRole: "HyperNym & Metis International",
    integrations: "10+",
    linkedinConnections: "1,000+",
    githubRepos: "20+",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Navigation links
// ─────────────────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ─────────────────────────────────────────────────────────────────────────────
// What I Do — Bento grid expertise
// ─────────────────────────────────────────────────────────────────────────────
export const expertise = [
  { tag: "AI", title: "AI Application Engineering", description: "LLM agents on LangGraph, RAG with LangChain, tool-calling and prompt engineering with OpenAI & DeepSeek.", icon: "brain", span: "large" },
  { tag: "MERN", title: "MERN Full-Stack", description: "React/Next.js on Node.js/Express REST APIs with MySQL and MongoDB.", icon: "layers", span: "small" },
  { tag: "Python", title: "Python Backend & Microservices", description: "FastAPI, Django and Flask services over Apache Kafka.", icon: "server", span: "small" },
  { tag: "UI", title: "Frontend: React & Angular", description: "React, Next.js, Tailwind CSS, and Angular with RxJS, NgRx and Angular Material.", icon: "code", span: "small" },
  { tag: "CRM", title: "CRM Automation & Integrations", description: "Zapier, Make, Salesforce, HubSpot & Zoho via webhooks and event-driven workflows.", icon: "plug", span: "large" },
  { tag: "DB", title: "Databases & Data", description: "MySQL, PostgreSQL, MongoDB, Azure Cosmos DB and Redis.", icon: "database", span: "large" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Projects — company work first (MyCRMSim-AI, HyperNet), then integrations and freelance MERN.
// ─────────────────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: "MyCRMSim-AI",
    subtitle: "Multi-agent AI support & CRM automation platform (~30k lines, in production)",
    category: "AI PLATFORM · CORE DEVELOPER",
    description:
      "Core developer. Built two coordinated LLM agents: a LangGraph booking & qualification agent and “Simi”, an in-app support agent with intent classification, entity extraction and tool-calling. Implemented RAG with LangChain (embeddings + vector similarity search) and multi-provider LLM routing (OpenAI + DeepSeek) so agents answer from each client’s own knowledge base. Also built React/Next.js frontends on Node.js/Express + MySQL and CRM automation across Zapier, Make, Salesforce, HubSpot and Zoho.",
    image: "",
    logo: "/mycrmsim-logo.png",
    logoBg: "#000000",
    bullets: [
      "Two coordinated LLM agents, including the “Simi” support agent",
      "RAG over each client’s knowledge base + multi-provider LLM routing",
      "React/Next.js + Node.js/Express on MySQL, CRM automation end to end",
    ],
    metrics: [
      { label: "LLM Agents", value: "2" },
      { label: "Lines of Code", value: "~30k" },
      { label: "CRM Integrations", value: "5" },
    ],
    tech: [
      "Python", "FastAPI", "LangChain", "LangGraph", "OpenAI", "DeepSeek",
      "React", "Node.js", "Express", "MySQL", "Redis", "Docker",
    ],
    demoUrl: "https://mycrmsim.com/",
    liveUrl: "https://app.mycrmsim.com/",
    codeUrl: "#",
    caseStudyUrl: "/case-studies/mycrmsim-ai",
    featured: true,
  },
  {
    title: "HyperNet IoT Platform",
    subtitle: "HyperNym’s SaaS IoT platform for fleet, asset & smart-building use cases",
    category: "CURRENT WORK · IOT",
    description:
      "Contributing to HyperNym’s IoT platform for device management, provisioning and data-lake analytics, which powers fleet management, asset tracking and smart-building use cases. I build backend microservices in Python (Django, FastAPI, Flask) with Apache Kafka, PostgreSQL and Azure Cosmos DB, and Angular frontends.",
    image: "",
    visual: "iot" as const,
    badge: "NEW",
    bullets: [
      "Device management, provisioning & data-lake analytics",
      "Python microservices (Django, FastAPI, Flask) over Apache Kafka",
      "Angular frontends with RxJS on PostgreSQL & Azure Cosmos DB",
    ],
    metrics: [],
    tech: [
      "Python", "Django", "FastAPI", "Apache Kafka", "Angular",
      "Flask", "PostgreSQL", "Azure Cosmos DB", "RxJS",
    ],
    liveUrl: "",
    codeUrl: "",
    caseStudyUrl: "",
    privateNote: "Employer project — public details only",
  },
  {
    title: "CRM Automation Suite",
    subtitle: "Multi-Platform Integration Layer",
    category: "INTEGRATIONS",
    description:
      "Owned a multi-platform integration layer connecting Zapier, Make, n8n, Salesforce, HubSpot and Zoho via webhooks and OAuth 2.0, auto-syncing leads, contacts and appointments across clients’ existing CRMs.",
    image: "",
    // Logo grid renders the 4 integration brands instead of a screenshot.
    // Logos live in `app/images/Integrations Logo/` and are imported in Projects.tsx.
    logoGrid: ["zapier", "make", "n8n", "salesforce"] as const,
    bullets: [
      "OAuth 2.0 + webhooks across every connected platform",
      "Auto-syncs leads, contacts and appointments into existing CRMs",
      "Custom apps for Zapier, Make, n8n and Salesforce",
    ],
    metrics: [
      { label: "Platforms", value: "6" },
      { label: "Auth", value: "OAuth 2.0" },
      { label: "Languages", value: "JS · TS · Apex" },
    ],
    tech: ["Node.js", "Express", "TypeScript", "OAuth 2.0", "Webhooks", "REST APIs"],
    liveUrl: "https://github.com/malikkashifabbas/Third_Party_Integrations",
    codeUrl: "https://github.com/malikkashifabbas/Third_Party_Integrations",
    caseStudyUrl:
      "https://github.com/malikkashifabbas/Third_Party_Integrations#readme",
  },
  {
    title: "Serenabeds",
    subtitle: "E-Commerce Platform — Ireland (serenabeds.ie)",
    category: "MERN · FULL-STACK",
    description:
      "E-commerce platform (Ireland) built end-to-end (frontend, backend, REST API architecture and MongoDB schema) with JWT-authenticated checkout. Lighthouse 95+ and sub-200 ms API responses in production.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80&auto=format&fit=crop",
    bullets: [
      "End-to-end ownership — frontend, backend & MongoDB schema",
      "REST API architecture with JWT-authenticated checkout",
      "Fully responsive shopping experience",
    ],
    metrics: [
      { label: "Lighthouse", value: "95+" },
      { label: "Mobile Ready", value: "100%" },
      { label: "API Response", value: "<200ms" },
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "REST APIs", "Tailwind CSS"],
    liveUrl: "https://serenabeds.ie/",
    codeUrl: "#",
    caseStudyUrl: "https://admin.serenabeds.com/login",
    featured: true,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Testimonials — REAL client feedback
// ─────────────────────────────────────────────────────────────────────────────
export const testimonials = [
  {
    name: "Gary Capps",
    role: "Founder, myCRMSIM",
    avatar: "GC",
    rating: 5,
    short:
      "Working with this team was a fantastic experience. Their attention to detail and commitment to quality exceeded our expectations.",
    quote:
      "From the initial consultation to the final delivery, every step was handled professionally. The end result was a product that not only met our needs but also impressed our stakeholders. Highly recommended!",
  },
  {
    name: "Elon Max",
    role: "Managing Director, KFC Company",
    avatar: "EM",
    rating: 5,
    short:
      "Professional, reliable, and creative — everything you want in a development partner.",
    quote:
      "They delivered our project on time and went above and beyond to ensure our satisfaction. The new features have made a significant difference for our users. We look forward to working together again.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Skills & Technologies
// ─────────────────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    title: "AI / LLM",
    items: [
      { name: "LangChain", icon: "link", level: 85 },
      { name: "LangGraph", icon: "graph", level: 85 },
      { name: "RAG", icon: "database", level: 85 },
      { name: "LLM agents", icon: "zap", level: 85 },
      { name: "Embeddings", icon: "layers", level: 80 },
      { name: "pgvector", icon: "database", level: 72 },
      { name: "Tool-calling", icon: "box", level: 85 },
      { name: "Prompt engineering", short: "Prompting", icon: "code", level: 88 },
      { name: "OpenAI", icon: "zap", level: 88 },
      { name: "DeepSeek", icon: "zap", level: 78 },
    ],
  },
  {
    title: "MERN Stack",
    items: [
      { name: "React", icon: "react", level: 92 },
      { name: "Node.js", icon: "server", level: 90 },
      { name: "Express.js", icon: "fast", level: 90 },
      { name: "MongoDB", icon: "leaf", level: 88 },
      { name: "Next.js", icon: "next", level: 88 },
      { name: "Redux", icon: "layers", level: 84 },
      { name: "React Query", icon: "refresh", level: 82 },
      { name: "Tailwind CSS", icon: "wind", level: 92 },
      { name: "REST APIs", icon: "link", level: 94 },
      { name: "GraphQL", icon: "graph", level: 72 },
      { name: "JWT/SSO", icon: "lock", level: 88 },
    ],
  },
  {
    title: "Python Backend",
    items: [
      { name: "FastAPI", icon: "zap", level: 86 },
      { name: "Django", icon: "server", level: 78 },
      { name: "Flask", icon: "fast", level: 76 },
      { name: "Pydantic", icon: "check", level: 84 },
      { name: "async/await", icon: "refresh", level: 84 },
      { name: "SSE streaming", icon: "zap", level: 82 },
      { name: "Background workers", short: "Workers", icon: "box", level: 82 },
      { name: "Webhooks", icon: "link", level: 90 },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: "database", level: 88 },
      { name: "PostgreSQL", icon: "database", level: 82 },
      { name: "MongoDB", icon: "leaf", level: 88 },
      { name: "Redis", icon: "zap", level: 80 },
      { name: "pgvector", icon: "layers", level: 72 },
      { name: "Azure Cosmos DB", short: "Cosmos DB", icon: "cloud", level: 70 },
    ],
  },
  {
    title: "Angular & Microservices",
    items: [
      { name: "Angular", icon: "code", level: 72 },
      { name: "RxJS", icon: "refresh", level: 70 },
      { name: "NgRx", icon: "layers", level: 66 },
      { name: "Angular Material", short: "Material", icon: "box", level: 72 },
      { name: "Microservices", icon: "server", level: 78 },
      { name: "Apache Kafka", icon: "fast", level: 70 },
      { name: "Event-driven architecture", short: "Event-driven", icon: "zap", level: 78 },
    ],
  },
  {
    title: "CRM & Automation",
    items: [
      { name: "Salesforce", icon: "cloud", level: 84 },
      { name: "HubSpot", icon: "flame", level: 84 },
      { name: "Zoho", icon: "leaf", level: 86 },
      { name: "Zapier", icon: "zap", level: 92 },
      { name: "Make", icon: "refresh", level: 90 },
      { name: "Workflow automation", short: "Workflows", icon: "link", level: 92 },
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      { name: "Docker", icon: "box", level: 85 },
      { name: "Git", icon: "git", level: 92 },
      { name: "GitHub", icon: "git", level: 92 },
      { name: "Bitbucket", icon: "git", level: 82 },
      { name: "SourceTree", icon: "git", level: 84 },
      { name: "Vercel", icon: "triangle", level: 90 },
      { name: "Agile", icon: "refresh", level: 85 },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Tools marquee
// Each tool uses simple-icons.org slugs. `color` is the brand hex without #.
// `darkColor` is used in dark mode for icons that would be invisible (black logos).
// `custom: true` means render a styled text badge instead of an SVG (for
// brands not in simple-icons like GoHighLevel).
// ─────────────────────────────────────────────────────────────────────────────
export const tools = [
  // ── Languages ──
  { name: "JavaScript",  slug: "javascript",          color: "F7DF1E" },
  { name: "TypeScript",  slug: "typescript",          color: "3178C6" },
  { name: "Python",      slug: "python",              color: "3776AB" },

  // ── AI / LLM ──
  { name: "LangChain",   slug: "langchain",           color: "1C3C3C", darkColor: "FFFFFF" },
  { name: "OpenAI",      slug: "openai",              color: "000000", darkColor: "FFFFFF" },

  // ── Frontend ──
  { name: "React",       slug: "react",               color: "61DAFB" },
  { name: "Next.js",     slug: "nextdotjs",           color: "000000", darkColor: "FFFFFF" },
  { name: "Tailwind",    slug: "tailwindcss",         color: "06B6D4" },
  { name: "Redux",       slug: "redux",               color: "764ABC" },
  { name: "Angular",     slug: "angular",             color: "DD0031" },

  // ── Backend ──
  { name: "Node.js",     slug: "nodedotjs",           color: "5FA04E" },
  { name: "Express",     slug: "express",             color: "000000", darkColor: "FFFFFF" },
  { name: "GraphQL",     slug: "graphql",             color: "E10098" },
  { name: "FastAPI",     slug: "fastapi",             color: "009688" },
  { name: "Django",      slug: "django",              color: "092E20", darkColor: "FFFFFF" },
  { name: "Flask",       slug: "flask",               color: "000000", darkColor: "FFFFFF" },
  { name: "Apache Kafka", slug: "apachekafka",        color: "231F20", darkColor: "FFFFFF" },

  // ── Databases ──
  { name: "MongoDB",     slug: "mongodb",             color: "47A248" },
  { name: "PostgreSQL",  slug: "postgresql",          color: "4169E1" },
  { name: "MySQL",       slug: "mysql",               color: "4479A1" },
  { name: "Firebase",    slug: "firebase",            color: "FFCA28" },
  { name: "Redis",       slug: "redis",               color: "DC382D" },

  // ── Cloud & DevOps ──
  // AWS: simple-icons slugs (amazonwebservices / amazonaws) are inconsistent,
  // so we render a custom branded badge that matches the real AWS lockup.
  { name: "AWS",         slug: "aws",                 color: "FF9900", bgColor: "232F3E", custom: true, label: "aws" },
  { name: "Docker",      slug: "docker",              color: "2496ED" },
  { name: "Vercel",      slug: "vercel",              color: "000000", darkColor: "FFFFFF" },
  { name: "Git",         slug: "git",                 color: "F05032" },
  { name: "GitHub",      slug: "github",              color: "181717", darkColor: "FFFFFF" },

  // ── Third-Party Integrations ──
  { name: "Zapier",      slug: "zapier",              color: "FF4F00" },
  { name: "Make",        slug: "make",                color: "6D00CC" },
  // Salesforce simple-icons slug is unreliable — use a custom cloud badge.
  { name: "Salesforce",  slug: "salesforce",          color: "FFFFFF", bgColor: "00A1E0", custom: true, label: "SF" },
  { name: "HubSpot",     slug: "hubspot",             color: "FF7A59" },
  { name: "Zoho",        slug: "zoho",                color: "E42527" },
];

// ─────────────────────────────────────────────────────────────────────────────
// About — bio, education and the experience timeline
// ─────────────────────────────────────────────────────────────────────────────
export const about = {
  bio: [
    "I'm a Full Stack Developer at HyperNym & Metis International Limited, building Python microservices with Django, FastAPI and Flask, event-driven messaging on Apache Kafka, PostgreSQL and Azure Cosmos DB data layers, and Angular frontends.",
    "Before that, I spent a year at QuantumStack as an AI Application Engineer & Full Stack Developer (MERN + Python). As a core developer on MyCRMSim-AI, I built \"Simi\", an in-app AI support agent, alongside a LangGraph booking agent, plus a RAG pipeline with LangChain and vector similarity search, React/Next.js frontends with Node.js/Express APIs on MySQL, and end-to-end CRM integrations with Zapier, Make, Salesforce, HubSpot and Zoho.",
    "I care about the whole system: clean architecture, retrieval quality, cost and latency, and shipping features people actually use.",
  ],
  education: {
    // Triple-track callout — appears at top of the Education card (BOLD).
    tripleTrack:
      "Pursuing three disciplines in parallel — a CS degree, a 5-year religious scholarship, and a full-time IT role. Time management and discipline are core competencies.",
    entries: [
      {
        degree: "BS (Hons) in Computer Science",
        school: "Virtual University of Pakistan",
        period: "2022 — 2026",
        current: true,
      },
    ],
  },
  experience: {
    bold:
      "Shipping production software full-time while completing a CS degree — from LLM agents to event-driven microservices.",
    // Newest first — titles and dates match LinkedIn and the résumé.
    roles: [
      {
        role: "Full Stack Developer",
        company: "HyperNym & Metis International Limited",
        companyUrl: "https://hypernym.io",
        meta: "Islamabad · Full-time",
        period: "Oct 2026 – Present",
        current: true,
        bullets: [
          "Build backend microservices in Python with Django, FastAPI and Flask, using Apache Kafka for event-driven communication and PostgreSQL and Azure Cosmos DB for storage.",
          "Build responsive Angular frontends (TypeScript, RxJS, NgRx, Angular Material) with reusable components and typed services connected to the backend APIs.",
        ],
      },
      {
        role: "AI Application Engineer & Full Stack Developer (MERN + Python)",
        company: "QuantumStack",
        companyUrl: "https://quantumstackai.com/team",
        meta: "Taxila · Full-time",
        period: "Aug 2025 – Oct 2026",
        current: false,
        bullets: [
          "Built responsive React/Next.js frontends and Node.js/Express REST APIs backed by MySQL for a multi-tenant SaaS platform, with JWT authentication and real-time data sync.",
          "Developed Python/FastAPI AI services with LangChain, LangGraph and Redis, including SSE streaming chat, background workers and LLM usage tracking.",
          "Owned all third-party CRM integrations end-to-end (Zapier, Make, Salesforce, HubSpot and Zoho) using webhooks and event-driven workflows to auto-sync leads, contacts and appointments.",
        ],
      },
    ],
  },
};
