<div align="center">

# BRYAN KWANDOU
### Autonomous Systems Architect & Agentic Security Engineer
**Makassar, Indonesia · Systems Engineering · On-Chain Policy Verification**

<br/>

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

### Engineering Telemetry & Activity

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=bryankwandou&show_icons=true&theme=tokyonight&bg_color=0c0c0e&title_color=E4703A&text_color=f3f3f1&icon_color=E4703A&border_color=262629&hide_border=false" alt="Bryan Kwandou GitHub Statistics" width="48%" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=bryankwandou&layout=compact&theme=tokyonight&bg_color=0c0c0e&title_color=E4703A&text_color=f3f3f1&border_color=262629&hide_border=false" alt="Top Engineering Languages" width="48%" />
</div>

---

### Flagship Systems (6 of the 24 Products)

<details open>
<summary><b>1. Veylock — Agentic Intelligence vs Spending Authority Separation</b></summary>
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
<summary><b>2. Vowrail — Autonomous Agent Transaction Firewall</b></summary>
<br/>

<div align="center">
  <img src="https://raw.githubusercontent.com/bryankwandou/bryankwandou/main/public/shots/vowrail-1.webp" alt="Vowrail Interface" width="100%" style="border-radius: 8px; border: 1px solid #262629;" />
</div>

- **Problem**: Most autonomous agent demos depend on system prompt disclaimers with zero verifiable security posture.
- **Solution**: A pre-flight transaction firewall. Every agent dispatch undergoes formal static policy validation, producing cryptographic decision proofs.
- **Stack**: Next.js, TypeScript, Solana, Anchor
- **Status**: Live on Solana Devnet
- **Links**: [Live Deployment](https://vowrail.vercel.app) · [GitHub Repository](https://github.com/bryankwandou/vowrail)
</details>

<details>
<summary><b>3. X402Gate — HTTP 402 Pay-Per-Call Settlement Gateway</b></summary>
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
<summary><b>4. AccordOS — Multi-Agent Bilateral B2B Negotiation Protocol</b></summary>
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
<summary><b>5. NavisFreight — Autonomous Freight Invoice & Dispatch Reconciliation</b></summary>
<br/>

<div align="center">
  <img src="https://raw.githubusercontent.com/bryankwandou/bryankwandou/main/public/shots/navisfreight-1.webp" alt="NavisFreight Interface" width="100%" style="border-radius: 8px; border: 1px solid #262629;" />
</div>

- **Problem**: High friction and post-facto billing disputes across logistics, carrier dispatches, and fuel surcharges.
- **Solution**: Smart reconciliation ledger binding bills of lading to verifiable escrow checkpoints.
- **Stack**: Next.js, TypeScript, Automated Auditing Engine
- **Links**: [Live Deployment](https://navisfreight.vercel.app) · [GitHub Repository](https://github.com/bryankwandou/navisfreight)
</details>

<details>
<summary><b>6. AuraCare — Deterministic Caregiver Dispatch & Policy Guardrails</b></summary>
<br/>

<div align="center">
  <img src="https://raw.githubusercontent.com/bryankwandou/bryankwandou/main/public/shots/auracare-1.webp" alt="AuraCare Interface" width="100%" style="border-radius: 8px; border: 1px solid #262629;" />
</div>

- **Problem**: Sensitive home care allocations require zero-failure auditing and strict schedule verification.
- **Solution**: High-assurance verification system tracking shift check-ins, medical mandates, and automated payment escrow.
- **Stack**: Next.js, TypeScript, Healthcare Operations
- **Links**: [Live Deployment](https://auracare-health.vercel.app) · [GitHub Repository](https://github.com/bryankwandou/auracare-health)
</details>

---

### Production Verification Matrix (All 24 Products)

| Project | Domain | Architecture Highlights | Live System | Source |
| :--- | :--- | :--- | :---: | :---: |
| **Veylock** | Agentic Finance | Anchor Vault PDA · Groq Intent Separation | [Live App](https://veylock.vercel.app) | [Repo](https://github.com/bryankwandou/veylock) |
| **Vowrail** | Agent Security | Pre-flight Tx Firewall · Static Policy Gate | [Live App](https://vowrail.vercel.app) | [Repo](https://github.com/bryankwandou/vowrail) |
| **X402Gate** | Agent Payments | HTTP 402 Settlement Gateway · Solana Devnet | [Live App](https://x402gate.vercel.app) | [Repo](https://github.com/bryankwandou/x402gate) |
| **AccordOS** | B2B Negotiation | Deterministic Deal State Machine · Dual Signature | [Live App](https://accordos-ai.vercel.app) | [Repo](https://github.com/bryankwandou/accordos-ai) |
| **NavisFreight** | Freight Logistics | Automated Escrow Checkpoints · BoL Audit | [Live App](https://navisfreight.vercel.app) | [Repo](https://github.com/bryankwandou/navisfreight) |
| **AuraCare** | Healthcare Operations | Zero-Failure Shift Verification · Escrow | [Live App](https://auracare-health.vercel.app) | [Repo](https://github.com/bryankwandou/auracare-health) |
| **Kinderguard** | Childcare Safety | Immutable Access Control Logs · Emergency Protocol | [Live App](https://kinderguard.vercel.app) | [Repo](https://github.com/bryankwandou/kinderguard) |
| **Wayroute** | Logistics Routing | Real-time Telemetry Verification · Route Escrow | [Live App](https://wayroute.vercel.app) | [Repo](https://github.com/bryankwandou/wayroute) |
| **Drayage** | Harbor Operations | Port Dispatch & Container Turnstile Tracking | [Live App](https://drayage-ops.vercel.app) | [Repo](https://github.com/bryankwandou/drayage-ops) |
| **Civica** | Municipal Services | Public Infrastructure Complaint Audit Log | [Live App](https://civica-gov.vercel.app) | [Repo](https://github.com/bryankwandou/civica-gov) |
| **VaultPulse** | Treasury Monitoring | Multisig Treasury Health & Invariant Checker | [Live App](https://vaultpulse.vercel.app) | [Repo](https://github.com/bryankwandou/vaultpulse) |
| **PromptLens** | LLM Observability | Deterministic Token & Cost Attribution Ledger | [Live App](https://promptlens.vercel.app) | [Repo](https://github.com/bryankwandou/promptlens) |
| **Luminar** | Creative Media | Digital Photography Culling & Provenance | [Live App](https://luminar-photo.vercel.app) | [Repo](https://github.com/bryankwandou/luminar-photo) |
| **TrustMesh** | Identity Protocol | Cryptographic Attestation & Web of Trust | [Live App](https://trustmesh.vercel.app) | [Repo](https://github.com/bryankwandou/trustmesh) |
| **ArbitrageEye** | DEX Analytics | On-chain Liquidity Spread & Slippage Guard | [Live App](https://arbitrage-eye.vercel.app) | [Repo](https://github.com/bryankwandou/arbitrage-eye) |
| **SentryLedger** | Security Auditing | Smart Contract Invariant Verification | [Live App](https://sentryledger.vercel.app) | [Repo](https://github.com/bryankwandou/sentryledger) |
| **SolFlow** | Workflow Engine | DAG-based Autonomous Agent Step Engine | [Live App](https://solflow-ops.vercel.app) | [Repo](https://github.com/bryankwandou/solflow-ops) |
| **FleetAnchor** | IoT Verification | Cryptographic Firmware & Telematics Audit | [Live App](https://fleetanchor.vercel.app) | [Repo](https://github.com/bryankwandou/fleetanchor) |
| **CargoTrace** | Supply Chain | End-to-end QR & Barcode Tamper-proof Registry | [Live App](https://cargotrace.vercel.app) | [Repo](https://github.com/bryankwandou/cargotrace) |
| **ApexTerminal** | Financial UI | Low-latency WebSockets Orderbook & Analytics | [Live App](https://apexterminal.vercel.app) | [Repo](https://github.com/bryankwandou/apexterminal) |
| **ChronosAI** | Time Allocation | Automated Scheduling under Strict Policy Limits | [Live App](https://chronos-ai.vercel.app) | [Repo](https://github.com/bryankwandou/chronos-ai) |
| **RelayShield** | Webhook Security | Signature Verification & Replay Attack Blocker | [Live App](https://relayshield.vercel.app) | [Repo](https://github.com/bryankwandou/relayshield) |
| **BeaconMesh** | Emergency Relay | Distributed Signal Routing & Verification | [Live App](https://beaconmesh.vercel.app) | [Repo](https://github.com/bryankwandou/beaconmesh) |
| **ByteAudit** | Binary Analysis | Reverse Engineering & Attestation Explorer | [Live App](https://byteaudit.vercel.app) | [Repo](https://github.com/bryankwandou/byteaudit) |

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
