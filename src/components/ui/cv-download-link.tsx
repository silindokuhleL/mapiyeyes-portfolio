"use client";

import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import { FileText } from "lucide-react";
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
    if (status === "preparing") {
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

  return (
    <a
      href="/cv/Silindokuhle-Mapiyeye-CV.pdf"
      download
      aria-busy={status === "preparing"}
      onClick={handleClick}
      className={cn(buttonVariants({ variant }), "select-none", className)}
    >
      {label}
      <FileText className="h-4 w-4" />
    </a>
  );
}
