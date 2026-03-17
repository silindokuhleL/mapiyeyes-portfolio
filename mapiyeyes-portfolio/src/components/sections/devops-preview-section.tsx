import { Boxes, Cloud, Workflow } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Panel } from "@/components/ui/panel";
import { devopsPreviewCards } from "@/data/portfolio";

const iconMap = {
  workflow: Workflow,
  boxes: Boxes,
  cloud: Cloud,
};

export function DevOpsPreviewSection() {
  return (
    <SectionShell
      id="devops"
      eyebrow="DevOps"
      title="Infrastructure and deployment are treated as first-class engineering concerns."
      description="This preview sets the foundation for the dedicated DevOps showcase in Phase 5, where pipelines, Docker workflows, AWS architecture, and deployment strategy will be expanded in depth."
    >
      {devopsPreviewCards.map((card) => {
        const Icon = iconMap[card.icon as keyof typeof iconMap];

        return (
          <Panel
            key={card.title}
            eyebrow={card.eyebrow}
            title={card.title}
            description={card.description}
          >
            <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
              <Icon className="h-5 w-5" />
            </div>
          </Panel>
        );
      })}
    </SectionShell>
  );
}
