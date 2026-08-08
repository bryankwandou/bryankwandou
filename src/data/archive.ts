export type Entry = {
  name: string;
  slug: string;
  note: string;
  lang: string;
  year: string;
  repo: string;
  live?: string;
};

// Beyond the twenty-one deployed products there are another eighty-odd public
// repositories. These are the ones worth pointing at. Everything is public at
// github.com/bryankwandou.

export const infrastructure: Entry[] = [
  {
    name: "aval-rail",
    slug: "aval-rail",
    note: "A durable nonce holds an agent's Solana payment open while a person decides. Proved on devnet: the control window expired and the nonce still finalised four hours twenty-nine minutes later. Limits live in Rust rather than in a prompt.",
    lang: "TypeScript",
    year: "2026",
    repo: "https://github.com/bryankwandou/aval-rail",
    live: "https://aval-site.vercel.app",
  },
  {
    name: "aval-core",
    slug: "aval-core",
    note: "Solana substrate with no SDK underneath it, targeting wasm32-wasip2 agent plugins. Durable nonces, transaction encoding written by hand, injectable RPC. The canonical source the rest of the Aval work sits on.",
    lang: "Rust",
    year: "2026",
    repo: "https://github.com/bryankwandou/aval-core",
  },
  {
    name: "kernly",
    slug: "kernly",
    note: "Deterministic context compression for language agents, with a receipt for every run so the same input provably produces the same reduction.",
    lang: "TypeScript",
    year: "2026",
    repo: "https://github.com/bryankwandou/kernly",
  },
  {
    name: "zeroclaw-plugins",
    slug: "zeroclaw-plugins",
    note: "The official plugin registry behind ZeroClaw, wired into its search and install commands.",
    lang: "Rust",
    year: "2026",
    repo: "https://github.com/bryankwandou/zeroclaw-plugins",
  },
  {
    name: "loomstack",
    slug: "loomstack",
    note: "Five million lines of specification corpus, plus the router that makes the pile queryable.",
    lang: "PLpgSQL",
    year: "2026",
    repo: "https://github.com/bryankwandou/loomstack",
  },
  {
    name: "QUANTCOIN",
    slug: "quantcoin",
    note: "A post-quantum layer one experiment built on ML-DSA-87 and ML-KEM-1024 with DAG consensus. Ambitious, and honest about being a research build.",
    lang: "Rust",
    year: "2025",
    repo: "https://github.com/bryankwandou/QUANTCOIN",
  },
];

export const applications: Entry[] = [
  {
    name: "solumkm",
    slug: "solumkm",
    note: "A business copilot for Indonesian small traders. Records and reads transactions from plain Indonesian and keeps SHA-256 verifiable books. Built for the IDCamp Developer Challenge.",
    lang: "TypeScript",
    year: "2026",
    repo: "https://github.com/bryankwandou/solumkm",
  },
  {
    name: "cadensa",
    slug: "cadensa",
    note: "Reproductive health tracking that keeps its signals on the device and its vault encrypted end to end. A cadence index rather than a calendar.",
    lang: "TypeScript",
    year: "2026",
    repo: "https://github.com/bryankwandou/cadensa",
  },
  {
    name: "anamneon",
    slug: "anamneon",
    note: "Patient history with the hash anchored on Solana devnet and the actual record encrypted off-chain, which is the only arrangement that makes sense for medical data.",
    lang: "TypeScript",
    year: "2026",
    repo: "https://github.com/bryankwandou/anamneon",
  },
  {
    name: "tanki-request",
    slug: "tanki-request",
    note: "Water tanker request handling for PDAM Kota Makassar. Local government software for the city I live in.",
    lang: "TypeScript",
    year: "2026",
    repo: "https://github.com/bryankwandou/tanki-request",
  },
  {
    name: "antigravity-ide-frontend",
    slug: "antigravity-ide-frontend",
    note: "A full editor workbench rebuilt in the browser, with chat, terminal, and file tree. Mostly an exercise in how much of an IDE is layout.",
    lang: "JavaScript",
    year: "2026",
    repo: "https://github.com/bryankwandou/antigravity-ide-frontend",
  },
  {
    name: "MOVV-BMI",
    slug: "movv-bmi",
    note: "A body composition tracker in Flutter, and the first mobile app I took far enough to be worth keeping.",
    lang: "Dart",
    year: "2025",
    repo: "https://github.com/bryankwandou/MOVV-BMI",
  },
  {
    name: "pocketledger",
    slug: "pocketledger",
    note: "Offline expense tracking with a recurring transaction engine, aimed at the Play Store.",
    lang: "Dart",
    year: "2025",
    repo: "https://github.com/bryankwandou/pocketledger-offline-expense-tracker",
  },
  {
    name: "atlas-quant",
    slug: "atlas-quant",
    note: "A trading research system. Where the interest in market structure turned into something executable.",
    lang: "TypeScript",
    year: "2025",
    repo: "https://github.com/bryankwandou/atlas-quant",
  },
  {
    name: "NusaHarvest",
    slug: "nusaharvest",
    note: "Agricultural supply work aimed at Indonesian growers rather than at an export market.",
    lang: "TypeScript",
    year: "2025",
    repo: "https://github.com/bryankwandou/NusaHarvest",
  },
  {
    name: "EscrowKita",
    slug: "escrowkita",
    note: "Escrow for Indonesian peer-to-peer trade, where the trust problem is genuinely unsolved.",
    lang: "TypeScript",
    year: "2025",
    repo: "https://github.com/bryankwandou/EscrowKita",
  },
  {
    name: "vericodeai",
    slug: "vericodeai",
    note: "Code verification tooling. An early run at the checkability idea that later became most of the 2026 work.",
    lang: "TypeScript",
    year: "2025",
    repo: "https://github.com/bryankwandou/vericodeai",
  },
  {
    name: "skyseed-isles",
    slug: "skyseed-isles",
    note: "A browser game. Built to find out whether I could still make something with no compliance requirement in it.",
    lang: "JavaScript",
    year: "2026",
    repo: "https://github.com/bryankwandou/skyseed-isles",
  },
];

export const counts = {
  publicRepos: 104,
  deployedProducts: 21,
  screenshots: 84,
  checked: "6 August 2026",
};
