"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Handshake, Linkedin, Mail, Send } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { buttonVariants } from "@/components/ui/button";
import { CvDownloadLink } from "@/components/ui/cv-download-link";
import { Panel } from "@/components/ui/panel";
import { contactMethods } from "@/data/portfolio";
import { trackPortfolioEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { siteMetadata } from "@/data/site";

const iconMap = {
  mail: Mail,
  linkedin: Linkedin,
  handshake: Handshake,
};

export function ContactSection() {
  const [name, setName] = useState("");
  const [replyEmail, setReplyEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "opening">("idle");

  function submitEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("opening");

    const subject = encodeURIComponent("Portfolio project enquiry");
    const body = encodeURIComponent(
      [
        `Name: ${name || "Not provided"}`,
        `Reply email: ${replyEmail || "Not provided"}`,
        "",
        "Project / opportunity:",
        message || "I would like to discuss a project or opportunity.",
      ].join("\n"),
    );

    trackPortfolioEvent("contact_click", {
      source: "contact_form",
      method: "email",
      label: "Send project enquiry",
    });

    window.location.href = `mailto:slmapiyeye@gmail.com?subject=${subject}&body=${body}`;
    window.setTimeout(() => setFormStatus("idle"), 1800);
  }

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Ready to discuss a SaaS build, API, dashboard, or payment workflow."
      description={siteMetadata.availability}
      contentClassName="grid min-w-0 gap-6 lg:grid-cols-[1.05fr_0.95fr]"
    >
      <Panel
        eyebrow="Let’s Connect"
        title="Open to freelance SaaS, Laravel, Next.js, and product engineering work."
        description="Send the goal, workflow, timeline, and budget range if you have one. I will help turn it into a clear technical path."
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
                Currently available for focused freelance and contract work with clear scope, milestones, and handoff.
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
          <CvDownloadLink source="contact_section" variant="secondary" className="w-full sm:w-fit" />
        </div>
      </Panel>
      <div className="grid gap-6">
        <Panel
          eyebrow="Project Email"
          title="Send a focused project enquiry."
          description="Messages go to the main email account used across the portfolio."
        >
          <form onSubmit={submitEmail} className="grid gap-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Name
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="min-h-11 rounded-xl border border-white/10 bg-slate-950/70 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Reply email
                <input
                  type="email"
                  value={replyEmail}
                  onChange={(event) => setReplyEmail(event.target.value)}
                  className="min-h-11 rounded-xl border border-white/10 bg-slate-950/70 px-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Message
              <textarea
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                className="min-h-32 resize-y rounded-xl border border-white/10 bg-slate-950/70 px-3 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                placeholder="Tell me what you want to build, fix, or discuss."
              />
            </label>
            <button type="submit" className={cn(buttonVariants({ variant: "primary" }), "w-full")}>
              {formStatus === "opening" ? "Opening email..." : "Send project enquiry"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </Panel>
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
