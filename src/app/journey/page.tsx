import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { craft } from "@/data/journey";
import { Reveal, StaggerList, StaggerItem } from "@/components/motion-primitives";
import { JourneySpine } from "@/components/journey-spine";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "Sixteen years, from founding a grassroots esports outfit in 2010 to shipping twenty-one products in 2026. Community, craft, study, and building — four strands of the same habit.",
};

export default function Journey() {
  return (
    <>
      <section className="px-5 pb-16 pt-36 sm:px-8 sm:pt-44">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="meta">2010 — now</p>
            <h1 className="display mt-6 max-w-[14ch] text-[clamp(2.6rem,7.5vw,5rem)] text-paper">
              Sixteen years of the same habit
            </h1>
            <p className="prose-read mt-7 text-lg">
              It looks like four unrelated careers on paper — esports, photography, NFT
              art, infrastructure engineering. It is one thing repeated. Find a group of
              people with nothing built for them, and build them something. The medium
              changed; the reflex did not.
            </p>
            <p className="prose-read mt-4 text-sm">
              Every entry below names where it is publicly stated, so none of it has to
              be taken on trust.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-[1180px]">
          <JourneySpine />
        </div>
      </section>

      {/* The creative half, which the rest of the site under-reports. */}
      <section className="border-y border-line bg-ink-deep px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="meta">The other half</p>
            <h2 className="display mt-4 max-w-[20ch] text-[clamp(2rem,4.6vw,3.2rem)] text-paper">
              I did not stop making things when I started shipping software
            </h2>
            <p className="prose-read mt-6">
              Most of this site is engineering, because that is what produces artefacts
              with URLs. It is a partial picture. The camera and the community work came
              first and never stopped, and they are the reason a few of the products
              exist at all.
            </p>
          </Reveal>

          <StaggerList className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {craft.map((c) => (
              <StaggerItem key={c.title}>
                <div className="border-t border-line pt-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg text-paper">{c.title}</h3>
                    <span className="meta shrink-0">{c.meta}</span>
                  </div>
                  <p className="prose-read mt-3 text-sm">{c.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div>
                <p className="meta">Next</p>
                <p className="display mt-3 max-w-[18ch] text-[clamp(1.9rem,4.4vw,2.9rem)] text-paper">
                  The work this all led to
                </p>
              </div>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
              >
                Twenty-one products
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
