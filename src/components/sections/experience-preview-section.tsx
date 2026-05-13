import { Boxes, Cloud, Rocket, Server } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Panel } from "@/components/ui/panel";
import { experienceCaseStudies } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap = {
  rocket: Rocket,
  boxes: Boxes,
  cloud: Cloud,
  server: Server,
};

export function ExperiencePreviewSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Case studies that show how engineering decisions translate into delivery, scale, and operational value."
      description="Each role is framed around context, execution, and impact so recruiters and hiring managers can quickly see both technical depth and ownership scope."
      contentClassName="grid min-w-0 gap-6 sm:gap-8 xl:grid-cols-2"
    >
      {experienceCaseStudies.map((study) => {
        const Icon = iconMap[study.icon as keyof typeof iconMap];

        return (
          <Panel
            key={study.company}
            eyebrow={study.company}
            title={study.title}
            description={study.summary}
            className="h-full"
          >
            <div className="grid min-w-0 gap-6">
              <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
                  <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="w-fit rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 sm:justify-self-end sm:tracking-[0.26em]">
                    {study.period}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/70">
                    Challenge
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{study.challenge}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-slate-950/40 p-5"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/70">
                        {metric.label}
                      </p>
                      <p className="mt-3 text-base font-semibold text-white">{metric.value}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{metric.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/3 p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/70 sm:tracking-[0.28em]">
                    Execution
                  </p>
                  <div className="mt-4 space-y-3">
                    {study.execution.map((item) => (
                      <div key={item} className="grid grid-cols-[auto_1fr] gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                        <p className="min-w-0 text-sm leading-7 text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/3 p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/70 sm:tracking-[0.28em]">
                    Outcome Framing
                  </p>
                  <div className="mt-4 space-y-3">
                    {study.outcomes.map((item) => (
                      <div key={item} className="grid grid-cols-[auto_1fr] gap-3">
                        <span
                          className={cn(
                            "mt-1.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-xs font-semibold text-cyan-200",
                          )}
                        >
                          +
                        </span>
                        <p className="min-w-0 text-sm leading-7 text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Panel>
        );
      })}
    </SectionShell>
  );
}
