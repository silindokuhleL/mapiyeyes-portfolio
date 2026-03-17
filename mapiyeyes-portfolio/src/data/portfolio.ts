export type IconKey =
  | "brain"
  | "workflow"
  | "shield"
  | "code"
  | "server"
  | "cloud"
  | "rocket"
  | "boxes"
  | "network"
  | "gauge"
  | "mail"
  | "linkedin"
  | "handshake";

export type MetricCard = {
  label: string;
  value: string;
  detail: string;
};

export type ContentCard = {
  eyebrow: string;
  title: string;
  description: string;
  icon: IconKey;
  bullets?: string[];
  metric?: string;
};

export type ContactMethod = {
  href: string;
  label: string;
  value: string;
  detail: string;
  icon: IconKey;
};

export type CaseStudy = {
  company: string;
  period: string;
  title: string;
  summary: string;
  stack: string[];
  challenge: string;
  execution: string[];
  outcomes: string[];
  metrics: MetricCard[];
  icon: IconKey;
};

export const heroHighlights = [
  "Scalable web platforms",
  "Cloud-aware architecture",
  "CI/CD and delivery automation",
];

export const heroStats: MetricCard[] = [
  {
    label: "Core stack",
    value: "Laravel, Next.js, Node.js",
    detail: "Balanced across application architecture, API design, and frontend delivery.",
  },
  {
    label: "Cloud and operations",
    value: "AWS, Docker, Jenkins",
    detail: "Focused on infrastructure decisions, environment consistency, and release confidence.",
  },
  {
    label: "Engineering lens",
    value: "Performance, scalability, reliability",
    detail: "Solutions are designed around maintainability and long-term delivery speed.",
  },
];

export const aboutCards: ContentCard[] = [
  {
    eyebrow: "Mindset",
    title: "I solve for systems, not isolated tickets.",
    description:
      "I approach product work by understanding business constraints, data flow, operational risks, and the long-term cost of implementation choices.",
    icon: "brain",
    bullets: [
      "Translate requirements into maintainable architecture",
      "Reduce delivery friction for future contributors",
      "Design with operational ownership in mind",
    ],
  },
  {
    eyebrow: "Execution",
    title: "Full-stack delivery backed by infrastructure awareness.",
    description:
      "From Laravel backends and Next.js interfaces to AWS deployment paths, I connect product delivery with the environments that keep systems reliable.",
    icon: "workflow",
    bullets: [
      "Application and API architecture",
      "Frontend systems with strong UX discipline",
      "Deployment-aware implementation decisions",
    ],
  },
  {
    eyebrow: "Impact",
    title: "Engineering decisions shaped by scale and team velocity.",
    description:
      "I prioritize patterns that improve release confidence, clarify system boundaries, and make complex products easier to evolve.",
    icon: "shield",
    bullets: [
      "Scalability-oriented architecture",
      "Operational resilience and observability mindset",
      "Mentorship and technical leadership",
    ],
  },
];

export const skillCategories: ContentCard[] = [
  {
    eyebrow: "Frontend",
    title: "React, Next.js, Vue, Nuxt",
    description:
      "Component systems, server rendering, modern UX implementation, and production-ready interfaces for high-signal digital products.",
    icon: "code",
    metric: "UI architecture and maintainability",
  },
  {
    eyebrow: "Backend",
    title: "Laravel, PHP, Node.js, REST APIs",
    description:
      "Robust application logic, service boundaries, database-aware implementation, and API integration patterns designed for reliability.",
    icon: "server",
    metric: "Performance-sensitive application flows",
  },
  {
    eyebrow: "DevOps",
    title: "AWS, Docker, Jenkins, servers",
    description:
      "Delivery pipelines, infrastructure topology, release automation, and environment management aligned to business continuity.",
    icon: "cloud",
    metric: "Deployment efficiency and platform resilience",
  },
];

export const skillRadar = {
  indicators: [
    { name: "Frontend", max: 100 },
    { name: "Backend", max: 100 },
    { name: "DevOps", max: 100 },
    { name: "Cloud", max: 100 },
    { name: "APIs", max: 100 },
    { name: "Delivery", max: 100 },
  ],
  values: [92, 95, 90, 88, 94, 91],
};

export const skillMetrics: MetricCard[] = [
  {
    label: "Performance improvements",
    value: "Optimization-led delivery",
    detail: "Application and API work is framed around throughput, maintainability, and reduced bottlenecks.",
  },
  {
    label: "System scalability",
    value: "Architecture for growth",
    detail: "Service boundaries, cloud topology, and deployment patterns are chosen with scale readiness in mind.",
  },
  {
    label: "Deployment efficiency",
    value: "Automation-first mindset",
    detail: "Release workflows are treated as product-critical systems rather than afterthoughts.",
  },
];

export const experiencePreviewCards: ContentCard[] = [
  {
    eyebrow: "Promilezi",
    title: "Full-stack ownership with architectural decision-making.",
    description:
      "Laravel, React, and Next.js delivery combined with API integration, system architecture thinking, and developer mentorship.",
    icon: "rocket",
    metric: "Scalable product delivery",
  },
  {
    eyebrow: "Worldwide Advisory Services",
    title: "Structured PHP systems work inside agile delivery cycles.",
    description:
      "Laravel and Blade implementation paired with practical collaboration from wireframing to production-ready execution.",
    icon: "boxes",
    metric: "Reliable implementation discipline",
  },
  {
    eyebrow: "Invoke Solutions and ICEP",
    title: "Infrastructure depth anchored by backend foundations.",
    description:
      "AWS, Docker, Jenkins, Linux and Windows server management, plus Node.js and database design fundamentals.",
    icon: "network",
    metric: "Cloud and backend breadth",
  },
];

export const devopsPreviewCards: ContentCard[] = [
  {
    eyebrow: "CI/CD",
    title: "Release pipelines built for confidence and repeatability.",
    description:
      "Jenkins-driven workflows will be expanded in Phase 5 to show how delivery automation improves speed and stability.",
    icon: "workflow",
  },
  {
    eyebrow: "Containers",
    title: "Docker used to improve parity and deployment consistency.",
    description:
      "The dedicated DevOps section will connect containerization to release quality, team velocity, and environment reliability.",
    icon: "boxes",
  },
  {
    eyebrow: "AWS",
    title: "Cloud services mapped to practical system requirements.",
    description:
      "EC2, ECS, S3, VPC, and CloudFront will be presented as architecture decisions that support product outcomes.",
    icon: "cloud",
  },
];

export const projectHighlights: ContentCard[] = [
  {
    eyebrow: "Platform Delivery",
    title: "Growth-oriented product systems with scalable full-stack foundations.",
    description:
      "Real-world application work across Laravel, React, and Next.js with API integration, maintainable structure, and systems-minded delivery.",
    icon: "rocket",
    bullets: [
      "End-to-end feature ownership",
      "Integration-ready backend architecture",
      "Maintainable frontend systems",
    ],
    metric: "Full-stack execution with scale in mind",
  },
  {
    eyebrow: "Operational Systems",
    title: "Deployment and infrastructure workflows that reduce release risk.",
    description:
      "Cloud and DevOps capability applied through AWS environments, Dockerized workflows, and automation-oriented delivery thinking.",
    icon: "cloud",
    bullets: [
      "Environment consistency",
      "Release workflow discipline",
      "Operational resilience focus",
    ],
    metric: "Deployment efficiency and system stability",
  },
  {
    eyebrow: "Enterprise Delivery",
    title: "Business-aligned engineering for established products and teams.",
    description:
      "Experience working across PHP systems, agile implementation rhythms, and communication-friendly engineering practices.",
    icon: "shield",
    bullets: [
      "Clear implementation workflows",
      "Wireframe-to-build continuity",
      "Maintainable product evolution",
    ],
    metric: "Reliable execution under delivery constraints",
  },
];

export const architectureLayers: ContentCard[] = [
  {
    eyebrow: "Experience Layer",
    title: "Frontend delivery focused on clarity, speed, and maintainability.",
    description:
      "Interfaces are structured to support usability, performance, and stable integration with backend systems.",
    icon: "code",
    bullets: ["Next.js and React applications", "Reusable UI systems", "Performance-aware rendering"],
  },
  {
    eyebrow: "Application Layer",
    title: "Backend services and APIs shaped by domain boundaries.",
    description:
      "Laravel and Node.js services are designed around explicit responsibilities, clear integration paths, and resilient business logic.",
    icon: "server",
    bullets: ["REST APIs and integrations", "Maintainable service logic", "Scalable application flows"],
  },
  {
    eyebrow: "Data and Throughput",
    title: "Persistence and performance tuned around real workloads.",
    description:
      "Databases, caches, and infrastructure choices are aligned to application behavior rather than added as generic complexity.",
    icon: "gauge",
    bullets: ["MySQL and Redis patterns", "Data access discipline", "Bottleneck-aware design"],
  },
  {
    eyebrow: "Delivery and Infrastructure",
    title: "Cloud and CI/CD systems that support safe, fast releases.",
    description:
      "AWS topology, Docker workflows, and Jenkins automation are treated as core product infrastructure.",
    icon: "network",
    bullets: ["AWS services mapping", "Containerized workflows", "Release automation and control"],
  },
];

export const contactMethods: ContactMethod[] = [
  {
    href: "mailto:silindokuhle@example.com",
    label: "Email",
    value: "silindokuhle@example.com",
    detail: "Best for recruiter outreach, role discussions, and direct engineering opportunities.",
    icon: "mail",
  },
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    value: "linkedin.com/in/silindokuhle-mapiyeye",
    detail: "Use LinkedIn for networking, recruiter outreach, and public professional context.",
    icon: "linkedin",
  },
  {
    href: "#contact",
    label: "Referrals",
    value: "Referral links to be finalized",
    detail: "Space reserved for recruiter referral channels or direct recommendation flows.",
    icon: "handshake",
  },
];
