/**
 * components/experience/CommunityCard.tsx
 *
 * Community and volunteering record card.
 */

import { Badge } from "@/components/ui/Badge";
import { Link } from "@/components/ui/Link";
import type { Volunteering } from "@/data/volunteering";
import { getCommunityPeriod } from "@/lib/experience";

interface CommunityCardProps {
  item: Volunteering;
  index: number;
}

export function CommunityCard({ item, index }: CommunityCardProps) {
  return (
    <article data-scroll-reveal="" className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-6 sm:p-8 shadow-[3px_3px_0px_0px_var(--color-border)] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--color-border)]">
      <div className="flex items-start justify-between gap-4 border-b border-[var(--color-border-subtle)] pb-4 mb-5">
        <div>
          <span className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-widest">
            COMMUNITY / {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-2xl font-black uppercase text-[var(--color-foreground)] mt-2 leading-tight">
            {item.role}
          </h3>
        </div>
        <Badge variant={item.current ? "lime" : "lavender"} size="sm">
          {item.current ? "CURRENT" : "PAST"}
        </Badge>
      </div>

      <p className="font-mono text-xs uppercase text-[var(--color-plum)] font-bold">
        {item.organization} / {item.location}
      </p>
      <p className="font-mono text-[10px] uppercase text-[var(--color-muted)] mt-1">
        {getCommunityPeriod(item)}
      </p>
      <p className="text-sm text-[var(--color-muted)] leading-relaxed mt-4">
        {item.description}
      </p>

      {item.highlights.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-5">
          {item.highlights.map((highlight) => (
            <span
              key={highlight}
              className="font-mono text-[10px] uppercase text-[var(--color-muted)] bg-[var(--color-card-subtle)] px-2 py-0.5 border border-[var(--color-border-subtle)]"
            >
              {highlight}
            </span>
          ))}
        </div>
      )}

      {item.organizationUrl && (
        <div className="mt-6">
          <Link href={item.organizationUrl} external variant="arrow" className="font-display text-xs font-bold uppercase">
            VIEW ORGANIZATION
          </Link>
        </div>
      )}
    </article>
  );
}
