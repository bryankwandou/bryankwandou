export type Chapter = {
  year: string;
  /** Sorts the spine. Not shown. */
  order: number;
  title: string;
  strand: "community" | "craft" | "study" | "build";
  body: string;
  /** Where this is stated publicly. Shown, so a reader can check. */
  source: string;
};

/**
 * The arc, 2010 to now. Every entry traces to the LinkedIn export, the
 * Instagram or Threads profile, or the GitHub account. Where a date is given
 * only as a year on the source, it appears here only as a year.
 */
export const chapters: Chapter[] = [
  {
    year: "2010",
    order: 1,
    title: "NNG Esport, and the habit that started everything",
    strand: "community",
    body: "I was a kid who played games, in a city with no organised way to compete. So I made one. NNG Esport was grassroots in the literal sense — no funding, no sanction, just players who wanted somewhere to turn up. Everything I have built since has the same shape to it: find a group with no infrastructure, and build them some.",
    source: "LinkedIn summary; Threads bio, creator since 2010",
  },
  {
    year: "2012 — 2023",
    order: 2,
    title: "School in Makassar",
    strand: "study",
    body: "SD Menara Makassar, then SMP Katolik Rajawali, then SMA Negeri 1 Makassar on the science track. The gaming and the community work ran underneath all of it the whole time.",
    source: "LinkedIn education",
  },
  {
    year: "2022",
    order: 3,
    title: "First work on chain, on Tezos",
    strand: "craft",
    body: "Generative and AI-assisted pieces published through Objkt. This is where I learned that a release is not the end of the work — the collectors, the story around a drop, and turning up consistently are the work. Four years on and it still runs.",
    source: "LinkedIn, Tezos — Jan 2022 to present",
  },
  {
    year: "2023",
    order: 4,
    title: "Teknik Informatika at Atma Jaya Makassar",
    strand: "study",
    body: "Computer science, properly, on a degree that runs to 2027. The coursework matters less than what it gave me access to: hackathons, a campus, and enough theory to stop guessing.",
    source: "LinkedIn education, Sep 2023 — Jul 2027",
  },
  {
    year: "2024",
    order: 5,
    title: "Weekly drops on Drip.Haus",
    strand: "craft",
    body: "Moving onto Solana as a creator before I was building on it as an engineer. A weekly release cadence is a brutal teacher — it removes the option of waiting until something is perfect.",
    source: "LinkedIn, Drip Labs — Mar 2024 to present",
  },
  {
    year: "2025",
    order: 6,
    title: "The university esports body, made official",
    strand: "community",
    body: "Fifteen years after NNG, I did the same thing again with paperwork behind it. UKM E-Sport at Universitas Atma Jaya Makassar exists under Rector Decree 032/UAJM/Rek/Kep/VI/2025, with four divisions under it and a motto I chose deliberately: Main Cerdas, Menang Bermartabat. Play smart, win with dignity. It went from zero to more than twenty members in the first months.",
    source: "LinkedIn, UKM E-Sport — Sep 2025 to present",
  },
  {
    year: "2026",
    order: 7,
    title: "Superteam on campus",
    strand: "community",
    body: "I started the Superteam campus chapter to give students a way into Web3 that does not begin with a price chart. Teaching sessions, workshops, meetups — and a push toward building something rather than only reading about it.",
    source: "LinkedIn, UAJM Blockchain Club — Mar 2026 to present",
  },
  {
    year: "2026",
    order: 8,
    title: "The Mancer accelerator",
    strand: "study",
    body: "Selected onto the developer track of the Mancer and Superteam Web3 Career Accelerator. Three months of real technical briefs, Solana internals, and work trials rather than tutorials.",
    source: "LinkedIn, MANCER — Apr to Jun 2026",
  },
  {
    year: "2026",
    order: 9,
    title: "A paper at ICoDSS",
    strand: "study",
    body: "Presented a weather-aware movie recommendation system at the 3rd International Conference on Digital, Social and Science. My first time defending work in an academic room rather than a demo room.",
    source: "Instagram, certificate posted July 2026",
  },
  {
    year: "2026",
    order: 10,
    title: "Twenty-one products, one question",
    strand: "build",
    body: "A long run of shipping, and partway through it I noticed every build was answering the same thing. Payments, freight, childcare, home care, municipal services — different industries, identical missing part. An autonomous system can act, but nobody can check what it did afterwards. So I stopped treating that as a detail and started treating it as the product.",
    source: "GitHub, 104 public repositories; 21 live deployments",
  },
];

/** Labels for the strand filter. */
export const strands = [
  { id: "all", label: "Everything" },
  { id: "community", label: "Community" },
  { id: "craft", label: "Craft" },
  { id: "study", label: "Study" },
  { id: "build", label: "Building" },
] as const;

/**
 * The creative half. The site is heavy on engineering and the Instagram bio
 * leads with "Creator, Photographer" — this is the correction.
 */
export const craft = [
  {
    title: "Photography",
    detail:
      "Shooting is the oldest thing I still do that has nothing to do with a terminal. It is also why GalleryOS exists — I built a culling workflow because I have sat through the culling.",
    meta: "Instagram, @bryan_kwandou",
  },
  {
    title: "NFT work on Tezos",
    detail:
      "Generative and AI-assisted pieces through Objkt since January 2022, with collectors who have stayed across releases and collaborations with artists outside Indonesia.",
    meta: "Four years, ongoing",
  },
  {
    title: "Weekly drops on Drip.Haus",
    detail:
      "Solana-side creative work on a weekly cadence since March 2024, with rarity design and collector perks around each release.",
    meta: "Two and a half years, ongoing",
  },
  {
    title: "Esports",
    detail:
      "NNG Esport since 2010, and the official university body since 2025. Four divisions, weekly scrims, and a talent pathway for student players.",
    meta: "Sixteen years",
  },
];
