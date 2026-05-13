"use client";

import Image from "next/image";
import { ArrowRight, BriefcaseBusiness, Code2, FileText, ShieldCheck } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { buttonVariants } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";
import { siteMetadata } from "@/data/site";
import { trackPortfolioEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const profileProof = [
  {
    label: "Public Positioning",
    value: siteMetadata.role,
    detail: "A practical full-stack profile focused on SaaS systems, delivery depth, and production-minded implementation.",
    icon: BriefcaseBusiness,
  },
  {
    label: "Primary Work",
    value: "Laravel, Next.js, APIs",
    detail: "Backend-heavy product work with frontend delivery, integrations, queues, caching, RBAC, and deployment support.",
    icon: Code2,
  },
  {
    label: "Trust Signal",
    value: "Proof over decoration",
    detail: "The profile is being built around project evidence, case studies, GitHub cleanup, and a stronger CV.",
    icon: ShieldCheck,
  },
];

export function ProfileSection() {
  return (
    <SectionShell
      id="profile"
      eyebrow="Profile"
      title="A public developer profile built for trust, proof, and real conversations."
      description="This section connects the human profile with the technical story: what kind of work fits, what proof is being gathered, and how someone can take the next step."
      contentClassName="grid min-w-0 gap-6 lg:grid-cols-[0.8fr_1.2fr]"
    >
      <Panel className="h-full p-3 sm:p-4">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
          <Image
            src="/profile/silindokuhle-mapiyeye.jpg"
            alt="Silindokuhle Mapiyeye profile photo"
            fill
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="mt-5 space-y-2 px-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/75 sm:tracking-[0.28em]">
            Available Signal
          </p>
          <p className="text-sm leading-7 text-slate-300">
            Open to permanent-role conversations and focused contract or freelance work that fits around current commitments.
          </p>
        </div>
      </Panel>

      <div className="grid min-w-0 gap-6">
        <div className="grid gap-4 md:grid-cols-3">
          {profileProof.map((item) => {
            const Icon = item.icon;

            return (
              <Panel key={item.label} className="h-full">
                <div className="space-y-4">
                  <div className="inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/75">
                      {item.label}
                    </p>
                    <p className="text-lg font-semibold leading-snug text-white">{item.value}</p>
                    <p className="text-sm leading-7 text-slate-300">{item.detail}</p>
                  </div>
                </div>
              </Panel>
            );
          })}
        </div>

        <Panel
          eyebrow="Profile Assets"
          title="The CV is ready, and the portfolio will keep growing as more proof is added."
          description="The profile now has a downloadable CV. The next credibility jump is adding more project proof: screenshots, repositories, live links, architecture notes, and outcomes."
        >
          <div className="grid gap-3 sm:flex sm:flex-wrap">
            <a
              href="/cv/Silindokuhle-Mapiyeye-CV.pdf"
              download
              onClick={() =>
                trackPortfolioEvent("cv_download", {
                  source: "profile_section",
                  label: "Download CV",
                })
              }
              className={cn(buttonVariants({ variant: "primary" }), "w-full sm:w-auto")}
            >
              Download CV
              <FileText className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className={cn(buttonVariants({ variant: "secondary" }), "w-full sm:w-auto")}
            >
              Review Projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Panel>
      </div>
    </SectionShell>
  );
}
