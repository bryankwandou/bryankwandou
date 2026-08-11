"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { chapters, strands } from "@/data/journey";

const EASE = [0.22, 1, 0.36, 1] as const;

const STRAND_LABEL: Record<string, string> = {
  community: "Community",
  craft: "Craft",
  study: "Study",
  build: "Building",
};

export function JourneySpine() {
  const [filter, setFilter] = useState<string>("all");
  const still = useReducedMotion();
  const shown = chapters.filter((c) => filter === "all" || c.strand === filter);

  return (
    <div>
      {/* Filter. Reads as a set of switches, not buttons competing with the CTA. */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter the timeline">
        {strands.map((s) => {
          const on = filter === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setFilter(s.id)}
              aria-pressed={on}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                on ? "text-ink" : "text-paper-dim hover:text-paper"
              }`}
            >
              {on && (
                <motion.span
                  layoutId="strand-pill"
                  className="absolute inset-0 rounded-full bg-paper"
                  transition={{ duration: 0.32, ease: EASE }}
                />
              )}
              <span className="relative">{s.label}</span>
            </button>
          );
        })}
      </div>

      {/* The spine. A hairline runs the full height; each chapter marks it. */}
      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute left-[92px] top-2 bottom-2 hidden w-px bg-line sm:block lg:left-[132px]"
        />

        <motion.ol layout className="space-y-0">
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map((c, i) => (
              <motion.li
                key={c.title}
                layout
                initial={still ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={still ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.14 } }}
                transition={{ duration: 0.34, delay: i * 0.04, ease: EASE }}
                className="relative grid gap-4 border-b border-line py-9 sm:grid-cols-[92px_1fr] sm:gap-8 lg:grid-cols-[132px_1fr]"
              >
                <div className="sm:pr-8 sm:text-right">
                  <p className="meta tnum text-paper-dim">{c.year}</p>
                  <p className="meta mt-1.5">{STRAND_LABEL[c.strand]}</p>
                </div>

                {/* Node on the spine. */}
                <span
                  aria-hidden
                  className="absolute left-[92px] top-[2.7rem] hidden h-2 w-2 -translate-x-1/2 rounded-full border border-ember bg-ink sm:block lg:left-[132px]"
                />

                <div className="sm:pl-8">
                  <h3 className="display text-[1.5rem] leading-tight text-paper sm:text-[1.75rem]">
                    {c.title}
                  </h3>
                  <p className="prose-read mt-3">{c.body}</p>
                  <p className="meta mt-4">{c.source}</p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ol>
      </div>

      <p className="meta mt-8">
        Showing {shown.length} of {chapters.length}
      </p>
    </div>
  );
}
