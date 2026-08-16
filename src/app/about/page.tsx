import type { Metadata } from "next";
import Image from "next/image";
import { profile, roles, education, certifications, skills, research } from "@/data/profile";
import { Reveal, StaggerList, StaggerItem } from "@/components/motion-primitives";
import { AboutBio, AboutHeadline } from "@/components/about-bio";
import { T } from "@/components/lang-provider";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bryan Kwandou — Vincentius Bryan Kwandou. Computer science at Universitas Atma Jaya Makassar, founder of the university esports body, campus lead for Superteam, NFT artist on Tezos and Drip.Haus since 2022.",
};

export default function About() {
  return (
    <>
      <section className="px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-20">
            <div>
              <Reveal>
                <p className="meta"><T k="about.eyebrow" /></p>
                <AboutHeadline />
              </Reveal>

              <AboutBio />
            </div>

            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-28">
                <div className="relative aspect-square overflow-hidden rounded-lg border border-line">
                  <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    sizes="320px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <dl className="mt-6 divide-y divide-line border-y border-line">
                  {[
                    ["Full name", profile.legalName],
                    ["Based", profile.location],
                    ["From", profile.origin],
                    ["Known as", profile.handle],
                    ["ORCID", profile.orcid],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-start justify-between gap-4 py-3">
                      <dt className="meta shrink-0">{k}</dt>
                      <dd className="text-right text-sm text-paper-dim">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Roles, in full. */}
      <section className="border-t border-line px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <h2 className="display text-[clamp(1.9rem,4.2vw,2.8rem)] text-paper"><T k="about.experience" /></h2>
          </Reveal>
          <StaggerList className="mt-12">
            {roles.map((r) => (
              <StaggerItem key={r.org}>
                <div className="grid gap-3 border-t border-line py-8 md:grid-cols-[190px_1fr] md:gap-10">
                  <div>
                    <p className="meta tnum">{r.period}</p>
                    <p className="meta mt-1.5">{r.place}</p>
                  </div>
                  <div>
                    <h3 className="text-lg text-paper">{r.title}</h3>
                    <p className="mt-1 text-sm text-ember">{r.org}</p>
                    <p className="prose-read mt-4 text-sm">{r.summary}</p>
                    <ul className="mt-5 space-y-2">
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

      {/* Education, certifications, skills. Three unequal columns — not the
          three-across feature grid, because the content genuinely differs. */}
      <section className="border-t border-line px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-14 md:grid-cols-[1.2fr_1fr_1.1fr]">
          <Reveal>
            <h2 className="meta"><T k="about.education" /></h2>
            <ul className="mt-6 space-y-6">
              {education.map((e) => (
                <li key={e.school}>
                  <p className="text-sm text-paper">{e.school}</p>
                  <p className="mt-1 text-sm text-paper-dim">{e.detail}</p>
                  <p className="meta tnum mt-1.5">{e.period}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="meta"><T k="about.certifications" /></h2>
            <ul className="mt-6 space-y-3">
              {certifications.map((c) => (
                <li key={c} className="text-sm text-paper-dim">
                  {c}
                </li>
              ))}
            </ul>
            <p className="meta mt-5">Dicoding, except where an issuer is named</p>

            <h2 className="meta mt-10">Conference paper</h2>
            <p className="mt-6 text-sm text-paper">{research.paper}</p>
            <p className="mt-2 text-sm text-paper-dim">
              {research.role} · {research.venue}
            </p>
            <p className="meta tnum mt-1.5">
              {research.place} · {research.date}
            </p>
            <p className="meta mt-2">Ref {research.ref}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="meta"><T k="about.skills" /></h2>
            <div className="mt-6 space-y-5">
              {skills.map((g) => (
                <div key={g.group}>
                  <p className="text-sm text-paper">{g.group}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        className="rounded border border-line px-2 py-1 text-xs text-paper-dim transition-colors duration-200 hover:border-line-strong hover:text-paper"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact. */}
      <section className="border-t border-line px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <h2 className="display text-[clamp(1.9rem,4.2vw,2.8rem)] text-paper"><T k="about.elsewhere" /></h2>
          </Reveal>
          <StaggerList className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {profile.links.map((l) => (
              <StaggerItem key={l.label}>
                <a
                  href={l.href}
                  target={l.label === "Email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex flex-col gap-1 border-b border-line py-4 transition-colors duration-300 hover:border-ember"
                >
                  <span className="meta">{l.label}</span>
                  <span className="truncate text-sm text-paper-dim transition-colors duration-300 group-hover:text-paper">
                    {l.handle}
                  </span>
                </a>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>
    </>
  );
}
