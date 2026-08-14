"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Work } from "@/data/work";
import { StatusTag } from "./status-tag";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * An index that previews. Pointing at a row swaps the panel beside it. The list
 * is the primary object and stays fully usable without the panel, which is why
 * the preview is decorative and hidden from assistive tech.
 */
export function WorkShowcase({ items }: { items: Work[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-16">
      <ul className="order-2 lg:order-1">
        {items.map((w, i) => {
          const on = i === active;
          return (
            <li key={w.slug}>
              <Link
                href={`/work/${w.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group relative flex items-start gap-5 border-b border-line py-6 transition-colors duration-300 hover:border-line-strong sm:py-7"
              >
                <span
                  className={`meta tnum mt-1.5 shrink-0 transition-colors duration-300 ${
                    on ? "text-ember" : ""
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline gap-3">
                    <span
                      className={`display text-[1.6rem] leading-tight transition-colors duration-300 sm:text-[1.9rem] ${
                        on ? "text-paper" : "text-paper-dim group-hover:text-paper"
                      }`}
                    >
                      {w.name}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className={`shrink-0 transition-[transform,opacity,color] duration-300 ${
                        on
                          ? "translate-x-0 -translate-y-0 text-ember opacity-100"
                          : "-translate-x-1 translate-y-1 opacity-0"
                      }`}
                    />
                  </span>
                  <span className="mt-1.5 block max-w-[46ch] text-sm text-paper-dim">
                    {w.tagline}
                  </span>
                  <span className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <StatusTag status={w.status} />
                    <span className="meta">{w.field}</span>
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Preview. Sticky on wide screens so it tracks the list. */}
      <div className="order-1 lg:order-2" aria-hidden="true">
        <div className="lg:sticky lg:top-28">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-line bg-ink-raised">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.34, ease: EASE }}
              >
                <Image
                  src={`/shots/${current.slug}-1.webp`}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover object-top"
                  priority={active === 0}
                />
              </motion.div>
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <AnimatePresence mode="wait">
              <motion.p
                key={current.slug}
                className="meta"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.22 }}
              >
                {current.stack.join(" · ")}
              </motion.p>
            </AnimatePresence>
            <p className="meta tnum">
              {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
