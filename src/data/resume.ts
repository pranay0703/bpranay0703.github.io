export type ResumeEducationEntry = {
  institution: string;
  location: string;
  degree: string;
  dates: string;
};

export type ResumeSkillCategory = {
  category: string;
  details: string;
};

export type ResumeExperienceEntry = {
  organization: string;
  location: string;
  role: string;
  employmentType: string;
  dates: string;
  bullets: string[];
};

export type ResumeProjectEntry = {
  title: string;
  stack: string[];
  bullets: string[];
};

export type ResumeContributionEntry = {
  repository: string;
  pullRequest: string;
  focus: string;
  summary: string;
  href: string;
};

export type ResumePublicationEntry = {
  title: string;
  venue: string;
  year: string;
  href: string;
};

export const resumeSummary =
  "I am a data science graduate student who enjoys turning messy real-world data into clear, trustworthy systems. I focus on end-to-end pipelines, quality checks, experimentation, and practical dashboards that help teams make better decisions faster. Outside coursework and personal builds, I contribute to open source, publish research, and explore systems across telemetry, causal analysis, and root-cause automation.";

export const resumeEducation: ResumeEducationEntry[] = [
  {
    institution: "University of Maryland, College Park",
    location: "College Park, MD",
    degree: "Master of Science in Data Science, GPA: 3.90/4.0",
    dates: "Aug 2024 -- Dec 2026",
  },
  {
    institution: "PES University",
    location: "Bengaluru, India",
    degree: "Bachelor of Science in Computer Science, GPA: 7.67/10",
    dates: "Feb 2020 -- May 2024",
  },
];

export const resumeTechnicalSkills: ResumeSkillCategory[] = [
  {
    category: "Data Engineering and ETL",
    details: "AWS Glue, dbt, Airflow, Prefect, ELT, event-time processing, watermarking",
  },
  {
    category: "Analytics and QC",
    details: "dimensional modeling, data quality checks, cohort analysis, root-cause analysis, statistical validation",
  },
  {
    category: "SQL and Databases",
    details:
      "SQL (CTEs, joins, window functions), PostgreSQL, Snowflake, Databricks Delta Lake, data lake architecture",
  },
  {
    category: "BI and Visualization",
    details: "Power BI, Tableau, Metabase, Grafana, dashboard KPI design, self-service reporting",
  },
  {
    category: "Python and Automation",
    details: "Python, pandas, NumPy, scikit-learn, Spark Structured Streaming, Git, Docker",
  },
];

export const resumeExperience: ResumeExperienceEntry[] = [
  {
    organization: "University of Maryland",
    location: "College Park, MD",
    role: "Program Development Analyst (Data and Operations)",
    employmentType: "Part-Time",
    dates: "Jun 2025 -- Present",
    bullets: [
      "Built Python-based data cleaning and preprocessing workflows (imputation, deduplication, normalization) to standardize operational datasets for reporting and analysis.",
      "Developed and maintained Power BI dashboards to track operational metrics (completion rates, compliance, throughput) with consistent metric definitions.",
      "Wrote SQL reconciliation and validation checks to ensure consistency between source extracts and reporting datasets; flagged duplicate records and schema inconsistencies.",
      "Performed exploratory analysis to identify recurring patterns and bottlenecks; produced KPI tables and visual summaries for internal reporting.",
    ],
  },
];

export const resumeProjects: ResumeProjectEntry[] = [
  {
    title: "Optimizing Global Logistics Under Stress Using Predictive Telemetry",
    stack: ["AWS Glue", "Databricks Delta Lake", "Airflow", "Python", "Power BI"],
    bullets: [
      "Broke a fragmented telemetry stream problem into a structured ELT workflow so sensor and logistics data could be reliably stitched despite asynchronous captures.",
      "Built a cloud data lake ingestion pipeline with event-time processing, watermarking, SQL-based quality control checks, and automated annotations on late-arriving IoT telemetry.",
      "Scaled data preparation to multi-frequency batch plus streaming sources and enforced feature-store parity for online and offline predictive delay risk modeling.",
      "Verified model readiness with holdout validation and monitored delay-risk KPIs in dashboards; established data-quality baseline guardrails for operational decision handoffs.",
    ],
  },
  {
    title: "Deconstructing the Customer Journey to Quantify Feature Impact",
    stack: ["Snowflake", "dbt", "Tableau", "Python", "SQL"],
    bullets: [
      "Framed a decision gap where feature-impact instrumentation lacked causal rigor, forcing ambiguous rollout decisions.",
      "Engineered ETL pipelines to normalize semi-structured event logs, apply consistent annotation schemas, and create star-schema analytics tables with strict data validation.",
      "Executed treatment and control cohort analysis with propensity score matching and interrupted time series over millions of rows to isolate true lift from noise.",
      "Projected actionable feature adoption insights versus naive funnel tracking, enabling more accurate product decisions and anomaly alerts.",
    ],
  },
  {
    title: "TraceMind: MCP-Native Automated Root Cause Analysis Engine",
    stack: ["Python", "FastAPI", "DuckDB", "OpenTelemetry", "Grafana"],
    bullets: [
      "Identified that triage velocity was constrained by manually parsing distributed logs, so built a structured diagnostic layer for telemetry-first investigation.",
      "Built an MCP-native root-cause agent ingesting logs, traces, and metrics, applying schema validation and quality control heuristics, and exposing JSON-RPC queries for operator review.",
      "Validated incident detection on simulated outages with 1K-event trace windows, multi-agent checks, and critic-agent verification to reduce false positives.",
      "Demonstrated about 40% reduction in simulated mean-time-to-resolution versus manual dashboard-only triage, with measurable telemetry alert precision improvements.",
    ],
  },
];

export const resumeOpenSourceContributions: ResumeContributionEntry[] = [
  {
    repository: "streamlit/streamlit",
    pullRequest: "#14179",
    focus: "Frontend, Backend, Protobuf",
    summary:
      "Implemented st.set_theme() across frontend, backend, and protobuf contract updates to support consistent theming behavior.",
    href: "https://github.com/streamlit/streamlit/pull/14179",
  },
  {
    repository: "wandb/wandb",
    pullRequest: "#11443",
    focus: "Artifact Packaging, Backend, Testing",
    summary:
      "Fixed artifact packaging behavior and added backend test coverage to stabilize artifact workflows.",
    href: "https://github.com/wandb/wandb/pull/11443",
  },
  {
    repository: "confident-ai/deepeval",
    pullRequest: "#2524",
    focus: "Reliability, Debugging",
    summary:
      "Merged a reliability and debugging improvement to make evaluation runs easier to diagnose and reproduce.",
    href: "https://github.com/confident-ai/deepeval/pull/2524",
  },
];

export const resumePublications: ResumePublicationEntry[] = [
  {
    title: "Exploring LLMs as a Means for Conducting Bias-Free Technical Interviews",
    venue: "IEEE ISML",
    year: "2024",
    href: "https://ieeexplore.ieee.org/abstract/document/11007345",
  },
];

export const resumeAchievements: string[] = [
  "Big ThinkXWorldLabs Hackathon Winner -- The Paradox: Browser-based two-layer 3D puzzle exploration game built with TypeScript and Three.js, with Octree collision, Gaussian splats, and distance-driven time-dilation mechanics.",
];
