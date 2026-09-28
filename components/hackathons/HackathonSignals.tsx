/**
 * components/hackathons/HackathonSignals.tsx
 *
 * Compact editorial statistics index — publication-style, not dashboard.
 */

import type { HackathonStats } from "@/lib/hackathons";

interface HackathonSignalsProps {
  stats: HackathonStats;
}

interface SignalItem {
  index: string;
  label: string;
  value: string | number;
  note: string;
  accent?: boolean;
}

export function HackathonSignals({ stats }: HackathonSignalsProps) {
  const signals: SignalItem[] = [
    {
      index: "01",
      label: "COMPETITIONS",
      value: stats.totalCompetitions,
      note: "Recorded sprint events",
    },
    {
      index: "02",
      label: "WINS",
      value: stats.wins,
      note: "Top podiums & category wins",
      accent: stats.wins > 0,
    },
    {
      index: "03",
      label: "FINALISTS",
      value: stats.finalists,
      note: "Jury-selected finalists",
    },
    {
      index: "04",
      label: "PROJECTS BUILT",
      value: stats.projectsBuilt,
      note: "Shipped prototypes in data",
    },
  ];

  if (stats.yearSpan) {
    signals.push({
      index: "05",
      label: "YEARS ACTIVE",
      value: stats.yearSpan,
      note: `${stats.yearsActive.length} active ${stats.yearsActive.length === 1 ? "year" : "years"}`,
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
          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
            {signal.index} / {signal.label}
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span
              className={
                typeof signal.value === "number"
                  ? "font-display text-3xl sm:text-4xl font-black text-[var(--color-plum)]"
                  : "font-display text-xl sm:text-2xl font-black text-[var(--color-plum)] uppercase"
              }
            >
              {signal.value}
            </span>
            {signal.accent && (
              <span className="font-mono text-[11px] font-bold text-white bg-[var(--color-accent-warm)] px-1.5 py-1 border border-[var(--color-border)]">
                WINNER
              </span>
            )}
          </div>
          <span className="text-[11px] text-[var(--color-muted)] font-mono mt-0.5">
            {signal.note}
          </span>
        </div>
      ))}
    </div>
  );
}
