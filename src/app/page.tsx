"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile, roles, communities, skills } from "@/data/profile";
import { work, featured } from "@/data/work";
import { craft } from "@/data/journey";
import { Reveal, LineRise, StaggerList, StaggerItem } from "@/components/motion-primitives";
import { WorkShowcase } from "@/components/work-showcase";
import { Logo } from "@/components/logo";
import { useLang } from "@/components/lang-provider";

const shown = featured.map((s) => work.find((w) => w.slug === s)!).filter(Boolean);

export default function Home() {
  const { t } = useLang();
  return (
    <>
      {/* ------------------------------------------------------------------
          Opening. Asymmetric on purpose — the mark sits left of the type
          rather than above it, and nothing is centred.
         ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-44">
        {/* A single warm bloom behind the type. No violet, no blue. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full opacity-[0.16] blur-[130px]"
          style={{ background: "radial-gradient(circle, #E4703A 0%, transparent 68%)" }}
        />

        <div className="relative mx-auto max-w-[1180px]">
          <Reveal>
            <p className="meta">
              {profile.location} · {new Date().getFullYear()}
            </p>
          </Reveal>

          <h1 className="display mt-8 text-[clamp(2.6rem,8.4vw,5.5rem)] text-paper">
            <LineRise
              lines={[
                <>{t("home.hero.1")}</>,
                <>
                  {t("home.hero.2a")}<span className="text-ember">{t("home.hero.2b")}</span>.
                </>,
              ]}
            />
          </h1>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.15fr_1fr] md:gap-16">
            <Reveal delay={0.34}>
              <p className="prose-read text-lg">
                {t("home.lede")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {t("home.cta.work")}
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/journey"
                  className="link-wipe text-sm text-paper-dim transition-colors duration-200 hover:text-paper"
                >
                  {t("home.cta.long")}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.42}>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-l border-line pl-8">
                {profile.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="display tnum text-[2.4rem] leading-none text-paper">
                      {s.value}
                    </dt>
                    <dd className="mt-2 text-xs leading-snug text-paper-faint">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Communities. A slow drift, paused on hover, purely a texture strip.
         ------------------------------------------------------------------ */}
      <section className="drift-host relative overflow-hidden border-y border-line py-5">
        <div className="flex w-max drift">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {communities.concat(["Superteam Campus", "IDCamp", "Colosseum"]).map((c) => (
                <span key={`${copy}-${c}`} className="flex items-center">
                  <span className="meta whitespace-nowrap px-8">{c}</span>
                  <span className="h-1 w-1 rounded-full bg-ember/45" />
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-ink to-transparent" />
      </section>

      {/* ------------------------------------------------------------------
          Selected work.
         ------------------------------------------------------------------ */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="meta">{t("home.selected.eyebrow")}</p>
                <h2 className="display mt-4 text-[clamp(2rem,4.6vw,3.2rem)] text-paper">
                  {t("home.selected.title")}
                </h2>
              </div>
              <Link
                href="/work"
                className="link-wipe pb-0.5 text-sm text-paper-dim transition-colors duration-200 hover:text-paper"
              >
                {t("home.selected.all", { n: work.length })}
              </Link>
            </div>
          </Reveal>

          <div className="mt-14">
            <WorkShowcase items={shown} />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          The through-line. Editorial pull-quote, off-centre.
         ------------------------------------------------------------------ */}
      <section className="border-y border-line bg-ink-deep px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-12 md:grid-cols-[auto_1fr] md:gap-14">
            <Reveal>
              <Logo size={64} />
            </Reveal>
            <div>
              <Reveal delay={0.06}>
                <p className="display max-w-[22ch] text-[clamp(1.8rem,4vw,2.9rem)] leading-[1.12] text-paper">
                  {t("home.quote")}
              </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="prose-read mt-8">
                  {t("home.quote.body")}
              </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
                  {skills.map((g) => (
                    <div key={g.group}>
                      <p className="meta">{g.group}</p>
                      <p className="mt-2 max-w-[24ch] text-sm text-paper-dim">
                        {g.items.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          The creative half. Engineering produces artefacts with URLs, so it
          dominates this site by default. This corrects the record.
         ------------------------------------------------------------------ */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-12 md:grid-cols-[1fr_1.15fr] md:gap-16">
            <Reveal>
              <p className="meta">{t("home.craft.eyebrow")}</p>
              <h2 className="display mt-4 max-w-[15ch] text-[clamp(2rem,4.6vw,3.2rem)] text-paper">
                {t("home.craft.title")}
              </h2>
              <p className="prose-read mt-6">
                {t("home.craft.body")}
              </p>
              <Link
                href="/journey"
                className="group mt-8 inline-flex items-center gap-2 text-sm text-paper transition-colors duration-300 hover:text-ember"
              >
                {t("home.craft.link")}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>

            <StaggerList className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {craft.map((c) => (
                <StaggerItem key={c.title}>
                  <div className="border-t border-line pt-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-base text-paper">{c.title}</h3>
                      <span className="meta shrink-0">{c.meta}</span>
                    </div>
                    <p className="prose-read mt-2.5 text-sm">{c.detail}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Roles. A ruled index rather than a card grid.
         ------------------------------------------------------------------ */}
      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="meta">{t("home.roles.eyebrow")}</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.6vw,3.2rem)] text-paper">
              {t("home.roles.title")}
            </h2>
          </Reveal>

          <StaggerList className="mt-14">
            {roles.map((r) => (
              <StaggerItem key={r.org}>
                <div className="group grid gap-3 border-t border-line py-8 md:grid-cols-[180px_1fr] md:gap-10">
                  <p className="meta tnum pt-1">{r.period}</p>
                  <div>
                    <h3 className="text-lg text-paper">{r.title}</h3>
                    <p className="mt-1 text-sm text-ember">{r.org}</p>
                    <p className="prose-read mt-4 text-sm">{r.summary}</p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {r.points.map((p) => (
                        <li key={p} className="flex gap-2.5 text-sm text-paper-faint">
                          <span className="mt-[0.6em] h-px w-3 shrink-0 bg-line-strong" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Archive teaser.
         ------------------------------------------------------------------ */}
      <section className="px-5 pb-8 sm:px-8">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <Link
              href="/archive"
              className="group block rounded-lg border border-line bg-ink-raised p-8 transition-colors duration-300 hover:border-line-strong sm:p-12"
            >
              <div className="flex flex-wrap items-end justify-between gap-8">
                <div>
                  <p className="meta">{t("home.archive.eyebrow")}</p>
                  <p className="display mt-4 max-w-[20ch] text-[clamp(1.7rem,3.6vw,2.5rem)] text-paper">
                    Another eighty-odd repositories, public and unpolished
                  </p>
                  <p className="prose-read mt-4 text-sm">
                    {t("home.archive.body")}
              </p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm text-paper transition-colors duration-300 group-hover:text-ember">
                  {t("home.archive.cta")}
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          Close.
         ------------------------------------------------------------------ */}
      <section className="px-5 pt-24 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <Reveal>
              <p className="meta">{t("home.close.eyebrow")}</p>
              <h2 className="display mt-4 max-w-[16ch] text-[clamp(2.2rem,6vw,4rem)] text-paper">
                {t("home.close.title")}
              </h2>
              <p className="prose-read mt-6">
                {t("home.close.body")}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
              >
                {profile.email}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
