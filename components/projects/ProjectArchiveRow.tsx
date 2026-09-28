/**
 * components/projects/ProjectArchiveRow.tsx
 *
 * Compact archive row for the full project index.
 */

import { Badge } from "@/components/ui/Badge";
import { Link } from "@/components/ui/Link";
import { getPrimaryCategory, getStatusLabel } from "@/lib/projects";
import type { Project } from "@/data/projects";

interface ProjectArchiveRowProps {
  project: Project;
  globalIndex: number;
}

export function ProjectArchiveRow({ project: p, globalIndex }: ProjectArchiveRowProps) {
  const category = getPrimaryCategory(p);

  return (
    <Link
      href={`/projects/${p.slug}`}
      variant="none"
      className="group block p-4 sm:px-5 sm:py-4 hover:bg-[var(--color-background)] transition-colors duration-150 border-b border-[var(--color-border-subtle)] last:border-b-0 focus-visible:outline-offset-[-2px]"
      aria-label={`${p.title} — ${category} — view case study`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0 flex-1">
          <span className="font-mono text-xs text-[var(--color-muted)] font-bold shrink-0 w-6">
            {String(globalIndex).padStart(2, "0")}
          </span>

          <div className="flex flex-col min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-display font-bold text-sm sm:text-base uppercase text-[var(--color-foreground)] truncate">
                {p.title}
              </span>
              {p.status !== "completed" && (
                <Badge variant="muted" size="sm">
                  {getStatusLabel(p.status)}
                </Badge>
              )}
            </div>
            <span className="text-xs text-[var(--color-muted)] font-mono mt-0.5 truncate">
              {p.description}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pl-9 sm:pl-0">
          <div className="hidden md:flex items-center gap-1">
            {p.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] bg-[var(--color-card-subtle)] px-1.5 py-1 border border-[var(--color-border-subtle)] text-[var(--color-muted)]"
              >
                {t.toUpperCase()}
              </span>
            ))}
          </div>

          <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--color-plum)] group-hover:text-[var(--color-secondary)] transition-colors duration-150 inline-flex items-center gap-1">
            {category}
            <span
              aria-hidden="true"
              className="font-mono transition-transform duration-150 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
