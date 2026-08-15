"use client";

import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/data/profile";
import { useLang } from "./lang-provider";

/**
 * The biography in whichever language is active. Kept as its own client island
 * so the rest of the About page stays a server component and keeps its
 * metadata.
 */
export function AboutBio() {
  const { lang } = useLang();
  const paras = lang === "id" ? profile.bioId : profile.bio;

  return (
    <div className="mt-10 space-y-6">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          {paras.map((para, i) => (
            <p key={i} className="prose-read text-lg">
              {para}
            </p>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/** The page's own headline, which has no data-layer home. */
export function AboutHeadline() {
  const { lang } = useLang();
  return (
    <h1 className="display mt-6 max-w-[13ch] text-[clamp(2.6rem,7.5vw,5rem)] text-paper">
      {lang === "id"
        ? "Mulai dari gaming, berakhir di infrastruktur"
        : "Started in gaming, ended up in infrastructure"}
    </h1>
  );
}
