<div align="center">
  <img src="https://raw.githubusercontent.com/bryankwandou/bryankwandou/main/public/brand/hero-banner.svg" alt="Bryan Kwandou Systems Architecture" width="100%" />
</div>

<br/>

<div align="center">

[![Live Web Portfolio](https://img.shields.io/badge/LIVE_WEB_PORTFOLIO-bryankwandou.vercel.app-E4703A?style=for-the-badge&logo=vercel&logoColor=white)](https://bryankwandou.vercel.app)
[![GitHub Pages Mirror](https://img.shields.io/badge/GITHUB_PAGES-bryankwandou.github.io-10B981?style=for-the-badge&logo=github&logoColor=white)](https://bryankwandou.github.io/bryankwandou/)
[![Solana Devnet Verified](https://img.shields.io/badge/SOLANA_DEVNET-ANCHOR_PROGRAMS-14F195?style=for-the-badge&logo=solana&logoColor=black)](https://explorer.solana.com/?cluster=devnet)
[![Rust Security Core](https://img.shields.io/badge/CORE_RUNTIME-RUST-black?style=for-the-badge&logo=rust&logoColor=white)](https://github.com/bryankwandou)

<br/>

```bash
# Terminal quick inspection
npx bryankwandou@latest
```

</div>

---

### Architectural Premise

> *"The interesting engineering is rarely making the agent smarter. It is drawing the line the agent cannot cross."*

Every system below enforces deterministic authority boundaries in front of autonomous execution. Limits are guarded by Anchor smart contracts and Rust policy layers rather than transient system prompts. Every action produces a verifiable on-chain receipt that survives dispute.

---

### Verified Engineering Telemetry

<div align="center">
  <img src="https://raw.githubusercontent.com/bryankwandou/bryankwandou/main/public/brand/telemetry-card.svg" alt="Verified Engineering Telemetry" width="100%" />
</div>

---

### Flagship Systems (6 of the 24 Products)

<details open>
<summary><b>1. Veylock — Segregated Agent Execution &amp; Spending Authority</b></summary>
<br/>

<div align="center">
  <img src="https://raw.githubusercontent.com/bryankwandou/bryankwandou/main/public/shots/veylock-1.webp" alt="Veylock Interface" width="100%" style="border-radius: 8px; border: 1px solid #262629;" />
</div>

- **Problem**: Autonomous agents given direct wallet keys will eventually exceed their operational mandate or fall prey to prompt injection.
- **Solution**: Decouples reasoning from execution. Groq/LLM proposes financial intent, deterministic TypeScript rules evaluate policies, and an Anchor program settles strictly what passed.
- **Stack**: Next.js, TypeScript, Solana, Rust, Anchor
- **Verified On-Chain Artifacts**:
  - **Anchor Program**: [`C4jFcBypYefdgw2goHbKREMjZSyRo4LknBVDP5cegYLN`](https://explorer.solana.com/address/C4jFcBypYefdgw2goHbKREMjZSyRo4LknBVDP5cegYLN?cluster=devnet)
  - **Policy PDA**: [`AdP6UCcPXsDF5Z19WFTPHuBaQ7HSZvLKPywNB457tVG7`](https://explorer.solana.com/address/AdP6UCcPXsDF5Z19WFTPHuBaQ7HSZvLKPywNB457tVG7?cluster=devnet)
  - **Authorisation Transaction**: [`55EqFrgVeHu1CWdaWpcxwTZkgzMFpHVRkPpmRZQy62perdCtJqeBB75AXK8aKnEUQWivdFWniNb6mXrf17n2RPRE`](https://explorer.solana.com/tx/55EqFrgVeHu1CWdaWpcxwTZkgzMFpHVRkPpmRZQy62perdCtJqeBB75AXK8aKnEUQWivdFWniNb6mXrf17n2RPRE?cluster=devnet)
- **Links**: [Live Deployment](https://veylock.vercel.app) · [GitHub Repository](https://github.com/bryankwandou/veylock)
</details>

<details>
<summary><b>2. X402Gate — Pay-Per-Call HTTP 402 Billing for Machine Clients</b></summary>
<br/>

<div align="center">
  <img src="https://raw.githubusercontent.com/bryankwandou/bryankwandou/main/public/shots/x402gate-1.webp" alt="X402Gate Interface" width="100%" style="border-radius: 8px; border: 1px solid #262629;" />
</div>

- **Problem**: API subscription plans and credit cards fail machine-to-machine micropayments.
- **Solution**: Realizing RFC 7231 HTTP 402 Payment Required. APIs return 402 with rate quotes, autonomous agents settle micro-transactions on Solana, and the request succeeds instantly without user intervention.
- **Stack**: Next.js, TypeScript, Solana Micro-settlement
- **Status**: Live on Solana Devnet
- **Links**: [Live Deployment](https://x402gate.vercel.app) · [GitHub Repository](https://github.com/bryankwandou/x402gate)
</details>

<details>
<summary><b>3. AccordOS — Deterministic Bilateral Multi-Agent Negotiation</b></summary>
<br/>

<div align="center">
  <img src="https://raw.githubusercontent.com/bryankwandou/bryankwandou/main/public/shots/accordos-ai-1.webp" alt="AccordOS Interface" width="100%" style="border-radius: 8px; border: 1px solid #262629;" />
</div>

- **Problem**: Autonomous agents negotiating contracts can hallucinate commitments exceeding human authorization.
- **Solution**: Deterministic negotiation engine where language models merely draft readable explanations while hard bounds remain immutable. Dual cryptographic wallet signatures bind to an immutable deal identity.
- **Stack**: Next.js, TypeScript, Deterministic State Machines
- **Links**: [Live Deployment](https://accordos-ai.vercel.app) · [GitHub Repository](https://github.com/bryankwandou/accordos-ai)
</details>

<details>
<summary><b>4. VisitRail — Verifiable Healthcare &amp; Home-Care Operations</b></summary>
<br/>

<div align="center">
  <img src="https://raw.githubusercontent.com/bryankwandou/bryankwandou/main/public/shots/visitrail-1.webp" alt="VisitRail Interface" width="100%" style="border-radius: 8px; border: 1px solid #262629;" />
</div>

- **Problem**: Sensitive home-care visit allocations require zero-failure auditing and strict schedule verification.
- **Solution**: Operational visit validation and verifiable audit logging. Tracks clinician mandates, shift check-ins, and automated payment escrow.
- **Stack**: Next.js, TypeScript, Healthcare Operations
- **Links**: [Live Deployment](https://visitrail.vercel.app) · [GitHub Repository](https://github.com/bryankwandou/visitrail)
</details>

<details>
<summary><b>5. Kinferry — Non-Custodial Remittance Preparation Agent</b></summary>
<br/>

<div align="center">
  <img src="https://raw.githubusercontent.com/bryankwandou/bryankwandou/main/public/shots/kinferry-1.webp" alt="Kinferry Interface" width="100%" style="border-radius: 8px; border: 1px solid #262629;" />
</div>

- **Problem**: Cross-border family remittance involves predatory exchange spreads and opaque custodial intermediaries.
- **Solution**: Non-custodial cross-border remittance agent. Prepares routing corridors, compares liquidity pools, and signs transfers directly from the sender's own non-custodial wallet.
- **Stack**: Next.js, TypeScript, Solana
- **Links**: [Live Deployment](https://kinferry.vercel.app) · [GitHub Repository](https://github.com/bryankwandou/kinferry)
</details>

<details>
<summary><b>6. ServeTrace — Real-Time Kitchen Safety &amp; Active Compliance Blocking</b></summary>
<br/>

<div align="center">
  <img src="https://raw.githubusercontent.com/bryankwandou/bryankwandou/main/public/shots/servetrace-1.webp" alt="ServeTrace Interface" width="100%" style="border-radius: 8px; border: 1px solid #262629;" />
</div>

- **Problem**: Restaurant food safety logs are filled after shifts from memory rather than audited at point of risk.
- **Solution**: Real-time kitchen safety controls with active compliance blocking. Shifts cannot be finalized and inventory cannot be transferred until hazard point readings pass formal rules.
- **Stack**: Next.js, TypeScript, Food Safety Compliance
- **Links**: [Live Deployment](https://servetrace.vercel.app) · [GitHub Repository](https://github.com/bryankwandou/servetrace)
</details>

---

### Production Verification Matrix (All 24 Products)

| Project | Domain | Architecture Highlights | Live System | Source |
| :--- | :--- | :--- | :---: | :---: |
| **Veylock** | Agentic Finance | Anchor Vault PDA · Groq Intent Separation | [Live App](https://veylock.vercel.app) | [Repo](https://github.com/bryankwandou/veylock) |
| **Vowrail** | Agent Security | Pre-flight Tx Firewall · Static Policy Gate | [Live App](https://vowrail.vercel.app) | [Repo](https://github.com/bryankwandou/vowrail) |
| **X402Gate** | Agent Payments | HTTP 402 Settlement Gateway · Solana Devnet | [Live App](https://x402gate.vercel.app) | [Repo](https://github.com/bryankwandou/x402gate) |
| **AccordOS** | B2B Negotiation | Deterministic Deal State Machine · Dual Signature | [Live App](https://accordos-ai.vercel.app) | [Repo](https://github.com/bryankwandou/accordos-ai) |
| **AgentPayOS** | Machine Payments | Streaming Escrow &amp; Sub-cent Metering | [Live App](https://agentpayos.vercel.app) | [Repo](https://github.com/bryankwandou/agentpayos) |
| **Kinferry** | Remittance | Non-Custodial Cross-Border Route Preparation | [Live App](https://kinferry.vercel.app) | [Repo](https://github.com/bryankwandou/kinferry) |
| **VisitRail** | Healthcare Ops | Verifiable Clinical Visit &amp; Schedule Logging | [Live App](https://visitrail.vercel.app) | [Repo](https://github.com/bryankwandou/visitrail) |
| **ServeTrace** | Safety Compliance | Real-Time Hazard Point Active Blocker | [Live App](https://servetrace.vercel.app) | [Repo](https://github.com/bryankwandou/servetrace) |
| **FreightLatch** | Freight Logistics | Automated Escrow Checkpoints · BoL Audit | [Live App](https://freightlatch.vercel.app) | [Repo](https://github.com/bryankwandou/freightlatch) |
| **AxleVeto** | Commercial Fleet | Pre-dispatch Safety Signoff &amp; Compliance | [Live App](https://axleveto.vercel.app) | [Repo](https://github.com/bryankwandou/axleveto) |
| **ChildcareOS** | Childcare Safety | Immutable Access Control Logs · Emergency Protocol | [Live App](https://childcareos.vercel.app) | [Repo](https://github.com/bryankwandou/childcareos) |
| **DwellNerve** | Tenant Facilities | Sensor-linked Maintenance Verification Escrow | [Live App](https://dwellnerve.vercel.app) | [Repo](https://github.com/bryankwandou/dwellnerve) |
| **StewardLane** | Property Operations | Vendor Dispute Resolution &amp; Service Receipts | [Live App](https://stewardlane.vercel.app) | [Repo](https://github.com/bryankwandou/stewardlane) |
| **DissentGrid** | Governance | Cryptographic Dissent Logging &amp; Stake Voting | [Live App](https://dissentgrid.vercel.app) | [Repo](https://github.com/bryankwandou/dissentgrid) |
| **MirrorQA** | AI Evaluation | Synthetic Conversation Perturbation &amp; Audit | [Live App](https://mirrorqa-ai.vercel.app) | [Repo](https://github.com/bryankwandou/mirrorqa-ai) |
| **AutoRepairOS** | Workshop Billing | Parts Chain of Custody &amp; Telematics Quote | [Live App](https://autorepairos.vercel.app) | [Repo](https://github.com/bryankwandou/autorepairos) |
| **BriefRail** | Legal Operations | Privilege Log Immutability &amp; Review Gating | [Live App](https://briefrail.vercel.app) | [Repo](https://github.com/bryankwandou/briefrail) |
| **GalleryOS** | Art Provenance | On-chain Exhibition History &amp; Royalty Enforcer | [Live App](https://galleryos.vercel.app) | [Repo](https://github.com/bryankwandou/galleryos) |
| **EverCue** | Clinical Trials | Patient Schedule Protocol &amp; Compliance Audit | [Live App](https://evercue.vercel.app) | [Repo](https://github.com/bryankwandou/evercue) |
| **CiviFlow** | Municipal Services | Public Infrastructure Complaint Audit Log | [Live App](https://civiflow.vercel.app) | [Repo](https://github.com/bryankwandou/civiflow) |
| **VeriStart** | KYC Onboarding | Zero-Knowledge Identity Verification Pipeline | [Live App](https://veristart.vercel.app) | [Repo](https://github.com/bryankwandou/veristart) |
| **Stemloom** | Audio Workstation | In-browser Multitrack DSP &amp; Export Engine | [Live App](https://stemloom.vercel.app) | [Repo](https://github.com/bryankwandou/stemloom) |
| **Cutwright** | Video Production | Browser Canvas &amp; WebCodecs Timeline Suite | [Live App](https://cutwright.vercel.app) | [Repo](https://github.com/bryankwandou/cutwright) |
| **AvalRail** | Payment Routing | Durable Nonce Replay Defense &amp; Gas Abstraction | [Live App](https://aval-rail.vercel.app) | [Repo](https://github.com/bryankwandou/aval-rail) |

---

### Technical Competencies & Tooling

- **Systems & Smart Contracts**: Rust, Solana (Anchor), WebAssembly (Wasm), TypeScript, Node.js
- **Frontend Architecture**: Next.js (App Router), React 19, Tailwind CSS, Motion (Framer Motion), Lucide
- **Infrastructure & Delivery**: GitHub Actions CI/CD, Vercel Edge Runtime, Docker, Linux, Cloudflare
- **Data & Storage**: PostgreSQL, SQLite, Redis, Prisma, On-chain PDAs

---

<div align="center">
  <sub>Full production catalog, interactive camera archives, and engineering case studies: <a href="https://bryankwandou.vercel.app">bryankwandou.vercel.app</a> · <a href="https://bryankwandou.github.io/bryankwandou/">GitHub Pages</a></sub>
</div>
