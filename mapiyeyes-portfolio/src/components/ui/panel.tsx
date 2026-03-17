import type { ReactNode } from "react";

type PanelProps = {
  children?: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function Panel({
  children,
  className,
  eyebrow,
  title,
  description,
}: PanelProps) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm ${className ?? ""}`}
    >
      {(eyebrow || title || description) && (
        <div className="space-y-3">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/75">
              {eyebrow}
            </p>
          ) : null}
          {title ? <h3 className="text-xl font-semibold text-white">{title}</h3> : null}
          {description ? (
            <p className="text-sm leading-7 text-slate-300">{description}</p>
          ) : null}
        </div>
      )}
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}
