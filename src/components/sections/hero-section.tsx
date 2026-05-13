"use client";

import { ArrowRight, Cloud, Code2, Workflow } from "lucide-react";
import { HeroEntrance } from "@/components/motion/hero-entrance";
import { buttonVariants } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { heroHighlights, heroStats } from "@/data/portfolio";
import { siteMetadata } from "@/data/site";
import { trackPortfolioEvent } from "@/lib/analytics";
import { navigateToHash } from "@/lib/hash-navigation";
import { cn } from "@/lib/utils";

const highlightIcons = [Code2, Cloud, Workflow] as const;

export function HeroSection() {
  return (
    <section id="home" className="hero-shell border-b border-white/10">
      <HeroEntrance className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[calc(100svh-81px)] lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-20">
        <div className="relative z-10 flex flex-col gap-8">
          <div data-hero-animate className="inline-flex max-w-full items-start gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs leading-6 text-cyan-100 sm:w-fit sm:items-center sm:text-sm">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300 sm:mt-0" />
            <span>Laravel, Next.js, SaaS systems, integrations, and cloud delivery</span>
          </div>
          <div data-hero-animate className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 sm:text-sm sm:tracking-[0.32em]">
              {siteMetadata.name}
            </p>
            <h1 className="max-w-4xl text-[clamp(2.45rem,11vw,4.5rem)] font-semibold leading-[1.04] text-white">
              {siteMetadata.role}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              {siteMetadata.tagline}
            </p>
          </div>
          <div data-hero-animate className="grid gap-3 sm:flex sm:flex-wrap">
            <a
              href="#experience"
              onClick={(event) => navigateToHash(event, "#experience")}
              className={cn(buttonVariants({ variant: "primary" }), "w-full sm:w-auto")}
            >
              View Case Studies
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              onClick={(event) => {
                trackPortfolioEvent("contact_click", {
                  source: "hero_section",
                  method: "contact_anchor",
                  label: "Connect Now",
                });
                navigateToHash(event, "#contact");
              }}
              className={cn(buttonVariants({ variant: "secondary" }), "w-full sm:w-auto")}
            >
              Connect Now
            </a>
          </div>
          <div data-hero-animate className="grid gap-3 md:grid-cols-3">
            {heroHighlights.map((highlight, index) => {
              const Icon = highlightIcons[index];

              return (
                <div
                  key={highlight}
                  className="rounded-2xl border border-white/10 bg-white/3 p-4 text-sm text-slate-300"
                >
                  <Icon className="h-5 w-5 text-cyan-300" />
                  <p className="mt-3 leading-6">{highlight}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div data-hero-animate className="relative z-10 flex min-w-0 items-center">
          <Panel className="w-full bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(15,23,42,0.68))]">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/75 sm:tracking-[0.28em]">
                  Engineering Depth
                </p>
                <h2 className="text-xl font-semibold leading-snug text-white sm:text-2xl lg:text-3xl">
                  Product engineering, backend architecture, and deployment maturity in one portfolio.
                </h2>
                <p className="text-sm leading-7 text-slate-300 sm:text-base">
                  The portfolio is structured to show Laravel/Next.js delivery, API design, RBAC, integrations, queues, cloud operations, and practical proof through real projects.
                </p>
              </div>
              <div className="grid gap-4">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/70">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{stat.detail}</p>
                  </div>
                ))}
              </div>
              <a
                href="#architecture"
                onClick={(event) => navigateToHash(event, "#architecture")}
                className={cn(buttonVariants({ variant: "ghost" }), "items-center text-cyan-200")}
              >
                Explore SaaS systems focus
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Panel>
        </div>
      </HeroEntrance>
    </section>
  );
}
