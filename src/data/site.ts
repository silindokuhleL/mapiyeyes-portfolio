export type NavItem = {
  href: string;
  label: string;
};

export type ContactLink = {
  href: string;
  label: string;
};

export const siteMetadata = {
  name: "Silindokuhle Lammack Mapiyeye",
  shortName: "Silindokuhle Mapiyeye",
  role: "Full-Stack SaaS Engineer",
  tagline:
    "Building Laravel and Next.js systems with strong backend foundations: APIs, auth, RBAC, integrations, payments, AI workflows, queues, caching, and cloud deployments.",
  description:
    "Portfolio of Silindokuhle Lammack Mapiyeye, a Full-Stack SaaS Engineer specializing in Laravel, Next.js, REST APIs, RBAC, payments, AI integrations, queues, caching, AWS, Docker, and cloud deployments.",
};

export const primaryNavigation: NavItem[] = [
  { href: "#profile", label: "Profile" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#devops", label: "DevOps" },
  { href: "#projects", label: "Projects" },
  { href: "#architecture", label: "Architecture" },
  { href: "#contact", label: "Contact" },
];

export const contactLinks: ContactLink[] = [
  { href: "mailto:slmapiyeye@gmail.com", label: "Email" },
  { href: "https://www.linkedin.com/in/silindokuhle-mapiyeye-developer", label: "LinkedIn" },
  { href: "https://github.com/silindokuhleL", label: "GitHub" },
];
