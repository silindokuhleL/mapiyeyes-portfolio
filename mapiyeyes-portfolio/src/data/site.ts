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
  role: "Full Stack & DevOps Engineer",
  tagline:
    "Building scalable products, resilient infrastructure, and delivery systems that move teams faster.",
  description:
    "Portfolio of Silindokuhle Lammack Mapiyeye, a Full Stack & DevOps Engineer specializing in Laravel, Node.js, React, Next.js, AWS, Docker, Jenkins, and scalable systems.",
};

export const primaryNavigation: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#devops", label: "DevOps" },
  { href: "#projects", label: "Projects" },
  { href: "#architecture", label: "Architecture" },
  { href: "#contact", label: "Contact" },
];

export const contactLinks: ContactLink[] = [
  { href: "mailto:silindokuhle@example.com", label: "Email" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "#contact", label: "Referral Links" },
];
