import { primaryNavigation, siteMetadata } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(5,8,22,0.75)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <a href="#home" className="flex flex-col gap-1">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
            {siteMetadata.shortName}
          </span>
          <span className="text-sm text-slate-300">{siteMetadata.role}</span>
        </a>
        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
          {primaryNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-300/40 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
