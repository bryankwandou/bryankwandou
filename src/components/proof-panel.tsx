"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { explorerUrl, type Proof } from "@/data/proof";

const KIND_LABEL: Record<string, string> = {
  program: "Program",
  transaction: "Transaction",
  account: "Account",
  wallet: "Wallet",
};

/** Middle-truncate, keeping both ends — the ends are what people match on. */
function shorten(v: string) {
  return v.length <= 24 ? v : `${v.slice(0, 10)}…${v.slice(-8)}`;
}

function ArtifactRow({ a }: { a: ReturnType<() => Proof["artifacts"][number]> }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(a.value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be blocked by permissions policy. The value is still
      // selectable and the Explorer link still works, so fail quietly.
    }
  }

  return (
    <div className="flex items-center justify-between gap-4 border-t border-line py-3.5">
      <div className="min-w-0">
        <p className="meta">
          {KIND_LABEL[a.kind]} · {a.label}
        </p>
        <p className="tnum mt-1 truncate font-mono text-sm text-paper-dim">{shorten(a.value)}</p>
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <button
          onClick={copy}
          className="relative flex h-8 w-8 items-center justify-center rounded text-paper-faint transition-colors duration-200 hover:text-paper"
          aria-label={`Copy ${a.label}`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="done"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.18 }}
              >
                <Check size={14} className="text-signal" />
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.18 }}
              >
                <Copy size={14} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <a
          href={explorerUrl(a)}
          target="_blank"
          rel="noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded text-paper-faint transition-colors duration-200 hover:text-ember"
          aria-label={`Open ${a.label} on Solana Explorer`}
        >
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

export function ProofPanel({ proof }: { proof: Proof }) {
  const hasArtifacts = proof.artifacts.length > 0;

  return (
    <div>
      {proof.layers && (
        <div className="mb-12">
          <p className="meta">How it fits together</p>
          <ol className="mt-5">
            {proof.layers.map((l, i) => (
              <li key={l} className="flex gap-5 border-t border-line py-4">
                <span className="meta tnum mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="prose-read text-sm">{l}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {hasArtifacts && (
        <div>
          <p className="meta">Check it yourself</p>
          <p className="prose-read mt-3 text-sm">
            These identifiers are on Solana devnet. Open any of them in Explorer and the
            claim either holds or it does not.
          </p>
          <div className="mt-5">
            {proof.artifacts.map((a) => (
              <ArtifactRow key={a.value} a={a} />
            ))}
          </div>
        </div>
      )}

      {proof.caveat && (
        <p className="prose-read mt-8 border-l-2 border-ember/45 pl-5 text-sm">{proof.caveat}</p>
      )}
    </div>
  );
}
