"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Layers,
  CheckCircle2,
} from "lucide-react";
import type { Work } from "@/data/work";
import { StatusTag } from "./status-tag";
import { asset } from "@/data/asset";
import { proofs } from "@/data/proof";

const EASE = [0.22, 1, 0.36, 1] as const;

export function WorkShowcase({ items }: { items: Work[] }) {
  const [active, setActive] = useState(0);
  const [shotIndex, setShotIndex] = useState(1);
  const [showProofHUD, setShowProofHUD] = useState(false);

  const current = items[active];
  const currentProof = proofs[current.slug];
  const maxShots = current.shots || 1;

  // Reset shot index when active project changes
  const selectProject = useCallback((index: number) => {
    setActive(index);
    setShotIndex(1);
  }, []);

  const nextShot = useCallback(() => {
    setShotIndex((prev) => (prev >= maxShots ? 1 : prev + 1));
  }, [maxShots]);

  const prevShot = useCallback(() => {
    setShotIndex((prev) => (prev <= 1 ? maxShots : prev - 1));
  }, [maxShots]);

  // Keyboard navigation for interactive power users
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input or textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "ArrowDown" || e.key === "j") {
        e.preventDefault();
        setActive((prev) => (prev + 1) % items.length);
        setShotIndex(1);
      } else if (e.key === "ArrowUp" || e.key === "k") {
        e.preventDefault();
        setActive((prev) => (prev - 1 + items.length) % items.length);
        setShotIndex(1);
      } else if (e.key === "ArrowRight" || e.key === "l") {
        e.preventDefault();
        nextShot();
      } else if (e.key === "ArrowLeft" || e.key === "h") {
        e.preventDefault();
        prevShot();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items.length, nextShot, prevShot]);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,540px)] lg:gap-16">
      {/* Project Selector List */}
      <ul className="order-2 lg:order-1 space-y-1">
        {items.map((w, i) => {
          const on = i === active;
          return (
            <li key={w.slug}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => selectProject(i)}
                onMouseEnter={() => selectProject(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    selectProject(i);
                  }
                }}
                className={`group relative flex items-start gap-5 border-b border-line p-4 sm:p-5 transition-all duration-300 rounded-lg cursor-pointer ${
                  on
                    ? "bg-ink-raised/60 border-line-strong shadow-sm"
                    : "hover:bg-ink-raised/30 hover:border-line-strong"
                }`}
              >
                {/* Active Indicator Strip */}
                <div
                  className={`absolute left-0 top-3 bottom-3 w-1 rounded-r transition-all duration-300 ${
                    on ? "bg-ember opacity-100" : "bg-transparent opacity-0"
                  }`}
                />

                <span
                  className={`meta tnum mt-1.5 shrink-0 font-mono transition-colors duration-300 ${
                    on ? "text-ember" : "text-paper-faint"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <span
                      className={`display text-[1.6rem] leading-tight transition-colors duration-300 sm:text-[1.85rem] ${
                        on ? "text-paper" : "text-paper-dim group-hover:text-paper"
                      }`}
                    >
                      {w.name}
                    </span>

                    <Link
                      href={`/work/${w.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className={`shrink-0 p-1.5 rounded-full border border-line transition-all duration-200 ${
                        on
                          ? "border-ember/40 bg-ember/10 text-ember"
                          : "opacity-0 group-hover:opacity-100 text-paper-dim hover:text-paper"
                      }`}
                      title="Read technical case study"
                    >
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>

                  <p className="mt-1.5 max-w-[46ch] text-sm text-paper-dim leading-relaxed">
                    {w.tagline}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <StatusTag status={w.status} />
                    <span className="meta">{w.field}</span>
                    {proofs[w.slug] && (
                      <span className="inline-flex items-center gap-1 rounded bg-ember/10 px-2 py-0.5 text-[11px] font-mono text-ember border border-ember/25">
                        <CheckCircle2 size={11} />
                        On-chain proof
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Interactive Studio Viewport */}
      <div className="order-1 lg:order-2" aria-label="Interactive Project Preview">
        <div className="lg:sticky lg:top-24">
          <div className="relative overflow-hidden rounded-xl border border-line-strong bg-ink-deep shadow-2xl transition-all duration-300">
            {/* Viewport Top Window Bar */}
            <div className="flex items-center justify-between border-b border-line bg-ink-raised/80 px-4 py-2.5 backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                <span className="ml-2 font-mono text-[11px] text-paper-faint hidden sm:inline-block">
                  {current.name} // preview
                </span>
              </div>

              {/* URL Pill */}
              <a
                href={current.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex max-w-[200px] truncate sm:max-w-[280px] items-center gap-1.5 rounded-md border border-line bg-ink/70 px-2.5 py-1 text-xs font-mono text-paper-dim transition-colors hover:border-ember/50 hover:text-paper"
              >
                <ShieldCheck size={12} className="text-ember shrink-0" />
                <span className="truncate">{current.live.replace("https://", "")}</span>
                <ExternalLink size={11} className="shrink-0 opacity-60 group-hover:opacity-100" />
              </a>

              {/* Proof toggle button */}
              {currentProof && (
                <button
                  type="button"
                  onClick={() => setShowProofHUD((prev) => !prev)}
                  className={`flex items-center gap-1 rounded px-2 py-1 text-[11px] font-mono border transition-all ${
                    showProofHUD
                      ? "border-ember bg-ember text-ink font-semibold"
                      : "border-line bg-ink text-ember hover:border-ember/40"
                  }`}
                  title="Toggle verified on-chain identifiers"
                >
                  <Layers size={11} />
                  <span>{showProofHUD ? "Hide HUD" : "Proof HUD"}</span>
                </button>
              )}
            </div>

            {/* Main Interactive Screen Showcase */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-raised">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${current.slug}-${shotIndex}`}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.28, ease: EASE }}
                >
                  <Image
                    src={asset(`/shots/${current.slug}-${shotIndex}.webp`)}
                    alt={`${current.name} interface capture ${shotIndex}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover object-top"
                    priority={active === 0 && shotIndex === 1}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Vignette Shadow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

              {/* Prev / Next Shot Arrow Buttons (if multiple shots) */}
              {maxShots > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevShot}
                    aria-label="Previous screenshot"
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 rounded-full border border-line bg-ink/75 p-2 text-paper transition-all hover:border-ember hover:bg-ink hover:text-ember backdrop-blur-sm"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={nextShot}
                    aria-label="Next screenshot"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full border border-line bg-ink/75 p-2 text-paper transition-all hover:border-ember hover:bg-ink hover:text-ember backdrop-blur-sm"
                  >
                    <ChevronRight size={16} />
                  </button>
                </>
              )}

              {/* Shot Index Selector Tabs Pill (bottom-right) */}
              {maxShots > 1 && (
                <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full border border-line bg-ink/80 p-1 backdrop-blur-md">
                  {Array.from({ length: maxShots }, (_, idx) => idx + 1).map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setShotIndex(num)}
                      className={`h-6 w-6 rounded-full font-mono text-[11px] transition-all ${
                        shotIndex === num
                          ? "bg-ember text-ink font-bold"
                          : "text-paper-dim hover:text-paper"
                      }`}
                    >
                      {String(num).padStart(2, "0")}
                    </button>
                  ))}
                </div>
              )}

              {/* Live status badge (bottom-left) */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full border border-line bg-ink/85 px-2.5 py-1 text-[11px] font-mono text-paper-dim backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
                  Screen {String(shotIndex).padStart(2, "0")} of {String(maxShots).padStart(2, "0")}
                </span>
              </div>

              {/* Proof HUD Overlay Drawer */}
              <AnimatePresence>
                {showProofHUD && currentProof && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-x-0 bottom-0 max-h-[75%] overflow-y-auto border-t border-line bg-ink-deep/95 p-4 backdrop-blur-lg"
                  >
                    <div className="flex items-center justify-between border-b border-line pb-2 mb-3">
                      <span className="text-xs font-mono font-medium text-ember">
                        Verified On-Chain Evidence
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowProofHUD(false)}
                        className="text-xs text-paper-faint hover:text-paper"
                      >
                        Close
                      </button>
                    </div>

                    <div className="space-y-2.5 font-mono text-xs">
                      {currentProof.artifacts.map((a) => (
                        <div key={a.value} className="rounded border border-line bg-ink p-2">
                          <div className="text-[10px] uppercase text-paper-faint">{a.label}</div>
                          <div className="mt-1 flex items-center justify-between gap-2">
                            <span className="truncate text-paper-dim select-all">{a.value}</span>
                            <a
                              href={`https://explorer.solana.com/${
                                a.kind === "transaction" ? "tx" : "address"
                              }/${a.value}?cluster=devnet`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-ember shrink-0 hover:underline inline-flex items-center gap-0.5"
                            >
                              Explorer
                              <ArrowUpRight size={10} />
                            </a>
                          </div>
                        </div>
                      ))}

                      {currentProof.layers && (
                        <div className="mt-2 space-y-1 pt-1 text-[11px] text-paper-dim">
                          {currentProof.layers.map((l) => (
                            <div key={l} className="flex items-start gap-1.5">
                              <span className="text-ember mt-0.5">·</span>
                              <span>{l}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Action Matrix Below Viewport */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-ink-raised/50 p-3.5">
              <div className="flex flex-wrap items-center gap-1.5">
                {current.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-ink border border-line px-2 py-0.5 text-xs font-mono text-paper-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={current.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded border border-line bg-ink px-2.5 py-1 text-xs text-paper-dim transition-colors hover:border-line-strong hover:text-paper"
                >
                  <Code2 size={13} />
                  <span>Source</span>
                </a>
                <Link
                  href={`/work/${current.slug}`}
                  className="inline-flex items-center gap-1 rounded bg-paper px-3 py-1 text-xs font-medium text-ink transition-all hover:bg-ember hover:text-ink"
                >
                  <span>Details</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* Telemetry and Navigation Bar */}
          <div className="mt-3.5 flex items-center justify-between text-xs font-mono text-paper-faint">
            <span className="hidden sm:inline-block">
              [Arrow Up/Down] Select Project · [Arrow Left/Right] Flip Screen
            </span>
            <span className="sm:hidden">Swipe or tap pills to browse screens</span>
            <span className="tnum font-medium text-paper-dim">
              {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
