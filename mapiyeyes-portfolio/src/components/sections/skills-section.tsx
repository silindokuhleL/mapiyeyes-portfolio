"use client";

import dynamic from "next/dynamic";
import { Cloud, Code2, Gauge, Server } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Panel } from "@/components/ui/panel";
import { skillCategories, skillMetrics } from "@/data/portfolio";

const SkillsRadarChart = dynamic(
  () =>
    import("@/components/sections/skills-radar-chart").then(
      (module) => module.SkillsRadarChart,
    ),
  {
      ssr: false,
    loading: () => (
      <div className="flex h-[280px] items-center justify-center rounded-2xl border border-white/10 bg-slate-950/40 text-sm text-slate-400 sm:h-[360px] sm:rounded-3xl">
        Loading skills analytics...
      </div>
    ),
  },
);

const iconMap = {
  code: Code2,
  server: Server,
  cloud: Cloud,
};

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills Analytics"
      title="Breadth across frontend, backend, DevOps, and cloud-native delivery."
      description="The skills section combines visual breadth with the engineering priorities that shape how systems are designed, optimized, and shipped."
      contentClassName="grid min-w-0 gap-6 xl:grid-cols-[1.15fr_0.85fr]"
    >
      <Panel
        eyebrow="Radar Overview"
        title="A balanced profile across product engineering and delivery systems."
        description="The chart emphasizes how frontend, backend, DevOps, cloud, API, and delivery disciplines reinforce each other in production environments."
      >
        <div className="h-[280px] min-w-0 sm:h-[360px]">
          <SkillsRadarChart />
        </div>
      </Panel>
      <div className="grid gap-6">
        <div className="grid gap-6">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];

            return (
              <Panel
                key={category.title}
                eyebrow={category.eyebrow}
                title={category.title}
                description={category.description}
              >
                <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 leading-6 text-slate-400 sm:text-right">
                    {category.metric}
                  </div>
                </div>
              </Panel>
            );
          })}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
          {skillMetrics.map((metric) => (
            <Panel key={metric.label} className="h-full">
              <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/75">
                    {metric.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">{metric.value}</p>
                </div>
                <div className="inline-flex rounded-2xl border border-white/10 bg-slate-950/50 p-3 text-cyan-200">
                  <Gauge className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{metric.detail}</p>
            </Panel>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
