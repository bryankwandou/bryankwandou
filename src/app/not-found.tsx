import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <section className="flex min-h-[72vh] items-center px-5 pt-32 sm:px-8">
      <div className="mx-auto w-full max-w-[1180px]">
        <Logo size={52} />
        <p className="meta mt-8">404</p>
        <h1 className="display mt-4 max-w-[14ch] text-[clamp(2.4rem,7vw,4.5rem)] text-paper">
          Nothing filed under that address
        </h1>
        <p className="prose-read mt-6">
          The page either moved or never existed. The work index is probably what you
          were after.
        </p>
        <Link
          href="/work"
          className="group mt-9 inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm text-paper transition-colors duration-300 hover:border-ember hover:text-ember"
        >
          <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Go to the work
        </Link>
      </div>
    </section>
  );
}
