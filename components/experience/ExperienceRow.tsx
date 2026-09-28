/**
 * components/experience/ExperienceRow.tsx
 *
 * Compact editorial row for work and internship records.
 */

import { Badge } from "@/components/ui/Badge";
import { Link } from "@/components/ui/Link";
import type { Experience } from "@/data/experience";
import { getExperiencePeriod } from "@/lib/experience";

interface ExperienceRowProps {
  item: Experience;
  index: number;
}

export function ExperienceRow({ item, index }: ExperienceRowProps) {
  return (
    <article data-scroll-reveal="" className="group grid grid-cols-1 lg:grid-cols-12 gap-5 border-t-2 border-[var(--color-border)] py-6 first:border-t-0 first:pt-0">
      <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start justify-between gap-3">
        <span className="font-display text-4xl sm:text-5xl font-black text-[var(--color-plum)] leading-none">
          {String(index + 1).padStart(2, "0")}
        </span>
        <Badge variant={item.current ? "lime" : "lavender"} size="sm">
          {item.current ? "CURRENT" : item.type}
        </Badge>
      </div>

      <div className="lg:col-span-7 min-w-0">
        <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)] mb-2">
          ROLE
        </p>
        <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-[var(--color-foreground)] leading-tight">
          {item.role}
        </h3>
        <p className="font-mono text-xs uppercase text-[var(--color-plum)] font-bold mt-2">
          {item.company} / {item.location}
        </p>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed mt-4">
          {item.description}
        </p>

        {item.highlights.length > 0 && (
          <ul className="mt-4 flex flex-col gap-1.5" role="list">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="text-sm text-[var(--color-muted)] flex gap-2">
                <span className="text-[var(--color-plum)] shrink-0" aria-hidden="true">
                  -
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="lg:col-span-3 flex flex-col lg:items-end gap-4">
        <div className="font-mono text-xs uppercase text-[var(--color-muted)] lg:text-right">
          <span className="block text-[var(--color-foreground)] font-bold">
            {getExperiencePeriod(item)}
          </span>
          <span>{item.tech.length} tech tags</span>
        </div>

        <div className="flex flex-wrap lg:justify-end gap-1.5">
          {item.tech.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] uppercase bg-[var(--color-card-subtle)] text-[var(--color-muted)] px-2 py-0.5 border border-[var(--color-border-subtle)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {item.companyUrl && (
          <Link href={item.companyUrl} external variant="arrow" className="font-display text-xs font-bold uppercase">
            VIEW ORGANIZATION
          </Link>
        )}
      </div>
    </article>
  );
}
