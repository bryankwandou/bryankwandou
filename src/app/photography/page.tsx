import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { photos, photographCount, dayCount, firstDay, CONTRACT, CREATOR } from "@/data/photos";
import { Reveal } from "@/components/motion-primitives";
import { T } from "@/components/lang-provider";
import { PhotoGrid } from "@/components/photo-grid";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "A photograph published almost every day since July 2025, minted on Tezos. Landscapes, streets, and coastline around Makassar and South Sulawesi.",
};

export default function Photography() {
  return (
    <>
      <section className="px-5 pb-14 pt-36 sm:px-8 sm:pt-44">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="meta"><T k="photo.eyebrow" vars={{ date: firstDay }} /></p>
            <h1 className="display mt-6 max-w-[16ch] text-[clamp(2.6rem,7.5vw,5rem)] text-paper">
              <T k="photo.title" />
            </h1>
            <div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
              <div>
                <p className="prose-read text-lg">
                  <T k="photo.lede" />
                </p>
                <p className="prose-read mt-4">
                  <T k="photo.body" vars={{ days: dayCount }} />
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-8 self-start border-l border-line pl-8">
                <div>
                  <dt className="display tnum text-[2.4rem] leading-none text-paper">
                    {photographCount}
                  </dt>
                  <dd className="mt-2 text-xs leading-snug text-paper-faint">
                    photographs published
                  </dd>
                </div>
                <div>
                  <dt className="display tnum text-[2.4rem] leading-none text-paper">
                    {dayCount}
                  </dt>
                  <dd className="mt-2 text-xs leading-snug text-paper-faint">days covered</dd>
                </div>
                <div>
                  <dt className="display tnum text-[2.4rem] leading-none text-paper">
                    {photos.length}
                  </dt>
                  <dd className="mt-2 text-xs leading-snug text-paper-faint">shown here</dd>
                </div>
                <div>
                  <dt className="display tnum text-[2.4rem] leading-none text-paper">1</dt>
                  <dd className="mt-2 text-xs leading-snug text-paper-faint">
                    contract, all of it
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-[1180px]">
          <PhotoGrid />
        </div>
      </section>

      {/* Same standard as the engineering pages: name the source, let it be checked. */}
      <section className="border-t border-line px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
              <div>
                <p className="meta"><T k="photo.provenance" /></p>
                <h2 className="display mt-4 max-w-[18ch] text-[clamp(1.7rem,3.6vw,2.4rem)] text-paper">
                  Where these came from
                </h2>
              </div>
              <div>
                <p className="prose-read text-sm">
                  All of it sits on one Tezos contract under one creator address. The
                  sixty here are spread evenly across the run rather than cherry-picked
                  from a good month, and the selfies and generative pieces on the same
                  contract are left out — this page is the photography.
                </p>
                <dl className="mt-6">
                  <div className="flex items-baseline justify-between gap-4 border-t border-line py-3.5">
                    <dt className="meta shrink-0">Contract</dt>
                    <dd className="truncate font-mono text-sm text-paper-dim">{CONTRACT}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-t border-line py-3.5">
                    <dt className="meta shrink-0">Creator</dt>
                    <dd className="truncate font-mono text-sm text-paper-dim">{CREATOR}</dd>
                  </div>
                </dl>
                <a
                  href={`https://objkt.com/tokens/${CONTRACT}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm text-paper transition-colors duration-300 hover:border-ember hover:text-ember"
                >
                  Open the whole collection
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-8">
              <p className="display max-w-[20ch] text-[clamp(1.7rem,3.6vw,2.5rem)] text-paper">
                One of the products on this site exists because of this habit.
              </p>
              <Link
                href="/work/galleryos"
                className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
              >
                GalleryOS
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
