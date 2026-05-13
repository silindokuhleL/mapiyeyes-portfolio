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
      className={`min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:rounded-3xl sm:p-6 ${className ?? ""}`}
    >
      {(eyebrow || title || description) && (
        <div className="space-y-3">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/75 sm:tracking-[0.28em]">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
              {title}
            </h3>
          ) : null}
          {description ? (
            <p className="text-sm leading-7 text-slate-300">{description}</p>
          ) : null}
        </div>
      )}
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}
