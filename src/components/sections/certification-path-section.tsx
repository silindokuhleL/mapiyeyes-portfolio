import Image from "next/image";
import {
  CheckCircle2,
  Clock3,
  ExternalLink,
  LoaderCircle,
} from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import {
  certificationPath,
  type CertificationStatus,
} from "@/data/portfolio";

const statusConfig: Record<
  CertificationStatus,
  {
    label: string;
    Icon: typeof CheckCircle2;
    className: string;
    cardClassName: string;
  }
> = {
  earned: {
    label: "Earned",
    Icon: CheckCircle2,
    className: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
    cardClassName: "border-emerald-300/35 bg-emerald-300/5",
  },
  "in-progress": {
    label: "In progress",
    Icon: LoaderCircle,
    className: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
    cardClassName: "border-cyan-300/35 bg-cyan-300/5",
  },
  planned: {
    label: "Planned",
    Icon: Clock3,
    className: "border-white/15 bg-white/5 text-slate-300",
    cardClassName: "border-white/10 bg-white/3",
  },
};

export function CertificationPathSection() {
  return (
    <SectionShell
      id="certifications"
      eyebrow="AWS certification roadmap"
      title="A deliberate path from cloud foundations to development, DevOps, machine learning, and security."
      description="The roadmap follows the work I want to own: build AWS applications first, automate and operate them reliably, add production machine learning capability, then deepen cloud security."
      contentClassName="min-w-0 space-y-6"
    >
      <div className="flex flex-wrap gap-2" aria-label="Certification status legend">
        {(Object.keys(statusConfig) as CertificationStatus[]).map((status) => {
          const config = statusConfig[status];
          const Icon = config.Icon;

          return (
            <span
              key={status}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${config.className}`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {config.label}
            </span>
          );
        })}
      </div>

      <div className="grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {certificationPath.map((certification, index) => {
          const config = statusConfig[certification.status];
          const StatusIcon = config.Icon;

          return (
            <article
              key={certification.examCode}
              className={`flex min-w-0 flex-col rounded-2xl border p-4 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-5 ${config.cardClassName}`}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Step {index + 1} of {certificationPath.length}
                </p>
                <span
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] font-semibold ${config.className}`}
                >
                  <StatusIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  {config.label}
                </span>
              </div>

              <a
                href={certification.href}
                target="_blank"
                rel="noreferrer"
                className="mx-auto mt-5 block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                aria-label={`View official details for ${certification.name}`}
              >
                <Image
                  src={certification.badge}
                  alt={`${certification.name} badge`}
                  width={600}
                  height={600}
                  sizes="(min-width: 1280px) 176px, (min-width: 768px) 200px, 176px"
                  className="h-36 w-36 object-contain sm:h-44 sm:w-44 xl:h-40 xl:w-40"
                />
              </a>

              <div className="mt-5 flex flex-1 flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/75">
                  {certification.stage}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-white">
                  {certification.name}
                </h3>
                <p className="mt-2 font-mono text-xs text-slate-400">
                  Exam {certification.examCode}
                </p>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                  {certification.detail}
                </p>
                <a
                  href={certification.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                >
                  Official certification
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <p className="max-w-4xl text-sm leading-7 text-slate-400">
        Credential status is explicit: Cloud Practitioner is earned, Developer
        Associate is in progress, and the remaining badges show the planned
        learning path rather than certifications currently held.
      </p>
    </SectionShell>
  );
}
