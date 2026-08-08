import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { work, workBySlug } from "@/data/work";
import { Reveal } from "@/components/motion-primitives";
import { StatusTag } from "@/components/status-tag";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const w = workBySlug[slug];
  if (!w) return {};
  return {
    title: w.name,
    description: w.tagline,
    openGraph: {
      title: `${w.name} — ${w.field}`,
      description: w.tagline,
      images: [{ url: `/shots/${w.slug}-1.png`, width: 1200, height: 750 }],
    },
  };
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = workBySlug[slug];
  if (!w) notFound();

  const index = work.findIndex((x) => x.slug === slug);
  const next = work[(index + 1) % work.length];

  return (
    <>
      <section className="px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm text-paper-faint transition-colors duration-200 hover:text-paper"
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              All work
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_300px] lg:gap-16">
            <Reveal>
              <div className="flex items-center gap-4">
                <Image
                  src={`/logos/${w.slug}.svg`}
                  alt=""
                  width={54}
                  height={54}
                  className="rounded-lg"
                />
                <div>
                  <h1 className="display text-[clamp(2.2rem,6vw,3.6rem)] leading-none text-paper">
                    {w.name}
                  </h1>
                  <p className="meta mt-2">{w.field}</p>
                </div>
              </div>

              <p className="mt-8 max-w-[34ch] text-xl leading-snug text-paper">{w.tagline}</p>
              <p className="prose-read mt-6">{w.note}</p>
            </Reveal>

            {/* Metadata rail. Facts, in mono, where facts belong. */}
            <Reveal delay={0.08}>
              <dl className="divide-y divide-line border-y border-line">
                <div className="flex items-center justify-between py-3.5">
                  <dt className="meta">Status</dt>
                  <dd>
                    <StatusTag status={w.status} />
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 py-3.5">
                  <dt className="meta shrink-0">Stack</dt>
                  <dd className="text-right text-sm text-paper-dim">{w.stack.join(", ")}</dd>
                </div>
                <div className="flex items-center justify-between py-3.5">
                  <dt className="meta">Captures</dt>
                  <dd className="meta tnum text-paper-dim">{w.shots}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={w.live}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-between rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Open the product
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href={w.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-between rounded-full border border-line-strong px-6 py-3 text-sm text-paper transition-colors duration-300 hover:border-ember hover:text-ember"
                >
                  Read the source
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Captures. Full-bleed-ish, staggered widths so it reads as a spread
          rather than a uniform grid. */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-[1180px] space-y-6">
          {Array.from({ length: w.shots }, (_, i) => i + 1).map((n) => (
            <Reveal key={n} delay={0.02 * n}>
              <figure
                className={`overflow-hidden rounded-lg border border-line bg-ink-raised ${
                  n % 3 === 2 ? "lg:mr-[14%]" : n % 3 === 0 ? "lg:ml-[14%]" : ""
                }`}
              >
                <Image
                  src={`/shots/${w.slug}-${n}.png`}
                  alt={`${w.name}, screen ${n} of ${w.shots}`}
                  width={1600}
                  height={1000}
                  sizes="(max-width: 1180px) 100vw, 1180px"
                  className="h-auto w-full"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Next. */}
      <section className="px-5 sm:px-8">
        <div className="mx-auto max-w-[1180px]">
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-wrap items-end justify-between gap-6 border-t border-line py-12"
          >
            <div>
              <p className="meta">Next</p>
              <p className="display mt-3 text-[clamp(1.8rem,4.5vw,3rem)] text-paper-dim transition-colors duration-300 group-hover:text-paper">
                {next.name}
              </p>
            </div>
            <ArrowRight
              size={22}
              className="mb-3 text-paper-faint transition-[transform,color] duration-300 group-hover:translate-x-2 group-hover:text-ember"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
