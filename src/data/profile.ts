// Every field below traces to a public source: the LinkedIn profile export,
// the GitHub account, the Instagram and Threads profiles, or the ORCID registry.
// Nothing here is invented.

export const profile = {
  name: "Bryan Kwandou",
  legalName: "Vincentius Bryan Kwandou",
  handle: "nayrbryanGaming",
  role: "Content creator, web developer, esports organiser",
  location: "Makassar, South Sulawesi, Indonesia",
  origin: "Jayapura, Indonesia",
  pronouns: "he/him",
  orcid: "0009-0009-1652-0995",
  email: "vincentius.kwandou@gmail.com",
  avatar: "https://avatars.githubusercontent.com/u/263014785?v=4",

  // Written for the site. The source material is the LinkedIn summary; the
  // phrasing here is my own and deliberately drops the resume register.
  lede:
    "I build software that leaves a trail. Twenty-four products shipped this year, and the same question sits under every one of them: after the machine acts, can a person still check what happened?",

  bio: [
    "I started in gaming in 2010, which is a long time before any of this looked like a career. NNG Esport came out of that — a grassroots thing I put together because the players around me had nowhere organised to compete. Running it taught me more about audiences, brand, and keeping a community alive than any course has since.",
    "The building came later and it came fast. I read computer science at Universitas Atma Jaya Makassar, and somewhere between coursework and hackathons I found the problem I keep circling: autonomous systems are getting very good at doing things and very bad at being accountable for them. So most of what I ship now puts a hard boundary around the machine and a receipt on the other side of it.",
    "I still shoot photographs. I still release NFT work on Tezos and Drip.Haus. I founded the university esports body and I lead the campus blockchain club. These read like unrelated columns on a CV, but they are one habit — find a group of people with no infrastructure, and build them some.",
  ],

  /** The same three paragraphs in Indonesian, written rather than translated. */
  bioId: [
    "Saya mulai dari dunia gaming pada 2010, jauh sebelum hal ini kelihatan seperti karier. NNG Esport lahir dari sana — sesuatu yang saya bentuk dari bawah karena para pemain di sekitar saya tidak punya tempat yang terorganisir untuk bertanding. Menjalankannya mengajari saya soal audiens, merek, dan cara menjaga komunitas tetap hidup lebih banyak daripada kursus mana pun sesudahnya.",
    "Urusan membangun perangkat lunak datang belakangan, dan datangnya cepat. Saya kuliah ilmu komputer di Universitas Atma Jaya Makassar, dan di antara tugas kuliah dan hackathon saya menemukan persoalan yang terus saya putari: sistem otonom makin pandai melakukan sesuatu dan makin buruk dalam mempertanggungjawabkannya. Karena itu hampir semua yang saya rilis sekarang memasang batas keras di depan mesin, dan sebuah tanda terima di sisi seberangnya.",
    "Saya masih memotret. Saya masih merilis karya NFT di Tezos dan Drip.Haus. Saya mendirikan badan esport universitas dan memimpin klub blockchain kampus. Di atas kertas ini terlihat seperti kolom-kolom yang tidak berhubungan, padahal semuanya satu kebiasaan — temukan sekelompok orang yang belum punya wadah, lalu bangunkan wadahnya.",
  ],

  // Counts are computed from the public GitHub account, checked 14 August 2026.
  stats: [
    { value: "128", label: "public repositories" },
    { value: "24", label: "products with live deployments" },
    { value: "402", label: "photographs published on chain" },
    { value: "2010", label: "building communities since" },
  ],

  links: [
    { label: "GitHub", href: "https://github.com/bryankwandou", handle: "bryankwandou" },
    { label: "LinkedIn", href: "https://linkedin.com/in/bryankwandou", handle: "bryankwandou" },
    { label: "Instagram", href: "https://instagram.com/bryan_kwandou", handle: "bryan_kwandou" },
    { label: "Threads", href: "https://threads.com/@bryan_kwandou", handle: "bryan_kwandou" },
    { label: "TikTok", href: "https://tiktok.com/@nayrbryanGaming", handle: "nayrbryanGaming" },
    { label: "X", href: "https://x.com/nayrbryanGaming", handle: "nayrbryanGaming" },
    { label: "ORCID", href: "https://orcid.org/0009-0009-1652-0995", handle: "0009-0009-1652-0995" },
    { label: "Email", href: "mailto:vincentius.kwandou@gmail.com", handle: "vincentius.kwandou@gmail.com" },
  ],
} as const;

export type Role = {
  org: string;
  title: string;
  start: string;
  end: string;
  period: string;
  place: string;
  summary: string;
  points: string[];
};

// Source: LinkedIn profile export, August 2026.
export const roles: Role[] = [
  {
    org: "UAJM Blockchain Club — Superteam Campus",
    title: "Campus Lead, Founder",
    start: "2026-03",
    end: "",
    period: "Mar 2026 — now",
    place: "Makassar",
    summary:
      "I started the Superteam campus chapter at Universitas Atma Jaya Makassar to give students a route into Web3 that does not begin with a price chart.",
    points: [
      "Run the teaching sessions on blockchain and decentralised systems",
      "Connect students on campus to the wider Superteam ecosystem",
      "Host workshops, meetups, and open discussion nights",
      "Push members toward building something rather than only reading about it",
    ],
  },
  {
    org: "UKM E-Sport Universitas Atma Jaya Makassar",
    title: "Founder, Chairman",
    start: "2025-09",
    end: "",
    period: "Sep 2025 — now",
    place: "Makassar",
    summary:
      "I founded the university's official esports body, formalised under Rector Decree 032/UAJM/Rek/Kep/VI/2025, and chair it across four divisions.",
    points: [
      "Four divisions under me: tournaments, training and development, creative media, public relations",
      "Weekly scrims, workshops, and a talent pathway for student players",
      "Took the community from nothing to more than twenty members inside the first months",
      "Set the motto the organisation runs on — Main Cerdas, Menang Bermartabat",
    ],
  },
  {
    org: "MANCER",
    title: "Web3 Developer Scholar",
    start: "2026-04",
    end: "2026-06",
    period: "Apr — Jun 2026",
    place: "Remote",
    summary:
      "Selected for the Mancer and Superteam Web3 Career Accelerator on the developer track.",
    points: [
      "Built blockchain applications against real technical briefs",
      "Worked through Solana tooling and protocol internals",
      "Completed the technical challenges and work trials the programme sets",
    ],
  },
  {
    org: "Drip Labs",
    title: "NFT Creator, Drip.Haus",
    start: "2024-03",
    end: "",
    period: "Mar 2024 — now",
    place: "Solana",
    summary:
      "Weekly drops on Drip.Haus, with the visual work assembled through AI-assisted tooling and my own art direction.",
    points: [
      "Ship on a weekly release cadence",
      "Hold a collector base together through perks and rarity design",
      "Take part in contests and collaborations inside the Solana creator scene",
    ],
  },
  {
    org: "Tezos",
    title: "Web3 Content Creator, NFT Artist",
    start: "2022-01",
    end: "",
    period: "Jan 2022 — now",
    place: "Objkt",
    summary:
      "Generative and AI-assisted work published on Tezos through Objkt, running for four years now.",
    points: [
      "Several collections out, with collectors who have stayed across releases",
      "Collaborated with artists and Web3 communities outside Indonesia",
      "Built the visual identity that still runs under the nayrbryanGaming name",
      "Work sits in prompt engineering, image generation, and visual narrative",
    ],
  },
  {
    org: "NNG Esport",
    title: "Founder",
    start: "2010",
    end: "",
    period: "Since 2010",
    place: "Indonesia",
    summary:
      "The first thing I ever built. A grassroots esports outfit for players and creators who had no organised place to compete.",
    points: [
      "Where the community-building habit started",
      "Shaped how I think about audience, engagement, and brand",
      "Still the name attached to most of my creative output",
    ],
  },
];

// Source: LinkedIn profile export, August 2026.
export const education = [
  {
    school: "Universitas Atma Jaya Makassar",
    detail: "S1 Teknik Informatika",
    period: "Sep 2023 — Jul 2027",
  },
  {
    school: "SMA Negeri 1 Makassar",
    detail: "IPA",
    period: "Jun 2020 — Mar 2023",
  },
  {
    school: "SMP Katolik Rajawali",
    detail: "IPA",
    period: "Aug 2017 — Aug 2020",
  },
  {
    school: "SD Menara Makassar",
    detail: "IPA",
    period: "Jul 2012 — Jul 2017",
  },
];

/**
 * A paper presented at the 3rd International Conference on Digital, Social,
 * and Science, Bandung, July 2026. Read from the certificate itself, which
 * carries its own reference number — the LinkedIn export does not list it.
 */
export const research = {
  role: "Presenter",
  /** The revised manuscript's title. The certificate carries the earlier
   *  submission title, so the accepted version is the one shown. */
  paper:
    "Design and Usability Evaluation of a Weather-Aware Mobile Movie Recommendation System Using a Human-Centered AI Approach",
  system: "NNG Cinema",
  affiliation: "Informatics Engineering, Universitas Atma Jaya Makassar",
  venue: "3rd International Conference on Digital, Social, and Science (ICoDSS) 2026",
  organiser: "PT Ebiz Prima Nusa",
  place: "Bandung, Indonesia",
  date: "23 July 2026",
  ref: "188/B-2/ICODSS/EBS/VII/2026",
  summary:
    "A Flutter client that reads the weather where you are and picks films from it, with no question asked of the user. Seven meteorological categories map onto genre clusters drawn from environmental psychology, and the app chains weather sensing to catalogue retrieval end to end.",
  findings: [
    { value: "80.33", label: "System Usability Scale mean", note: "SD 7.84, across 30 participants" },
    { value: "24/24", label: "black-box test cases passed", note: "six categories, three cycles" },
    { value: "+12.33", label: "points above the population median", note: "Good-to-Excellent usability band" },
  ],
  /** Stated in the paper itself, and worth carrying over rather than dropping. */
  scope:
    "The paper reports design feasibility and perceived usability. Recommendation accuracy, relevance, and satisfaction were not measured, and no comparative baseline was run.",
  keywords: [
    "context-aware recommender systems",
    "Flutter",
    "human-centered AI",
    "mobile applications",
    "weather-based recommendation",
  ],
} as const;

// The first five come from the LinkedIn certifications section (Dicoding).
// The sixth is a webinar certificate pinned to the profile's Featured section
// rather than filed under certifications, so it is named with its issuer.
export const certifications = [
  "Belajar Dasar Data Science",
  "Belajar Dasar UX Design",
  "Prompt Engineering untuk Software Developer",
  "Memulai Pemrograman dengan Python",
  "Belajar Back-End Pemula dengan Python",
  "GEMAR X IDN — Mengangkat Realita ke Layar (Yayasan GEMAR Indonesia, Aug 2026)",
];

// Source: LinkedIn top skills, plus languages observed across the public repos.
export const skills = [
  { group: "Chain", items: ["Solana", "Anchor", "Rust", "Tezos", "Solidity", "SPL"] },
  { group: "Product", items: ["TypeScript", "Next.js", "React", "Tailwind", "Node"] },
  { group: "Mobile", items: ["Flutter", "Dart"] },
  { group: "Systems", items: ["Postgres", "wasm32-wasip2", "Groq", "Python"] },
  { group: "Craft", items: ["Photography", "Art direction", "Prompt engineering", "Community"] },
];

// Source: Instagram story highlights, @bryan_kwandou.
export const communities = [
  "Superteam",
  "PIDI DIGDAYA",
  "MyBCA Academy",
  "GDG Telkom",
  "NOVO CLUB",
];
