// ─────────────────────────────────────────────────────────────────────────────
// Personal info & site data — edit this file to update the portfolio.
// ─────────────────────────────────────────────────────────────────────────────

export const personal = {
  name: "Malik Kashif Abbas",
  initials: "MK",
  role: "Full-Stack Developer @ QuantumStack",
  company: "QuantumStack",
  companyUrl: "https://quantumstackai.com/team",
  // Words that rotate in the typing animation — now SPECIALTIES, not titles.
  tagline: [
    "Full-Stack Engineering",
    "Workflow Automation",
    "Third-Party Integrations",
    "AWS Cloud Solutions",
  ],
  headline: {
    pre: "Building",
    accent1: "scalable",
    middle: "products that",
    accent2: "ship fast",
    end: ".",
  },
  description:
    "I don't just write features — I think about system design, performance, scalability, and developer experience. Currently shipping production apps at QuantumStack.",
  email: "malikkashifabbas28@gmail.com",
  linkedin: "https://www.linkedin.com/in/malik-kashif-abbas-44980a411/",
  github: "https://github.com/malikkashifabbas",
  resumeUrl: "/resume.pdf",
  stats: {
    projectsShipped: "5+",
    currentRole: "QuantumStack",
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
  {
    tag: "UI/UX",
    title: "Frontend Development",
    description: "React, Next.js, Tailwind, and pixel-perfect responsive UI.",
    icon: "code",
    span: "small",
  },
  {
    tag: "Server",
    title: "Backend Development",
    description: "Node.js, Express, REST APIs, and scalable server logic.",
    icon: "server",
    span: "small",
  },
  {
    tag: "Automation",
    title: "Integrations & Workflow Automation",
    description:
      "Zapier, Make, Salesforce, Zoho, and HubSpot — I build automated workflows where inbound messages trigger actions like Send SMS, push notifications, and CRM updates, so businesses scale communication without manual work.",
    icon: "plug",
    span: "large",
  },
  {
    tag: "Cloud",
    title: "AWS & DevOps",
    description:
      "Docker, AWS (Lambda, ECS, EC2, CloudFront, API Gateway), and CI/CD pipelines.",
    icon: "cloud",
    span: "large",
  },
  {
    tag: "Data",
    title: "Database Engineering",
    description: "MongoDB, PostgreSQL, MySQL — schema design and query optimization.",
    icon: "database",
    span: "small",
  },
  {
    tag: "Architecture",
    title: "API & System Design",
    description: "RESTful architecture, microservices, and scalable system design.",
    icon: "zap",
    span: "small",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Projects — REAL projects shipped at QuantumStack & freelance
// ─────────────────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: "myCRMSIM",
    subtitle: "CRM + Messaging Platform",
    category: "PLATFORM DEVELOPMENT",
    description:
      "Designed 60% of the dashboard UI and implemented SSO authentication with 70% of admin APIs. Integrated WhatsApp & iMessage SMS functionality for unified customer messaging.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80&auto=format&fit=crop",
    // Brand logo — drop your file at: public/mycrmsim-logo.png
    logo: "/mycrmsim-logo.png",
    logoBg: "#000000", // black background matches the actual logo artwork
    bullets: [
      "Designed 60% of the dashboard UI from scratch",
      "Built 70% of admin APIs + SSO authentication",
      "Integrated WhatsApp & iMessage SMS functionality",
    ],
    metrics: [
      { label: "Dashboard UI", value: "60%" },
      { label: "Admin APIs", value: "70%" },
      { label: "3rd-Party Integrations", value: "WhatsApp + iMessage" },
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "SSO", "WhatsApp API"],
    liveUrl: "https://mycrmsim.com/",
    codeUrl: "#",
    caseStudyUrl: "https://support.mycrmsim.com/",
    featured: true,
  },
  {
    title: "Serenabeds",
    subtitle: "E-Commerce Platform — Ireland",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "Designed and developed both frontend and backend, including database architecture, REST APIs, and a fully responsive UI for a seamless shopping experience.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80&auto=format&fit=crop",
    bullets: [
      "End-to-end ownership — frontend, backend & database",
      "Fully responsive shopping experience",
      "REST API architecture with secure checkout flow",
    ],
    metrics: [
      { label: "Lighthouse", value: "95+" },
      { label: "Mobile Ready", value: "100%" },
      { label: "API Response", value: "<200ms" },
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB", "REST APIs", "Tailwind"],
    liveUrl: "https://serenabeds.ie/",
    codeUrl: "#",
    caseStudyUrl: "https://serenabeds.ie/",
    featured: true,
  },
  {
    title: "Serenabeds Admin Dashboard",
    subtitle: "Admin Panel — Internal Tool",
    category: "BACKEND ENGINEERING",
    description:
      "Built the entire backend including database schema, authentication, and all core APIs such as product management and order handling.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    bullets: [
      "Full backend including DB schema design",
      "Secure authentication & role-based access",
      "Product, order, and inventory management APIs",
    ],
    metrics: [
      { label: "Endpoints", value: "40+" },
      { label: "Auth", value: "JWT" },
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    liveUrl: "https://admin.serenabeds.com/login",
    codeUrl: "#",
    caseStudyUrl: "https://admin.serenabeds.com/login",
  },
  {
    title: "Nutrafi Kitchen",
    subtitle: "Food E-Commerce Platform",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "Developed both frontend UI and backend logic with product listing, cart flow, and efficient data management for admin operations.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80&auto=format&fit=crop",
    bullets: [
      "End-to-end product catalog & cart flow",
      "Admin operations panel with efficient data ops",
      "Optimized backend queries for fast browsing",
    ],
    metrics: [
      { label: "Cart Flow", value: "Optimized" },
      { label: "Stack", value: "MERN" },
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    liveUrl: "#",
    codeUrl: "#",
    caseStudyUrl: "#",
  },
  {
    title: "Glambar Beauty Lounge",
    subtitle: "Salon Management Platform",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "Delivered a complete responsive admin dashboard with full backend APIs, authentication, and database structure for full business automation.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80&auto=format&fit=crop",
    bullets: [
      "Complete responsive admin dashboard",
      "Full backend APIs + authentication",
      "Database structure for business automation",
    ],
    metrics: [
      { label: "Dashboard", value: "100% Responsive" },
      { label: "Auth", value: "JWT" },
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "JWT"],
    liveUrl: "#",
    codeUrl: "#",
    caseStudyUrl: "#",
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
    title: "Languages",
    items: [
      { name: "JavaScript", icon: "code", level: 95 },
      { name: "TypeScript", icon: "code", level: 88 },
      { name: "Python", icon: "code", level: 80 },
      { name: "Java", icon: "coffee", level: 75 },
      { name: "C++", icon: "code", level: 70 },
      { name: "SQL", icon: "database", level: 85 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "react", level: 95 },
      { name: "Next.js", icon: "next", level: 90 },
      { name: "TypeScript", icon: "code", level: 88 },
      { name: "Tailwind", icon: "wind", level: 92 },
      { name: "Framer Motion", icon: "zap", level: 85 },
      { name: "Redux", icon: "layers", level: 85 },
      { name: "React Query", icon: "refresh", level: 82 },
      { name: "shadcn/ui", icon: "layers", level: 80 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "server", level: 92 },
      { name: "Express", icon: "fast", level: 90 },
      { name: "Python", icon: "code", level: 85 },
      { name: "FastAPI", icon: "zap", level: 82 },
      { name: "Django", icon: "server", level: 80 },
      { name: "Flask", icon: "fast", level: 78 },
      { name: "REST APIs", icon: "link", level: 95 },
      { name: "JWT / SSO", icon: "lock", level: 90 },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: "leaf", level: 92 },
      { name: "PostgreSQL", icon: "database", level: 85 },
      { name: "MySQL", icon: "database", level: 82 },
      { name: "Firebase", icon: "flame", level: 78 },
      { name: "Redis", icon: "zap", level: 75 },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS Lambda", icon: "cloud", level: 85 },
      { name: "CloudFront", icon: "cloud", level: 80 },
      { name: "AWS EC2", icon: "cloud", level: 82 },
      { name: "Docker", icon: "box", level: 85 },
      { name: "Git / CI/CD", icon: "git", level: 90 },
      { name: "Vercel", icon: "triangle", level: 92 },
    ],
  },
  {
    title: "Integrations & Automation",
    items: [
      { name: "Zapier", icon: "zap", level: 92 },
      { name: "Make", icon: "refresh", level: 88 },
      { name: "HubSpot", icon: "flame", level: 85 },
      { name: "Salesforce", icon: "cloud", level: 82 },
      { name: "Zoho", icon: "leaf", level: 80 },
      { name: "Webhooks", icon: "link", level: 92 },
      { name: "SMS Workflows", icon: "zap", level: 90 },
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

  // ── Frontend ──
  { name: "React",       slug: "react",               color: "61DAFB" },
  { name: "Next.js",     slug: "nextdotjs",           color: "000000", darkColor: "FFFFFF" },
  { name: "Tailwind",    slug: "tailwindcss",         color: "06B6D4" },
  { name: "Redux",       slug: "redux",               color: "764ABC" },

  // ── Backend ──
  { name: "Node.js",     slug: "nodedotjs",           color: "5FA04E" },
  { name: "Express",     slug: "express",             color: "000000", darkColor: "FFFFFF" },
  { name: "GraphQL",     slug: "graphql",             color: "E10098" },

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
// About — REAL bio with QuantumStack + integrations specialty
// ─────────────────────────────────────────────────────────────────────────────
export const about = {
  bio: [
    "I'm a Full-Stack Developer at QuantumStack, where I've shipped production apps across the full product lifecycle — designing RESTful APIs, managing SQL & NoSQL databases, containerizing services with Docker, and deploying to AWS (Lambda, ECS, EC2, CloudFront, API Gateway).",
    "I also specialize in third-party integrations and workflow automation — connecting apps with Zapier, Make, Salesforce, Zoho, and HubSpot. I build automated workflows like inbound-message triggers that fire actions (Send SMS, push notifications, CRM updates), so businesses scale customer communication without manual intervention.",
    "I don't just write features — I think about system design, performance, scalability, and developer experience. When something needs to ship fast and scale well, that's where I do my best work.",
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
    // Bold opener — same length as Education's tripleTrack so cards match height
    bold:
      "Building production apps at QuantumStack while simultaneously completing a CS degree. The same discipline that ships great software on time.",
    role: "Full-Stack Developer",
    company: "QuantumStack",
    period: "Current Role · Full-time",
  },
};
