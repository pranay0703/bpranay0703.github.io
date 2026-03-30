import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { EditorialContainer } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for product, design, and frontend collaboration.",
};

export default function ContactPage() {
  return (
    <EditorialContainer className="space-y-8 pb-20 pt-7 sm:pt-10">
      <Reveal>
        <header className="rounded-[1.5rem] border border-(--color-border) bg-(--color-surface) p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-(--color-muted)">Contact</p>
          <h1 className="mt-3 text-[clamp(2rem,5vw,3.3rem)] leading-[1.04] text-(--color-text)">
            Open for selective
            <span className="accent-serif ml-2 italic text-(--color-accent)">collaborations.</span>
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-(--color-muted) sm:text-base">
            I usually collaborate on product direction, interaction systems, and frontend execution.
          </p>
        </header>
      </Reveal>

      <Reveal>
        <section className="rounded-[1.5rem] border border-(--color-border) bg-(--color-surface) p-6 sm:p-8">
          <p className="max-w-2xl text-sm leading-8 text-(--color-muted) sm:text-base">
            If you are working on a product that needs stronger clarity, better interaction quality, and a
            tighter bridge between design and implementation, feel free to reach out.
          </p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="mt-6 inline-flex rounded-full border border-(--color-text) bg-(--color-text) px-5 py-2.5 text-sm font-medium text-(--color-surface) transition hover:translate-y-[-1px]"
          >
            Email
          </a>
        </section>
      </Reveal>

      <section className="grid gap-4 sm:grid-cols-2">
        {siteConfig.links.map((link, index) => (
          <Reveal key={link.label} delay={index * 0.04}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-5 transition hover:border-(--color-accent)"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-(--color-muted)">{link.label}</p>
              <p className="mt-1 text-sm leading-7 text-(--color-muted)">{link.note}</p>
            </a>
          </Reveal>
        ))}
      </section>
    </EditorialContainer>
  );
}
