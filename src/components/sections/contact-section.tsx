"use client";

import { ArrowRight, FileText, Handshake, Linkedin, Mail } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { buttonVariants } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { contactMethods } from "@/data/portfolio";
import { trackPortfolioEvent } from "@/lib/analytics";
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
      title="Designed to turn interest into a real engineering conversation."
      description="Use the direct contact paths below for roles, contract work, freelance conversations, or Laravel/Next.js SaaS implementation support."
      contentClassName="grid min-w-0 gap-6 lg:grid-cols-[1.05fr_0.95fr]"
    >
      <Panel
        eyebrow="Let’s Connect"
        title="Open to SaaS engineering, contract, and freelance conversations."
        description="This portfolio is built to show Laravel/Next.js execution, backend-heavy product engineering, integrations, deployment maturity, and practical proof."
      >
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/70 sm:tracking-[0.28em]">
                Best fit
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Full-stack SaaS, Laravel/Next.js, API, integration, RBAC, payments, AI, and deployment work.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/70 sm:tracking-[0.28em]">
                Value focus
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Maintainable APIs, useful product workflows, release confidence, and clear handover.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/70 sm:tracking-[0.28em]">
                Availability
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Permanent role conversations plus focused contract/freelance work that fits around current commitments.
              </p>
            </div>
          </div>
          <a
            href="mailto:slmapiyeye@gmail.com"
            onClick={() =>
              trackPortfolioEvent("contact_click", {
                source: "contact_section",
                method: "email",
                label: "Start the conversation",
              })
            }
            className={cn(buttonVariants({ variant: "primary" }), "w-full sm:w-fit")}
          >
            Start the conversation
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/cv/Silindokuhle-Mapiyeye-CV.pdf"
            download
            onClick={() =>
              trackPortfolioEvent("cv_download", {
                source: "contact_section",
                label: "Download CV",
              })
            }
            className={cn(buttonVariants({ variant: "secondary" }), "w-full sm:w-fit")}
          >
            Download CV
            <FileText className="h-4 w-4" />
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
              onClick={() =>
                trackPortfolioEvent("contact_click", {
                  source: "contact_method_card",
                  method: method.label.toLowerCase(),
                  label: method.label,
                })
              }
            >
              <Panel className="h-full transition hover:border-cyan-300/30 hover:bg-white/6">
                <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
                  <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/75 sm:tracking-[0.28em]">
                      {method.label}
                    </p>
                    <p className="break-words text-base font-semibold text-white sm:text-lg">
                      {method.value}
                    </p>
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
