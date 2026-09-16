/**
 * components/projects/ProjectNavigation.tsx
 *
 * Editorial next/previous project navigation.
 */

import { Link } from "@/components/ui/Link";
import type { Project } from "@/data/projects";

interface ProjectNavigationProps {
  prev: Project | null;
  next: Project | null;
}

export function ProjectNavigation({ prev, next }: ProjectNavigationProps) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Project navigation"
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t-2 border-[var(--color-border)] pt-8 mt-12"
    >
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          variant="none"
          className="group border-2 border-[var(--color-border)] p-5 sm:p-6 bg-[var(--color-card)] shadow-[3px_3px_0px_0px_var(--color-border)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--color-border)] transition-all duration-150"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] block mb-2">
            ← PREVIOUS PROJECT
          </span>
          <span className="font-display text-sm sm:text-base font-bold uppercase text-[var(--color-foreground)] group-hover:text-[var(--color-plum)] transition-colors">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div aria-hidden="true" />
      )}

      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          variant="none"
          className="group border-2 border-[var(--color-border)] p-5 sm:p-6 bg-[var(--color-card)] shadow-[3px_3px_0px_0px_var(--color-border)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--color-border)] transition-all duration-150 sm:text-right"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] block mb-2">
            NEXT PROJECT →
          </span>
          <span className="font-display text-sm sm:text-base font-bold uppercase text-[var(--color-foreground)] group-hover:text-[var(--color-plum)] transition-colors">
            {next.title}
          </span>
        </Link>
      ) : (
        <div aria-hidden="true" />
      )}
    </nav>
  );
}
