import { siteMetadata } from "./site";

export type IconKey =
  | "brain"
  | "workflow"
  | "shield"
  | "code"
  | "server"
  | "cloud"
  | "creditCard"
  | "rocket"
  | "boxes"
  | "network"
  | "gauge"
  | "mail"
  | "linkedin"
  | "message"
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

export type WorkflowStep = {
  stage: string;
  detail: string;
};

export type CertificationStatus = "earned" | "in-progress" | "planned";

export type CertificationPathItem = {
  stage: string;
  name: string;
  examCode: string;
  status: CertificationStatus;
  badge: string;
  href: string;
  detail: string;
};

export type ProjectCaseStudy = {
  eyebrow: string;
  title: string;
  summary: string;
  links: {
    label: string;
    href: string;
  }[];
  screenshots?: {
    src: string;
    alt: string;
    label: string;
    detail: string;
  }[];
  role: string[];
  stack: string[];
  features: string[];
  decisions: string[];
  proofLabel?: string;
  proofNeeded: string[];
};

export const heroHighlights = [
  "Laravel and Next.js SaaS systems",
  "APIs, auth, RBAC, payments, AI",
  "AWS Certified Cloud Practitioner",
];

export const heroStats: MetricCard[] = [
  {
    label: "Core stack",
    value: "Laravel, Next.js, TypeScript",
    detail: "Focused on SaaS features, API design, product workflows, and frontend delivery.",
  },
  {
    label: "Product depth",
    value: "RBAC, payments, AI, queues",
    detail: "Backend-heavy features shaped around real SaaS workflows and maintainable delivery.",
  },
  {
    label: "Cloud and operations",
    value: "AWS CCP, DVA-C02 in progress",
    detail: "Cloud decisions are backed by certification progress, release confidence, monitoring, and production support.",
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
      "From Laravel backends and Next.js interfaces to AWS deployment paths, I connect product delivery with the environments that keep systems reliable. I am AWS Certified Cloud Practitioner and preparing for AWS Certified Developer - Associate.",
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

export const experienceCaseStudies: CaseStudy[] = [
  {
    company: "Promilezi",
    period: "2024–Present",
    title: "Leading full-stack delivery while shaping architecture for scalable product growth.",
    summary:
      "Built and evolved product systems across Laravel, React, and Next.js while contributing to infrastructure decisions, API integration strategy, and developer mentorship.",
    stack: ["Laravel", "React", "Next.js", "APIs", "Architecture"],
    challenge:
      "Deliver product functionality quickly without compromising maintainability, integration flexibility, or the long-term scalability of the platform.",
    execution: [
      "Implemented full-stack features across frontend and backend surfaces.",
      "Contributed to architecture decisions that improved extensibility and ownership clarity.",
      "Worked through API integration challenges with an emphasis on stable, scalable application flows.",
      "Supported team capability through mentoring and reinforcement of sound engineering patterns.",
    ],
    outcomes: [
      "Stronger alignment between product delivery and technical architecture.",
      "Greater confidence in scaling feature work across a growing system surface area.",
      "Better maintainability through architecture-conscious implementation and team guidance.",
    ],
    metrics: [
      {
        label: "Architecture impact",
        value: "Scalability-oriented decisions",
        detail: "Technical choices were framed around extensibility and system growth readiness.",
      },
      {
        label: "Delivery value",
        value: "End-to-end feature ownership",
        detail: "Frontend, backend, and integration concerns were handled as one coherent delivery stream.",
      },
      {
        label: "Leadership signal",
        value: "Mentorship and guidance",
        detail: "Developer support reinforced consistency and implementation quality across the team.",
      },
    ],
    icon: "rocket",
  },
  {
    company: "Worldwide Advisory Services",
    period: "2023–2024",
    title: "Delivering maintainable PHP systems inside structured agile workflows.",
    summary:
      "Worked on Laravel and Blade-driven systems with an emphasis on disciplined delivery, practical collaboration, and continuity from wireframes to implementation.",
    stack: ["PHP", "Laravel", "Blade", "Agile", "Balsamiq"],
    challenge:
      "Maintain delivery speed and implementation quality inside an established product environment where clarity, iteration discipline, and collaboration mattered.",
    execution: [
      "Built and maintained features in Laravel and Blade-based product flows.",
      "Worked within agile delivery rhythms to move requirements into production-ready implementations.",
      "Used wireframes and planning artifacts to reduce ambiguity before development effort was committed.",
      "Focused on pragmatic, maintainable system improvements rather than one-off solutions.",
    ],
    outcomes: [
      "Improved continuity from planning to production implementation.",
      "Reduced delivery friction through clearer translation of UI intent into maintainable code.",
      "Supported more predictable execution inside a collaborative product workflow.",
    ],
    metrics: [
      {
        label: "Implementation quality",
        value: "Maintainable PHP delivery",
        detail: "Systems work stayed grounded in practical patterns suitable for continued evolution.",
      },
      {
        label: "Workflow value",
        value: "Wireframe-to-build continuity",
        detail: "Planning fidelity helped reduce wasted iteration during implementation.",
      },
      {
        label: "Team fit",
        value: "Agile execution discipline",
        detail: "Delivery aligned well with structured product collaboration and iteration cycles.",
      },
    ],
    icon: "boxes",
  },
  {
    company: "Invoke Solutions",
    period: "2021–2022",
    title: "Owning hybrid full-stack and DevOps responsibilities across cloud infrastructure and delivery automation.",
    summary:
      "Worked across application delivery and operational systems using AWS, Docker, Jenkins, and hands-on server management for Linux and Windows environments.",
    stack: ["AWS", "Docker", "Jenkins", "Linux", "Windows", "DevOps"],
    challenge:
      "Bridge the gap between shipping application code and maintaining reliable cloud infrastructure, deployment workflows, and environment consistency.",
    execution: [
      "Contributed to AWS infrastructure across EC2, ECS, S3, VPC, and related deployment concerns.",
      "Used Docker to improve consistency between environments and support repeatable delivery workflows.",
      "Built and maintained Jenkins-based CI/CD processes for safer, more efficient releases.",
      "Handled server management responsibilities across both Linux and Windows systems.",
    ],
    outcomes: [
      "Improved release consistency by treating deployment workflows as core engineering systems.",
      "Strengthened environment reliability through automation-oriented operational practices.",
      "Expanded full-stack capability through direct infrastructure ownership.",
    ],
    metrics: [
      {
        label: "Deployment efficiency",
        value: "Automation-first workflows",
        detail: "CI/CD processes reduced release friction and improved repeatability.",
      },
      {
        label: "Infrastructure scope",
        value: "AWS-backed operational ownership",
        detail: "Cloud decisions were connected directly to deployment and runtime needs.",
      },
      {
        label: "Platform resilience",
        value: "Environment consistency",
        detail: "Docker and server operations improved confidence across delivery environments.",
      },
    ],
    icon: "cloud",
  },
  {
    company: "ICEP",
    period: "2020",
    title: "Building backend fundamentals through API development and data design.",
    summary:
      "Focused on Node.js backend development, REST APIs, and database design, establishing the service-oriented foundation that later expanded into full-stack and DevOps breadth.",
    stack: ["Node.js", "REST APIs", "Database Design"],
    challenge:
      "Build reliable backend services with clean data modeling and practical API design in a way that supported future extensibility.",
    execution: [
      "Developed Node.js backend functionality with emphasis on clear service responsibilities.",
      "Implemented REST API patterns suitable for application integration and maintainability.",
      "Worked on database design choices that supported stable data flows and application logic.",
    ],
    outcomes: [
      "Established strong backend fundamentals that informed later architectural work.",
      "Built practical experience in clean API design and service boundaries.",
      "Strengthened understanding of how data design affects application reliability.",
    ],
    metrics: [
      {
        label: "Backend foundation",
        value: "API-first development",
        detail: "RESTful thinking shaped how services were modeled and integrated.",
      },
      {
        label: "Data discipline",
        value: "Structured database design",
        detail: "Data modeling choices supported cleaner application behavior and maintenance.",
      },
      {
        label: "Career leverage",
        value: "Foundation for broader systems work",
        detail: "Early backend depth became a platform for later full-stack and DevOps capability.",
      },
    ],
    icon: "server",
  },
];

export const devopsCapabilities: ContentCard[] = [
  {
    eyebrow: "CI/CD",
    title: "Pipelines designed for repeatable, lower-risk releases.",
    description:
      "Jenkins-based automation is positioned as a delivery system that reduces manual friction and improves release confidence.",
    icon: "workflow",
    bullets: [
      "Automated build and deployment flow",
      "Release consistency across environments",
      "Safer iteration with clearer operational control",
    ],
    metric: "Delivery speed backed by process reliability",
  },
  {
    eyebrow: "Containers",
    title: "Docker workflows that improve parity and deployment readiness.",
    description:
      "Containerization is used to reduce environment drift and support predictable handoff from development into runtime environments.",
    icon: "boxes",
    bullets: [
      "Environment consistency",
      "Cleaner packaging for deployments",
      "Reduced setup friction across systems",
    ],
    metric: "Platform consistency across build and runtime stages",
  },
  {
    eyebrow: "Cloud",
    title: "AWS services mapped to concrete application and delivery needs.",
    description:
      "Cloud decisions are framed around system requirements using EC2, ECS, S3, VPC, and CloudFront as practical infrastructure building blocks, strengthened by AWS Cloud Practitioner certification and Developer Associate preparation.",
    icon: "cloud",
    bullets: [
      "Infrastructure topology aligned to workloads",
      "Scalable deployment surfaces",
      "Operational design tied to product outcomes",
    ],
    metric: "Architecture choices grounded in real platform needs",
  },
  {
    eyebrow: "Operations",
    title: "Hands-on Linux and Windows server stewardship.",
    description:
      "Operational ownership extends beyond provisioning into environment management, runtime reliability, and practical troubleshooting across server platforms.",
    icon: "shield",
    bullets: [
      "Cross-platform server administration",
      "Operational issue resolution",
      "Reliability-minded environment management",
    ],
    metric: "Practical ownership of live infrastructure concerns",
  },
];

export const devopsWorkflow: WorkflowStep[] = [
  {
    stage: "Build",
    detail: "Turn application changes into repeatable artifacts through structured automation and disciplined packaging.",
  },
  {
    stage: "Validate",
    detail: "Use pipeline checks and environment consistency to reduce avoidable release issues before deployment.",
  },
  {
    stage: "Package",
    detail: "Use Docker-driven packaging to improve parity and simplify movement across environments.",
  },
  {
    stage: "Deploy",
    detail: "Ship through AWS-aware infrastructure decisions that support scalability, reach, and operational control.",
  },
  {
    stage: "Operate",
    detail: "Support systems through server management, troubleshooting, and a reliability-first operations mindset.",
  },
];

export const devopsMetrics: MetricCard[] = [
  {
    label: "Release confidence",
    value: "Automation-backed delivery",
    detail: "Pipelines reduce manual risk and make deployment behavior more predictable.",
  },
  {
    label: "Environment parity",
    value: "Container-driven consistency",
    detail: "Docker helps align development and runtime expectations more closely.",
  },
  {
    label: "Infrastructure alignment",
    value: "AWS certified foundation",
    detail: "AWS services are framed as architecture decisions, backed by Cloud Practitioner certification and DVA-C02 preparation.",
  },
];

export const certificationPath: CertificationPathItem[] = [
  {
    stage: "Cloud foundation",
    name: "AWS Certified Cloud Practitioner",
    examCode: "CLF-C02",
    status: "earned",
    badge: "/certifications/aws-certified-cloud-practitioner.png",
    href: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    detail:
      "Validates foundational AWS cloud, security, architecture, billing, and support knowledge.",
  },
  {
    stage: "Application development",
    name: "AWS Certified Developer - Associate",
    examCode: "DVA-C02",
    status: "in-progress",
    badge: "/certifications/aws-certified-developer-associate.png",
    href: "https://aws.amazon.com/certification/certified-developer-associate/",
    detail:
      "Deepens practical skill in developing, deploying, securing, and troubleshooting AWS applications.",
  },
  {
    stage: "Delivery and operations",
    name: "AWS Certified DevOps Engineer - Professional",
    examCode: "DOP-C02",
    status: "planned",
    badge: "/certifications/aws-certified-devops-engineer-professional.png",
    href: "https://aws.amazon.com/certification/certified-devops-engineer-professional/",
    detail:
      "Builds advanced capability in CI/CD, observability, resilient systems, and automated operations.",
  },
  {
    stage: "Production machine learning",
    name: "AWS Certified Machine Learning Engineer - Associate",
    examCode: "MLA-C01",
    status: "planned",
    badge: "/certifications/aws-certified-machine-learning-engineer-associate.png",
    href: "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    detail:
      "Extends the path into implementing, deploying, and maintaining production machine learning solutions.",
  },
  {
    stage: "Cloud security",
    name: "AWS Certified Security - Specialty",
    examCode: "SCS-C03",
    status: "planned",
    badge: "/certifications/aws-certified-security-specialty.png",
    href: "https://aws.amazon.com/certification/certified-security-specialty/",
    detail:
      "Completes the roadmap with deeper protection of AWS workloads, data, identities, and applications.",
  },
];

export const projectHighlights: ContentCard[] = [
  {
    eyebrow: "Beauty Salon Management",
    title: "Business SaaS platform with Paystack payments, RBAC, multi-tenancy, and salon workflows.",
    description:
      "A major full-stack proof project for salon operations, tenant-aware workflows, Paystack payment integration, Spatie-powered access control, and management dashboards.",
    icon: "creditCard",
    bullets: [
      "Booking payment flow, wallet payments, cash tracking, product sales, and refunds",
      "Spatie Permission, tenant-scoped users, and admin/provider operations",
      "Lead proof of commercial SaaS architecture across customer, staff, owner, and super-admin workflows",
    ],
    metric: "Primary project proof asset for SaaS, payments, RBAC, and multi-tenant operations",
  },
  {
    eyebrow: "Document Search Portal",
    title: "Full-stack document search with parsing, search relevance, caching, and UX.",
    description:
      "A PHP and Angular document search application with PDF/TXT upload, MySQL FULLTEXT search, fallback matching, suggestions, highlighting, pagination, and cached results.",
    icon: "rocket",
    bullets: [
      "REST API with focused backend services",
      "PDF/TXT parsing and searchable document content",
      "Search suggestions, highlighting, caching, and responsive states",
    ],
    metric: "Second proof asset after the salon SaaS platform",
  },
  {
    eyebrow: "Risk Management / RBAC",
    title: "Laravel API and Next.js workflow for auth, roles, permissions, and risk systems.",
    description:
      "A verified Laravel API and Next.js platform with protected risk, control, action-plan, and dashboard workflows for role-aware users.",
    icon: "shield",
    bullets: [
      "Sanctum authentication with seeded admin and super-admin permission differences",
      "Service-layer APIs, resources, migrations, seeders, and feature tests",
      "Browser-verified risk, control, action-plan, and dashboard pages",
    ],
    metric: "Verified technical proof for Laravel APIs, RBAC, protected workflows, and Next.js integration",
  },
];

export const featuredProjectCaseStudies: ProjectCaseStudy[] = [
  {
    eyebrow: "Featured Case Study",
    title: "Beauty Salon Management Platform",
    summary:
      "A multi-tenant SaaS platform for beauty salons with customer booking, RBAC, provider approval, payments, product sales, staff leave, reporting, and role-specific dashboards.",
    links: [
      {
        label: "Frontend Repo",
        href: "https://github.com/silindokuhleL/beauty-salon-management-frontend-public",
      },
      {
        label: "Backend Repo",
        href: "https://github.com/silindokuhleL/beauty-salon-management-backend-public",
      },
    ],
    screenshots: [
      {
        src: "/projects/beauty-salon/provider-approval.png",
        alt: "Beauty Salon Management Platform provider approval dashboard",
        label: "Provider Approval",
        detail: "Super-admin provider review with pending, approved, rejected, and suspended counts.",
      },
      {
        src: "/projects/beauty-salon/booking-confirmation.png",
        alt: "Beauty Salon Management Platform booking confirmation screen",
        label: "Booking Confirmation",
        detail: "Confirmed booking reference with customer, salon, service, date, time, and status.",
      },
      {
        src: "/projects/beauty-salon/product-sales.png",
        alt: "Beauty Salon Management Platform product sales point of sale screen",
        label: "Product Sales",
        detail: "Tenant-scoped POS products, sales totals, cart state, and safe product image fallbacks.",
      },
      {
        src: "/projects/beauty-salon/services-marketplace-browser.png",
        alt: "Beauty Salon Management Platform customer services marketplace",
        label: "Marketplace",
        detail: "Customer-facing promotions, services, discounts, imagery, favorites, and booking CTAs.",
      },
      {
        src: "/projects/beauty-salon/user-permissions.png",
        alt: "Beauty Salon Management Platform user management screen",
        label: "Users & RBAC",
        detail: "Owner user management and role-aware staff/admin access proof.",
      },
      {
        src: "/projects/beauty-salon/mobile-customer-products.png",
        alt: "Beauty Salon Management Platform mobile customer products screen",
        label: "Mobile Product Flow",
        detail: "Customer product route verified at 390px with no horizontal overflow.",
      },
    ],
    role: [
      "Designed, implemented, verified, and packaged the project proof for portfolio use.",
      "Built frontend product surfaces across public, customer, staff, owner/admin, and super-admin workflows.",
      "Verified Laravel API behavior for booking, payments, products, staff leave, provider approval, role scopes, and seeded demo data.",
      "Published sanitized public proof repositories after keeping the original backend history private for secret-safety reasons.",
    ],
    stack: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Laravel 12",
      "Sanctum",
      "Spatie Permission",
      "Paystack",
      "Multi-tenancy",
      "API Integration",
      "FullCalendar",
      "ECharts",
      "SWR",
    ],
    features: [
      "Customer booking flows with available slots, staff assignment, booking references, and confirmation screens.",
      "Paystack card-payment initialization and verification, plus wallet and cash payment flows.",
      "Product marketplace, inventory management, product sales, purchase history, and refund paths.",
      "Role-aware admin, customer, staff, and super-admin dashboards with protected navigation.",
      "Tenant profile, provider approval, staff leave, reviews, rewards, referrals, reporting, and global search modules.",
      "Responsive customer views verified at 390px mobile width.",
    ],
    decisions: [
      "Lead the project section with this platform because it shows commercial SaaS depth across money movement, operations, access control, and tenant-aware data.",
      "Used Laravel Sanctum for API authentication and Spatie Permission for roles and permission checks.",
      "Modeled tenant ownership through tenant IDs, tenant profile routes, provider approval workflows, and tenant-scoped backend queries.",
      "Separated card, wallet, and cash payment behavior so booking confirmation can match the payment method's real-world flow.",
      "Used clean public proof repositories instead of exposing original backend history that contained an old test-key risk.",
    ],
    proofLabel: "Verified Proof",
    proofNeeded: [
      "Browser logged in as Owner, Customer, and Super Admin and confirmed role-specific navigation.",
      "Frontend lint/build passed in both original and clean public proof repositories.",
      "Targeted backend workflow tests passed across booking, payments, product sales, provider approval, staff leave, and role scopes.",
      "Selected screenshots are committed into the public frontend proof README.",
    ],
  },
  {
    eyebrow: "Featured Case Study",
    title: "Document Search Portal",
    summary:
      "A full-stack document search application for uploading PDF/TXT files, parsing document content, and returning useful search results with suggestions, highlighting, pagination, and cached responses.",
    links: [
      {
        label: "View GitHub Repo",
        href: "https://github.com/silindokuhleL/document-search-portal",
      },
    ],
    role: [
      "Designed and built the backend API structure.",
      "Implemented document upload, parsing, search, suggestions, highlighting, and caching workflows.",
      "Built or integrated the Angular search and document management interface.",
    ],
    stack: [
      "PHP",
      "MySQL / MariaDB",
      "REST API",
      "Angular",
      "TypeScript",
      "Angular Material",
      "RxJS",
      "PDF Parser",
      "Caching",
    ],
    features: [
      "PDF/TXT upload and content extraction.",
      "MySQL FULLTEXT search with LIKE fallback for short queries.",
      "Search suggestions, highlighted result context, pagination, and sorting.",
      "Debounced frontend search and responsive document-management states.",
    ],
    decisions: [
      "Separated backend behavior into focused storage, parsing, search, cache, routing, and response responsibilities.",
      "Used FULLTEXT search for relevance while keeping fallback matching for shorter queries.",
      "Cached search results to reduce repeated expensive search work.",
      "Used debounced frontend search to reduce unnecessary API calls.",
    ],
    proofLabel: "Verified Proof",
    proofNeeded: [
      "Repository README includes upload, document list, search suggestion, and highlighted-result screenshots.",
      "Local verification log records upload, parsing, search, caching, and responsive frontend checks.",
      "Public case-study and architecture notes explain the backend responsibilities and search decisions.",
    ],
  },
  {
    eyebrow: "Featured Case Study",
    title: "Risk Management / RBAC Platform",
    summary:
      "A Laravel API and Next.js frontend proof project for authentication, protected workflows, roles, permissions, risk registers, controls, action plans, and dashboard summaries.",
    links: [
      {
        label: "Frontend Repo",
        href: "https://github.com/silindokuhleL/risk-management-front-end-next",
      },
      {
        label: "Backend Repo",
        href: "https://github.com/silindokuhleL/risk-management-backend-api",
      },
    ],
    role: [
      "Created and verified protected Laravel API workflows for risks, controls, action plans, and dashboard summaries.",
      "Connected the Next.js frontend to the Laravel API with Sanctum authentication and role-aware navigation.",
      "Packaged the project as public proof with READMEs, screenshots, seeded data, feature tests, and verified GitHub links.",
    ],
    stack: [
      "Laravel",
      "PHP",
      "Laravel Breeze API",
      "Sanctum",
      "Next.js",
      "React",
      "REST API",
      "Roles",
      "Permissions",
      "Spatie Permission",
      "PHPUnit",
    ],
    features: [
      "Authentication flow between Laravel API and Next.js frontend.",
      "Protected route workflow for authenticated product screens.",
      "Seeded roles and permissions for admin and super-admin proof.",
      "Risk register, control register, action-plan, and dashboard-summary workflows.",
      "Frontend/backend split that supports SaaS-style admin workflows.",
    ],
    decisions: [
      "Separated API backend and frontend client so each side can be documented and improved independently.",
      "Used Laravel Sanctum and Spatie Permission as the backend integration surface.",
      "Positioned roles and permissions as the core proof story rather than treating the project as a generic CRUD app.",
      "Used service classes, API resources, migrations, seeders, and feature tests to keep the backend proof explainable.",
    ],
    proofLabel: "Verified Proof",
    proofNeeded: [
      "Browser verified seeded admin and super-admin login flows.",
      "Browser verified risk, control, action-plan, and dashboard summary pages against the Laravel API.",
      "Backend feature tests cover protected risk, control, action-plan, and dashboard summary endpoints.",
      "Repository was renamed to `risk-management-backend-api` and public links were updated.",
    ],
  },
  {
    eyebrow: "Proof Candidate",
    title: "Prosuite Chatbot Hackathon",
    summary:
      "A Next.js chatbot hackathon project exploring AI-assisted workflows, product-support interactions, and guided prompt/response experiences.",
    links: [
      {
        label: "View GitHub Repo",
        href: "https://github.com/silindokuhleL/prosuite-chatbot-hackathon",
      },
    ],
    role: [
      "Created the chatbot project as a product experimentation and hackathon proof asset.",
      "Worked on the chatbot-style interface and prompt/response workflow direction.",
      "Positioned the project around AI-assisted support and guided product interactions.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Chatbot UI",
      "AI Workflow Exploration",
      "Product Support Flow",
    ],
    features: [
      "Chatbot-style user interface for guided interactions.",
      "User prompt and response flow for support or product-help scenarios.",
      "AI workflow exploration suitable for a hackathon prototype.",
      "Public proof candidate for AI-assisted product experimentation.",
    ],
    decisions: [
      "Framed AI as an intentional user-facing workflow rather than a hidden technical add-on.",
      "Kept the proof story focused on product support and guided responses until provider details are confirmed.",
      "Used the hackathon context as a discovery surface for AI feature ideas and interface behavior.",
    ],
    proofNeeded: [
      "Confirm the exact AI provider, model, and integration approach.",
      "Define the problem statement, target user, and complete chatbot flow.",
      "Replace the default README with setup steps, screenshots, demo notes, and hackathon context.",
    ],
  },
  {
    eyebrow: "Live Portfolio Proof",
    title: "Personal Developer Portfolio",
    summary:
      "A Next.js portfolio system built to position Silindokuhle as a Full-Stack SaaS Engineer, collect project proof, and support future contract/freelance opportunities.",
    links: [
      {
        label: "Live Site",
        href: "https://mapiyeyes-portfolio.vercel.app",
      },
      {
        label: "View GitHub Repo",
        href: "https://github.com/silindokuhleL/mapiyeyes-portfolio",
      },
    ],
    role: [
      "Designed and built the portfolio as a public proof system rather than a static personal page.",
      "Structured content around skills, experience, DevOps capability, project proof, contact paths, and CV delivery.",
      "Created a mobile-responsive presentation layer for verified case studies, public repositories, and direct client contact.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Lucide Icons",
      "ECharts",
      "Framer Motion",
      "Playwright QA",
    ],
    features: [
      "One-page portfolio with hash navigation, profile snapshot, skills visualization, experience, projects, architecture, and contact sections.",
      "Reusable data-driven project proof cards that can expand as screenshots, metrics, and live demos become available.",
      "Responsive layout and anchor behavior verified on mobile viewport sizes.",
      "Direct downloadable CV PDF linked from the profile and contact sections.",
    ],
    decisions: [
      "Used a structured content model so CV, LinkedIn, GitHub, and portfolio messaging can stay aligned.",
      "Separated verified evidence from optional future polish so public claims remain accurate.",
      "Prioritized mobile responsiveness because recruiters and clients may view the profile from phones.",
    ],
    proofLabel: "Verified Proof",
    proofNeeded: [
      "Live production URL includes case studies, public repositories, WhatsApp, email, and current CV access.",
      "Vercel Analytics records production page and contact events.",
      "Responsive layout, anchor navigation, and CV download behavior are verified in production.",
    ],
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
      "AWS topology, Docker workflows, and Jenkins automation are treated as core product infrastructure, supported by AWS Cloud Practitioner certification and Developer Associate study.",
    icon: "network",
    bullets: ["AWS services mapping", "Containerized workflows", "Release automation and control"],
  },
];

export const contactMethods: ContactMethod[] = [
  {
    href: "mailto:slmapiyeye@gmail.com",
    label: "Email",
    value: "slmapiyeye@gmail.com",
    detail: "Best for recruiter outreach, contract conversations, and direct engineering opportunities.",
    icon: "mail",
  },
  {
    href: "https://www.linkedin.com/in/silindokuhle-mapiyeye",
    label: "LinkedIn",
    value: "linkedin.com/in/silindokuhle-mapiyeye",
    detail: "Use LinkedIn for networking, recruiter outreach, contract conversations, and public professional context.",
    icon: "linkedin",
  },
  {
    href: siteMetadata.whatsapp.href,
    label: "WhatsApp",
    value: siteMetadata.whatsapp.display,
    detail: "Best for quick project questions, availability checks, and fast follow-up conversations.",
    icon: "message",
  },
  {
    href: "https://github.com/silindokuhleL",
    label: "GitHub",
    value: "github.com/silindokuhleL",
    detail: "Public repositories, case-study candidates, and project proof for Laravel, Next.js, API, and SaaS work.",
    icon: "handshake",
  },
];
