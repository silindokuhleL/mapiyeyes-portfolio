import { ArrowRight, Handshake, Linkedin, Mail } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { buttonVariants } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { contactMethods } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap = {
  mail: Mail,
  linkedin: Linkedin,
  handshake: Handshake,
};

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Designed to convert recruiter interest into a real conversation."
      description="Use the direct contact paths below. External URLs and referral destinations can be finalized further as the portfolio content is refined."
      contentClassName="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
    >
      <Panel
        eyebrow="Let’s Connect"
        title="Open to opportunities that value engineering depth across product and platform."
        description="This portfolio is built to show full-stack execution, cloud infrastructure awareness, and delivery maturity in one place."
      >
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/70">
                Best fit
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Senior full-stack, platform, or DevOps-oriented engineering roles.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/70">
                Value focus
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Scalable systems, release confidence, maintainable architecture, and delivery acceleration.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/70">
                Availability
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Ready for recruiter conversations, engineering leadership discussions, and referral-driven outreach.
              </p>
            </div>
          </div>
          <a href="mailto:silindokuhle@example.com" className={cn(buttonVariants({ variant: "primary" }), "w-fit")}>
            Start the conversation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Panel>
      <div className="grid gap-6">
        {contactMethods.map((method) => {
          const Icon = iconMap[method.icon as keyof typeof iconMap];
          const isExternal = method.href.startsWith("http") || method.href.startsWith("mailto:");

          return (
            <a
              key={method.label}
              href={method.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
            >
              <Panel className="h-full transition hover:border-cyan-300/30 hover:bg-white/[0.06]">
                <div className="flex items-start gap-4">
                  <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/75">
                      {method.label}
                    </p>
                    <p className="text-lg font-semibold text-white">{method.value}</p>
                    <p className="text-sm leading-7 text-slate-300">{method.detail}</p>
                  </div>
                </div>
              </Panel>
            </a>
          );
        })}
      </div>
    </SectionShell>
  );
}
