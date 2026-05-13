import { Cloud, Code2, Gauge, Server } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Panel } from "@/components/ui/panel";
import { architectureLayers } from "@/data/portfolio";

const iconMap = {
  code: Code2,
  server: Server,
  gauge: Gauge,
  network: Cloud,
};

export function ArchitectureSection() {
  return (
    <SectionShell
      id="architecture"
      eyebrow="Architecture"
      title="System design is presented as a practical communication skill."
      description="The section maps how experience layers, backend services, data concerns, and delivery infrastructure fit together to support maintainable software systems."
      contentClassName="grid min-w-0 gap-6 lg:grid-cols-2"
    >
      {architectureLayers.map((layer) => {
        const Icon = iconMap[layer.icon as keyof typeof iconMap];

        return (
          <Panel
            key={layer.title}
            eyebrow={layer.eyebrow}
            title={layer.title}
            description={layer.description}
          >
            <div className="space-y-5">
              <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                <Icon className="h-5 w-5" />
              </div>
              <div className="space-y-2 text-sm leading-7 text-slate-300">
                {layer.bullets?.map((bullet) => <p key={bullet}>{bullet}</p>)}
              </div>
            </div>
          </Panel>
        );
      })}
    </SectionShell>
  );
}
