import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 border-t border-white/10 py-20 sm:py-24 ${className ?? ""}`}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:px-8">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
            {eyebrow}
          </p>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              {description}
            </p>
          </div>
        </div>
        <div className={contentClassName ?? "grid gap-6 lg:grid-cols-3"}>{children}</div>
      </div>
    </section>
  );
}
