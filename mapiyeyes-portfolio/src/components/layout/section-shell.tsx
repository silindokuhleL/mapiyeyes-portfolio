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
      className={`scroll-mt-24 border-t border-white/10 py-14 sm:scroll-mt-28 sm:py-20 lg:py-24 ${className ?? ""}`}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 sm:gap-12 sm:px-6 lg:px-8">
        <div className="min-w-0 max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80 sm:tracking-[0.35em]">
            {eyebrow}
          </p>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              {description}
            </p>
          </div>
        </div>
        <div
          className={contentClassName ?? "grid min-w-0 gap-6 md:grid-cols-2 xl:grid-cols-3"}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
