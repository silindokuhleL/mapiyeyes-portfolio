"use client";

import {
  Bot,
  CheckCircle2,
  Cloud,
  CreditCard,
  ExternalLink,
  FileSearch,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { SectionShell } from "@/components/layout/section-shell";
import { buttonVariants } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { featuredProjectCaseStudies, projectHighlights } from "@/data/portfolio";
import { trackPortfolioEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const iconMap = {
  rocket: Rocket,
  cloud: Cloud,
  creditCard: CreditCard,
  shield: ShieldCheck,
};

const caseStudyIcons = [CreditCard, FileSearch, ShieldCheck, Bot, MonitorSmartphone];

export function ProjectsSection() {
  const [primaryCaseStudy, ...secondaryCaseStudies] = featuredProjectCaseStudies;

  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Real systems are highlighted through engineering outcomes, not demo theatrics."
      description="Each highlight is designed to communicate the type of product, platform, and delivery work that has shaped this portfolio."
      contentClassName="grid min-w-0 gap-8"
    >
      <div className="grid min-w-0 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projectHighlights.map((project) => {
          const Icon = iconMap[project.icon as keyof typeof iconMap];

          return (
            <Panel
              key={project.title}
              eyebrow={project.eyebrow}
              title={project.title}
              description={project.description}
            >
              <div className="space-y-5">
                <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-2 text-sm leading-7 text-slate-300">
                  {project.bullets?.map((bullet) => <p key={bullet}>{bullet}</p>)}
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/70 sm:tracking-[0.28em]">
                    Impact focus
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.metric}</p>
                </div>
              </div>
            </Panel>
          );
        })}
      </div>

      {primaryCaseStudy ? (
        <Panel
          eyebrow={primaryCaseStudy.eyebrow}
          title={primaryCaseStudy.title}
          description={primaryCaseStudy.summary}
        >
          <div className="grid min-w-0 gap-6">
            {primaryCaseStudy.screenshots?.length ? (
              <div className="grid min-w-0 gap-3 md:grid-cols-2 xl:grid-cols-4">
                {primaryCaseStudy.screenshots.map((screenshot) => (
                  <figure
                    key={screenshot.src}
                    className="group min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50"
                  >
                    <div className="relative aspect-[16/10] min-w-0 overflow-hidden bg-slate-950">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <figcaption className="space-y-2 p-4">
                      <p className="text-sm font-semibold text-white">{screenshot.label}</p>
                      <p className="text-xs leading-6 text-slate-300">{screenshot.detail}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : null}

            <div className="grid min-w-0 gap-6 xl:grid-cols-[0.85fr_1.15fr]">
              <div className="space-y-5">
                <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                  <CreditCard className="h-6 w-6" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {primaryCaseStudy.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/70 sm:tracking-[0.28em]">
                    My Role
                  </p>
                  <div className="mt-3 space-y-3">
                    {primaryCaseStudy.role.map((item) => (
                      <div key={item} className="grid grid-cols-[auto_1fr] gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 text-cyan-300" />
                        <p className="text-sm leading-7 text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-3 sm:flex sm:flex-wrap">
                  {primaryCaseStudy.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() =>
                        trackPortfolioEvent("project_repo_click", {
                          source: "projects_section",
                          project: primaryCaseStudy.title,
                          label: link.label,
                        })
                      }
                      className={cn(buttonVariants({ variant: "primary" }), "w-full sm:w-fit")}
                    >
                      {link.label}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid min-w-0 gap-4 lg:grid-cols-3 xl:grid-cols-1">
                <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/70 sm:tracking-[0.28em]">
                    Key Features
                  </p>
                  <div className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                    {primaryCaseStudy.features.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/70 sm:tracking-[0.28em]">
                    Technical Decisions
                  </p>
                  <div className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                    {primaryCaseStudy.decisions.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-amber-300/20 bg-amber-300/8 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200 sm:tracking-[0.28em]">
                    Proof Still Needed
                  </p>
                  <div className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                    {primaryCaseStudy.proofNeeded.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      ) : null}

      {secondaryCaseStudies.length ? (
        <div className="grid min-w-0 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {secondaryCaseStudies.map((caseStudy, index) => {
            const CaseStudyIcon = caseStudyIcons[index + 1] ?? Rocket;

            return (
              <Panel
                key={caseStudy.title}
                eyebrow={caseStudy.eyebrow}
                title={caseStudy.title}
                description={caseStudy.summary}
                className="h-full"
              >
                <div className="space-y-5">
                  <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                    <CaseStudyIcon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.stack.slice(0, 5).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2 text-sm leading-7 text-slate-300">
                    {caseStudy.features.slice(0, 3).map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                  <div className="grid gap-3">
                    {caseStudy.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() =>
                          trackPortfolioEvent("project_repo_click", {
                            source: "projects_section",
                            project: caseStudy.title,
                            label: link.label,
                          })
                        }
                        className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
                      >
                        {link.label}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </Panel>
            );
          })}
        </div>
      ) : null}
    </SectionShell>
  );
}
