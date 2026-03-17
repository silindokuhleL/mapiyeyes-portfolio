import { Boxes, Network, Rocket } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Panel } from "@/components/ui/panel";
import { experiencePreviewCards } from "@/data/portfolio";

const iconMap = {
  rocket: Rocket,
  boxes: Boxes,
  network: Network,
};

export function ExperiencePreviewSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Experience framed around ownership, architecture, and measurable delivery impact."
      description="The full case-study transformation lands in Phase 4. This preview already establishes the narrative arc across product delivery, enterprise systems, and infrastructure depth."
    >
      {experiencePreviewCards.map((card) => {
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
              <p className="text-sm leading-7 text-slate-400">{card.metric}</p>
            </div>
          </Panel>
        );
      })}
    </SectionShell>
  );
}
