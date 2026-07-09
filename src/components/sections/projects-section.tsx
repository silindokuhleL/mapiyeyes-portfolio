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
import { useMemo, useState } from "react";
import { SectionShell } from "@/components/layout/section-shell";
import { buttonVariants } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import {
  featuredProjectCaseStudies,
  projectHighlights,
  type ProjectCaseStudy,
} from "@/data/portfolio";
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
  const [selectedProjectTitle, setSelectedProjectTitle] = useState(
    primaryCaseStudy?.title ?? featuredProjectCaseStudies[0]?.title ?? "",
  );
  const selectedCaseStudy = useMemo(
    () =>
      featuredProjectCaseStudies.find(
        (caseStudy) => caseStudy.title === selectedProjectTitle,
      ) ?? featuredProjectCaseStudies[0],
    [selectedProjectTitle],
  );

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
                    {primaryCaseStudy.proofLabel ?? "Proof Still Needed"}
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

      {selectedCaseStudy ? (
        <Panel
          eyebrow="Case Study Explorer"
          title="Open a project and inspect the proof behind it."
          description="Use this panel to compare role, stack, build decisions, proof status, and links without leaving the portfolio."
        >
          <div className="grid min-w-0 gap-6 xl:grid-cols-[0.85fr_1.15fr]">
            <div className="grid min-w-0 gap-3">
              {featuredProjectCaseStudies.map((caseStudy) => {
                const isSelected = caseStudy.title === selectedCaseStudy.title;

                return (
                  <button
                    key={caseStudy.title}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => {
                      setSelectedProjectTitle(caseStudy.title);
                      trackPortfolioEvent("project_case_study_select", {
                        source: "projects_section",
                        project: caseStudy.title,
                      });
                    }}
                    className={cn(
                      "min-w-0 rounded-2xl border p-4 text-left transition",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70",
                      isSelected
                        ? "border-cyan-300/45 bg-cyan-300/10"
                        : "border-white/10 bg-white/3 hover:border-cyan-300/25 hover:bg-white/5",
                    )}
                  >
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/75 sm:tracking-[0.28em]">
                      {caseStudy.eyebrow}
                    </span>
                    <span className="mt-2 block text-base font-semibold leading-snug text-white">
                      {caseStudy.title}
                    </span>
                    <span className="mt-2 line-clamp-2 block text-sm leading-6 text-slate-300">
                      {caseStudy.summary}
                    </span>
                  </button>
                );
              })}
            </div>

            <CaseStudyDetail caseStudy={selectedCaseStudy} />
          </div>
        </Panel>
      ) : null}
    </SectionShell>
  );
}

function CaseStudyDetail({ caseStudy }: { caseStudy: ProjectCaseStudy }) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/10 bg-slate-950/40 p-4 sm:p-5">
      <div className="grid min-w-0 gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/75 sm:tracking-[0.28em]">
            Selected Project
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
            {caseStudy.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{caseStudy.summary}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {caseStudy.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs font-medium text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="grid min-w-0 gap-4 lg:grid-cols-2">
          <ProofBlock title="My Role" items={caseStudy.role} />
          <ProofBlock title="Key Features" items={caseStudy.features} />
          <ProofBlock title="Technical Decisions" items={caseStudy.decisions} />
          <ProofBlock
            title={caseStudy.proofLabel ?? "Proof Status"}
            items={caseStudy.proofNeeded}
            tone="proof"
          />
        </div>

        <div className="grid gap-3 sm:flex sm:flex-wrap">
          {caseStudy.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackPortfolioEvent("project_repo_click", {
                  source: "case_study_explorer",
                  project: caseStudy.title,
                  label: link.label,
                })
              }
              className={cn(buttonVariants({ variant: "secondary" }), "w-full sm:w-fit")}
            >
              {link.label}
              <ExternalLink className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProofBlock({
  items,
  title,
  tone = "default",
}: {
  items: string[];
  title: string;
  tone?: "default" | "proof";
}) {
  return (
    <div
      className={cn(
        "min-w-0 rounded-2xl border p-4",
        tone === "proof"
          ? "border-emerald-300/20 bg-emerald-300/8"
          : "border-white/10 bg-white/3",
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.18em] sm:tracking-[0.28em]",
          tone === "proof" ? "text-emerald-200" : "text-cyan-300/75",
        )}
      >
        {title}
      </p>
      <div className="mt-3 space-y-3">
        {items.map((item) => (
          <div key={item} className="grid grid-cols-[auto_1fr] gap-3">
            <CheckCircle2
              className={cn(
                "mt-1 h-4 w-4",
                tone === "proof" ? "text-emerald-300" : "text-cyan-300",
              )}
            />
            <p className="text-sm leading-7 text-slate-300">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
