/**
 * components/hackathons/ArchiveIndexRow.tsx
 *
 * Compact timeline/index row for the full hackathon archive.
 */

import { Badge } from "@/components/ui/Badge";
import { Link } from "@/components/ui/Link";
import { getPlacementLabel } from "@/lib/hackathons";
import type { Hackathon } from "@/data/hackathons";

interface ArchiveIndexRowProps {
  hackathon: Hackathon;
  globalIndex: number;
}

export function ArchiveIndexRow({ hackathon: h, globalIndex }: ArchiveIndexRowProps) {
  const placement = getPlacementLabel(h);

  return (
    <Link
      href={`/hackathons/${h.slug}`}
      variant="none"
      className="group block p-4 sm:px-5 sm:py-4 hover:bg-[var(--color-background)] transition-colors duration-150 border-b border-[var(--color-border-subtle)] last:border-b-0 focus-visible:outline-offset-[-2px]"
      aria-label={`${h.name} — ${placement} — view case study`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        {/* Left: Index & Identity */}
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0 flex-1">
          <span className="font-mono text-xs text-[var(--color-muted)] font-bold shrink-0 w-6">
            {String(globalIndex).padStart(2, "0")}
          </span>

          <div className="flex flex-col min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-display font-bold text-sm sm:text-base uppercase text-[var(--color-foreground)] truncate">
                {h.name}
              </span>
              {h.won ? (
                <Badge variant="tangerine" size="sm">
                  {placement}
                </Badge>
              ) : h.position ? (
                <Badge variant="muted" size="sm">
                  {placement}
                </Badge>
              ) : null}
            </div>
            <span className="text-xs text-[var(--color-muted)] font-mono mt-0.5 truncate">
              <strong className="text-[var(--color-foreground)]">{h.project.title}</strong>
              {" · "}
              {h.organizer}
            </span>
          </div>
        </div>

        {/* Right: Placement & Arrow */}
        <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pl-9 sm:pl-0">
          <div className="hidden md:flex items-center gap-1 max-w-[200px] overflow-hidden">
            {h.project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] bg-[var(--color-card-subtle)] px-1.5 py-0.5 border border-[var(--color-border-subtle)] text-[var(--color-muted)] truncate"
              >
                {t}
              </span>
            ))}
          </div>

          <span className="font-display text-xs font-bold uppercase tracking-wider text-[var(--color-plum)] group-hover:text-[var(--color-accent-warm)] transition-colors duration-150 inline-flex items-center gap-1">
            {placement}
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
