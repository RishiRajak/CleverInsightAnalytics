# Clever Insight Analytics — Agent Memory

**Last updated:** 2026-10-13 20:40 IST (Tuesday, 13 October 2026)

Read this file first. Re-scan the repo only if something here looks stale. **Update this file + timestamp whenever project facts change.**

---

## 1. Project in one paragraph

Marketing site for **Clever Insight Analytics LLP**. The partners chose **Sim 03 Aurora** (`hardik-dev/sim-03-aurora-platform/`). Sims 01 and 02 have been removed. Positioning is project-based data work (pipelines, dashboards, research, models), written so it reads as freelance work. **Do not publish personal emails, current employers, or client names.**

- Repo: https://github.com/RishiRajak/CleverInsightAnalytics.git — branch `Hardik-dev`
- Domain: `www.cleverinsightanalytics.com` (`CNAME` at repo root)
- Do not commit or push unless Hardik asks.
- Legal name on the site: **Clever Insight Analytics LLP**. Wordmark until a logo exists: **CIA**.

---

## 2. Repo map

| Path | Status | Notes |
|---|---|---|
| `index.html`, `styles.css`, `script.js`, `CNAME`, `README.md` | **Legacy live site** | Old template. Don't invest here until the Aurora page replaces it. |
| `hardik-dev/index.html` | Redirect | Sends visitors to Sim 03. |
| `hardik-dev/shared/content.js` | **Single source of truth** | Copy, services, team, projects, contact. |
| `hardik-dev/shared/lib.js` | Shared toolkit | **Start a project** uses `mailto:info@cleverinsightanalytics.com` when `calendly` is empty. |
| `hardik-dev/sim-03-aurora-platform/` | **The site** | Dark glass, Space Grotesk, violet/mint/pink. |
| `hardik-dev/serve.ps1` | Dev server | `http://127.0.0.1:4173/` |

---

## 3. What is public, and what must stay off the site

**On the site**

- Company email `info@cleverinsightanalytics.com`
- Company phones `+91 98716 02093` and `+91 95994 39248`
- Team, capability portfolios only (no Co-founder / Founder titles): Aman Mishra, Hardik Bindlish, Rishi Rajak, Megha Diwakar
- Rishi's Medium profile and three articles (marble defects, flower classification, share-price RNN/LSTM)
- Anonymous pricing project: public competitor listings turned into a price-and-spec comparison base. Organisation not named.
- Anonymous fitness-range customer profiling project (30% higher-end purchase lift, ages 25–30). Company not named.
- Reply usually the same day. First demo within 3 weeks when the solution is feasible and the full requirement is provided.
- Services: Dashboard Design, Data Solutions, Research Analytics, Product Analytics, Customer Analytics, People Analytics, AI & Machine Learning, Exploratory Data Analytics.

**Never add from resumes or LinkedIn**

- Personal emails and personal mobiles (including `hardikbindlish@gmail.com` and `+91-8571960131`)
- Employer names, office locations tied to a job, or internal project names (Hero Dashboard, Booker, C360 Booker, supplier leakage figures, agency-partner counts)
- Azure, GCP, Databricks, BigQuery, FinOps — not offered. Cloud claims are **AWS (Glue, Athena, S3, ECS), Snowflake, and dbt** only.

---

## 4. Still open

- [ ] Logo (CIA wordmark is the stand-in)
- [ ] Team photos
- [ ] Company LinkedIn URL
- [ ] Form endpoint (until then, the form opens the company mailbox)
- [ ] Replace the legacy root site with this page when Hardik asks
