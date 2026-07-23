"use client";

import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import { CheckCircle2, FileText, LoaderCircle } from "lucide-react";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { trackPortfolioEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type CvDownloadLinkProps = {
  source: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  className?: string;
};

export function CvDownloadLink({ source, variant = "primary", className }: CvDownloadLinkProps) {
  const [status, setStatus] = useState<"idle" | "preparing" | "started">("idle");
  const resetTimer = useRef<number | null>(null);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (status !== "idle") {
      event.preventDefault();
      return;
    }

    setStatus("preparing");
    trackPortfolioEvent("cv_download", {
      source,
      label: "Download CV",
    });

    if (resetTimer.current) {
      window.clearTimeout(resetTimer.current);
    }

    window.setTimeout(() => setStatus("started"), 450);
    resetTimer.current = window.setTimeout(() => setStatus("idle"), 2800);
  }

  const label =
    status === "preparing"
      ? "Preparing CV..."
      : status === "started"
        ? "CV download started"
        : "Download CV";
  const icon =
    status === "preparing" ? (
      <LoaderCircle className="h-4 w-4 animate-spin" />
    ) : status === "started" ? (
      <CheckCircle2 className="h-4 w-4" />
    ) : (
      <FileText className="h-4 w-4" />
    );

  return (
    <a
      href="/cv/Silindokuhle-Mapiyeye-CV.pdf"
      download
      aria-busy={status === "preparing"}
      aria-disabled={status !== "idle"}
      onClick={handleClick}
      className={cn(
        buttonVariants({ variant }),
        "select-none",
        status !== "idle" && "pointer-events-none cursor-wait opacity-80",
        className,
      )}
    >
      {label}
      {icon}
    </a>
  );
}
