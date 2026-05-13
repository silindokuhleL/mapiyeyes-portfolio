"use client";

import { type ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
};

export function StaggerChildren({
  children,
  className,
  stagger = 0.08,
  once = true,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.4, 0.25, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
