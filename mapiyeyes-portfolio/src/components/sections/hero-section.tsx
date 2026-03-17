import { ArrowRight, Cloud, Code2, Workflow } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { heroHighlights, heroStats } from "@/data/portfolio";
import { siteMetadata } from "@/data/site";
import { cn } from "@/lib/utils";

const highlightIcons = [Code2, Cloud, Workflow] as const;

export function HeroSection() {
  return (
    <section id="home" className="hero-shell border-b border-white/10">
      <div className="mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-32">
        <div className="relative z-10 flex flex-col justify-center gap-8">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Building scalable systems across product and infrastructure
          </div>
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">
              {siteMetadata.name}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {siteMetadata.role}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              {siteMetadata.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#experience" className={buttonVariants({ variant: "primary" })}>
              View Case Studies
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className={buttonVariants({ variant: "secondary" })}>
              Connect Now
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {heroHighlights.map((highlight, index) => {
              const Icon = highlightIcons[index];

              return (
                <div
                  key={highlight}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300"
                >
                  <Icon className="h-5 w-5 text-cyan-300" />
                  <p className="mt-3 leading-6">{highlight}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative z-10 flex items-center">
          <Panel className="w-full bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(15,23,42,0.68))]">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/75">
                  Engineering Depth
                </p>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Product engineering, architecture, and DevOps presented as one coherent capability.
                </h2>
                <p className="text-sm leading-7 text-slate-300 sm:text-base">
                  The portfolio is structured to show how application delivery, cloud infrastructure, and release workflows reinforce each other in production systems.
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
                className={cn(buttonVariants({ variant: "ghost" }), "items-center text-cyan-200")}
              >
                Explore system design focus
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}
