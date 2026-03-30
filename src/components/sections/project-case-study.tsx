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
    <EditorialContainer className="space-y-10 pb-20 pt-7 sm:pt-10">
      <Reveal>
        <header className="space-y-6 rounded-[1.5rem] border border-(--color-border) bg-(--color-surface) p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-(--color-muted)">
            {project.category} • {project.year}
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
            className="h-60 rounded-2xl border border-(--color-border) sm:h-80"
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

            <section className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-5">
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
          <article className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 sm:p-7">
            <h2 className="text-xl font-semibold tracking-tight text-(--color-text)">Approach</h2>
            <ol className="mt-4 space-y-3 text-sm leading-7 text-(--color-muted) sm:text-base">
              {project.caseStudy.approach.map((step) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-[0.22rem] inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-(--color-border) text-xs text-(--color-accent)">
                    {"->"}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>
        </Reveal>

        <Reveal>
          <article className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 sm:p-7">
            <h2 className="text-xl font-semibold tracking-tight text-(--color-text)">Outcome</h2>
            <ul className="mt-4 space-y-3">
              {project.caseStudy.outcomes.map((item) => (
                <li key={item.label} className="rounded-xl border border-(--color-border) bg-(--color-surface-strong) px-4 py-3">
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
        <section className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 sm:p-7">
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
              className="rounded-full border border-(--color-border) px-4 py-2 text-sm text-(--color-text-soft) transition hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              Previous: {previousProject.title}
            </Link>
          ) : (
            <span />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="rounded-full border border-(--color-border) px-4 py-2 text-sm text-(--color-text-soft) transition hover:border-(--color-accent) hover:text-(--color-accent)"
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
    <section className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-5">
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
    <span className="inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-(--color-surface-strong) px-3 py-1.5 text-xs text-(--color-text-soft)">
      <span className="uppercase tracking-[0.18em] text-(--color-muted)">{label}</span>
      <span>{value}</span>
    </span>
  );
}
