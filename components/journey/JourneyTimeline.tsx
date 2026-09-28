/**
 * components/journey/JourneyTimeline.tsx
 *
 * Editorial timeline with a strong year axis.
 */

import { Badge } from "@/components/ui/Badge";
import { Link } from "@/components/ui/Link";
import type { JourneyTimelineItem } from "@/lib/journey";

interface JourneyTimelineProps {
  items: JourneyTimelineItem[];
}

const categoryAccent: Record<JourneyTimelineItem["category"], string> = {
  education: "border-l-[var(--color-accent-cool)]",
  experience: "border-l-[var(--color-plum)]",
  build: "border-l-[var(--color-secondary)]",
  compete: "border-l-[var(--color-accent-warm)]",
  contribute: "border-l-[var(--color-accent-cool)]",
  recognition: "border-l-[var(--color-plum)]",
};

function groupByYear(items: JourneyTimelineItem[]) {
  return items.reduce<Array<{ year: number; items: JourneyTimelineItem[] }>>(
    (groups, item) => {
      const existing = groups.find((group) => group.year === item.year);
      if (existing) {
        existing.items.push(item);
      } else {
        groups.push({ year: item.year, items: [item] });
      }
      return groups;
    },
    []
  );
}

export function JourneyTimeline({ items }: JourneyTimelineProps) {
  const groups = groupByYear(items);

  return (
    <div className="flex flex-col gap-12">
      {groups.map((group) => (
        <section
          key={group.year}
          data-scroll-reveal=""
          aria-labelledby={`journey-year-${group.year}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8"
        >
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24 border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--color-border)] pb-3 lg:pb-0 lg:pr-6">
              <h3
                id={`journey-year-${group.year}`}
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-[var(--color-plum)] leading-none"
              >
                {group.year}
              </h3>
              <p className="font-mono text-[13px] text-[var(--color-muted)] uppercase tracking-widest mt-2">
                {group.items.length} {group.items.length === 1 ? "entry" : "entries"}
              </p>
            </div>
          </div>

          <div className="lg:col-span-9 flex flex-col gap-4">
            {group.items.map((item, index) => (
              <article
                key={item.id}
                data-scroll-reveal=""
                className={`group border-2 border-[var(--color-border)] border-l-4 ${categoryAccent[item.category]} bg-[var(--color-card)] p-5 sm:p-6 shadow-[3px_3px_0px_0px_var(--color-border)] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--color-border)]`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="font-mono text-[13px] font-bold uppercase tracking-wider text-[var(--color-muted)]">
                        {String(index + 1).padStart(2, "0")} / {item.label}
                      </span>
                      <Badge variant="lavender" size="sm">
                        {item.period}
                      </Badge>
                    </div>

                    <h4 className="font-display text-xl sm:text-2xl font-black uppercase text-[var(--color-foreground)] leading-tight">
                      {item.title}
                    </h4>
                    <p className="font-mono text-[13px] text-[var(--color-muted)] uppercase tracking-wider mt-1 break-words">
                      {item.context}
                    </p>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed mt-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex md:flex-col items-start md:items-end gap-2 shrink-0">
                    {item.href && item.linkLabel && (
                      <Link
                        href={item.href}
                        external={item.href.startsWith("http")}
                        variant="arrow"
                        className="font-display text-xs font-bold uppercase tracking-wider"
                      >
                        {item.linkLabel}
                      </Link>
                    )}
                  </div>
                </div>

                {item.meta && item.meta.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-5 border-t border-[var(--color-border-subtle)] pt-4">
                    {item.meta.map((meta) => (
                      <span
                        key={meta}
                        className="font-mono text-[11px] uppercase text-[var(--color-muted)] bg-[var(--color-background)] px-2 py-1 border border-[var(--color-border-subtle)]"
                      >
                        {meta}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
