"use client";

import { type ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

type HeroEntranceProps = {
  children: ReactNode;
  className?: string;
};

export function HeroEntrance({ children, className }: HeroEntranceProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const targets = el.querySelectorAll("[data-hero-animate]");
    if (targets.length === 0) return;

    gsap.set(targets, { opacity: 0, y: 30 });

    gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power2.out",
      delay: 0.15,
    });
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
