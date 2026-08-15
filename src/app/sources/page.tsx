import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { sources, fieldCount, omittedCount } from "@/data/coverage";
import { Reveal, StaggerList, StaggerItem } from "@/components/motion-primitives";
import { T } from "@/components/lang-provider";

export const metadata: Metadata = {
  title: "Sources",
  description:
    "Where every fact on this site came from, and which page renders it. LinkedIn, GitHub, Solana devnet, Tezos, Instagram, Threads, and ORCID — with what was deliberately left out.",
};

export default function Sources() {
  return (
    <>
      <section className="px-5 pb-16 pt-36 sm:px-8 sm:pt-44">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="meta"><T k="sources.eyebrow" /></p>
            <h1 className="display mt-6 max-w-[17ch] text-[clamp(2.6rem,7.5vw,5rem)] text-paper">
              <T k="sources.title" />
            </h1>
            <p className="prose-read mt-7 text-lg">
              <T k="sources.lede" vars={{ fields: fieldCount }} />
            </p>
            <p className="prose-read mt-4 text-sm">
              <T k="sources.note" vars={{ omitted: omittedCount }} />
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-[1180px]">
          <StaggerList>
            {sources.map((s) => (
              <StaggerItem key={s.name}>
                <article className="border-t border-line py-10">
                  <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-14">
                    <div>
                      <div className="flex items-baseline gap-3">
                        <h2 className="text-lg text-paper">{s.name}</h2>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-center gap-1 text-sm text-ember transition-opacity duration-200 hover:opacity-75"
                        >
                          {s.handle}
                          <ArrowUpRight
                            size={12}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </a>
                      </div>
                      <p className="prose-read mt-3 text-sm">{s.method}</p>
                    </div>

                    <div>
                      <dl>
                        {s.fields.map((f) => (
                          <div
                            key={f.field}
                            className="grid grid-cols-1 gap-x-6 gap-y-1 border-t border-line py-3 sm:grid-cols-[160px_1fr_auto]"
                          >
                            <dt className="meta">{f.field}</dt>
                            <dd className="text-sm text-paper-dim">{f.value}</dd>
                            <dd className="meta shrink-0 text-ember/85">{f.shownOn}</dd>
                          </div>
                        ))}
                      </dl>

                      {s.omitted?.map((o) => (
                        <div
                          key={o.what}
                          className="mt-5 border-l-2 border-ember/45 pl-5"
                        >
                          <p className="meta">Not shown — {o.what}</p>
                          <p className="prose-read mt-1.5 text-sm">{o.why}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>
    </>
  );
}
