import type { Metadata } from "next";

import { notes } from "@/data/notes";
import { EditorialContainer } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Notes",
  description: "Short entries on product craft, frontend systems, and experiments.",
};

export default function NotesPage() {
  return (
    <EditorialContainer className="space-y-8 pb-20 pt-7 sm:pt-10">
      <Reveal>
        <header className="rounded-[1.5rem] border border-(--color-border) bg-(--color-surface) p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-(--color-muted)">Notes</p>
          <h1 className="mt-3 text-[clamp(2rem,5vw,3.3rem)] leading-[1.04] text-(--color-text)">
            Ongoing writing on
            <span className="accent-serif ml-2 italic text-(--color-accent)">product craft.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-(--color-muted) sm:text-base">
            Short entries from current work and ongoing experiments.
          </p>
        </header>
      </Reveal>

      <div className="space-y-4">
        {notes.map((note, index) => (
          <Reveal key={note.slug} delay={index * 0.04}>
            <article className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-5 sm:p-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-(--color-muted)">
                {note.kind} • {new Date(note.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight text-(--color-text) sm:text-xl">
                {note.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-(--color-muted) sm:text-base">{note.excerpt}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-(--color-border) bg-(--color-surface-strong) px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-(--color-muted)"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </EditorialContainer>
  );
}
