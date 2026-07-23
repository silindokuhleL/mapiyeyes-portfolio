import { siteMetadata } from "@/data/site";

const footerLinks = [
  { href: "#experience", label: "Case Studies" },
  { href: "#devops", label: "DevOps" },
  { href: "#certifications", label: "AWS Path" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
            {siteMetadata.shortName}
          </p>
          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            {siteMetadata.tagline}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          {footerLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-300/40 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
