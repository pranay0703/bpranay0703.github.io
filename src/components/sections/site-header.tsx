import Link from "next/link";

import { EditorialContainer } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/notes", label: "Notes" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-(--color-border) bg-(--color-surface)/90 backdrop-blur-md">
      <EditorialContainer className="flex min-h-[4.25rem] items-center justify-between gap-5">
        <Link href="/" className="inline-flex items-center gap-3" aria-label="Go to homepage">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-(--color-border) bg-(--color-surface-strong) text-xs font-semibold text-(--color-accent)"
          >
            PB
          </span>
          <span>
            <span className="block text-sm font-semibold text-(--color-text)">{siteConfig.name}</span>
            <span className="block text-[11px] uppercase tracking-[0.12em] text-(--color-muted)">Resume</span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="-mr-1 flex max-w-[80vw] items-center gap-1 overflow-x-auto whitespace-nowrap"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-(--color-muted) transition hover:bg-(--color-surface-strong) hover:text-(--color-text)"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </EditorialContainer>
    </header>
  );
}
