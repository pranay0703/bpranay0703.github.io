import Image from "next/image";

import { githubProfile, githubProjects } from "@/data/github";
import {
  resumeAchievements,
  resumeEducation,
  resumeExperience,
  resumeOpenSourceContributions,
  resumePublications,
  resumeProjects,
  resumeSummary,
  resumeTechnicalSkills,
} from "@/data/resume";
import { siteConfig } from "@/data/site";

const heading3Class =
  "font-mono text-[14px] font-medium uppercase leading-[1.6] tracking-[-0.02em] text-[var(--text-main)]";
const heading4Class = "text-[16px] font-medium leading-6 tracking-[-0.02em] text-[var(--text-main)]";
const bodyClass = "text-[16px] leading-6 tracking-[-0.01em] text-[var(--text-main)]";
const lineClass =
  "font-mono text-[12px] uppercase leading-6 tracking-[-0.02em] text-[var(--text-secondary)]";
const headerContactLinkClass =
  "inline-flex items-center gap-2 text-[13px] font-medium leading-6 tracking-[-0.01em] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-main)]";

const featuredProjects = resumeProjects.slice(0, 2);
const remainingResumeProjects = resumeProjects.slice(2);
const additionalGithubProjects = githubProjects.slice(0, 4);

const phoneLink = siteConfig.links.find((link) => link.label === "Phone");
const emailLink = siteConfig.links.find((link) => link.label === "Email");
const linkedinLink = siteConfig.links.find((link) => link.label === "LinkedIn");

const phoneHref = phoneLink?.href ?? "tel:2407268961";
const emailHref = emailLink?.href ?? "mailto:bpranay0703@gmail.com";
const linkedinHref = linkedinLink?.href ?? "https://www.linkedin.com/in/venkata-pranay-bathini";

function getFooterLinkText(label: string) {
  if (label === "Phone") return "(240)726-8961";
  if (label === "Email") return "bpranay0703@gmail.com";
  if (label === "LinkedIn") return "linkedin/venkata-pranay-bathini";
  if (label === "GitHub") return "github/pranay0703";
  return label;
}

type InlineLogo = {
  src: string;
  alt: string;
};

function getInlineLogo(value: string): InlineLogo | null {
  const normalized = value.toLowerCase();

  if (normalized.includes("maryland")) {
    return { src: "/logos/umd.png", alt: "University of Maryland logo" };
  }

  if (normalized.includes("pes")) {
    return { src: "/logos/pes.png", alt: "PES University logo" };
  }

  if (normalized.includes("ieee")) {
    return { src: "/logos/ieee.png", alt: "IEEE logo" };
  }

  return null;
}

function LogoChip({ logo }: { logo: InlineLogo }) {
  return (
    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] border border-[var(--dash-border)] bg-white p-1">
      <Image src={logo.src} alt={logo.alt} width={24} height={24} className="h-full w-full object-contain" />
    </span>
  );
}

export function HomeFeed() {
  return (
    <main className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center pb-24">
      <section className="flex w-full justify-center">
        <div className="flex w-full max-w-[640px] flex-col items-center gap-6 border-x-[0.5px] border-b-[0.5px] border-dashed border-[var(--dash-border)] px-4 py-8">
          <Image
            src={githubProfile.avatarUrl}
            alt={siteConfig.name}
            width={80}
            height={80}
            className="h-20 w-20 rounded-[10px] object-cover"
          />

          <div className="flex w-full flex-col items-center gap-[6px] text-center">
            <h1 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.05em] text-[var(--text-main)]">
              {siteConfig.name}
            </h1>
            <h2 className="text-[20px] leading-[1.2] tracking-[-0.02em] text-[var(--text-main)]">
              {siteConfig.role}
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-[12px] leading-6 tracking-[-0.02em] text-[var(--text-secondary)]">
              <span>{siteConfig.location}</span>
              <span>·</span>
              <span className="inline-flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.2),0_0_8px_rgba(16,185,129,0.68)]"
                />
                <span>{siteConfig.availability}</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <a href={phoneHref} className={headerContactLinkClass}>
                <PhoneIcon />
                <span>Phone</span>
              </a>
              <span className={lineClass}>·</span>
              <a href={emailHref} className={headerContactLinkClass}>
                <MailIcon />
                <span>Email</span>
              </a>
              <span className={lineClass}>·</span>
              <a href={linkedinHref} target="_blank" rel="noreferrer" className={headerContactLinkClass}>
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center">
        <div className="flex w-full max-w-[640px] flex-col gap-4 border-x-[0.5px] border-b-[0.5px] border-dashed border-[var(--dash-border)] px-4 py-8">
          <h3 className={heading3Class}>About me</h3>
          <p className={bodyClass}>{resumeSummary}</p>
        </div>
      </section>

      <section className="flex w-full justify-center">
        <div className="flex w-full max-w-[640px] flex-col gap-6 border-x-[0.5px] border-b-[0.5px] border-dashed border-[var(--dash-border)] px-4 py-8">
          <h3 className={heading3Class}>Education</h3>
          <div className="space-y-4">
            {resumeEducation.map((item) => {
              const logo = getInlineLogo(item.institution);

              return (
                <article key={`${item.institution}-${item.dates}`} className="space-y-1">
                  <div className="flex items-start gap-3">
                    {logo ? <LogoChip logo={logo} /> : null}
                    <div className="space-y-1">
                      <h4 className={heading4Class}>{item.institution}</h4>
                      <p className={lineClass}>
                        {item.location} · {item.dates}
                      </p>
                      <p className={bodyClass}>{item.degree}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center">
        <div className="flex w-full max-w-[640px] flex-col gap-6 border-x-[0.5px] border-b-[0.5px] border-dashed border-[var(--dash-border)] px-4 py-8">
          <h3 className={heading3Class}>Technical Skills</h3>
          <div className="space-y-4">
            {resumeTechnicalSkills.map((skill) => (
              <article key={skill.category} className="space-y-1">
                <h4 className={heading4Class}>{skill.category}</h4>
                <p className={bodyClass}>{skill.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center">
        <div className="flex w-full max-w-[640px] flex-col gap-8 border-x-[0.5px] border-b-[0.5px] border-dashed border-[var(--dash-border)] px-4 py-8">
          <h3 className={heading3Class}>Experience</h3>
          <div className="space-y-8">
            {resumeExperience.map((item) => {
              const logo = getInlineLogo(item.organization);

              return (
                <article key={`${item.organization}-${item.dates}`} className="space-y-2">
                  <div className="flex items-start gap-3">
                    {logo ? <LogoChip logo={logo} /> : null}
                    <div>
                      <h4 className={heading4Class}>{item.role}</h4>
                      <div className="flex flex-wrap items-center gap-1">
                        <span className={lineClass}>{item.organization}</span>
                        <span className={lineClass}>·</span>
                        <span className={lineClass}>{item.location}</span>
                        <span className={lineClass}>·</span>
                        <span className={lineClass}>{item.employmentType}</span>
                        <span className={lineClass}>·</span>
                        <span className={lineClass}>{item.dates}</span>
                      </div>
                    </div>
                  </div>

                  <ul className={`${bodyClass} list-disc space-y-2 pl-5`}>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center">
        <div className="flex w-full max-w-[640px] flex-col gap-6 border-x-[0.5px] border-b-[0.5px] border-dashed border-[var(--dash-border)] px-4 py-8">
          <h3 className={heading3Class}>Projects</h3>

          <div className="space-y-4">
            {featuredProjects.map((project) => (
              <ResumeProjectCard key={project.title} project={project} />
            ))}
          </div>

          {remainingResumeProjects.length > 0 || additionalGithubProjects.length > 0 ? (
            <details className="rounded-[6px] border border-[var(--dash-border)] px-4 py-3">
              <summary className="cursor-pointer select-none text-[14px] font-medium tracking-[-0.01em] text-[var(--text-main)]">
                Show all projects ({remainingResumeProjects.length + additionalGithubProjects.length})
              </summary>
              <div className="mt-4 space-y-4">
                {remainingResumeProjects.map((project) => (
                  <ResumeProjectCard key={project.title} project={project} />
                ))}

                {additionalGithubProjects.length > 0 ? (
                  <div className="space-y-3">
                    <p className={lineClass}>Additional GitHub Projects</p>
                    {additionalGithubProjects.map((project) => (
                      <GitHubProjectCard key={project.name} project={project} />
                    ))}
                  </div>
                ) : null}
              </div>
            </details>
          ) : null}
        </div>
      </section>

      <section className="flex w-full justify-center">
        <div className="flex w-full max-w-[640px] flex-col gap-6 border-x-[0.5px] border-b-[0.5px] border-dashed border-[var(--dash-border)] px-4 py-8">
          <h3 className={heading3Class}>Open Source Contributions</h3>

          <div className="space-y-4">
            {resumeOpenSourceContributions.map((contribution) => (
              <article key={contribution.href} className="space-y-1">
                <a
                  href={contribution.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-with-arrow inline-flex items-center text-[16px] font-medium leading-6 tracking-[-0.02em] text-[var(--text-main)]"
                >
                  {contribution.repository} PR {contribution.pullRequest}
                </a>
                <p className={lineClass}>{contribution.focus}</p>
                <p className={bodyClass}>{contribution.summary}</p>
              </article>
            ))}
          </div>

          <a
            href={githubProfile.url}
            target="_blank"
            rel="noreferrer"
            className="link-with-arrow inline-flex w-fit items-center rounded-[6px] border border-[var(--dash-border)] px-3 py-2 text-[14px] font-medium text-[var(--text-main)]"
          >
            View full GitHub profile
          </a>
        </div>
      </section>

      <section className="flex w-full justify-center">
        <div className="flex w-full max-w-[640px] flex-col gap-4 border-x-[0.5px] border-b-[0.5px] border-dashed border-[var(--dash-border)] px-4 py-8">
          <h3 className={heading3Class}>Publications</h3>
          <div className="space-y-3">
            {resumePublications.map((publication) => {
              const logo = getInlineLogo(publication.venue);

              return (
                <article key={publication.href} className="space-y-1">
                  <div className="flex items-start gap-3">
                    {logo ? <LogoChip logo={logo} /> : null}
                    <div className="space-y-1">
                      <a
                        href={publication.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-with-arrow inline-flex items-center text-[16px] font-medium leading-6 tracking-[-0.02em] text-[var(--text-main)]"
                      >
                        {publication.title}
                      </a>
                      <p className={lineClass}>
                        {publication.venue} · {publication.year}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center">
        <div className="flex w-full max-w-[640px] flex-col gap-4 border-x-[0.5px] border-b-[0.5px] border-dashed border-[var(--dash-border)] px-4 py-8">
          <h3 className={heading3Class}>Achievements</h3>
          <ul className="space-y-2">
            {resumeAchievements.map((item) => (
              <li key={item} className={bodyClass}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flex w-full justify-center">
        <div className="flex w-full max-w-[640px] flex-col gap-6 border-x-[0.5px] border-b-[0.5px] border-dashed border-[var(--dash-border)] px-4 py-8">
          <h3 className={heading3Class}>Contact</h3>
          <div className="space-y-4">
            {siteConfig.links.map((link) => (
              <div key={link.label} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <span className={bodyClass}>{link.label}</span>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-[16px] leading-6 tracking-[-0.01em] text-[var(--text-secondary)]"
                >
                  {getFooterLinkText(link.label)}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.75 6.25c0-.83.67-1.5 1.5-1.5h2.14c.7 0 1.31.49 1.46 1.18l.49 2.2c.11.5-.05 1.02-.41 1.37l-1.14 1.14a15.72 15.72 0 0 0 4.57 4.57l1.14-1.14c.35-.36.87-.52 1.37-.41l2.2.49c.69.15 1.18.76 1.18 1.46v2.14c0 .83-.67 1.5-1.5 1.5h-.5C9.99 19.25 4.75 14.01 4.75 7.75v-.5Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <rect x="3.75" y="5.75" width="16.5" height="12.5" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 7.25 7.5 5.75 7.5-5.75" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 10.5v5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 8.75h.01" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.5v-5h2c1.1 0 2 .9 2 2v3" />
    </svg>
  );
}

function ResumeProjectCard({ project }: { project: (typeof resumeProjects)[number] }) {
  return (
    <article className="space-y-2 rounded-[6px] border border-[var(--dash-border)] px-4 py-3">
      <h4 className={heading4Class}>{project.title}</h4>
      <p className={lineClass}>{project.stack.join(" | ")}</p>
      <ul className={`${bodyClass} list-disc space-y-2 pl-5`}>
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

function GitHubProjectCard({ project }: { project: (typeof githubProjects)[number] }) {
  return (
    <article className="space-y-1 rounded-[6px] border border-[var(--dash-border)] px-4 py-3">
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="link-with-arrow inline-flex items-center text-[16px] font-medium leading-6 tracking-[-0.02em] text-[var(--text-main)]"
      >
        {project.name}
      </a>
      <p className={lineClass}>{project.language} · updated {formatMonthYear(project.updatedAt)}</p>
      <p className={bodyClass}>{project.description}</p>
    </article>
  );
}

function formatMonthYear(value: string) {
  const parsed = new Date(`${value}T00:00:00Z`);
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}
