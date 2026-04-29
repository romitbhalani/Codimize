// ── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Pricing", "Contact"];

// ── Services ─────────────────────────────────────────────────
export const SERVICES = [
  {
    icon: "◈",
    title: "Web Development",
    desc: "Enterprise-grade apps in React, Angular, Node.js, and .NET. Pixel-perfect UIs built to international standards.",
    tags: ["React", "Angular", "Node.js", ".NET"],
    color: "#6366f1",
    rgb: "99,102,241",
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
    color: "#a78bfa",
    rgb: "167,139,250",
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
    accent: "#6366f1",
    rgb: "99,102,241",
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
    accent: "#a78bfa",
    rgb: "167,139,250",
  },
];

// ── Testimonials ─────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "James Whitfield",
    role: "CTO, VaultHQ",
    loc: "London, UK",
    av: "JW",
    color: "#6366f1",
    rgb: "99,102,241",
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

// ── Pricing ───────────────────────────────────────────────────
export const PRICING = [
  {
    name: "Starter",
    price: "$3,500",
    period: "/mo",
    desc: "Perfect for early-stage startups validating ideas fast.",
    features: [
      "Up to 2 developers",
      "1 project sprint",
      "React or Node.js dev",
      "Weekly delivery updates",
      "Slack communication",
      "Basic QA & testing",
    ],
    cta: "Get Started",
    accent: "#6366f1",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$8,500",
    period: "/mo",
    desc: "For scaling startups and SMEs that need reliable delivery.",
    features: [
      "4–6 developers + PM",
      "Full-stack development",
      "AI/ML integration",
      "CI/CD pipeline setup",
      "Dedicated Slack channel",
      "Bi-weekly stakeholder calls",
      "Advanced QA & automation",
    ],
    cta: "Book a Call",
    accent: "#a78bfa",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Bespoke teams for complex, long-term product development.",
    features: [
      "Dedicated team (8–20 devs)",
      "Embedded PM & Architect",
      "SLA-backed delivery",
      "Security audits & compliance",
      "24/7 on-call support",
      "Quarterly business reviews",
      "IP & NDA protection",
    ],
    cta: "Contact Us",
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
  { icon: "◷",  value: "Mon–Sat · 9am–8pm IST",      label: "Office Hours"         },
  { icon: "◎",  value: "30-min free discovery call",  label: "Book a Call"          },
];
