export type NavItem = {
  href: string;
  label: string;
};

export type SiteLink = {
  label: string;
  href: string;
  note: string;
};

export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  summary: string;
};

export type ProcessStep = {
  label: string;
  description: string;
};

export type NoteKind = "note" | "experiment" | "ship" | "link";

export type NoteItem = {
  slug: string;
  title: string;
  excerpt: string;
  kind: NoteKind;
  date: string;
  tags: string[];
};

export type ProjectOutcome = {
  label: string;
  value: string;
};

export type ProjectVisual = {
  title: string;
  caption: string;
  tones: [string, string];
};

export type ProjectCaseStudy = {
  context: string;
  problem: string;
  role: string;
  team: string;
  constraints: string[];
  approach: string[];
  outcomes: ProjectOutcome[];
  reflection: string;
  visuals: ProjectVisual[];
};

export type ProjectStatus = "shipped" | "in-progress" | "concept";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  year: string;
  role: string;
  client: string;
  category: string;
  status: ProjectStatus;
  stack: string[];
  cover: [string, string];
  caseStudy: ProjectCaseStudy;
};

export type GitHubProject = {
  name: string;
  href: string;
  description: string;
  language: string;
  stars: number;
  updatedAt: string;
};

export type OpenSourceContribution = {
  title: string;
  href: string;
  repository: string;
  mergedAt: string;
};

export type SiteConfig = {
  name: string;
  role: string;
  location: string;
  availability: string;
  intro: string;
  statement: string;
  nav: NavItem[];
  now: string[];
  process: ProcessStep[];
  links: SiteLink[];
  experience: ExperienceItem[];
  contactEmail: string;
};
