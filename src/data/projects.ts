import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "atlas-checkout",
    title: "Atlas Checkout Refresh",
    tagline: "Reducing friction in a complex B2B payment flow",
    summary:
      "A complete rewrite of the checkout experience for invoice-heavy teams, focused on confidence, speed, and fewer support tickets.",
    year: "2025",
    role: "Lead Product Designer and Frontend Engineer",
    client: "Atlas Commerce",
    category: "Product UX",
    status: "shipped",
    stack: ["Next.js", "TypeScript", "Tailwind", "Motion"],
    cover: ["#8c9d78", "#e6d9c2"],
    caseStudy: {
      context:
        "Atlas served finance teams with mixed payment rules, split approvals, and strict audit requirements.",
      problem:
        "The old flow felt fragmented, error-prone, and opaque around tax and approval states.",
      role:
        "Owned UX direction, interaction design, component implementation, and QA polish.",
      team: "1 product manager, 2 engineers, 1 QA partner",
      constraints: [
        "Legacy API response shape could not be changed during launch window.",
        "Required support for three role-based approval states in one flow.",
        "No backend rewrite budget during v1 rollout.",
      ],
      approach: [
        "Reframed checkout as a progressive disclosure sequence instead of one long form.",
        "Introduced calm validation states and inline guidance for tax and account mismatch cases.",
        "Built a metadata rail for role, state, and risk indicators without visual clutter.",
        "Instrumented key micro-events to validate confidence and completion behavior after launch.",
      ],
      outcomes: [
        { label: "Completion rate", value: "+18% in first 6 weeks" },
        { label: "Average time", value: "-27% from first input to submit" },
        { label: "Support tickets", value: "-31% payment setup related" },
      ],
      reflection:
        "Most gains came from clearer sequence and language, not from adding more UI. Better editing of content and state labels outperformed visual novelty.",
      visuals: [
        {
          title: "Flow Overview",
          caption: "Intentional sequence and state clarity replaced one long brittle form.",
          tones: ["#8c9d78", "#dad2bb"],
        },
        {
          title: "Validation States",
          caption: "Inline guidance reduced uncertainty without interrupting momentum.",
          tones: ["#536349", "#d7dfcf"],
        },
        {
          title: "Approval Metadata",
          caption: "Desktop metadata rail for role, status, and traceability.",
          tones: ["#394332", "#c8d0bf"],
        },
      ],
    },
  },
  {
    slug: "mercury-ops-canvas",
    title: "Mercury Ops Canvas",
    tagline: "A realtime command surface for support and logistics teams",
    summary:
      "Designed and shipped a modular operations workspace that balanced speed, legibility, and high-density monitoring.",
    year: "2024",
    role: "Product Design Engineer",
    client: "Mercury Fleet",
    category: "Operations Interface",
    status: "shipped",
    stack: ["React", "TypeScript", "WebSocket", "Framer Motion"],
    cover: ["#5f7784", "#dbe4e8"],
    caseStudy: {
      context:
        "Support operators needed to triage dozens of live incidents while keeping response quality stable.",
      problem:
        "The previous dashboard over-prioritized visual noise and under-prioritized decision-making sequence.",
      role:
        "Led information architecture, interaction patterns, and frontend delivery for core modules.",
      team: "2 designers, 3 frontend engineers, 1 backend engineer",
      constraints: [
        "Data latency spikes created frequent visual churn.",
        "Users had to monitor 3 data streams simultaneously.",
        "Training time for new operators had to stay under one week.",
      ],
      approach: [
        "Designed a single-column incident narrative inside each module for faster contextual scanning.",
        "Used progressive emphasis and subdued motion to guide attention during realtime updates.",
        "Built deterministic empty, loading, and degraded states to reduce ambiguity.",
        "Introduced keyboard-first command paths for repetitive triage tasks.",
      ],
      outcomes: [
        { label: "Triage speed", value: "+22% faster median resolution" },
        { label: "Training ramp", value: "-2.1 days to independent handling" },
        { label: "Error rate", value: "-19% in high-volume shifts" },
      ],
      reflection:
        "Realtime products feel calmer when transitions and hierarchy are disciplined. Precision in defaults mattered more than adding new controls.",
      visuals: [
        {
          title: "Incident Stream",
          caption: "Priority-based visual rhythm for rapid scanning.",
          tones: ["#5f7784", "#d4dfe4"],
        },
        {
          title: "Decision Surface",
          caption: "Primary actions remain stable while data updates around them.",
          tones: ["#425762", "#cad5da"],
        },
        {
          title: "Degraded States",
          caption: "Clear fallback states maintained trust during latency spikes.",
          tones: ["#2f434d", "#bec8cd"],
        },
      ],
    },
  },
  {
    slug: "northstar-storyboard",
    title: "Northstar Storyboard",
    tagline: "Editorial storytelling for a product launch narrative",
    summary:
      "Created a modular launch story format blending case-study depth with feed-like readability for executive and community audiences.",
    year: "2023",
    role: "Design Lead",
    client: "Northstar Labs",
    category: "Brand and Product Story",
    status: "shipped",
    stack: ["Next.js", "MDX", "GSAP", "Vercel"],
    cover: ["#7a5f57", "#e8dbd3"],
    caseStudy: {
      context:
        "Northstar needed a launch narrative that could serve investors, customers, and recruitment candidates in one coherent format.",
      problem:
        "Existing launch pages read like disconnected sections and did not communicate product judgment.",
      role:
        "Directed narrative architecture, typography, visual language, and implementation handoff.",
      team: "1 writer, 1 visual designer, 2 frontend engineers",
      constraints: [
        "Content had to be reusable for long-form and short-form channels.",
        "Performance budget targeted under 2.0s LCP on mobile.",
        "Launch timeline allowed only one major design iteration.",
      ],
      approach: [
        "Structured the page as editorial chapters with consistent metadata cues.",
        "Created alternating narrow and wide moments to control pacing.",
        "Used restrained motion to support transitions between narrative beats.",
        "Built a reusable chapter system for future releases and updates.",
      ],
      outcomes: [
        { label: "Average read depth", value: "+41% vs prior launch pages" },
        { label: "Qualified inbound", value: "+26% in first month" },
        { label: "Template reuse", value: "Adopted for 4 subsequent launches" },
      ],
      reflection:
        "Editorial rhythm and intentional typography can turn dense product details into a story people willingly finish.",
      visuals: [
        {
          title: "Chapter Intro",
          caption: "Large typographic entry creates immediate framing.",
          tones: ["#7a5f57", "#e3d4cc"],
        },
        {
          title: "Evidence Blocks",
          caption: "Data-backed modules alternate with narrative context.",
          tones: ["#5f4841", "#d9cbc3"],
        },
        {
          title: "Closing CTA",
          caption: "A soft close invites conversation instead of hard conversion language.",
          tones: ["#43332d", "#cec0b8"],
        },
      ],
    },
  },
];

export const featuredProjects = projects.slice(0, 3);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
