import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/data/site";
import { EditorialContainer } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Background, principles, and current focus.",
};

const principles = [
  "Edit aggressively. Fewer moves, stronger outcomes.",
  "Design for trust before delight.",
  "Use motion as guidance, not decoration.",
  "Make constraints visible and workable.",
  "Favor language clarity over brand slogans.",
];

export default function AboutPage() {
  return (
    <EditorialContainer className="space-y-8 pb-20 pt-7 sm:pt-10">
      <Reveal>
        <header className="rounded-[1.5rem] border border-(--color-border) bg-(--color-surface) p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-(--color-muted)">About</p>
          <h1 className="mt-3 text-[clamp(2rem,5vw,3.4rem)] leading-[1.04] text-(--color-text)">
            Design + engineering
            <span className="accent-serif ml-2 italic text-(--color-accent)">in one workflow.</span>
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-(--color-muted) sm:text-base">
            I design and ship digital products where interaction quality and implementation quality are treated as the same problem.
          </p>
        </header>
      </Reveal>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <Reveal>
            <article className="rounded-[1.5rem] border border-(--color-border) bg-(--color-surface) p-6 sm:p-7">
              <h2 className="text-2xl text-(--color-text)">Profile Summary</h2>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-(--color-muted) sm:text-base">
                I work across product design and frontend implementation, usually on teams where the core challenge is reducing complexity without removing capability. My favorite projects involve dense interfaces, ambiguous requirements, and audiences with little patience for visual noise.
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-(--color-muted) sm:text-base">
                I enjoy translating editorial thinking into product surfaces: clear hierarchy, intentional rhythm, and copy that sounds like a real person wrote it.
              </p>
            </article>
          </Reveal>

          <Reveal>
            <article className="rounded-[1.5rem] border border-(--color-border) bg-(--color-surface) p-6 sm:p-7">
              <h2 className="text-2xl text-(--color-text)">Working Principles</h2>
              <ul className="mt-4 space-y-3">
                {principles.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-(--color-border) bg-(--color-surface-strong) px-4 py-3 text-sm leading-7 text-(--color-muted)"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

        <div className="space-y-8">
          <Reveal>
            <article className="rounded-[1.5rem] border border-(--color-border) bg-(--color-surface) p-6 sm:p-7">
              <h2 className="text-2xl text-(--color-text)">Now</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-(--color-muted) sm:text-base">
                {siteConfig.now.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.63rem] h-1.5 w-1.5 flex-none rounded-full bg-(--color-accent)" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="rounded-[1.5rem] border border-(--color-border) bg-(--color-surface) p-6 sm:p-7">
              <h2 className="text-2xl text-(--color-text)">Experience Snapshot</h2>
              <ul className="mt-4 space-y-3">
                {siteConfig.experience.map((item) => (
                  <li key={item.period} className="rounded-xl border border-(--color-border) bg-(--color-surface-strong) p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-(--color-muted)">{item.period}</p>
                    <p className="mt-1 text-sm font-semibold text-(--color-text)">{item.title}</p>
                    <p className="text-sm text-(--color-muted)">{item.org}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/projects"
                className="mt-5 inline-flex rounded-full border border-(--color-border) px-4 py-2 text-sm text-(--color-text-soft) transition hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                View project outcomes
              </Link>
            </article>
          </Reveal>
        </div>
      </section>
    </EditorialContainer>
  );
}
