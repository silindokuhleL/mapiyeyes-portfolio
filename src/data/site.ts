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
  url: "https://mapiyeyes-portfolio.vercel.app",
  availability:
    "Currently available for freelance SaaS builds, Laravel APIs, dashboards, payment workflows, and Next.js product interfaces.",
  tagline:
    "I help businesses build production-ready SaaS platforms with Laravel, Next.js, APIs, RBAC, payments, dashboards, and cloud deployment.",
  description:
    "Hire Silindokuhle Mapiyeye for production-ready Laravel and Next.js SaaS platforms, REST APIs, RBAC, payment workflows, dashboards, AWS, Docker, and cloud deployment.",
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
  { href: "https://www.linkedin.com/in/silindokuhle-mapiyeye", label: "LinkedIn" },
  { href: "https://github.com/silindokuhleL", label: "GitHub" },
];
