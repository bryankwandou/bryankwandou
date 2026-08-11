"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./logo";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/journey", label: "Journey" },
  { href: "/about", label: "About" },
  { href: "/archive", label: "Archive" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [lifted, setLifted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the sheet on navigation and lock the page behind it while open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ember focus:px-3 focus:py-2 focus:text-xs focus:text-ink"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          lifted
            ? "border-b border-line bg-ink/78 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 sm:px-8">
          <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="Bryan Kwandou, home">
            <Logo size={30} />
            <span className="display hidden text-[1.02rem] leading-none text-paper sm:block">
              Bryan Kwandou
            </span>
          </Link>

          <nav className="hidden items-center gap-1 sm:flex">
            {NAV.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded px-3 py-2 text-sm transition-colors duration-200 ${
                    active ? "text-paper" : "text-paper-dim hover:text-paper"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute inset-x-3 -bottom-px h-px bg-ember"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </Link>
              );
            })}
            <a
              href="mailto:vincentius.kwandou@gmail.com"
              className="ml-3 rounded-full border border-line-strong px-4 py-1.5 text-sm text-paper transition-colors duration-200 hover:border-ember hover:text-ember"
            >
              Get in touch
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center sm:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="relative block h-3 w-5">
              <motion.span
                className="absolute left-0 block h-px w-full bg-paper"
                animate={open ? { top: 6, rotate: 45 } : { top: 0, rotate: 0 }}
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.span
                className="absolute left-0 block h-px w-full bg-paper"
                animate={open ? { top: 6, rotate: -45 } : { top: 12, rotate: 0 }}
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-ink px-5 pt-24 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.32, delay: 0.04 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    className="display block border-b border-line py-5 text-[2rem] text-paper"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="mailto:vincentius.kwandou@gmail.com"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.32, delay: 0.19, ease: [0.22, 1, 0.36, 1] }}
                className="display block py-5 text-[2rem] text-ember"
              >
                Get in touch
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
