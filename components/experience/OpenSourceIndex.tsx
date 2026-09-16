/**
 * components/experience/OpenSourceIndex.tsx
 *
 * Compact open-source contribution and repository index.
 */

import { Badge } from "@/components/ui/Badge";
import { Link } from "@/components/ui/Link";
import type { OpenSourceContribution, OpenSourceProject } from "@/data/openSource";

interface OpenSourceIndexProps {
  contributions: OpenSourceContribution[];
  projects: OpenSourceProject[];
}

export function OpenSourceIndex({ contributions, projects }: OpenSourceIndexProps) {
  return (
    <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] shadow-[3px_3px_0px_0px_var(--color-border)] overflow-hidden">
      {contributions.map((item, index) => (
        <article
          key={item.id}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 sm:p-6 border-b border-[var(--color-border-subtle)] hover:bg-[var(--color-background)] transition-colors duration-150"
        >
          <div className="md:col-span-2">
            <span className="font-mono text-xs font-bold text-[var(--color-muted)]">
              C{String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="md:col-span-7">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="lavender" size="sm">
                {item.status}
              </Badge>
              <Badge variant="outline" size="sm">
                {item.type}
              </Badge>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-black uppercase text-[var(--color-foreground)]">
              {item.project}
            </h3>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed mt-2">
              {item.description}
            </p>
          </div>
          <div className="md:col-span-3 flex md:flex-col md:items-end gap-3">
            {item.language && (
              <span className="font-mono text-[10px] uppercase text-[var(--color-muted)]">
                {item.language}
              </span>
            )}
            {item.projectUrl && (
              <Link href={item.projectUrl} external variant="arrow" className="font-display text-xs font-bold uppercase">
                PROJECT
              </Link>
            )}
            {item.prUrl && (
              <Link href={item.prUrl} external variant="arrow" className="font-display text-xs font-bold uppercase">
                PR
              </Link>
            )}
            {item.issueUrl && (
              <Link href={item.issueUrl} external variant="arrow" className="font-display text-xs font-bold uppercase">
                ISSUE
              </Link>
            )}
          </div>
        </article>
      ))}

      {projects.map((item, index) => (
        <article
          key={item.id}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 p-5 sm:p-6 border-b border-[var(--color-border-subtle)] last:border-b-0 hover:bg-[var(--color-background)] transition-colors duration-150"
        >
          <div className="md:col-span-2">
            <span className="font-mono text-xs font-bold text-[var(--color-muted)]">
              R{String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="md:col-span-7">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant={item.isOwner ? "lime" : "muted"} size="sm">
                {item.isOwner ? "OWNER" : "CONTRIBUTOR"}
              </Badge>
              <Badge variant="outline" size="sm">
                {item.language}
              </Badge>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-black uppercase text-[var(--color-foreground)]">
              {item.name}
            </h3>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed mt-2">
              {item.description}
            </p>
            {item.topics.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {item.topics.map((topic) => (
                  <span
                    key={topic}
                    className="font-mono text-[10px] uppercase text-[var(--color-muted)] bg-[var(--color-card-subtle)] px-2 py-0.5 border border-[var(--color-border-subtle)]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="md:col-span-3 flex md:flex-col md:items-end gap-3">
            {typeof item.stars === "number" && (
              <span className="font-mono text-[10px] uppercase text-[var(--color-muted)]">
                {item.stars} stars
              </span>
            )}
            <Link href={item.url} external variant="arrow" className="font-display text-xs font-bold uppercase">
              GITHUB
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
