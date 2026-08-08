import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { work } from "@/data/work";
import { Reveal, StaggerList, StaggerItem } from "@/components/motion-primitives";
import { StatusTag } from "@/components/status-tag";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Twenty-one products with live deployments — agentic payment rails, compliance interlocks, and operational software built so the record can be checked afterwards.",
};

export default function WorkIndex() {
  return (
    <>
      <section className="px-5 pb-14 pt-36 sm:px-8 sm:pt-44">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="meta">Twenty-one deployments</p>
            <h1 className="display mt-6 max-w-[15ch] text-[clamp(2.6rem,7.5vw,5rem)] text-paper">
              Everything with a live URL
            </h1>
            <p className="prose-read mt-7 text-lg">
              Each of these is deployed and reachable. Where something runs on Solana
              devnet it says devnet, and where it is a prototype it says prototype —
              the distinction matters more than the headline does. Screenshots are real
              captures, not mockups.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-[1180px]">
          <StaggerList className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((w, i) => (
              <StaggerItem key={w.slug}>
                <article className="group">
                  <Link href={`/work/${w.slug}`} className="block">
                    <div className="relative aspect-[16/11] overflow-hidden rounded-md border border-line bg-ink-raised">
                      <Image
                        src={`/shots/${w.slug}-1.png`}
                        alt={`${w.name} interface`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                        className="object-cover object-top transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                        priority={i < 3}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-30" />
                    </div>

                    <div className="mt-5 flex items-start gap-3">
                      <Image
                        src={`/logos/${w.slug}.svg`}
                        alt=""
                        width={34}
                        height={34}
                        className="mt-0.5 shrink-0 rounded-md"
                      />
                      <div className="min-w-0">
                        <h2 className="flex items-center gap-1.5 text-base text-paper">
                          {w.name}
                          <ArrowUpRight
                            size={14}
                            className="shrink-0 -translate-x-1 translate-y-1 text-ember opacity-0 transition-[transform,opacity] duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                          />
                        </h2>
                        <p className="mt-1.5 text-sm leading-snug text-paper-dim">{w.tagline}</p>
                        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                          <StatusTag status={w.status} />
                          <span className="meta">{w.field}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>
    </>
  );
}
