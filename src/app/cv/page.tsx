import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { profile, roles, education, certifications, skills } from "@/data/profile";
import { work } from "@/data/work";
import { proofs } from "@/data/proof";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "CV",
  description:
    "One-page curriculum vitae for Bryan Kwandou — roles, education, certifications, and selected shipped work. Built to print cleanly.",
};

const artifactTotal = Object.values(proofs).reduce((n, p) => n + p.artifacts.length, 0);
const selected = work.filter((w) => proofs[w.slug]?.artifacts.length).slice(0, 6);

export default function CV() {
  return (
    <div className="cv-page px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-[820px]">
        {/* Screen-only controls. */}
        <div className="cv-hide-print mb-14 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm text-paper-faint transition-colors duration-200 hover:text-paper"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to about
          </Link>
          <PrintButton />
        </div>

        {/* Header. */}
        <header className="border-b border-line pb-8">
          <h1 className="display text-[clamp(2rem,5vw,3rem)] leading-none text-paper">
            {profile.name}
          </h1>
          <p className="mt-3 text-sm text-paper-dim">{profile.role}</p>
          <p className="meta mt-4">{profile.location}</p>

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5">
            {profile.links
              .filter((l) => ["GitHub", "LinkedIn", "ORCID", "Email"].includes(l.label))
              .map((l) => (
                <li key={l.label} className="text-xs text-paper-faint">
                  <span className="text-paper-dim">{l.label}</span>{" "}
                  <a href={l.href} className="underline decoration-line-strong underline-offset-2">
                    {l.handle}
                  </a>
                </li>
              ))}
          </ul>
        </header>

        <Section title="Profile">
          <p className="prose-read text-sm">
            Computer science undergraduate who ships. Twenty-four products with live
            deployments this year, {artifactTotal} of them carrying on-chain artefacts
            anyone can verify on Solana devnet. Community organiser since 2010, founder of
            the university esports body, and campus lead for the Superteam blockchain club.
            The consistent thread is accountability: drawing the boundary an autonomous
            system cannot cross, and leaving a receipt on the other side of it.
          </p>
        </Section>

        <Section title="Experience">
          <div className="space-y-7">
            {roles.map((r) => (
              <article key={r.org} className="cv-block">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-[15px] text-paper">
                    {r.title}
                    <span className="text-paper-faint"> · </span>
                    <span className="text-ember">{r.org}</span>
                  </h3>
                  <p className="meta tnum shrink-0">{r.period}</p>
                </div>
                <p className="prose-read mt-2 text-sm">{r.summary}</p>
                <ul className="mt-2.5 space-y-1">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-xs text-paper-faint">
                      <span className="mt-[0.62em] h-px w-2.5 shrink-0 bg-line-strong" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section title="Selected work">
          <p className="prose-read text-sm">
            Six of twenty-four, chosen because each one deployed a program or settled a
            transaction that can still be inspected today.
          </p>
          <div className="mt-4 space-y-3">
            {selected.map((w) => (
              <div key={w.slug} className="cv-block flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-sm text-paper">{w.name}</h3>
                <span className="meta">{w.field}</span>
                <p className="w-full text-xs text-paper-faint">{w.tagline}</p>
              </div>
            ))}
          </div>
        </Section>

        <div className="grid gap-x-12 sm:grid-cols-2">
          <Section title="Education">
            <ul className="space-y-3.5">
              {education.map((e) => (
                <li key={e.school} className="cv-block">
                  <p className="text-sm text-paper">{e.school}</p>
                  <p className="mt-0.5 text-xs text-paper-faint">{e.detail}</p>
                  <p className="meta tnum mt-1">{e.period}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Certifications">
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c} className="text-xs text-paper-faint">
                  {c}
                </li>
              ))}
            </ul>
            <p className="meta mt-3">Dicoding Indonesia</p>
          </Section>
        </div>

        <Section title="Skills">
          <dl className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {skills.map((g) => (
              <div key={g.group} className="cv-block">
                <dt className="meta">{g.group}</dt>
                <dd className="mt-1 text-xs text-paper-dim">{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <p className="meta cv-hide-print mt-14 border-t border-line pt-6">
          The long version, with screenshots and verifiable artefacts, is at
          bryankwandou.vercel.app
        </p>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="meta border-b border-line pb-2">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
