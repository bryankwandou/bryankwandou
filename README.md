<h1 align="center">Bryan Kwandou</h1>

<p align="center">
  <a href="https://bryankwandou.vercel.app"><b>bryankwandou.vercel.app</b></a>
</p>

<p align="center">
  Builder in Makassar, Indonesia. I write software that leaves a trail — twenty-one
  shipped products and 104 public repositories, most of them circling one question:
  after the machine acts, can a person still check what happened?
</p>

<p align="center">
  <a href="https://linkedin.com/in/bryankwandou">LinkedIn</a> ·
  <a href="https://instagram.com/bryan_kwandou">Instagram</a> ·
  <a href="https://threads.com/@bryan_kwandou">Threads</a> ·
  <a href="https://tiktok.com/@nayrbryanGaming">TikTok</a> ·
  <a href="https://x.com/nayrbryanGaming">X</a> ·
  <a href="https://orcid.org/0009-0009-1652-0995">ORCID</a>
</p>

---

## What I am doing now

- Campus Lead and founder, **UAJM Blockchain Club — Superteam Campus**
- Founder and Chairman, **UKM E-Sport Universitas Atma Jaya Makassar** (Rector Decree 032/UAJM/Rek/Kep/VI/2025)
- NFT creator on **Drip.Haus** since 2024, and on **Tezos** since 2022
- Reading Teknik Informatika at **Universitas Atma Jaya Makassar**

## Selected work

| Product | What it does | Status |
|---|---|---|
| [Veylock](https://veylock.vercel.app) | Keeps an agent's intelligence and its spending authority in separate boxes | Solana devnet |
| [X402Gate](https://x402gate.vercel.app) | Pay-per-call billing for machine clients, using the HTTP 402 status nobody shipped | Solana devnet |
| [AccordOS](https://accordos-ai.vercel.app) | Two agents negotiate; neither can exceed the authority a human granted | Solana devnet |
| [VisitRail](https://visitrail.vercel.app) | Home care operations where the visit record is evidence, not a claim | Solana devnet |
| [Kinferry](https://kinferry.vercel.app) | A remittance agent that prepares transfers but never decides who is trusted | Solana devnet |
| [ServeTrace](https://servetrace.vercel.app) | Restaurant safety controls that block the unsafe action instead of logging it | Solana devnet |
| [aval-rail](https://github.com/bryankwandou/aval-rail) | A durable nonce held a payment open 4h29m past its control window, on devnet | Solana devnet |
| [aval-core](https://github.com/bryankwandou/aval-core) | Solana substrate with no SDK under it, targeting `wasm32-wasip2` plugins | Rust |

The full set of twenty-one is at [bryankwandou.vercel.app/work](https://bryankwandou.vercel.app/work),
and the eighty-odd unpolished repositories are catalogued at
[/archive](https://bryankwandou.vercel.app/archive).

## Working in

`TypeScript` `Rust` `Solana` `Anchor` `Next.js` `Flutter` `Dart` `Python` `Postgres` `Solidity`

---

## About this repository

This repo holds the source for the site at
[bryankwandou.vercel.app](https://bryankwandou.vercel.app). It is a static Next.js
build — no database, no API routes, no client-side data fetching. Every fact on the
site is committed to the repository and traceable to a public source.

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Motion.
Instrument Serif for display, Geist Sans and Geist Mono for everything else.

**Layout**

```
src/
  app/                 routes; every page prerendered at build time
  components/          logo, header, footer, motion primitives
  data/                profile.ts, work.ts, archive.ts — the entire content layer
public/
  logos/               21 product marks
  shots/               84 real interface captures
brand.md               colour, type, motion, and voice decisions
```

**Running it**

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export of 32 routes
```

The design decisions — why the accent is ember rather than the usual violet, why
entry animations run longer than exits, why status labels say "devnet" rather than
something friendlier — are written down in [`brand.md`](./brand.md).
