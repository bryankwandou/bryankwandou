import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { infrastructure, applications, counts, type Entry } from "@/data/archive";
import { repoCount, deployedCount } from "@/data/repos";
import { Reveal, StaggerList, StaggerItem } from "@/components/motion-primitives";
import { RepoIndex } from "@/components/repo-index";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "Beyond the deployed products: Solana substrate in Rust, a post-quantum chain experiment, local government software for Makassar, mobile apps in Flutter, and the rest of 104 public repositories.",
};

function Row({ e, n }: { e: Entry; n: number }) {
  return (
    <div className="group grid gap-3 border-t border-line py-7 md:grid-cols-[46px_200px_1fr_88px] md:items-start md:gap-8">
      <span className="meta tnum md:pt-1">{String(n).padStart(2, "0")}</span>

      <div className="md:pt-0.5">
        <a
          href={e.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-sm text-paper transition-colors duration-200 hover:text-ember"
        >
          {e.name}
          <ArrowUpRight
            size={13}
            className="-translate-x-1 translate-y-1 opacity-0 transition-[transform,opacity] duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
          />
        </a>
        {e.live && (
          <a
            href={e.live}
            target="_blank"
            rel="noreferrer"
            className="meta mt-1.5 block transition-colors duration-200 hover:text-ember"
          >
            Live deployment
          </a>
        )}
      </div>

      <p className="prose-read text-sm">{e.note}</p>

      <div className="flex items-center gap-3 md:flex-col md:items-end md:gap-1.5 md:pt-1">
        <span className="meta">{e.lang}</span>
        <span className="meta tnum">{e.year}</span>
      </div>
    </div>
  );
}

export default function Archive() {
  return (
    <>
      <section className="px-5 pb-16 pt-36 sm:px-8 sm:pt-44">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="meta">Archive</p>
            <h1 className="display mt-6 max-w-[16ch] text-[clamp(2.6rem,7.5vw,5rem)] text-paper">
              The repositories behind the products
            </h1>
            <p className="prose-read mt-7 text-lg">
              There are {counts.publicRepos} public repositories on the account and only{" "}
              {counts.deployedProducts} of them have a polished front door. These are the
              ones from the other pile that are worth pointing at — some because the
              engineering underneath is the interesting part, some because they solve a
              problem in the city I actually live in.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-8 border-t border-line pt-8">
              <div>
                <dt className="display tnum text-[2.2rem] leading-none text-paper">
                  {counts.publicRepos}
                </dt>
                <dd className="meta mt-2">public repositories</dd>
              </div>
              <div>
                <dt className="display tnum text-[2.2rem] leading-none text-paper">
                  {counts.deployedProducts}
                </dt>
                <dd className="meta mt-2">live deployments</dd>
              </div>
              <div>
                <dt className="display tnum text-[2.2rem] leading-none text-paper">
                  {counts.screenshots}
                </dt>
                <dd className="meta mt-2">captures on file</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <h2 className="display text-[clamp(1.7rem,3.6vw,2.4rem)] text-paper">
              Substrate and protocol
            </h2>
            <p className="prose-read mt-3 text-sm">
              The layer under the products. Mostly Rust, mostly unglamorous.
            </p>
          </Reveal>
          <StaggerList className="mt-10">
            {infrastructure.map((e, i) => (
              <StaggerItem key={e.slug}>
                <Row e={e} n={i + 1} />
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <h2 className="display text-[clamp(1.7rem,3.6vw,2.4rem)] text-paper">
              Applications and experiments
            </h2>
            <p className="prose-read mt-3 text-sm">
              Products, coursework that outgrew the assignment, and a few things built
              purely because I wanted to see whether they would work.
            </p>
          </Reveal>
          <StaggerList className="mt-10">
            {applications.map((e, i) => (
              <StaggerItem key={e.slug}>
                <Row e={e} n={infrastructure.length + i + 1} />
              </StaggerItem>
            ))}
          </StaggerList>

        </div>
      </section>

      {/* Everything, not just the curated part. Pulled from the GitHub API so
          the list cannot quietly drift out of date with the account. */}
      <section className="border-t border-line px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1180px]">
          <Reveal>
            <p className="meta">Complete index</p>
            <h2 className="display mt-4 max-w-[20ch] text-[clamp(2rem,4.6vw,3rem)] text-paper">
              Every public repository, including the ones that went nowhere
            </h2>
            <p className="prose-read mt-6">
              {repoCount} repositories, forks excluded. {deployedCount} of them have a
              deployed URL; the rest are libraries, experiments, and coursework that were
              never published. Listing the whole account rather than a flattering slice is
              the point — a portfolio that only shows the wins is not evidence of anything.
            </p>
          </Reveal>

          <div className="mt-12">
            <RepoIndex />
          </div>

          <Reveal>
            <a
              href="https://github.com/bryankwandou?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="group mt-12 inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm text-paper transition-colors duration-300 hover:border-ember hover:text-ember"
            >
              Check the account on GitHub
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
