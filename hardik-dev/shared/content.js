/* ==========================================================================
   Clever Insight Analytics — SINGLE SOURCE OF TRUTH for all 3 simulations.
   Edit here once; every simulation (and later the Next.js site) reads this.

   Anything with `todo: "..."` is a placeholder that needs real info from the
   founders. Open any simulation with  ?review=1  to see them outlined + listed.
   ========================================================================== */
window.CIA = {
  brand: {
    name: "Clever Insight Analytics",
    short: "CIA",
    domain: "www.cleverinsightanalytics.com",
    tagline: "One platform for every data service.",
    founded: "", // TODO: year founded (optional, builds trust)
  },

  contact: {
    email: "info@cleverinsightanalytics.com",
    phone: "+91 XXXXX XXXXX", // TODO: real phone / WhatsApp
    phoneTodo: "Real phone / WhatsApp number",
    location: "India · working with clients worldwide", // TODO: city / address if you want it shown
    hours: "Mon–Sat · 10:00–19:00 IST", // TODO: confirm
    responseTime: "within one business day", // TODO: confirm promise
    calendly: "", // TODO: booking link (Calendly / Cal.com). Empty = "Start a project" jumps to the form.
    formEndpoint: "", // TODO: Formspree / Basin / Web3Forms URL. Empty = form opens the visitor's email app.
  },

  social: {
    linkedin: "", // TODO: company page
    github: "",
    x: "",
    upwork: "", // TODO: freelancing profile — big for winning projects
    clutch: "",
  },

  status: "Booking projects for Q4 2026 and Q1 2027", // TODO: keep honest, update each quarter

  /* Hero copy per simulation, so partners can compare messaging as well as design.
     [square brackets] = highlighted word(s). */
  heroes: {
    cmd: {
      kicker: "Data engineering · Analytics · AI · Cloud",
      title: "The operating system for [data-intensive] business.",
      lede:
        "Clever Insight Analytics is a three-founder data studio. We build the pipelines, dashboards, models and apps your business runs on — as one accountable team, not five vendors.",
    },
    signal: {
      kicker: "A data studio for operators",
      title: "Data services, [composed] like a single product.",
      lede:
        "From raw source systems to the board pack, one small team owns the whole path. Engineering, analytics, AI and cloud — designed together, delivered together.",
    },
    aurora: {
      kicker: "One platform · every data service",
      title: "Everything data. [One platform,] one team.",
      lede:
        "Stop stitching together vendors. We assemble data engineering, BI, AI, automation and cloud into a single, reliable layer your business can build on.",
    },
  },

  manifesto:
    "Most data projects fail in the handoffs between the people who move the data, the people who model it and the people who present it. We removed the handoffs. Three founders, one backlog, one team accountable for the whole path — from raw source to the decision on your screen.",

  /* Numbers. `auto` values are computed from the services list below. */
  stats: [
    { auto: "capabilities", label: "Data capabilities" },
    { auto: "pillars", label: "Service pillars" },
    { value: 3, label: "Founders on every project", todo: "Confirm: founders stay hands-on" },
    { value: 2, suffix: " wk", label: "To a first working demo", todo: "Confirm: realistic first-demo timeline" },
  ],

  /* ---- THE SERVICE CATALOGUE (keep memory.md in sync) ------------------ */
  services: [
    {
      id: "engineering",
      icon: "layers",
      name: "Data Engineering",
      blurb: "Reliable pipelines and modern warehouses, so every number downstream can be trusted.",
      items: [
        "ETL / ELT pipelines",
        "Data warehouse & lakehouse build",
        "Real-time & streaming data",
        "Data migration & modernisation",
      ],
      deliverables: ["Orchestrated pipelines", "Modelled warehouse", "Runbooks & docs"],
    },
    {
      id: "analytics",
      icon: "chart",
      name: "Analytics & BI",
      blurb: "Dashboards and KPI systems leadership actually opens — and acts on.",
      items: [
        "Executive & operational dashboards",
        "KPI frameworks & semantic layers",
        "Self-serve analytics",
        "Deep-dive & ad-hoc analysis",
      ],
      deliverables: ["Live dashboards", "KPI dictionary", "Stakeholder training"],
    },
    {
      id: "ai",
      icon: "spark",
      name: "Data Science & AI",
      blurb: "Forecasts, models and GenAI that move a metric you already track.",
      items: [
        "Predictive modelling & forecasting",
        "GenAI, RAG & copilots",
        "NLP & computer vision",
        "MLOps & model monitoring",
      ],
      deliverables: ["Production models", "Evaluation reports", "Monitoring & retraining"],
    },
    {
      id: "software",
      icon: "code",
      name: "Data Products & Software",
      blurb: "Apps, APIs and automations built directly on top of your data.",
      items: [
        "Web apps & internal tools",
        "APIs & system integrations",
        "Workflow automation",
        "Embedded / customer-facing analytics",
      ],
      deliverables: ["Deployed application", "API documentation", "CI/CD pipeline"],
    },
    {
      id: "cloud",
      icon: "cloud",
      name: "Cloud & Platform",
      blurb: "Secure, cost-aware infrastructure on the cloud you already use.",
      items: [
        "AWS / Azure / GCP architecture",
        "Snowflake, Databricks & BigQuery",
        "DevOps & CI/CD for data",
        "FinOps & cost optimisation",
      ],
      deliverables: ["Architecture diagrams", "Infrastructure as code", "Cost dashboard"],
    },
    {
      id: "governance",
      icon: "shield",
      name: "Governance & Acquisition",
      blurb: "Clean, compliant, well-documented data — including data you don't have yet.",
      items: [
        "Data quality & observability",
        "Security, PII & compliance",
        "Web scraping & data acquisition",
        "Cataloguing & documentation",
      ],
      deliverables: ["Quality checks", "Access policies", "Data catalogue"],
    },
  ],

  process: [
    { n: "01", name: "Discover", text: "We audit your sources, questions and constraints, then define the KPIs that matter.", out: "Scope & KPI map" },
    { n: "02", name: "Design", text: "Architecture, data model and a clickable prototype — agreed before we build.", out: "Blueprint & prototype" },
    { n: "03", name: "Build", text: "Weekly demos against one shared backlog. You see working software every week.", out: "Working increments" },
    { n: "04", name: "Deploy", text: "Production release with tests, monitoring, documentation and a proper handover.", out: "Live system & docs" },
    { n: "05", name: "Operate", text: "Optional retainer: we keep pipelines green, models fresh and the roadmap moving.", out: "Ongoing support" },
  ],

  industries: [
    "Retail & eCommerce", "Fintech & BFSI", "Healthcare", "SaaS & Tech", "Logistics & Supply chain",
    "Manufacturing", "Real estate", "Marketing & Media", "Education", // TODO: confirm / trim to your real experience
  ],

  stack: [
    "Python", "SQL", "dbt", "Airflow", "Spark", "Kafka", "Snowflake", "BigQuery", "Databricks", "PostgreSQL",
    "AWS", "Azure", "GCP", "Power BI", "Tableau", "Looker", "Metabase", "Superset", "React", "Next.js",
    "FastAPI", "Node.js", "Docker", "Terraform", "scikit-learn", "PyTorch", "OpenAI", "LangChain", // TODO: trim to what you truly use
  ],

  /* Case studies. Sample content — replace with real projects. Metrics are optional:
     metrics: [{ v: "−38%", k: "Reporting time" }] */
  projects: [
    { title: "Retail demand forecasting", client: "Retail client", category: "AI & ML", year: "2026", summary: "Store-level forecasting model feeding replenishment decisions, with monitoring and automated retraining.", stack: ["Python", "scikit-learn", "Airflow"], metrics: [], todo: "Replace with a real case study" },
    { title: "Executive revenue cockpit", client: "SaaS client", category: "Analytics & BI", year: "2026", summary: "One governed KPI layer powering board, sales and finance dashboards from a single source of truth.", stack: ["dbt", "Snowflake", "Power BI"], metrics: [], todo: "Replace with a real case study" },
    { title: "Customer 360 platform", client: "D2C client", category: "Data Engineering", year: "2026", summary: "Unified customer profile across web, CRM and payments, refreshed hourly with quality gates.", stack: ["Kafka", "BigQuery", "dbt"], metrics: [], todo: "Replace with a real case study" },
    { title: "Invoice-to-insight automation", client: "Services client", category: "Automation", year: "2026", summary: "Document ingestion, extraction and reconciliation replacing a manual weekly process.", stack: ["Python", "FastAPI", "OpenAI"], metrics: [], todo: "Replace with a real case study" },
    { title: "Warehouse migration", client: "Logistics client", category: "Data Engineering", year: "2026", summary: "Legacy on-prem reporting moved to a cost-controlled cloud lakehouse without downtime.", stack: ["Databricks", "AWS", "Terraform"], metrics: [], todo: "Replace with a real case study" },
    { title: "Support knowledge copilot", client: "B2B client", category: "AI & ML", year: "2026", summary: "Retrieval-augmented assistant answering from internal docs with citations and guardrails.", stack: ["LangChain", "PostgreSQL", "Next.js"], metrics: [], todo: "Replace with a real case study" },
  ],

  /* The three founders. Hardik is filled from your profile; partners are placeholders. */
  team: [
    {
      name: "Hardik",
      role: "Co-founder · Software & Data Products",
      bio: "Builds the applications, APIs and automations that sit on top of your data — from first prototype to production.",
      skills: ["Full-stack", "APIs", "Automation"],
      links: { linkedin: "", github: "", portfolio: "" },
      photo: "",
      todo: "Hardik: surname, photo, 2-line bio, links",
    },
    {
      name: "Partner Two",
      role: "Co-founder · Data Engineering & Cloud",
      bio: "Designs the pipelines, warehouses and cloud platforms that keep every dashboard fast, cheap and correct.",
      skills: ["Pipelines", "Warehousing", "Cloud"],
      links: { linkedin: "", github: "", portfolio: "" },
      photo: "",
      todo: "Partner 2: name, role, photo, bio, links",
    },
    {
      name: "Partner Three",
      role: "Co-founder · Analytics, BI & AI",
      bio: "Turns messy data into KPIs, forecasts and models the business can use to make better decisions.",
      skills: ["BI", "Modelling", "ML"],
      links: { linkedin: "", github: "", portfolio: "" },
      photo: "",
      todo: "Partner 3: name, role, photo, bio, links",
    },
  ],

  /* Shown ONLY in ?review=1 mode while `sample: true` — never show invented quotes publicly. */
  testimonials: [
    { quote: "Sample testimonial — replace with a real client quote.", name: "Client name", role: "Title, Company", sample: true, todo: "Real testimonials (with permission)" },
    { quote: "Sample testimonial — replace with a real client quote.", name: "Client name", role: "Title, Company", sample: true, todo: "Real testimonials (with permission)" },
  ],

  engagement: [
    { name: "Discovery sprint", length: "1–2 weeks", text: "Audit sources, define KPIs, agree architecture and walk away with a build plan and estimate.", points: ["Source & KPI audit", "Target architecture", "Roadmap & estimate"], todo: "Confirm durations & pricing model" },
    { name: "Fixed-scope build", length: "4–12 weeks", text: "A clearly scoped product, pipeline or dashboard suite with weekly demos and a clean handover.", points: ["Fixed scope & price", "Weekly demos", "Docs & handover"], featured: true, todo: "Confirm durations & pricing model" },
    { name: "Dedicated pod", length: "Monthly", text: "The three of us as your embedded data team — ongoing delivery, support and roadmap steering.", points: ["Flexible capacity", "Priority support", "Quarterly roadmap"], todo: "Confirm durations & pricing model" },
  ],

  faq: [
    { q: "Do you only build dashboards?", a: "No. Dashboards are one surface. We also build the pipelines, models, applications and cloud platform behind them, so everything shares one foundation." },
    { q: "How does a project start?", a: "A short call, then a discovery sprint (or a written proposal for well-defined work). You get scope, timeline and cost before committing to a build." },
    { q: "Which tools and clouds do you work with?", a: "We work with the stack you already have — AWS, Azure or GCP, Snowflake, Databricks, BigQuery, Power BI, Tableau and more — and recommend changes only when they pay off." },
    { q: "Will you sign an NDA?", a: "Yes. We are happy to sign your NDA before any detailed discussion of your data or systems." },
    { q: "Which time zones do you cover?", a: "We are based in India (IST) and arrange overlap for European and US teams by agreement.", todo: "Confirm overlap hours you can really offer" },
    { q: "How do you price work?", a: "Fixed price for scoped projects, monthly for retainers. We will always quote before starting.", todo: "Confirm pricing approach / currencies" },
  ],

  /* Master checklist — also mirrored in /memory.md */
  todo: [
    "Real phone / WhatsApp number",
    "Calendly / Cal.com booking link",
    "Form endpoint (Formspree / Basin / Web3Forms)",
    "LinkedIn, GitHub, Upwork / Clutch profile URLs",
    "Founder names, roles, photos, bios, personal links",
    "2–3 real case studies (+ metrics, logos only with permission)",
    "Real testimonials",
    "Logo files and brand colours (if you already have them)",
    "Pricing model, response-time and overlap promises",
    "Final domain, analytics (GA4 / Plausible), OG share image",
  ],
};
