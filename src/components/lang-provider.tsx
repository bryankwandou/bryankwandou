"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { dict, type Key, type Lang } from "@/i18n/dict";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: Key, vars?: Record<string, string | number>) => string;
};

const LangContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => dict.en[k],
});

export function useLang() {
  return useContext(LangContext);
}

const STORAGE_KEY = "bk-lang";

export function LangProvider({ children }: { children: React.ReactNode }) {
  // Server-render English so the static HTML is stable and indexable; the
  // stored choice is applied after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "id" || stored === "en") {
      setLangState(stored);
      document.documentElement.lang = stored;
      return;
    }
    // No stored choice: follow the browser, since most visitors here read one
    // or the other and should not have to hunt for the switch.
    if (navigator.language?.toLowerCase().startsWith("id")) {
      setLangState("id");
      document.documentElement.lang = "id";
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    document.documentElement.lang = l;
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // Private mode can refuse storage; the toggle still works for the session.
    }
  }, []);

  const t = useCallback(
    (k: Key, vars?: Record<string, string | number>) => {
      let s: string = dict[lang][k] ?? dict.en[k];
      if (vars) for (const [key, v] of Object.entries(vars)) s = s.replace(`{${key}}`, String(v));
      return s;
    },
    [lang],
  );

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

/** Two-state switch with the active pill sliding between options. */
export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      className={`relative flex items-center rounded-full border border-line p-0.5 ${className}`}
      role="group"
      aria-label={t("lang.label")}
    >
      {(["en", "id"] as const).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            aria-pressed={active}
            className="relative px-2.5 py-1"
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-paper/10"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span
              className={`meta relative transition-colors duration-200 ${
                active ? "text-paper" : "text-paper-faint hover:text-paper-dim"
              }`}
            >
              {l.toUpperCase()}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/**
 * Swaps text with a short cross-fade so a language change reads as a change
 * rather than a flash of replaced content.
 */
export function T({ k, vars }: { k: Key; vars?: Record<string, string | number> }) {
  const { lang, t } = useLang();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={`${k}-${lang}`}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {t(k, vars)}
      </motion.span>
    </AnimatePresence>
  );
}
