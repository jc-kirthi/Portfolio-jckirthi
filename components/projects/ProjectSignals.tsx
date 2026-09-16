/**
 * components/projects/ProjectSignals.tsx
 *
 * Compact editorial statistics for the project index.
 */

import type { ProjectStats } from "@/lib/projects";

interface ProjectSignalsProps {
  stats: ProjectStats;
}

interface ProjectSignal {
  index: string;
  label: string;
  value: number | string;
  note: string;
}

export function ProjectSignals({ stats }: ProjectSignalsProps) {
  const signals: ProjectSignal[] = [
    {
      index: "01",
      label: "PROJECTS",
      value: stats.totalProjects,
      note: "Engineering builds in archive",
    },
    {
      index: "02",
      label: "FEATURED",
      value: stats.featuredCount,
      note: "Flagged in project data",
    },
    {
      index: "03",
      label: "COMPLETED",
      value: stats.completedCount,
      note: "Marked completed in data",
    },
    {
      index: "04",
      label: "IN PROGRESS",
      value: stats.inProgressCount,
      note: "Marked active in data",
    },
  ];

  if (stats.yearSpan) {
    signals.push({
      index: "05",
      label: "TIMELINE",
      value: stats.yearSpan,
      note: `${stats.categories.length} ${stats.categories.length === 1 ? "category" : "categories"}`,
    });
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-0 border-2 border-[var(--color-border)] bg-[var(--color-card)] shadow-[3px_3px_0px_0px_var(--color-border)]">
      {signals.map((signal, i) => (
        <div
          key={signal.index}
          className={
            i > 0
              ? "p-5 sm:p-6 border-t-2 lg:border-t-0 lg:border-l-2 border-[var(--color-border-subtle)] flex flex-col gap-1"
              : "p-5 sm:p-6 flex flex-col gap-1"
          }
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
            {signal.index} / {signal.label}
          </span>
          <span
            className={
              typeof signal.value === "number"
                ? "font-display text-3xl sm:text-4xl font-black text-[var(--color-plum)] mt-1"
                : "font-display text-xl sm:text-2xl font-black text-[var(--color-plum)] mt-1 uppercase"
            }
          >
            {signal.value}
          </span>
          <span className="text-[10px] text-[var(--color-muted)] font-mono mt-0.5">
            {signal.note}
          </span>
        </div>
      ))}
    </div>
  );
}
