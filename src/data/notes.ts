import { NoteItem } from "@/lib/types";

export const notes: NoteItem[] = [
  {
    slug: "density-without-fatigue",
    title: "Designing Dense Interfaces Without User Fatigue",
    excerpt:
      "A practical checklist for handling high-information views while preserving calm scanning and decision clarity.",
    kind: "note",
    date: "2026-03-24",
    tags: ["UX", "information-design", "product"],
  },
  {
    slug: "shipping-motion-restraint",
    title: "Shipping Motion That Supports Reading",
    excerpt:
      "Micro-guidelines for reveal timing, hover behavior, and reduced-motion parity in content-first products.",
    kind: "experiment",
    date: "2026-03-12",
    tags: ["motion", "frontend", "accessibility"],
  },
  {
    slug: "billing-flow-v2",
    title: "Shipped: Billing Flow v2 in Production",
    excerpt:
      "A short retrospective on sequencing, validation language, and rollout strategy for critical payment interactions.",
    kind: "ship",
    date: "2026-02-28",
    tags: ["shipping", "fintech", "forms"],
  },
  {
    slug: "making-interfaces-feel-authored",
    title: "Making Interfaces Feel Authored, Not Assembled",
    excerpt:
      "How spacing discipline, typography pairing, and copy specificity create a stronger point of view.",
    kind: "note",
    date: "2026-02-17",
    tags: ["craft", "typography", "editorial"],
  },
  {
    slug: "three-links-this-week",
    title: "Three Useful Reads on Product Rhythm",
    excerpt:
      "A compact reading list covering feed architecture, sequencing friction, and narrative interface design.",
    kind: "link",
    date: "2026-02-05",
    tags: ["reading", "curation"],
  },
];
