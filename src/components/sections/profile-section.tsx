"use client";

import Image from "next/image";
import { ArrowRight, BriefcaseBusiness, Code2, MessageCircle, ShieldCheck } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { buttonVariants } from "@/components/ui/button";
import { CvDownloadLink } from "@/components/ui/cv-download-link";
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
    detail: "Verified case studies, public repositories, a current CV, and direct contact paths make the work easy to inspect.",
    icon: ShieldCheck,
  },
];

export function ProfileSection() {
  return (
    <SectionShell
      id="profile"
      eyebrow="Profile"
      title="A clear view of the engineering value I bring to your project."
      description="See where I fit, inspect the work behind the claims, and choose the fastest way to start a conversation."
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
          title="Verified project proof and a current CV are ready to review."
          description="Explore the case studies and public repositories, download the latest CV, or start a project conversation directly."
        >
          <div className="grid gap-3 sm:flex sm:flex-wrap">
            <CvDownloadLink source="profile_section" className="w-full sm:w-auto" />
            <a
              href={siteMetadata.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackPortfolioEvent("contact_click", {
                  source: "profile_section",
                  method: "whatsapp",
                  label: "Chat on WhatsApp",
                })
              }
              className={cn(buttonVariants({ variant: "secondary" }), "w-full sm:w-auto")}
            >
              Chat on WhatsApp
              <MessageCircle className="h-4 w-4" />
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
