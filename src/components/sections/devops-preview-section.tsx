import { Boxes, Cloud, ShieldCheck, Workflow } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Panel } from "@/components/ui/panel";
import {
  devopsCapabilities,
  devopsMetrics,
  devopsWorkflow,
} from "@/data/portfolio";

const iconMap = {
  workflow: Workflow,
  boxes: Boxes,
  cloud: Cloud,
  shield: ShieldCheck,
};

export function DevOpsPreviewSection() {
  return (
    <SectionShell
      id="devops"
      eyebrow="DevOps"
      title="Infrastructure, automation, and platform thinking presented as delivery advantages."
      description="This section shows how CI/CD, cloud architecture, containerization, and server operations support reliable releases and scalable systems."
      contentClassName="grid min-w-0 gap-6 xl:grid-cols-[1.08fr_0.92fr]"
    >
      <div className="grid gap-6">
        <Panel
          eyebrow="Delivery Workflow"
          title="Release systems designed around repeatability, parity, and operational control."
          description="The DevOps story is framed as a lifecycle: automate the build path, validate early, package consistently, deploy intentionally, and support the runtime environment with real operational ownership."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {devopsWorkflow.map((step, index) => (
              <div
                key={step.stage}
                className="grid gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4 sm:grid-cols-[auto_1fr] sm:items-start sm:p-5"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-200">
                  {index + 1}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/70 sm:tracking-[0.28em]">
                    {step.stage}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {devopsMetrics.map((metric) => (
            <Panel key={metric.label} className="h-full">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/75 sm:tracking-[0.28em]">
                {metric.label}
              </p>
              <p className="mt-3 text-lg font-semibold text-white">{metric.value}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{metric.detail}</p>
            </Panel>
          ))}
        </div>
      </div>
      <div className="grid min-w-0 gap-6 md:grid-cols-2">
        {devopsCapabilities.map((capability) => {
          const Icon = iconMap[capability.icon as keyof typeof iconMap];

          return (
            <Panel
              key={capability.title}
              eyebrow={capability.eyebrow}
              title={capability.title}
              description={capability.description}
              className="h-full"
            >
              <div className="space-y-5">
                <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-2 text-sm leading-7 text-slate-300">
                  {capability.bullets?.map((bullet) => <p key={bullet}>{bullet}</p>)}
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/70 sm:tracking-[0.28em]">
                    Platform value
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{capability.metric}</p>
                </div>
              </div>
            </Panel>
          );
        })}
      </div>
    </SectionShell>
  );
}
