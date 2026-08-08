"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Entry is 320ms, exit 200ms, per brand.md. The asymmetry is deliberate:
 * things should arrive with a little weight and leave without ceremony.
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const still = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={still ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={still ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px -8% 0px" }}
      transition={{ duration: 0.32, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Parent for staggered lists. Cap the run at eight before it reads as a wave. */
export const stagger: Variants = {
  hidden: {},
  shown: {
    transition: { staggerChildren: 0.045, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.32, ease: EASE } },
};

export function StaggerList({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-10% 0px" }}
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
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/**
 * Display type that assembles line by line. Used once, on the opening line of
 * the site, and nowhere else — a device stops being interesting the second time.
 */
export function LineRise({
  lines,
  className,
  lineClassName,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
}) {
  const still = useReducedMotion();
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={still ? { opacity: 0 } : { opacity: 0, y: "108%" }}
            animate={still ? { opacity: 1 } : { opacity: 1, y: "0%" }}
            transition={{ duration: 0.72, delay: 0.08 + i * 0.09, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
