import { BrainCircuit, ShieldCheck, Workflow } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Panel } from "@/components/ui/panel";
import { aboutCards } from "@/data/portfolio";

const iconMap = {
  brain: BrainCircuit,
  workflow: Workflow,
  shield: ShieldCheck,
};

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Engineering with systems thinking, delivery discipline, and operational awareness."
      description="I bring together product engineering, backend architecture, and infrastructure thinking so software decisions remain valuable beyond the first release."
    >
      {aboutCards.map((card) => {
        const Icon = iconMap[card.icon as keyof typeof iconMap];

        return (
          <Panel
            key={card.title}
            eyebrow={card.eyebrow}
            title={card.title}
            description={card.description}
          >
            <div className="space-y-4">
              <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                <Icon className="h-5 w-5" />
              </div>
              <div className="space-y-3 text-sm leading-7 text-slate-300">
                {card.bullets?.map((bullet) => <p key={bullet}>{bullet}</p>)}
              </div>
            </div>
          </Panel>
        );
      })}
    </SectionShell>
  );
}
