export type Artifact = {
  kind: "program" | "transaction" | "account" | "wallet";
  label: string;
  value: string;
};

export type Proof = {
  /** Architecture, in the author's own framing. Taken from each repo README. */
  layers?: string[];
  artifacts: Artifact[];
  /** Anything that limits the claim. Always shown when present. */
  caveat?: string;
};

/**
 * On-chain artifacts, transcribed from each project's own README. These are
 * public Solana devnet identifiers — program IDs, PDAs, and transaction
 * signatures — so a reader can open Explorer and check the claim rather than
 * believe it. Nothing here is a private key or a secret.
 *
 * Only projects whose README states an artifact appear. Products without one
 * are not padded out with something invented.
 */
export const proofs: Record<string, Proof> = {
  veylock: {
    layers: [
      "Reasoning — Groq proposes an intent, and never approves its own proposal",
      "Policy — deterministic TypeScript rules evaluate it, with every check shown",
      "Settlement — the Anchor vault program executes only what passed",
    ],
    artifacts: [
      { kind: "program", label: "Anchor program", value: "C4jFcBypYefdgw2goHbKREMjZSyRo4LknBVDP5cegYLN" },
      { kind: "account", label: "Policy PDA", value: "AdP6UCcPXsDF5Z19WFTPHuBaQ7HSZvLKPywNB457tVG7" },
      {
        kind: "transaction",
        label: "Finalised authorisation",
        value: "55EqFrgVeHu1CWdaWpcxwTZkgzMFpHVRkPpmRZQy62perdCtJqeBB75AXK8aKnEUQWivdFWniNb6mXrf17n2RPRE",
      },
    ],
    caveat:
      "Deployed and verified on devnet on 24 July 2026. The policy authority and the agent signer are separate keys, and live settlement is impossible while paper mode is on. Devnet software, not audited mainnet infrastructure.",
  },

  vowrail: {
    layers: [
      "An Anchor program holding policy and decision-receipt PDAs, so both the rule and the ruling are on chain",
      "Every decision writes a receipt rather than only permitting or refusing in memory",
      "Program upgraded in place to V2, with the deployment and upgrade transactions both public",
    ],
    artifacts: [
      { kind: "program", label: "Anchor program", value: "7Pn6g5g88YzD5aJyCzrftCwQqCWm8bxYxPpUC2xURG2V" },
      {
        kind: "transaction",
        label: "Deployment",
        value: "2NShY2nhrTeksh7utbMCXj4sDLF5FDwL75MP9Acyy9KquG5ffnbeP835bUVamfra6EXPmKyuwkE6n7pJUrRJdxSk",
      },
      {
        kind: "transaction",
        label: "Program upgrade",
        value: "3vDk8vhsaYMaAJtQRgT9QPbtkK773mboay76FKC6be6pQSBpaLBHaFscEaxCe69gdjyM2MQoqBF4ZzXax8zQ8T9h",
      },
      { kind: "account", label: "V2 policy PDA", value: "4dnDNabjFFKfKgpSypne7guRvFQEosvfd49ASUyvLYz5" },
      { kind: "account", label: "V2 receipt PDA", value: "nbiU3KWMD3qQrTFBHZSSGW4GbjMiWgqwvyKjB2zuVF3" },
      {
        kind: "transaction",
        label: "V2 workflow",
        value: "Fpf1DHzQ9ACET75j2k8KaBiPRZTQqbp48bkc7apmDgQNp8FwdvfT6oJYwyo8kDhn2wWf6CuKCFseQ6gmdETc2fN",
      },
    ],
  },

  x402gate: {
    layers: [
      "A request arrives with no payment and the endpoint answers 402 with a price",
      "The client settles on devnet, and the verifier checks confirmation, mint, treasury, amount, endpoint binding, and replay",
      "Groq advises on whether the call is worth making, and sits outside the authorisation path entirely",
    ],
    artifacts: [
      { kind: "program", label: "Spending-policy program", value: "6zuRsFMFybJGouCbHu5evfebbtKsde3agLRfq5ii74bW" },
      { kind: "account", label: "Policy PDA", value: "4jWioiHURCw1J13X39rTo5mWPFuFk9Fr9gU9fWnNkLvu" },
      { kind: "account", label: "Provider-limit PDA", value: "CyEqDoSjmi3EXd8vw8Q6eFh4yVwbjVp5kCGWkZ1hHm51" },
      {
        kind: "transaction",
        label: "Atomic payment",
        value: "35WLQGft7PbufLbjZALmy6FqAPXQqt8WJTBN6CrVVc72Fzkx1nAMrcyjcTgtPRqjGcFaJAUCogCKBmwaXpruvwaA",
      },
    ],
    caveat:
      "The atomic transaction carries authorise_spend, the USDC transfer, and the endpoint memo under one signature. Replay claims are held in Redis in production. The reference route charges 0.0125 devnet USDC.",
  },

  kinferry: {
    layers: [
      "Recipient verification lives on a single-use, expiring, recipient-owned link — the sender's agent never decides who is trusted",
      "FX quote locks are signed server-side, so a forged expiry or amount is rejected rather than argued about",
      "Nonce and content-fingerprint checks stop the same transfer going twice",
      "An Anchor program holds owner-only allowlisting and spending caps, with real execute_transfer calls moving devnet SOL",
    ],
    artifacts: [
      { kind: "program", label: "Devnet program", value: "HZiw1u9BoKkdhppnN22HJzXUQJDca2yMeDY8wqywSdEs" },
      {
        kind: "transaction",
        label: "Deployment",
        value: "56SvRjDR3aPUzEvv1tjbKXRZhheJNw1mWVgfjLQCZ3wgENwQRdcwB2w1URXmKGQuVtkyLDreyFChhbQHVfWQxhfg",
      },
    ],
  },

  civiflow: {
    artifacts: [
      {
        kind: "transaction",
        label: "Verified production demo",
        value: "2oQjqt3bmw7PGjjEsguL6xpSPuY1P9PhHf3QZzvmD6R4VmqZ2Bs7kBVpKd32LBgPB1Sx1s2SjT15JuEdzbGc3eqF",
      },
    ],
  },

  childcareos: {
    layers: [
      "Staff-to-child ratio and capacity are decided server-side, where a busy Friday cannot talk them down",
      "Revoked pickup access is a hard block, not a warning",
      "Incident drafts are grounded in what staff actually observed, and mandatory review sits before guardian notification",
      "The Groq operations agent advises and is structurally unable to change safety state",
    ],
    artifacts: [
      { kind: "wallet", label: "Public wallet", value: "35z7X59rtyts557Up1RAwpyYN7x2cFqcDc7RjPuNxFzr" },
      {
        kind: "transaction",
        label: "Recorded transaction",
        value: "26EeeFRZ3NaLfwhABzLrTUpXRq1MPtud1uE8EDeJyUE515YiYVN5w4SkPvBDGd8Sz4QmXpqd8MLR4hxg9TeuovoL",
      },
    ],
  },

  briefrail: {
    artifacts: [
      {
        kind: "transaction",
        label: "Production attestation",
        value: "3pepEL4ZBvnMd7ksA7Uyaw25K3YAynaYS2APoR4dM3EPn94Xm4sGLqhAnUuek2HdfRdkCUzFD1Jh6CU4U1TFAxrk",
      },
      { kind: "wallet", label: "Devnet attestor", value: "DSWBYzBpf9ej2oA4PTSJhh8JS5cfqkmVsGuK9PkWF3iW" },
    ],
  },

  "dissentgrid": {
    layers: [
      "Eight Groq calls per run — four independent analyses, then four cross-examinations",
      "Claim-level positions carry source references, and stability between rounds is detected rather than assumed",
      "Dissent preservation is covered by regression tests, so a later change cannot quietly start averaging opinions",
    ],
    artifacts: [],
  },

  "accordos-ai": {
    layers: [
      "Deterministic negotiation logic; a language model writes the explanation, never the outcome",
      "Two separate wallet signatures, each bound to one negotiation identity so neither can be replayed elsewhere",
      "Public verification compares the signature and the confirmed devnet transaction against the agreement hash",
    ],
    artifacts: [],
  },

  visitrail: {
    layers: [
      "The AI picks and explains tools, and is not permitted to authorise billing",
      "Manual duration entry cannot satisfy electronic visit verification — the shortcut is closed",
      "Unconfirmed tasks never render as completed, and flagged visits wait for a coordinator",
      "On-chain Memo proofs carry hashes only; no names, addresses, notes, or health data ever leave",
    ],
    artifacts: [],
    caveat:
      "Wallet signing is explicit and private keys never reach the application. The demo signer rejects anonymous calls and requires a short-lived verified session.",
  },

  galleryos: {
    layers: [
      "Culling suggestions never remove a frame on their own; a human confirms every cut",
      "Real browser pixel measurement feeds the technical reasoning, so the critique is grounded in the image rather than guessed",
      "Client selections come back as signed receipts that can be checked for tampering",
      "Cull decision invariants are covered by unit tests",
    ],
    artifacts: [],
  },

  evercue: {
    layers: [
      "Timeline state synchronises across tabs every five seconds, because a run of show is operated by more than one person",
      "Groq actions run server-side only, for vendor outreach, proposal comparison, and timeline drafting",
      "Memo transactions anchor timeline version hashes, and verification checks both transaction success and the exact on-chain Memo content",
      "Client and vendor portals are signed, scoped to one event, and expire after 24 hours",
    ],
    artifacts: [],
  },

  stewardlane: {
    layers: [
      "Meeting preparation comes from a real model call — no canned commentary ships as though it were generated",
      "Role separation is enforced: associates cannot see full holdings, compliance gets an audit view",
      "Approval writes an append-only audit event carrying actor, time, action, and a SHA-256 content hash",
      "The approved hash can optionally be published through the Solana Memo program",
    ],
    artifacts: [],
  },

  servetrace: {
    layers: [
      "The agent route uses strict JSON mode to select exactly one governed operations tool",
      "Every call returns a model and request receipt alongside a deterministic result",
      "Readings and corrective actions become enforced decisions rather than log entries",
    ],
    artifacts: [],
  },
};

/** Solana Explorer, pinned to devnet since that is where all of this lives. */
export function explorerUrl(a: Artifact): string {
  const base = "https://explorer.solana.com";
  const q = "?cluster=devnet";
  return a.kind === "transaction" ? `${base}/tx/${a.value}${q}` : `${base}/address/${a.value}${q}`;
}

export const proofCount = Object.values(proofs).reduce((n, p) => n + p.artifacts.length, 0);
