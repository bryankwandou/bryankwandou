export type Source = {
  name: string;
  handle: string;
  href: string;
  /** How the data was obtained. Stated plainly, including where it was manual. */
  method: string;
  fields: { field: string; value: string; shownOn: string }[];
  /** Anything the source contains that the site deliberately does not show. */
  omitted?: { what: string; why: string }[];
};

/**
 * A map from every public source to the page that renders it. The point is
 * that a reader can audit the site against the originals rather than take
 * "sourced from LinkedIn" on faith.
 *
 * Checked 14 August 2026.
 */
export const sources: Source[] = [
  {
    name: "LinkedIn",
    handle: "in/bryankwandou",
    href: "https://linkedin.com/in/bryankwandou",
    method:
      "Decoded from the profile PDF export. The file draws text as subset-font glyph IDs, so it was read through the embedded ToUnicode map rather than copied by hand.",
    fields: [
      { field: "Headline", value: "Content Creator, Web Developer, Esports Strategist", shownOn: "/about" },
      { field: "Summary", value: "Full narrative, rewritten in first person", shownOn: "/about, /journey" },
      { field: "UAJM Blockchain Club — Campus Lead", value: "Mar 2026 to present", shownOn: "/about, /cv" },
      { field: "UKM E-Sport — Founder & Chairman", value: "Sep 2025 to present", shownOn: "/about, /cv" },
      { field: "Rector Decree number", value: "032/UAJM/Rek/Kep/VI/2025", shownOn: "/about, /cv" },
      { field: "Organisation motto", value: "Main Cerdas, Menang Bermartabat", shownOn: "/about, /journey" },
      { field: "Four divisions", value: "Tournaments, training, creative media, PR", shownOn: "/about, /cv" },
      { field: "MANCER — Web3 Developer Scholar", value: "Apr to Jun 2026", shownOn: "/about, /cv" },
      { field: "Drip Labs — NFT Creator", value: "Mar 2024 to present", shownOn: "/about, /journey, /cv" },
      { field: "Tezos — NFT Artist", value: "Jan 2022 to present", shownOn: "/about, /journey, /cv" },
      { field: "Education", value: "All four schools, with dates", shownOn: "/about, /cv" },
      { field: "Certifications", value: "All five Dicoding certificates", shownOn: "/about, /cv" },
      { field: "Top skills", value: "Solana, smart contracts, dApps", shownOn: "/about, /cv" },
    ],
    omitted: [
      {
        what: "The contact address listed on the profile",
        why: "A different address is used across the site. Both are the account holder's; only one belongs on a page aimed at hiring managers.",
      },
    ],
  },

  {
    name: "GitHub",
    handle: "bryankwandou",
    href: "https://github.com/bryankwandou",
    method:
      "Pulled from the public REST API. Repository names, descriptions, languages, push dates, and homepage URLs are rendered exactly as the API returns them.",
    fields: [
      { field: "Public repositories", value: "128, forks excluded", shownOn: "/archive" },
      { field: "Repositories with a deployed URL", value: "9", shownOn: "/archive" },
      { field: "Language spread", value: "TypeScript 83, HTML 10, JavaScript 10, Dart 8, Rust 3", shownOn: "/archive" },
      { field: "Descriptions", value: "As written on each repo; 70 have none", shownOn: "/archive" },
      { field: "Product READMEs", value: "Architecture notes for 12 products", shownOn: "/work/[product]" },
      { field: "On-chain artefacts in READMEs", value: "19 program IDs, PDAs, and signatures", shownOn: "/work/[product]" },
    ],
    omitted: [
      {
        what: "A screenshot for 104 of the repositories",
        why: "They carry no deployed URL, so there is no running site to photograph. An invented image would be the one thing that discredits everything else here.",
      },
    ],
  },

  {
    name: "The deployed sites themselves",
    handle: "24 live URLs",
    href: "https://github.com/bryankwandou?tab=repositories",
    method:
      "Screenshots are captures of the running product, taken through headless Chrome against the live URL. Nothing is a mockup, a figma export, or a render of a design that was never built.",
    fields: [
      { field: "Products with a live deployment", value: "24", shownOn: "/work" },
      { field: "Screenshots", value: "93 captures across the 24", shownOn: "/work/[product]" },
      { field: "Stemloom, Cutwright, Aval", value: "Captured 15 August 2026", shownOn: "/work/[product]" },
    ],
  },

  {
    name: "Solana devnet",
    handle: "explorer.solana.com",
    href: "https://explorer.solana.com/?cluster=devnet",
    method:
      "Every artefact quoted from a README was checked against a devnet RPC node before publication — getAccountInfo for programs, getTransaction for signatures.",
    fields: [
      { field: "Deployed Anchor programs", value: "4 confirmed executable", shownOn: "/work/[product]" },
      { field: "Confirmed transactions", value: "4 verified, all succeeded", shownOn: "/work/[product]" },
      { field: "PDAs and wallets", value: "Linked to Explorer", shownOn: "/work/[product]" },
    ],
  },

  {
    name: "Tezos, via objkt",
    handle: "nayrbryanGaming",
    href: "https://objkt.com/tokens/KT1R67wX2kCii82cqyo8DVYWXccM4HcJwHki",
    method:
      "Queried through the public objkt GraphQL API. Creator address confirmed as tz2LB1bn…pZ2gi5 before anything was used, and images pulled from IPFS.",
    fields: [
      { field: "Tokens on the contract", value: "491", shownOn: "/photography" },
      { field: "Distinct days published", value: "381", shownOn: "/photography" },
      { field: "Daily series start", value: "17 July 2025", shownOn: "/photography" },
    ],
    omitted: [
      {
        what: "Tokens 0 to 18, and the generative PNG batch",
        why: "Casual phone snaps and non-photographic work. The gallery is the photography, not everything ever minted.",
      },
    ],
  },

  {
    name: "Instagram",
    handle: "bryan_kwandou",
    href: "https://instagram.com/bryan_kwandou",
    method:
      "Read from the public profile page. No session cookies were replayed and no automated scraping was used against the account.",
    fields: [
      { field: "Bio framing", value: "Creator and photographer", shownOn: "/journey, home" },
      { field: "Story highlights", value: "Community names in the marquee", shownOn: "home" },
    ],
  },

  {
    name: "Threads",
    handle: "bryan_kwandou",
    href: "https://threads.com/@bryan_kwandou",
    method: "Read from the public profile page.",
    fields: [{ field: "Bio", value: "Cross-checked against the LinkedIn summary", shownOn: "/journey" }],
  },

  {
    name: "Conference and course certificates",
    handle: "issued documents",
    href: "https://orcid.org/0009-0009-1652-0995",
    method:
      "Read from the certificates themselves. Each carries its own reference number, issuer, and date, none of which appear in the LinkedIn export.",
    fields: [
      { field: "ICoDSS 2026 presenter certificate", value: "Ref 188/B-2/ICODSS/EBS/VII/2026", shownOn: "/about, /cv" },
      { field: "Paper presented", value: "Weather-Aware Movie Recommendation System", shownOn: "/about, /cv" },
      { field: "GEMAR X IDN webinar", value: "Yayasan GEMAR Indonesia, Aug 2026", shownOn: "/about, /cv" },
    ],
    omitted: [
      {
        what: "Any certificate not held as a file",
        why: "Several are visible only as images inside LinkedIn posts, which the profile export does not carry and which are not read automatically.",
      },
    ],
  },

  {
    name: "ORCID",
    handle: "0009-0009-1652-0995",
    href: "https://orcid.org/0009-0009-1652-0995",
    method: "Queried through the public ORCID API.",
    fields: [{ field: "Registered identifier", value: "Present; no works or employment recorded", shownOn: "footer, /cv" }],
    omitted: [
      {
        what: "A publications section",
        why: "The record is empty. An empty section would imply the API was never checked.",
      },
    ],
  },
];

export const fieldCount = sources.reduce((n, s) => n + s.fields.length, 0);
export const omittedCount = sources.reduce((n, s) => n + (s.omitted?.length ?? 0), 0);
