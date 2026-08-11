import Link from "next/link";
import { profile } from "@/data/profile";
import { counts } from "@/data/archive";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-32 border-t border-line">
      <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo size={38} />
            <p className="prose-read mt-5 text-sm">
              Built in Makassar. The figures on this site come from public sources — the
              GitHub account, the LinkedIn profile, and the deployments themselves — and
              were last checked on {counts.checked}.
            </p>
          </div>

          <div>
            <p className="meta">Pages</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["/", "Home"],
                ["/work", "Work"],
                ["/journey", "Journey"],
                ["/about", "About"],
                ["/archive", "Archive"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-paper-dim transition-colors duration-200 hover:text-paper"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="meta">Elsewhere</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {profile.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-paper-dim transition-colors duration-200 hover:text-paper"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta">
            {profile.legalName} · {profile.location}
          </p>
          <p className="meta tnum">ORCID {profile.orcid}</p>
        </div>
      </div>
    </footer>
  );
}
