import { Cloud, Rocket, ShieldCheck } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Panel } from "@/components/ui/panel";
import { projectHighlights } from "@/data/portfolio";

const iconMap = {
  rocket: Rocket,
  cloud: Cloud,
  shield: ShieldCheck,
};

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Real systems are highlighted through engineering outcomes, not demo theatrics."
      description="Each highlight is designed to communicate the type of product, platform, and delivery work that has shaped this portfolio."
    >
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
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/70">
                  Impact focus
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.metric}</p>
              </div>
            </div>
          </Panel>
        );
      })}
    </SectionShell>
  );
}
