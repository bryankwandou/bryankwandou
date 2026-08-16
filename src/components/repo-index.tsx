"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Search } from "lucide-react";
import Image from "next/image";
import { repos, deployedCount, undescribedCount } from "@/data/repos";
import { repoCards } from "@/data/repo-cards";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "live", label: "Deployed" },
  { id: "ts", label: "TypeScript" },
  { id: "rust", label: "Rust" },
  { id: "dart", label: "Dart" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

export function RepoIndex() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<FilterId>("all");

  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return repos.filter((r) => {
      if (filter === "live" && !r.live) return false;
      if (filter === "ts" && r.lang !== "TypeScript") return false;
      if (filter === "rust" && r.lang !== "Rust") return false;
      if (filter === "dart" && r.lang !== "Dart") return false;
      if (!needle) return true;
      return (
        r.name.toLowerCase().includes(needle) || (r.note ?? "").toLowerCase().includes(needle)
      );
    });
  }, [q, filter]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <label className="relative flex min-w-[220px] flex-1 items-center">
          <Search size={14} className="pointer-events-none absolute left-3.5 text-paper-faint" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search all repositories"
            className="w-full rounded-full border border-line bg-ink-raised py-2.5 pl-10 pr-4 text-sm text-paper placeholder:text-paper-faint focus:border-line-strong focus:outline-none"
          />
        </label>

        <div className="flex flex-wrap gap-1.5">
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className="relative rounded-full px-3.5 py-2"
              >
                {active && (
                  <motion.span
                    layoutId="repo-filter"
                    className="absolute inset-0 rounded-full border border-line-strong bg-paper/[0.06]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span
                  className={`meta relative transition-colors duration-200 ${
                    active ? "text-paper" : "text-paper-faint hover:text-paper-dim"
                  }`}
                >
                  {f.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="meta tnum mt-5">
        {shown.length} of {repos.length} · {deployedCount} deployed
      </p>

      <div className="mt-4">
        <AnimatePresence initial={false}>
          {shown.map((r) => (
            <motion.div
              key={r.name}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="grid grid-cols-[1fr_auto] items-baseline gap-x-5 gap-y-1 border-t border-line py-3.5 sm:grid-cols-[92px_220px_1fr_auto]"
            >
              {/* GitHub renders a card for every repository, so even the ones
                  that were never deployed have a real image rather than none. */}
              <div className="col-span-2 row-start-1 hidden sm:col-span-1 sm:block">
                {repoCards.has(r.name) ? (
                  <div className="relative aspect-[2/1] w-[92px] overflow-hidden rounded border border-line">
                    <Image
                      src={`/repo/${r.name}.webp`}
                      alt={`GitHub card for ${r.name}`}
                      fill
                      sizes="92px"
                      loading="lazy"
                      className="object-cover opacity-70 transition-opacity duration-300 hover:opacity-100"
                    />
                  </div>
                ) : (
                  <div className="aspect-[2/1] w-[92px] rounded border border-dashed border-line" />
                )}
              </div>
              <a
                href={`https://github.com/bryankwandou/${r.name}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 font-mono text-sm text-paper transition-colors duration-200 hover:text-ember"
              >
                {r.name}
                <ArrowUpRight
                  size={12}
                  className="text-paper-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <p className="col-span-2 order-last text-sm text-paper-faint sm:order-none sm:col-span-1">
                {r.note ?? <span className="text-paper-faint/55">No description on the repo</span>}
              </p>

              <div className="flex shrink-0 items-center gap-3">
                {r.live && (
                  <a
                    href={r.live}
                    target="_blank"
                    rel="noreferrer"
                    className="meta text-ember transition-opacity duration-200 hover:opacity-70"
                  >
                    Live
                  </a>
                )}
                <span className="meta tnum text-paper-faint">{r.lang ?? "—"}</span>
                <span className="meta tnum w-9 text-right text-paper-faint">{r.year}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {shown.length === 0 && (
        <p className="prose-read mt-8 text-sm">Nothing matches that.</p>
      )}

      <p className="prose-read mt-10 border-t border-line pt-6 text-sm">
        {undescribedCount} of these have no description on GitHub. They are listed as they
        are rather than given one written after the fact.
      </p>
    </div>
  );
}
