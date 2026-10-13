/* ==========================================================================
   Clever Insight Analytics LLP — content for the Aurora site.
   No personal emails, no employer names, no client names.
   Projects are written as independent / freelance work.
   ========================================================================== */
window.CIA = {
  brand: {
    name: "Clever Insight Analytics LLP",
    short: "CIA",
    domain: "www.cleverinsightanalytics.com",
    tagline: "Data projects, from pipeline to decision.",
    founded: "",
  },

  contact: {
    email: "info@cleverinsightanalytics.com",
    phone: "+91 98716 02093 · +91 95994 39248",
    location: "India · working with clients worldwide",
    hours: "",
    responseTime: "usually within the same day",
    calendly: "",
    formEndpoint: "",
  },

  social: {
    linkedin: "",
    github: "",
    x: "",
    upwork: "",
    clutch: "",
  },

  status: "Booking projects for Q4 2026 and Q1 2027",

  heroes: {
    aurora: {
      kicker: "Data engineering · Analytics · AI",
      title: "Data work, delivered as [one team.]",
      lede:
        "Clever Insight Analytics LLP takes on pipelines, dashboards, research, and models as project work. You deal with the people who build it.",
    },
  },

  manifesto:
    "The useful work sits between moving the data, making sense of it, and putting a decision on screen. We do that path as one team — scoped projects, written up without client names.",

  stats: [
    { auto: "capabilities", label: "Capabilities" },
    { auto: "pillars", label: "Services" },
    { value: 4, label: "Specialists on the team" },
    { value: 3, suffix: " wk", label: "To a first working demo" },
  ],

  /* What we can actually deliver. Cloud is AWS + Snowflake only. */
  services: [
    {
      id: "dashboards",
      icon: "chart",
      name: "Dashboard Design",
      blurb: "Power BI dashboards and KPI packs that a team will actually open.",
      items: [
        "Executive & operational dashboards",
        "KPI models and DAX",
        "Business reporting",
        "Stakeholder-ready views",
      ],
      deliverables: ["Live dashboard", "KPI notes", "Walkthrough"],
    },
    {
      id: "data",
      icon: "layers",
      name: "Data Solutions",
      blurb: "End-to-end data work: ingest, transform, validate, and serve. Cloud work is on AWS and Snowflake.",
      items: [
        "ETL / ELT pipelines",
        "Warehousing, modelling, Snowflake & dbt",
        "Kafka and CDC ingestion",
        "AWS data platform (Glue, Athena, S3, ECS)",
      ],
      deliverables: ["Working pipeline", "Modelled tables", "Run notes"],
    },
    {
      id: "research",
      icon: "search",
      name: "Research Analytics",
      blurb: "Structured research when the question is not a standing dashboard — including public and competitor sources.",
      items: [
        "Market & competitor research",
        "Public data collection",
        "Comparison datasets",
        "Decision-ready write-ups",
      ],
      deliverables: ["Clean dataset", "Comparison base", "Findings note"],
    },
    {
      id: "product",
      icon: "code",
      name: "Product Analytics",
      blurb: "How a product is searched, priced, specified, and used.",
      items: [
        "Funnel & usage analysis",
        "Price comparisons",
        "Spec & catalogue analysis",
        "Readouts for product teams",
      ],
      deliverables: ["Analysis pack", "Comparison base", "Recommendations"],
    },
    {
      id: "customer",
      icon: "users",
      name: "Customer Analytics",
      blurb: "Profiles, segments, and retention questions answered from the data you already have.",
      items: [
        "Customer profiling",
        "Segmentation",
        "Churn & retention analysis",
        "Campaign measurement",
      ],
      deliverables: ["Segment definitions", "Profile tables", "Readout"],
    },
    {
      id: "people",
      icon: "shield",
      name: "People Analytics",
      blurb: "Operational and workforce questions turned into reporting a manager can use.",
      items: [
        "Operational reporting",
        "Process metrics",
        "Workforce views",
        "Management packs",
      ],
      deliverables: ["Metric pack", "Process view", "Review notes"],
    },
    {
      id: "ai",
      icon: "spark",
      name: "AI & Machine Learning",
      blurb: "Applied models where the data and the question support them — classification, forecasting, and sequence models.",
      items: [
        "Classification models",
        "Forecasting & sequence models",
        "Deep learning prototypes",
        "Evaluation write-ups",
      ],
      deliverables: ["Working model", "Evaluation note", "Handover"],
    },
    {
      id: "eda",
      icon: "chart",
      name: "Exploratory Data Analytics",
      blurb: "A first pass on a dataset: what is in it, what is messy, and what is worth modelling.",
      items: [
        "Data profiling",
        "Quality & deduplication checks",
        "Pattern finding",
        "Analysis briefs",
      ],
      deliverables: ["Profile report", "Quality notes", "Next-step brief"],
    },
  ],

  process: [
    { n: "01", name: "Discover", text: "We look at the sources, the question, and the constraints, then agree what a useful first version is.", out: "Scope & questions" },
    { n: "02", name: "Design", text: "Data model, approach, and a sketch of the output — agreed before the build gets large.", out: "Approach note" },
    { n: "03", name: "Build", text: "A first working demo within 3 weeks when the solution is feasible and the complete requirement is in hand.", out: "Working demo" },
    { n: "04", name: "Deliver", text: "Handover with the dataset or dashboard, notes on how it was built, and what to watch.", out: "Handover" },
    { n: "05", name: "Support", text: "Optional follow-on: keep a pipeline healthy, refresh a model, or take the next question.", out: "Follow-on" },
  ],

  industries: [
    "Booking & search",
    "Pricing",
    "Customer analytics",
    "Business reporting",
    "ESG reporting",
    "Finance & compliance",
    "Logistics & operations",
  ],

  stack: [
    "Python", "SQL", "PySpark", "Pandas", "AWS", "Glue", "Athena", "S3", "Kafka",
    "Snowflake", "dbt", "Power BI", "PostgreSQL", "Tableau",
  ],

  projects: [
    {
      title: "Competitor pricing & spec base",
      category: "Pricing analytics",
      year: "Independent",
      summary:
        "An independent project for a commercial team. Public competitor listings were collected and cleaned into a comparison base — price, plus the other product specs buyers weigh next to price. The team used that base to set its own prices and adjust related product details. The organisation is not named.",
      stack: ["Python", "SQL", "Web extraction"],
      metrics: [],
    },
    {
      title: "Customer profiling for a fitness range",
      category: "Customer analytics",
      year: "Independent",
      summary:
        "A SQL pipeline joined customer, product, and usage tables for a fitness-equipment range. Descriptive statistics and probability — including conditional probability — showed which segments were more likely to buy higher-end products. The company is not named.",
      stack: ["SQL", "Python"],
      metrics: [{ v: "30%", k: "Higher-end purchase lift, ages 25–30" }],
    },
    {
      title: "Deep learning for marble defect classification",
      category: "AI & ML",
      year: "Writing",
      summary:
        "A published note on using deep learning to classify defects in marble. Technical write-up, not a client engagement.",
      stack: ["Python", "Deep learning"],
      metrics: [],
      href: "https://medium.com/@rishirajak/deep-learning-for-marble-defect-classification-f7928d077056",
      linkLabel: "Read on Medium",
    },
    {
      title: "Flower classification with the Sequential API",
      category: "AI & ML",
      year: "Writing",
      summary:
        "A published note on classifying flowers with a Sequential API deep-learning model. Technical write-up, not a client engagement.",
      stack: ["Python", "Deep learning"],
      metrics: [],
      href: "https://medium.com/@rishirajak/classifying-flower-through-sequential-api-deep-learning-192a2c28959b",
      linkLabel: "Read on Medium",
    },
    {
      title: "Share-price prediction with RNN and LSTM",
      category: "AI & ML",
      year: "Writing",
      summary:
        "A published note on modelling a share-price series with RNN and LSTM. Technical write-up, not a client engagement.",
      stack: ["Python", "RNN", "LSTM"],
      metrics: [],
      href: "https://medium.com/@rishirajak/share-price-prediction-using-rnn-and-lstm-8776456dea6f",
      linkLabel: "Read on Medium",
    },
  ],

  team: [
    {
      name: "Rishi Rajak",
      focus: "Dashboards · ESG · Strategy",
      bio: "Business intelligence professional with experience in analytics, data visualisation, ESG reporting, and business strategy. Specialises in turning complex datasets into dashboards, reporting frameworks, and decisions. MBA in Data Science & Data Analytics, with a background across business intelligence, consulting, and engineering.",
      skills: ["Dashboards", "ESG reporting", "Visualisation", "Strategy"],
      links: { medium: "https://medium.com/@rishirajak" },
    },
    {
      name: "Hardik Bindlish",
      focus: "ETL · Python · Power BI",
      bio: "BI and data engineer with experience building scalable data pipelines, analytics solutions, and business intelligence frameworks. Works in SQL, Python, PySpark, AWS, and Power BI, turning complex data into analysis that supports decisions. Covers ETL, process automation, data optimisation, and analytics-driven business work.",
      skills: ["SQL", "Python", "PySpark", "AWS", "Power BI"],
      links: {},
    },
    {
      name: "Aman Mishra",
      focus: "Pipelines · Warehousing · Analytics",
      bio: "Data product specialist with 5+ years in data engineering, analytics, and business intelligence. Builds end-to-end pipelines — ingestion, transformation, processing, validation, and analytics — on AWS (Glue, Athena, S3, ECS), Kafka and CDC, PySpark, SQL, Snowflake, dbt, and Power BI. Covers warehousing, data modelling, large-scale transformation and deduplication, production troubleshooting, and automated collection of public and competitor data. Domain work includes booking, search, pricing, customer analytics, and business reporting.",
      skills: ["AWS", "PySpark", "Kafka", "Snowflake", "dbt", "Power BI"],
      links: {},
    },
    {
      name: "Megha Diwakar",
      focus: "Controls · Risk · Compliance",
      bio: "Internal audit and risk compliance professional with experience in finance, accounting, logistics, and operational processes. Specialises in internal controls, risk assessment, compliance monitoring, and process improvement — finding operational gaps and putting workable controls in place.",
      skills: ["Internal controls", "Risk assessment", "Compliance", "Process improvement"],
      links: {},
    },
  ],

  testimonials: [],

  engagement: [
    {
      name: "Discovery sprint",
      length: "Before build",
      text: "Look at the sources and the question, then leave with an approach and a quote before any build starts.",
      points: ["Source & question review", "Approach", "Quote"],
    },
    {
      name: "Fixed-scope build",
      length: "First demo in 3 weeks",
      text: "A defined pipeline, dashboard, dataset, or model. First working demo within 3 weeks when the solution is feasible and the complete requirement is provided.",
      points: ["Agreed scope", "Working demo", "Notes & handover"],
      featured: true,
    },
    {
      name: "Follow-on support",
      length: "After delivery",
      text: "Stay on after handover — keep a pipeline healthy, refresh a report, or take the next question.",
      points: ["Flexible follow-on", "Same-day replies", "Next-question planning"],
    },
  ],

  faq: [
    {
      q: "Do you only build dashboards?",
      a: "No. Dashboards are one service. We also build pipelines, research datasets, customer and product analysis, and machine-learning models.",
    },
    {
      q: "How does a project start?",
      a: "Email info@cleverinsightanalytics.com. We reply usually within the same day. You get scope and a quote before a build starts.",
    },
    {
      q: "When is the first demo?",
      a: "Within 3 weeks, when the solution is feasible and the complete requirement has been provided.",
    },
    {
      q: "Which tools and cloud do you work with?",
      a: "SQL, Python, PySpark, Kafka, dbt, Snowflake, Power BI, and AWS (Glue, Athena, S3, ECS). Cloud work is on AWS and Snowflake.",
    },
    {
      q: "Will you sign an NDA?",
      a: "Yes. We sign an NDA before any detailed discussion of your data or systems. Client and organisation names are not published.",
    },
    {
      q: "Which time zones do you cover?",
      a: "We are based in India (IST) and arrange overlap for European and US teams by agreement.",
    },
    {
      q: "How do you price work?",
      a: "We quote before starting. Fixed price for a scoped project; follow-on work is agreed separately.",
    },
  ],

  todo: [
    "Logo files (the site uses the CIA wordmark until then)",
    "Team photos",
    "Company LinkedIn page URL",
    "Form endpoint, if the on-page form should stop opening the email app",
  ],
};
