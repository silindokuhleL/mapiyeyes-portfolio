"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { primaryNavigation, siteMetadata } from "@/data/site";
import { navigateToHash } from "@/lib/hash-navigation";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[rgba(5,8,22,0.75)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="min-w-0 flex-1 flex-col gap-1 lg:flex-none">
          <span className="block truncate text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/80 sm:text-sm sm:tracking-[0.3em]">
            {siteMetadata.shortName}
          </span>
          <span className="block truncate text-sm text-slate-300">{siteMetadata.role}</span>
        </a>
        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex shrink-0 items-center justify-center rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/40 hover:text-white lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <nav className="hidden items-center gap-2 text-sm text-slate-300 lg:flex">
          {primaryNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => navigateToHash(event, item.href)}
              className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-300/40 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-4 py-4 sm:px-6 lg:hidden">
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-300 sm:flex sm:flex-wrap">
            {primaryNavigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  setOpen(false);
                  navigateToHash(event, item.href);
                }}
                className="rounded-full border border-white/10 px-3 py-2 text-center transition hover:border-cyan-300/40 hover:text-white sm:px-4"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
