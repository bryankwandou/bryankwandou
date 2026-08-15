"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { photos, objktUrl } from "@/data/photos";

export function PhotoGrid() {
  const [open, setOpen] = useState<number | null>(null);

  const move = useCallback((d: number) => {
    setOpen((i) => (i === null ? null : (i + d + photos.length) % photos.length));
  }, []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, move]);

  const current = open === null ? null : photos[open];

  return (
    <>
      {/* Deliberately uneven: every fifth frame runs wide, so the grid reads as
          a contact sheet rather than a spreadsheet. */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
        {photos.map((p, i) => (
          <motion.button
            key={p.src}
            onClick={() => setOpen(i)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 8) * 0.03 }}
            className={`group relative overflow-hidden rounded bg-ink-raised ${
              i % 9 === 0 ? "col-span-2 row-span-2" : ""
            }`}
            aria-label={`${p.title}, ${p.date}`}
          >
            <Image
              src={`/photos/${p.src}`}
              alt={p.title}
              width={1400}
              height={933}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="h-full w-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-3 pt-8 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="block truncate text-xs text-paper">{p.title}</span>
              <span className="meta tnum">{p.date}</span>
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-ink/96 p-4 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(null)}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm text-paper">{current.title}</p>
                <p className="meta tnum mt-1">
                  {current.date} · Tezos #{current.tokenId}
                </p>
              </div>
              <button
                onClick={() => setOpen(null)}
                className="rounded p-1.5 text-paper-dim transition-colors duration-200 hover:text-paper"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div
              className="flex min-h-0 flex-1 items-center justify-center py-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={current.src}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-h-full"
              >
                <Image
                  src={`/photos/${current.src}`}
                  alt={current.title}
                  width={1400}
                  height={933}
                  className="max-h-[74vh] w-auto rounded object-contain"
                  priority
                />
              </motion.div>
            </div>

            <div
              className="flex items-center justify-between gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex gap-2">
                <button
                  onClick={() => move(-1)}
                  className="meta rounded-full border border-line px-4 py-2 text-paper-dim transition-colors duration-200 hover:border-line-strong hover:text-paper"
                >
                  Previous
                </button>
                <button
                  onClick={() => move(1)}
                  className="meta rounded-full border border-line px-4 py-2 text-paper-dim transition-colors duration-200 hover:border-line-strong hover:text-paper"
                >
                  Next
                </button>
              </div>
              <a
                href={objktUrl(current.tokenId)}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm text-paper-dim transition-colors duration-200 hover:text-ember"
              >
                Check it on objkt
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
