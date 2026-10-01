# Clever Insight Analytics — Agent Memory

**Last updated:** 2026-10-01 19:05 IST (Thursday, 1 October 2026)

Read this file first. Re-scan the repo only if something here looks stale. **Update this file + timestamp whenever project facts change.**

---

## 1. Project in one paragraph

Marketing / lead-gen site for **Clever Insight Analytics** — a **3-founder data services studio** (team of three men; Hardik is one, a software engineer). Positioning: **one platform for every data service**. Goal: win freelance / project work fast. The current live root site is an old template; the redesign is being decided via **3 finished-look simulations** in `hardik-dev/` that partners will vote on.

- Repo: https://github.com/RishiRajak/CleverInsightAnalytics.git — branch `Hardik-dev`
- Domain: `www.cleverinsightanalytics.com` (`CNAME` at repo root)
- Do not commit or push unless Hardik asks.

---

## 2. Repo map

| Path | Status | Notes |
|---|---|---|
| `index.html`, `styles.css`, `script.js`, `CNAME`, `README.md` | **Legacy live site** | Old template. `index.html` has broken nav/hero `<a>` tags. `styles.css`/`script.js` are not linked. Don't invest here — it gets replaced. |
| `hardik-dev/index.html` | Hub | Links to the 3 sims. `noindex`. |
| `hardik-dev/shared/content.js` | **Single source of truth** | ALL copy, services, team, projects, contact, FAQ for all 3 sims. Edit here only. |
| `hardik-dev/shared/lib.js` | Shared toolkit (`window.CIAKit`) | Helpers, icons, project cover art, reveal/count-up/spotlight, mailto/endpoint form handler + validation, JSON-LD, **Review mode**. |
| `hardik-dev/sim-01-command-center/` | Sim 01 | `index.html`, `styles.css`, `script.js` |
| `hardik-dev/sim-02-signal-house/` | Sim 02 | same |
| `hardik-dev/sim-03-aurora-platform/` | Sim 03 | same |
| `hardik-dev/serve.ps1` | Dev server | PowerShell static server on `http://127.0.0.1:4173/` (no Node/Python on this machine). Run: `powershell -ExecutionPolicy Bypass -File .\serve.ps1` from `hardik-dev/`. |

Sims are plain static HTML/CSS/JS (no build) so partners can review instantly. Each sim's `script.js` renders sections from `window.CIA`.

---

## 3. The three simulations

| Sim | Look | Signature moments |
|---|---|---|
| **01 Command Center** | Dark, technical, IBM Plex, cyan/lime | Animated canvas data-flow (Sources→Ingest→Warehouse→Models→Insights), service **console** with keyboard-navigable tabs, filterable project cards, spotlight hover, scroll progress bar |
| **02 Signal House** | Warm paper, Fraunces serif + Outfit, burnt orange/navy | Animated "signal vs noise" SVG chart, **scroll-lit manifesto**, exclusive accordion for services, sticky process, magazine work grid, 3D-tilt team cards, giant outlined footer wordmark |
| **03 Aurora Platform** | Dark glass, Space Grotesk, violet/mint/pink | Animated aurora blobs, floating pill nav, **interactive product mock** (Pipelines/Dashboards/Models/Automations, auto-cycling, keyboard accessible), spotlight-border bento, scroll-glow timeline, project carousel, rotating gradient border on featured plan |

Every sim has: skip link, sticky nav + mobile menu, hero, tech-stack marquee, animated stats, services, process, work, industries, team (3), engagement models, FAQ, contact form, footer, SEO meta + OG + JSON-LD, favicon, `prefers-reduced-motion` support, responsive (verified 1440 and 390 widths, no horizontal overflow).

**Review mode:** append `?review=1` or press the bottom-left "Review mode" button. Outlines every placeholder (`data-todo`) and lists the info still needed. Sample testimonials are shown **only** in review mode (never publish invented quotes).

---

## 4. Service catalogue (keep in sync with `shared/content.js` → `services`)

24 capabilities across 6 pillars. Stats on the site are computed from this list.

1. **Data Engineering** — ETL/ELT pipelines · Data warehouse & lakehouse build · Real-time & streaming data · Data migration & modernisation
2. **Analytics & BI** — Executive & operational dashboards · KPI frameworks & semantic layers · Self-serve analytics · Deep-dive & ad-hoc analysis
3. **Data Science & AI** — Predictive modelling & forecasting · GenAI, RAG & copilots · NLP & computer vision · MLOps & model monitoring
4. **Data Products & Software** — Web apps & internal tools · APIs & system integrations · Workflow automation · Embedded / customer-facing analytics
5. **Cloud & Platform** — AWS/Azure/GCP architecture · Snowflake, Databricks & BigQuery · DevOps & CI/CD for data · FinOps & cost optimisation
6. **Governance & Acquisition** — Data quality & observability · Security, PII & compliance · Web scraping & data acquisition · Cataloguing & documentation

Engagement models (placeholder pricing): Discovery sprint (1–2 wk) · Fixed-scope build (4–12 wk) · Dedicated pod (monthly).
Process: Discover → Design → Build → Deploy → Operate.

---

## 5. INFO NEEDED FROM THE FOUNDERS (checklist)

Fill in `hardik-dev/shared/content.js` (items marked `todo`). Tick off here as they're done.

- [ ] **Brand:** final logo files / colours, or "design it for us"; year founded (optional)
- [ ] **Contact:** real phone/WhatsApp, city/address (if shown), working hours, promised response time
- [ ] **Booking link** (Calendly / Cal.com) → `contact.calendly`
- [ ] **Form backend** (Formspree / Basin / Web3Forms URL) → `contact.formEndpoint` (until set, form opens the visitor's email app)
- [ ] **Social / freelance profiles:** LinkedIn (company), GitHub, Upwork, Clutch, X
- [ ] **Founders ×3:** full name, role/title, photo (square, good light), 2-line bio, skills, LinkedIn/GitHub/personal portfolio links
- [ ] **2–3 real case studies:** problem → approach → result with numbers, stack, optional client logo (only with permission)
- [ ] **Testimonials** (with permission) — none shown publicly until real
- [ ] **Services reality check:** delete any of the 24 capabilities you can't deliver; add any missing
- [ ] **Industries / domains** you truly have experience in
- [ ] **Tech stack** you truly use (trim the marquee)
- [ ] **Pricing approach & engagement durations**, currencies, time-zone overlap you can really offer
- [ ] **Stats you can stand behind** (projects delivered, years, clients) — currently only provable stats shown
- [ ] **Domain / hosting decision**, analytics tool (GA4 vs Plausible), OG share image
- [ ] **Instagram reels:** the two reels shared as inspiration could not be viewed (Instagram login wall). Describe what you liked (layout, motion, colours, sections) or send screenshots.
- [ ] **Partners' vote:** pick Sim 01 / 02 / 03 (or a hybrid) so the production build can start

---

## 6. Decisions & findings

- **Production stack (recommended, not started):** Next.js 15 with `output: 'export'` (static export) + Tailwind, deployed to GitHub Pages. Reasons: pre-rendered HTML for SEO/link previews, per-project pages (`/work/[slug]`), same content module. Needs `images.unoptimized: true`, `trailingSlash: true`, `basePath` only if not using the custom domain. No server features (no live API routes, ISR). Vite+React is fine for design work but weaker for SEO unless prerendered.
- **Machine note:** `node`, `npm`, `npx`, `python`, `py` are **not installed** on Hardik's PC (PowerShell only). **Install Node.js 20/22 LTS before the Next.js phase.**
- Shell is PowerShell: `&&` doesn't work; use `;`.
- Content-driven design: change copy once in `shared/content.js`; later port it into the Next.js app as `content.ts`.
- Never fabricate claims: testimonials gated to review mode; projects labelled "Case study coming soon"; hero visuals labelled "illustrative".
- Tooling quirk (browser automation): emulated viewport resets on navigation and background tabs defer IntersectionObserver — reveal logic now reveals above-the-fold items synchronously. Verify layout with DOM measurements in a 1440/390 iframe rather than trusting screenshot descriptions alone.

---

## 7. Verification status (as of last update)

Automated checks passed on all 3 sims at 1440 and 390 widths: scripts boot, all sections populate (6 projects, 3 team, 6 FAQ), no horizontal overflow, count-ups reach 24 / 6 / 3 / 2 wk, tabs/filters/accordion/carousel work, form validation blocks empty or invalid submit, review mode lists placeholders, testimonials hidden publicly.
**Not yet done:** real-device review, Lighthouse/accessibility audit, cross-browser (Safari/Firefox) check, image assets (all art is generated SVG/CSS).

---

## 8. Next steps

1. Partners review `hardik-dev/` (use `?review=1`), pick a direction.
2. Founders fill the checklist in §5.
3. Install Node LTS; scaffold Next.js 15 static export using the chosen sim's design + `content.ts`.
4. Add real photos/case studies, wire booking + form endpoint, GA, OG image.
5. Replace root `index.html` with the exported site, keep `CNAME`, enable GitHub Pages.
