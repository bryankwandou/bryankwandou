import type { Work } from "@/data/work";

const COPY: Record<Work["status"], string> = {
  devnet: "Solana devnet",
  prototype: "Prototype",
  live: "Live",
};

/**
 * Says exactly what a thing is. Devnet is not mainnet and a prototype is not a
 * business, and pretending otherwise is the fastest way to lose a reader who
 * knows the difference.
 */
export function StatusTag({ status }: { status: Work["status"] }) {
  const isRunning = status === "devnet" || status === "live";
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="relative flex h-1.5 w-1.5">
        {isRunning && (
          <span className="breathe absolute inline-flex h-full w-full rounded-full bg-signal" />
        )}
        <span
          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
            isRunning ? "bg-signal" : "bg-paper-faint"
          }`}
        />
      </span>
      <span className="meta">{COPY[status]}</span>
    </span>
  );
}
