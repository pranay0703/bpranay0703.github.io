import type { Metadata } from "next";

import { githubProjects } from "@/data/github";
import { resumeOpenSourceContributions, resumeProjects } from "@/data/resume";
import { EditorialContainer } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Work",
  description: "Resume projects and open-source contributions.",
};

const featuredProjects = resumeProjects.slice(0, 2);
const remainingResumeProjects = resumeProjects.slice(2);
const additionalGithubProjects = githubProjects.slice(0, 6);

export default function ProjectsPage() {
  return (
    <EditorialContainer className="space-y-8 pb-20 pt-7 sm:pt-10">
      <Reveal>
        <header className="rounded-[1.5rem] border border-[var(--dash-border)] bg-white p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">Projects</p>
          <h1 className="mt-3 text-[clamp(2rem,5vw,3.1rem)] leading-[1.04] tracking-[-0.04em] text-[var(--text-main)]">
            Featured work from my resume
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
            Two projects are highlighted by default, and the rest are available under Show all.
          </p>
        </header>
      </Reveal>

      <div className="space-y-4">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <article className="rounded-2xl border border-[var(--dash-border)] bg-white p-5 sm:p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                {project.stack.join(" • ")}
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--text-main)] sm:text-2xl">
                {project.title}
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      {remainingResumeProjects.length > 0 || additionalGithubProjects.length > 0 ? (
        <Reveal>
          <details className="rounded-2xl border border-[var(--dash-border)] bg-white p-5 sm:p-6">
            <summary className="cursor-pointer font-medium text-[var(--text-main)]">
              Show all projects ({remainingResumeProjects.length + additionalGithubProjects.length})
            </summary>
            <div className="mt-4 space-y-4">
              {remainingResumeProjects.map((project) => (
                <article key={project.title} className="rounded-xl border border-[var(--dash-border)] px-4 py-3">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                    {project.stack.join(" • ")}
                  </p>
                  <h3 className="mt-1 text-base font-medium text-[var(--text-main)]">{project.title}</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}

              {additionalGithubProjects.length > 0 ? (
                <div className="space-y-3">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                    Additional GitHub Projects
                  </p>
                  {additionalGithubProjects.map((project) => (
                    <a
                      key={project.name}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-xl border border-[var(--dash-border)] px-4 py-3"
                    >
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                        {project.language}
                      </p>
                      <h3 className="mt-1 text-base font-medium text-[var(--text-main)]">{project.name}</h3>
                      <p className="mt-1 text-sm leading-7 text-[var(--text-secondary)]">{project.description}</p>
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </details>
        </Reveal>
      ) : null}

      <Reveal>
        <section className="rounded-[1.5rem] border border-[var(--dash-border)] bg-white p-6 sm:p-8">
          <h2 className="font-mono text-[14px] font-medium uppercase tracking-[-0.02em] text-[var(--text-main)]">
            Open Source Contributions
          </h2>
          <div className="mt-4 space-y-3">
            {resumeOpenSourceContributions.map((contribution) => (
              <a
                key={contribution.href}
                href={contribution.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-[var(--dash-border)] px-4 py-3"
              >
                <p className="text-sm font-medium text-[var(--text-main)]">
                  {contribution.repository} PR {contribution.pullRequest}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                  {contribution.focus}
                </p>
                <p className="mt-1 text-sm leading-7 text-[var(--text-secondary)]">{contribution.summary}</p>
              </a>
            ))}
          </div>
        </section>
      </Reveal>
    </EditorialContainer>
  );
}
