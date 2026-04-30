// ── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Careers", "Contact"];

// ── Services ─────────────────────────────────────────────────
export const SERVICES = [
  {
    icon: "◈",
    title: "Web Development",
    desc: "Enterprise-grade apps in React, Angular, Node.js, and .NET. Pixel-perfect UIs built to international standards.",
    tags: ["React", "Angular", "Node.js", ".NET"],
    color: "#0096FF",
    rgb: "0,150,255",
  },
  {
    icon: "⬡",
    title: "SaaS Product Development",
    desc: "End-to-end SaaS platforms from MVP to scale — multi-tenant architecture, billing, analytics, and beyond.",
    tags: ["MVP", "Multi-tenant", "Stripe", "Scalable"],
    color: "#06b6d4",
    rgb: "6,182,212",
  },
  {
    icon: "◎",
    title: "AI-Powered Solutions",
    desc: "LLM integrations, RAG pipelines, AI agents, and intelligent automation that keeps you ahead of the curve.",
    tags: ["GPT-4", "LangChain", "RAG", "Agents"],
    color: "#38BEFF",
    rgb: "56,190,255",
  },
  {
    icon: "▦",
    title: "Enterprise Applications",
    desc: "Scalable, secure, and compliant enterprise systems. ERP, CRM, and custom workflow automation.",
    tags: ["ERP", "CRM", "APIs", "Cloud"],
    color: "#34d399",
    rgb: "52,211,153",
  },
  {
    icon: "☁",
    title: "Cloud & DevOps",
    desc: "AWS/GCP/Azure architecture, CI/CD pipelines, containerisation, and infrastructure as code.",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    color: "#fbbf24",
    rgb: "251,191,36",
  },
  {
    icon: "◷",
    title: "24/7 Support & Maintenance",
    desc: "Round-the-clock monitoring, proactive maintenance, and dedicated engineers in your timezone.",
    tags: ["SLA", "Monitoring", "Uptime", "Hotfixes"],
    color: "#f87171",
    rgb: "248,113,113",
  },
];

// ── Portfolio ─────────────────────────────────────────────────
export const PORTFOLIO = [
  {
    title: "FinTrack Pro",
    category: "SaaS · FinTech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    desc: "Multi-tenant B2B SaaS platform for UK accounting firms. 400+ firms onboarded in 6 months.",
    metrics: ["£2.4M ARR", "400+ clients", "99.97% uptime"],
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    accent: "#0096FF",
    rgb: "0,150,255",
  },
  {
    title: "MedAI Assist",
    category: "AI · Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    desc: "LLM-powered clinical documentation tool for US hospitals that cuts charting time by 67%.",
    metrics: ["67% time saved", "120 hospitals", "HIPAA compliant"],
    stack: ["Python", "OpenAI", "React", "Azure"],
    accent: "#06b6d4",
    rgb: "6,182,212",
  },
  {
    title: "ShipEase Platform",
    category: "Enterprise · Logistics",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=80",
    desc: "Real-time logistics orchestration for a Canadian e-commerce giant handling 50k+ orders/day.",
    metrics: ["50k orders/day", "38% cost cut", "Real-time tracking"],
    stack: ["Angular", ".NET", "Redis", "GCP"],
    accent: "#34d399",
    rgb: "52,211,153",
  },
  {
    title: "LegalEdge AI",
    category: "AI · Legal Tech",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80",
    desc: "Contract analysis and risk scoring platform for US law firms using RAG and GPT-4.",
    metrics: ["80% faster review", "500+ firms", "SOC2 certified"],
    stack: ["Python", "LangChain", "React", "AWS"],
    accent: "#38BEFF",
    rgb: "56,190,255",
  },
];

// ── Testimonials ─────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "James Whitfield",
    role: "CTO, VaultHQ",
    loc: "London, UK",
    av: "JW",
    color: "#0096FF",
    rgb: "0,150,255",
    quote:
      "Codimize delivered our entire SaaS platform in 11 weeks — on spec, on budget, and with zero compromise on quality. Their engineers are world-class and communication is flawless.",
  },
  {
    name: "Sarah Connell",
    role: "Founder, Pulse Analytics",
    loc: "San Francisco, US",
    av: "SC",
    color: "#06b6d4",
    rgb: "6,182,212",
    quote:
      "We needed AI features fast. Codimize shipped a production-ready RAG pipeline in 3 weeks that our internal team estimated at 6 months. Genuinely impressive velocity.",
  },
  {
    name: "Michael Torres",
    role: "VP Engineering, FreightBase",
    loc: "Toronto, CA",
    av: "MT",
    color: "#34d399",
    rgb: "52,211,153",
    quote:
      "The team's understanding of enterprise architecture is exceptional. They scaled our platform from 1k to 50k daily orders without a single incident. Highest recommendation.",
  },
];


export const CAREERS = [
  {
    title: "Senior Full-Stack Engineer",
    desc: "Build customer-facing products and internal tooling across React, Node.js, and cloud infrastructure.",
    type: "Remote / Hybrid",
    location: "Global (US/UK overlap)",
    responsibilities: [
      "Lead product development from discovery to launch.",
      "Design scalable front-end and back-end architecture.",
      "Mentor engineers and improve code quality.",
      "Collaborate directly with founders and cross-functional teams.",
    ],
    cta: "Apply Now",
    accent: "#0096FF",
    highlight: true,
  },
  {
    title: "Full-Stack Developer",
    desc: "Ship full-stack product features in React, Node.js, and cloud-native environments.",
    type: "Full-time",
    location: "Remote",
    responsibilities: [
      "Build and maintain modern web applications.",
      "Implement APIs, databases, and user interfaces.",
      "Collaborate with designers, PMs, and QA.",
      "Own feature delivery end to end.",
    ],
    cta: "Apply Now",
    accent: "#38bdf8",
    highlight: true,
  },
  {
    title: "Backend Engineer",
    desc: "Develop scalable services, APIs, and data systems for high-growth SaaS platforms.",
    type: "Full-time",
    location: "Remote / US overlap",
    responsibilities: [
      "Design robust server-side architecture.",
      "Build production-grade APIs and integrations.",
      "Optimize performance and reliability.",
      "Partner with front-end and product teams.",
    ],
    cta: "Apply Now",
    accent: "#38BEFF",
    highlight: true,
  },
  {
    title: "AI / ML Product Engineer",
    desc: "Create intelligent features, NLP pipelines, and automation for enterprise-grade SaaS products.",
    type: "Full-time",
    location: "Remote",
    responsibilities: [
      "Build ML-driven product experiences and workflows.",
      "Integrate large language models and data systems.",
      "Optimize models for reliability and performance.",
      "Work closely with product and engineering leadership.",
    ],
    cta: "Apply Now",
    accent: "#38BEFF",
    highlight: false,
  },
  {
    title: "Product Design Lead",
    desc: "Shape user experiences for high-growth SaaS and enterprise platforms.",
    type: "Flexible",
    location: "Remote / EMEA preferred",
    responsibilities: [
      "Own design direction across web and mobile interfaces.",
      "Run user research, prototypes, and usability reviews.",
      "Collaborate with engineering and go-to-market teams.",
      "Help define brand and product positioning.",
    ],
    cta: "Apply Now",
    accent: "#06b6d4",
    highlight: false,
  },
];

// ── Tech Stack ────────────────────────────────────────────────
const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
export const TECH_STACK = [
  { name: "React",      icon: `${DI}/react/react-original.svg`,                                color: "#61DAFB" },
  { name: "Angular",    icon: `${DI}/angularjs/angularjs-original.svg`,                        color: "#DD0031" },
  { name: "Node.js",    icon: `${DI}/nodejs/nodejs-original.svg`,                              color: "#339933" },
  { name: "Python",     icon: `${DI}/python/python-original.svg`,                              color: "#3776AB" },
  { name: ".NET",       icon: `${DI}/dotnetcore/dotnetcore-original.svg`,                      color: "#512BD4" },
  { name: "AWS",        icon: `${DI}/amazonwebservices/amazonwebservices-original-wordmark.svg`, color: "#FF9900" },
  { name: "OpenAI",     icon: null,                                                             color: "#10A37F" },
  { name: "PostgreSQL", icon: `${DI}/postgresql/postgresql-original.svg`,                      color: "#4169E1" },
  { name: "Docker",     icon: `${DI}/docker/docker-original.svg`,                              color: "#2496ED" },
  { name: "Kubernetes", icon: `${DI}/kubernetes/kubernetes-plain.svg`,                         color: "#326CE5" },
  { name: "TypeScript", icon: `${DI}/typescript/typescript-original.svg`,                      color: "#3178C6" },
  { name: "Redis",      icon: `${DI}/redis/redis-original.svg`,                                color: "#DC382D" },
  { name: "GCP",        icon: `${DI}/googlecloud/googlecloud-original.svg`,                    color: "#4285F4" },
  { name: "Azure",      icon: `${DI}/azure/azure-original.svg`,                                color: "#0078D4" },
  { name: "LangChain",  icon: null,                                                             color: "#84CC16" },
  { name: "FastAPI",    icon: `${DI}/fastapi/fastapi-original.svg`,                            color: "#009688" },
];

// ── Company Stats ─────────────────────────────────────────────
export const STATS = [
  { number: "50+", label: "Projects Shipped" },
  { number: "5+",  label: "Years Building"   },
  { number: "30+", label: "Engineers"        },
  { number: "3",   label: "Continents Served"},
];

// ── Contact Info ──────────────────────────────────────────────
export const CONTACT_INFO = [
  { icon: "✉",  value: "hello@codimize.io",          label: "Email Us"             },
  { icon: "◷",  value: "Mon–Fri · 24 Hours",      label: "Office Hours"         },
  { icon: "◎",  value: "30-min free discovery call",  label: "Book a Call"          },
];
