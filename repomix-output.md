This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
public/
  file.svg
  globe.svg
  next.svg
  vercel.svg
  window.svg
src/
  app/
    about/
      page.tsx
    contact/
      page.tsx
    notes/
      page.tsx
    projects/
      [slug]/
        page.tsx
      page.tsx
    favicon.ico
    globals.css
    layout.tsx
    page.tsx
  components/
    sections/
      home-feed.tsx
      project-case-study.tsx
      site-header.tsx
    ui/
      container.tsx
      reveal.tsx
      section-heading.tsx
  data/
    notes.ts
    projects.ts
    site.ts
  lib/
    types.ts
.gitignore
AGENTS.md
CLAUDE.md
eslint.config.mjs
next.config.ts
package.json
postcss.config.mjs
README.md
tsconfig.json
```

# Files

## File: public/file.svg
````xml
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
````

## File: public/globe.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
````

## File: public/next.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
````

## File: public/vercel.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
````

## File: public/window.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
````

## File: src/app/about/page.tsx
````typescript
import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { EditorialContainer } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

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
    <EditorialContainer className="space-y-12 pb-20 pt-8 sm:space-y-14 sm:pt-10">
      <Reveal>
        <SectionHeading
          eyebrow="Info"
          title="A short profile"
          description="I design and ship digital products where interaction quality and implementation quality are treated as the same problem."
        />
      </Reveal>

      <Reveal>
        <section className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-5 sm:p-7">
          <p className="max-w-3xl text-pretty text-sm leading-8 text-(--color-muted) sm:text-base">
            I work across product design and frontend implementation, usually on teams where the core
            challenge is reducing complexity without removing capability. My favorite projects involve
            dense interfaces, ambiguous requirements, and audiences with little patience for visual noise.
          </p>
          <p className="mt-5 max-w-3xl text-pretty text-sm leading-8 text-(--color-muted) sm:text-base">
            I enjoy translating editorial thinking into product surfaces: clear hierarchy, intentional rhythm,
            and copy that sounds like a real person wrote it.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-(--color-text)">Working Principles</h2>
          <ul className="mt-5 space-y-3">
            {principles.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-(--color-border) bg-(--color-surface) px-4 py-3 text-sm leading-7 text-(--color-muted)"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-2xl border border-(--color-border) bg-(--color-surface-strong) p-5 sm:p-7">
          <h2 className="text-xl font-semibold tracking-tight text-(--color-text)">Now</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-(--color-muted) sm:text-base">
            {siteConfig.now.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[0.63rem] h-1.5 w-1.5 flex-none rounded-full bg-(--color-accent)" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>
    </EditorialContainer>
  );
}
````

## File: src/app/contact/page.tsx
````typescript
import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { EditorialContainer } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for product, design, and frontend collaboration.",
};

export default function ContactPage() {
  return (
    <EditorialContainer className="space-y-10 pb-20 pt-8 sm:space-y-12 sm:pt-10">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let us build something with care"
          description="I usually collaborate on product direction, interaction systems, and frontend execution."
        />
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-(--color-border) bg-(--color-surface-strong) p-6 sm:p-8">
          <p className="max-w-2xl text-sm leading-8 text-(--color-muted) sm:text-base">
            If you are working on a product that needs stronger clarity, better interaction quality, and a
            tighter bridge between design and implementation, feel free to reach out.
          </p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="mt-5 inline-flex rounded-full bg-(--color-text) px-5 py-2.5 text-sm font-medium text-(--color-bg) transition hover:translate-y-[-1px] hover:bg-(--color-accent-2)"
          >
            {siteConfig.contactEmail}
          </a>
        </section>
      </Reveal>

      <section className="grid gap-3 sm:grid-cols-2">
        {siteConfig.links.map((link, index) => (
          <Reveal key={link.label} delay={index * 0.04}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-4 transition hover:border-(--color-text-soft)"
            >
              <p className="text-sm font-semibold text-(--color-text)">{link.label}</p>
              <p className="mt-1 text-sm leading-7 text-(--color-muted)">{link.note}</p>
            </a>
          </Reveal>
        ))}
      </section>
    </EditorialContainer>
  );
}
````

## File: src/app/notes/page.tsx
````typescript
import type { Metadata } from "next";

import { notes } from "@/data/notes";
import { EditorialContainer } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Notes",
  description: "Short entries on product craft, frontend systems, and experiments.",
};

export default function NotesPage() {
  return (
    <EditorialContainer className="space-y-10 pb-20 pt-8 sm:space-y-12 sm:pt-10">
      <Reveal>
        <SectionHeading
          eyebrow="Notes"
          title="An evolving notebook"
          description="Short entries from current work and ongoing experiments."
        />
      </Reveal>

      <div className="space-y-4">
        {notes.map((note, index) => (
          <Reveal key={note.slug} delay={index * 0.04}>
            <article className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-4 sm:p-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-(--color-muted)">
                {note.kind} - {new Date(note.date).toLocaleDateString("en-US", {
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
                    className="rounded-full border border-(--color-border) bg-(--color-bg) px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-(--color-muted)"
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
````

## File: src/app/projects/[slug]/page.tsx
````typescript
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudy } from "@/components/sections/project-case-study";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title}`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;

  return (
    <ProjectCaseStudy
      project={project}
      previousProject={previousProject}
      nextProject={nextProject}
    />
  );
}
````

## File: src/app/projects/page.tsx
````typescript
import type { Metadata } from "next";
import Link from "next/link";

import { projects } from "@/data/projects";
import { EditorialContainer } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies and product collaborations.",
};

export default function ProjectsPage() {
  return (
    <EditorialContainer className="space-y-10 pb-20 pt-8 sm:space-y-12 sm:pt-10">
      <Reveal>
        <SectionHeading
          eyebrow="Work"
          title="Selected case studies"
          description="Project pages focus on context, constraints, judgment, and outcomes."
        />
      </Reveal>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05}>
            <Link
              href={`/projects/${project.slug}`}
              className="block rounded-2xl border border-(--color-border) bg-(--color-surface) p-4 transition hover:-translate-y-[2px] hover:border-(--color-text-soft) sm:p-5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-(--color-muted)">
                {project.year} - {project.category}
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-(--color-text) sm:text-2xl">
                {project.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-(--color-muted) sm:text-base">{project.summary}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </EditorialContainer>
  );
}
````

## File: src/app/globals.css
````css
@import "tailwindcss";

:root {
  --color-bg: #f7f3eb;
  --color-surface: #f3ede2;
  --color-surface-strong: #ece5d8;
  --color-text: #1d2320;
  --color-text-soft: #313a35;
  --color-muted: #57615a;
  --color-accent: #586a4e;
  --color-accent-2: #4f6f7a;
  --color-border: rgba(32, 44, 38, 0.14);
  --radius-xl: 1.35rem;
  --radius-2xl: 1.7rem;
}

@theme inline {
  --color-background: var(--color-bg);
  --color-foreground: var(--color-text);
  --font-sans: var(--font-site-sans);
  --font-serif: var(--font-site-serif);
}

* {
  border-color: var(--color-border);
}

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-site-sans), "Avenir Next", "Segoe UI", sans-serif;
  line-height: 1.5;
  text-rendering: geometricPrecision;
}

h1,
h2,
h3 {
  text-wrap: balance;
}

p {
  text-wrap: pretty;
}

a {
  color: inherit;
  text-decoration: none;
}

main {
  width: 100%;
}

.accent-serif {
  font-family: var(--font-site-serif), "Baskerville", serif;
  font-style: italic;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
````

## File: src/app/layout.tsx
````typescript
import type { Metadata } from "next";
import { Cormorant_Garamond, Sora } from "next/font/google";

import { SiteHeader } from "@/components/sections/site-header";
import "./globals.css";

const sans = Sora({
  variable: "--font-site-sans",
  subsets: ["latin"],
});

const serif = Cormorant_Garamond({
  variable: "--font-site-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "The Quiet Signal",
    template: "%s | The Quiet Signal",
  },
  description:
    "Editorial feed portfolio by Pranay B V, focused on thoughtful digital product design and implementation.",
  openGraph: {
    title: "The Quiet Signal",
    description:
      "Selected work, experiments, and notes on making digital products clear, calm, and crafted.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Quiet Signal",
    description:
      "Selected work, experiments, and notes on making digital products clear, calm, and crafted.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} h-full`}>
      <body className="min-h-full bg-(--color-bg) text-(--color-text) antialiased">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 opacity-90"
          style={{
            background:
              "radial-gradient(circle at 12% 12%, rgba(198, 183, 150, 0.24) 0%, rgba(198, 183, 150, 0) 45%), radial-gradient(circle at 88% 6%, rgba(115, 146, 156, 0.2) 0%, rgba(115, 146, 156, 0) 37%), linear-gradient(180deg, #f7f3eb 0%, #f4efe5 100%)",
          }}
        />
        <SiteHeader />
        <div className="relative flex min-h-[calc(100svh-4rem)] flex-col">
          {children}
          <footer className="mt-auto border-t border-(--color-border) py-5">
            <div className="mx-auto flex w-full max-w-[52rem] items-center justify-between px-5 text-xs text-(--color-muted) sm:px-8">
              <span>Pranay B V</span>
              <span>Crafted with care in Next.js</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
````

## File: src/app/page.tsx
````typescript
import { HomeFeed } from "@/components/sections/home-feed";

export default function HomePage() {
  return <HomeFeed />;
}
````

## File: src/components/sections/home-feed.tsx
````typescript
import Link from "next/link";

import { notes } from "@/data/notes";
import { featuredProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { EditorialContainer } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const featuredNotes = notes.slice(0, 4);

export function HomeFeed() {
  return (
    <EditorialContainer className="space-y-16 pb-20 pt-5 sm:space-y-20 sm:pt-8">
      <HeroBlock />
      <FeaturedProjectsBlock />
      <NotesBlock />
      <ProcessBlock />
      <AboutNowBlock />
      <ExperienceBlock />
      <LinksBlock />
      <ContactBlock />
    </EditorialContainer>
  );
}

function HeroBlock() {
  return (
    <Reveal>
      <section aria-labelledby="hero-title" className="rounded-3xl border border-(--color-border) bg-(--color-surface) p-6 sm:p-9">
        <p className="text-xs uppercase tracking-[0.24em] text-(--color-muted)">The Quiet Signal</p>
        <h1
          id="hero-title"
          className="mt-4 max-w-3xl text-balance text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-(--color-text)"
        >
          {siteConfig.intro}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-8 text-(--color-muted) sm:text-lg">
          {siteConfig.statement}
        </p>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-(--color-bg) px-3 py-1 text-xs text-(--color-muted)">
          <span className="inline-flex h-2 w-2 rounded-full bg-(--color-accent)" aria-hidden="true" />
          {siteConfig.availability} - {siteConfig.location}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-[1fr,11rem] sm:items-end">
          <div className="text-sm leading-7 text-(--color-muted)">
            I like making dense products feel simple, and simple interfaces feel more alive.
          </div>
          <div
            aria-hidden="true"
            className="h-28 rounded-2xl border border-(--color-border)"
            style={{
              background:
                "radial-gradient(circle at 22% 24%, #f6e8cf 0%, #d8d5bf 35%, #a4b39a 100%)",
            }}
          />
        </div>
      </section>
    </Reveal>
  );
}

function FeaturedProjectsBlock() {
  return (
    <section id="work" aria-labelledby="featured-work-heading">
      <Reveal>
        <SectionHeading
          id="featured-work-heading"
          eyebrow="Pinned Work"
          title="Case studies, presented as editorial entries"
          description="Each project balances clarity, interaction quality, and practical implementation constraints."
        />
      </Reveal>
      <div className="space-y-5">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05}>
            <article className="group rounded-2xl border border-(--color-border) bg-(--color-surface) p-4 transition hover:-translate-y-[2px] hover:border-(--color-text-soft) sm:p-5">
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="gap-6 md:grid md:grid-cols-[7rem,1fr]">
                  <dl className="hidden space-y-2 text-[11px] uppercase tracking-[0.18em] text-(--color-muted) md:block">
                    <div>
                      <dt className="opacity-80">Year</dt>
                      <dd className="mt-1 text-(--color-text-soft)">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="opacity-80">Role</dt>
                      <dd className="mt-1 text-(--color-text-soft)">{project.role}</dd>
                    </div>
                    <div>
                      <dt className="opacity-80">Category</dt>
                      <dd className="mt-1 text-(--color-text-soft)">{project.category}</dd>
                    </div>
                  </dl>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-(--color-muted)">{project.tagline}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-(--color-text) sm:text-[1.75rem]">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-(--color-muted) sm:text-base">
                      {project.summary}
                    </p>

                    <div
                      className="mt-5 h-44 rounded-xl border border-(--color-border) sm:h-56"
                      style={{
                        background: `linear-gradient(135deg, ${project.cover[0]} 0%, ${project.cover[1]} 100%)`,
                      }}
                    />

                    <span className="mt-4 inline-flex text-sm font-medium text-(--color-text) transition group-hover:translate-x-0.5">
                      Open project
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function NotesBlock() {
  return (
    <section id="notes" aria-labelledby="notes-heading">
      <Reveal>
        <SectionHeading
          id="notes-heading"
          eyebrow="Notes and Experiments"
          title="Small entries from ongoing practice"
          description="Selected fragments: shipped updates, visual studies, implementation notes, and useful references."
        />
      </Reveal>

      <div className="space-y-4">
        {featuredNotes.map((note, index) => (
          <Reveal key={note.slug} delay={index * 0.04}>
            <article className="rounded-2xl border border-(--color-border) bg-(--color-surface) px-4 py-4 sm:px-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-(--color-muted)">
                {note.kind} - {new Date(note.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-(--color-text)">{note.title}</h3>
              <p className="mt-2 text-sm leading-7 text-(--color-muted) sm:text-base">{note.excerpt}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProcessBlock() {
  return (
    <section id="process" aria-labelledby="process-heading">
      <Reveal>
        <SectionHeading
          id="process-heading"
          eyebrow="Process Slice"
          title="How I usually shape products"
          description="A small framework I return to when projects get noisy or ambiguous."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {siteConfig.process.map((step, index) => (
          <Reveal key={step.label} delay={index * 0.05}>
            <article className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-4 sm:p-5">
              <h3 className="text-base font-semibold text-(--color-text)">{step.label}</h3>
              <p className="mt-2 text-sm leading-7 text-(--color-muted)">{step.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AboutNowBlock() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <Reveal>
        <SectionHeading
          id="about-heading"
          eyebrow="About and Now"
          title="A concise profile"
          description="I care about product judgment, clear systems, and details that users feel more than notice."
        />
      </Reveal>

      <Reveal>
        <div className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-5 sm:p-6">
          <ul className="space-y-3 text-sm leading-7 text-(--color-muted) sm:text-base">
            {siteConfig.now.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[0.63rem] h-1.5 w-1.5 flex-none rounded-full bg-(--color-accent)" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

function ExperienceBlock() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <Reveal>
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="Recent roles and collaborations"
          description="Simple timeline, no noise."
        />
      </Reveal>

      <div className="space-y-3">
        {siteConfig.experience.map((item, index) => (
          <Reveal key={item.period} delay={index * 0.05}>
            <article className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-4 sm:p-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-(--color-muted)">{item.period}</p>
              <h3 className="mt-2 text-base font-semibold text-(--color-text) sm:text-lg">{item.title}</h3>
              <p className="text-sm text-(--color-text-soft)">{item.org}</p>
              <p className="mt-2 text-sm leading-7 text-(--color-muted)">{item.summary}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function LinksBlock() {
  return (
    <section id="links" aria-labelledby="links-heading">
      <Reveal>
        <SectionHeading
          id="links-heading"
          eyebrow="Selected Links"
          title="Places to explore more"
          description="A compact set of links, each with clear context."
        />
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2">
        {siteConfig.links.map((link, index) => (
          <Reveal key={link.label} delay={index * 0.05}>
            <a
              href={link.href}
              className="group rounded-2xl border border-(--color-border) bg-(--color-surface) p-4 transition hover:border-(--color-text-soft)"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <p className="text-sm font-semibold text-(--color-text)">{link.label}</p>
              <p className="mt-1 text-sm leading-7 text-(--color-muted)">{link.note}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <Reveal>
      <section id="contact" aria-labelledby="contact-heading" className="rounded-3xl border border-(--color-border) bg-(--color-surface-strong) p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.24em] text-(--color-muted)">Final CTA</p>
        <h2 id="contact-heading" className="mt-3 max-w-2xl text-balance text-2xl font-semibold tracking-tight text-(--color-text) sm:text-3xl">
          Looking for someone who cares about the details? Say hello.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-7 text-(--color-muted) sm:text-base">
          I take on a small number of projects where product clarity, interaction quality, and thoughtful engineering all matter.
        </p>
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="mt-5 inline-flex rounded-full bg-(--color-text) px-5 py-2.5 text-sm font-medium text-(--color-bg) transition hover:translate-y-[-1px] hover:bg-(--color-accent-2)"
        >
          {siteConfig.contactEmail}
        </a>
      </section>
    </Reveal>
  );
}
````

## File: src/components/sections/project-case-study.tsx
````typescript
import Link from "next/link";

import { Project } from "@/lib/types";
import { EditorialContainer } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type ProjectCaseStudyProps = {
  project: Project;
  previousProject?: Project;
  nextProject?: Project;
};

export function ProjectCaseStudy({
  project,
  previousProject,
  nextProject,
}: ProjectCaseStudyProps) {
  return (
    <EditorialContainer className="space-y-14 pb-20 pt-8 sm:space-y-16 sm:pt-10">
      <Reveal>
        <header className="space-y-6">
          <p className="text-xs uppercase tracking-[0.24em] text-(--color-muted)">
            {project.category} - {project.year}
          </p>
          <h1 className="max-w-4xl text-balance text-[clamp(2rem,4.2vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-(--color-text)">
            {project.title}
          </h1>
          <p className="max-w-3xl text-pretty text-base leading-8 text-(--color-muted) sm:text-lg">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-2">
            <MetaPill label="Role" value={project.role} />
            <MetaPill label="Client" value={project.client} />
            <MetaPill label="Status" value={project.status} />
          </div>

          <div
            aria-hidden="true"
            className="h-60 rounded-3xl border border-(--color-border) sm:h-80"
            style={{
              background: `linear-gradient(130deg, ${project.cover[0]} 0%, ${project.cover[1]} 100%)`,
            }}
          />
        </header>
      </Reveal>

      <Reveal>
        <section className="md:grid md:grid-cols-[8rem,1fr] md:gap-8">
          <dl className="mb-5 hidden space-y-2 text-[11px] uppercase tracking-[0.18em] text-(--color-muted) md:block">
            <div>
              <dt>Year</dt>
              <dd className="mt-1 text-(--color-text-soft)">{project.year}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd className="mt-1 text-(--color-text-soft)">{project.role}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd className="mt-1 text-(--color-text-soft)">{project.category}</dd>
            </div>
          </dl>

          <div className="space-y-8">
            <InfoBlock title="Context" body={project.caseStudy.context} />
            <InfoBlock title="Problem" body={project.caseStudy.problem} />
            <InfoBlock title="Role" body={project.caseStudy.role} />

            <section>
              <h2 className="text-xl font-semibold tracking-tight text-(--color-text)">Team and Constraints</h2>
              <p className="mt-2 text-sm text-(--color-text-soft)">{project.caseStudy.team}</p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-(--color-muted) sm:text-base">
                {project.caseStudy.constraints.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.65rem] h-1.5 w-1.5 flex-none rounded-full bg-(--color-accent)" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </Reveal>

      <section className="grid gap-8 lg:grid-cols-[1.35fr,1fr]">
        <Reveal>
          <article className="rounded-3xl border border-(--color-border) bg-(--color-surface) p-6 sm:p-7">
            <h2 className="text-xl font-semibold tracking-tight text-(--color-text)">Approach</h2>
            <ol className="mt-4 space-y-3 text-sm leading-7 text-(--color-muted) sm:text-base">
              {project.caseStudy.approach.map((step) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-[0.22rem] inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-(--color-border) text-xs text-(--color-text-soft)">
                    +
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>
        </Reveal>

        <Reveal>
          <article className="rounded-3xl border border-(--color-border) bg-(--color-surface) p-6 sm:p-7">
            <h2 className="text-xl font-semibold tracking-tight text-(--color-text)">Outcome</h2>
            <ul className="mt-4 space-y-3">
              {project.caseStudy.outcomes.map((item) => (
                <li key={item.label} className="rounded-xl border border-(--color-border) bg-(--color-bg) px-4 py-3">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-(--color-muted)">{item.label}</p>
                  <p className="mt-1 text-base font-semibold text-(--color-text)">{item.value}</p>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-(--color-text)">Visual Story</h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-(--color-muted) sm:text-base">
            A concise sequence of art-directed frames instead of exhaustive screenshot dumps.
          </p>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {project.caseStudy.visuals.map((visual, index) => (
            <Reveal key={visual.title} delay={index * 0.05}>
              <figure className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-3">
                <div
                  className="h-44 rounded-xl border border-(--color-border) sm:h-52"
                  style={{
                    background: `linear-gradient(135deg, ${visual.tones[0]} 0%, ${visual.tones[1]} 100%)`,
                  }}
                />
                <figcaption className="px-1 pb-1 pt-3">
                  <p className="text-sm font-semibold text-(--color-text)">{visual.title}</p>
                  <p className="mt-1 text-sm leading-6 text-(--color-muted)">{visual.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="rounded-3xl border border-(--color-border) bg-(--color-surface-strong) p-6 sm:p-7">
          <h2 className="text-xl font-semibold tracking-tight text-(--color-text)">Reflection</h2>
          <p className="mt-3 max-w-3xl text-pretty text-sm leading-8 text-(--color-muted) sm:text-base">
            {project.caseStudy.reflection}
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="flex flex-wrap justify-between gap-4 border-t border-(--color-border) pt-6">
          {previousProject ? (
            <Link
              href={`/projects/${previousProject.slug}`}
              className="rounded-full border border-(--color-border) px-4 py-2 text-sm text-(--color-text-soft) transition hover:border-(--color-text-soft) hover:text-(--color-text)"
            >
              Previous: {previousProject.title}
            </Link>
          ) : (
            <span />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="rounded-full border border-(--color-border) px-4 py-2 text-sm text-(--color-text-soft) transition hover:border-(--color-text-soft) hover:text-(--color-text)"
            >
              Next: {nextProject.title}
            </Link>
          ) : null}
        </section>
      </Reveal>
    </EditorialContainer>
  );
}

type InfoBlockProps = {
  title: string;
  body: string;
};

function InfoBlock({ title, body }: InfoBlockProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight text-(--color-text)">{title}</h2>
      <p className="mt-2 text-sm leading-8 text-(--color-muted) sm:text-base">{body}</p>
    </section>
  );
}

type MetaPillProps = {
  label: string;
  value: string;
};

function MetaPill({ label, value }: MetaPillProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-(--color-surface) px-3 py-1.5 text-xs text-(--color-text-soft)">
      <span className="uppercase tracking-[0.18em] text-(--color-muted)">{label}</span>
      <span>{value}</span>
    </span>
  );
}
````

## File: src/components/sections/site-header.tsx
````typescript
import Link from "next/link";

import { siteConfig } from "@/data/site";
import { EditorialContainer } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-(--color-border) bg-[rgba(247,243,235,0.9)] backdrop-blur">
      <EditorialContainer className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="group inline-flex min-w-0 flex-col leading-none"
          aria-label="Go to homepage"
        >
          <span className="truncate text-sm font-semibold tracking-[0.04em] text-(--color-text)">
            {siteConfig.name}
          </span>
          <span className="truncate text-[11px] text-(--color-muted)">{siteConfig.role}</span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-xs font-medium tracking-wide text-(--color-muted) transition hover:bg-(--color-surface-strong) hover:text-(--color-text)"
            >
              {item.label}
            </Link>
          ))}
          <span className="ml-2 hidden items-center gap-2 text-xs text-(--color-muted) sm:inline-flex">
            <span className="inline-flex h-2 w-2 rounded-full bg-(--color-accent)" aria-hidden="true" />
            Open
          </span>
        </nav>
      </EditorialContainer>
    </header>
  );
}
````

## File: src/components/ui/container.tsx
````typescript
type EditorialContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function EditorialContainer({ children, className }: EditorialContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[52rem] px-5 sm:px-8 ${className ?? ""}`}>
      {children}
    </div>
  );
}
````

## File: src/components/ui/reveal.tsx
````typescript
"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 14 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
````

## File: src/components/ui/section-heading.tsx
````typescript
type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mb-6 sm:mb-8">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.24em] text-(--color-muted)">{eyebrow}</p>
      ) : null}
      <h2
        id={id}
        className="mt-2 text-balance text-2xl font-semibold tracking-tight text-(--color-text) sm:text-[2rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-pretty text-sm leading-7 text-(--color-muted) sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
````

## File: src/data/notes.ts
````typescript
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
````

## File: src/data/projects.ts
````typescript
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
````

## File: src/data/site.ts
````typescript
import { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Pranay B V",
  role: "Product Designer and Frontend Engineer",
  location: "Bengaluru, India",
  availability: "Available for select product collaborations",
  intro:
    "I design and build thoughtful digital experiences with a focus on clarity, interaction, and feel.",
  statement:
    "Selected work, experiments, and notes on making dense products feel simple and simple interfaces feel alive.",
  nav: [
    { href: "/projects", label: "Work" },
    { href: "/about", label: "Info" },
    { href: "/notes", label: "Notes" },
    { href: "/contact", label: "Contact" },
  ],
  now: [
    "Designing a calmer operations interface for a logistics platform with heavy daily usage.",
    "Exploring tactile micro-interactions that support focus instead of competing with content.",
    "Writing short practical notes on interaction rhythm, visual hierarchy, and frontend craft.",
  ],
  process: [
    {
      label: "Research",
      description:
        "Map friction and identify where users lose confidence or momentum.",
    },
    {
      label: "Design",
      description:
        "Shape information hierarchy, then define interaction and visual rhythm.",
    },
    {
      label: "Build",
      description:
        "Translate direction into performant components with practical constraints.",
    },
    {
      label: "Refine",
      description:
        "Trim visual noise, tune transitions, and strengthen edge-case behavior.",
    },
  ],
  links: [
    { label: "GitHub", href: "https://github.com", note: "Code and prototypes" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com",
      note: "Professional updates",
    },
    {
      label: "Resume",
      href: "#",
      note: "Selected roles and project history",
    },
    {
      label: "Email",
      href: "mailto:hello@pranay.design",
      note: "For product and freelance inquiries",
    },
  ],
  experience: [
    {
      period: "2024 - Now",
      title: "Product Design Engineer",
      org: "Independent",
      summary:
        "Partnering with startups on UX architecture, component systems, and high-fidelity prototyping.",
    },
    {
      period: "2022 - 2024",
      title: "Senior UI Engineer",
      org: "SaaS Product Team",
      summary:
        "Led end-to-end implementation of core workflows across dashboard, billing, and onboarding flows.",
    },
    {
      period: "2020 - 2022",
      title: "Frontend Developer",
      org: "Digital Studio",
      summary:
        "Built marketing and product surfaces for B2B clients with a focus on performance and accessibility.",
    },
  ],
  contactEmail: "hello@pranay.design",
};
````

## File: src/lib/types.ts
````typescript
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
````

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: AGENTS.md
````markdown
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
````

## File: CLAUDE.md
````markdown
@AGENTS.md
````

## File: eslint.config.mjs
````javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
````

## File: next.config.ts
````typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
````

## File: package.json
````json
{
  "name": "ress231",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "framer-motion": "^12.38.0",
    "next": "16.2.1",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.1",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
````

## File: postcss.config.mjs
````javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
````

## File: README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
````
