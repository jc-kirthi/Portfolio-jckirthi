import type { AchievementStats } from "@/lib/achievements";

interface AchievementSignalsProps {
  stats: AchievementStats;
}

export function AchievementSignals({ stats }: AchievementSignalsProps) {
  const signals = [
    { label: "ACHIEVEMENTS", value: stats.total, note: "Records in this archive" },
    { label: "COMPETITION RECORDS", value: stats.competitions, note: "Achievement records tagged competition" },
    { label: "AWARD RECORDS", value: stats.awardRecords, note: "Records tagged award" },
    ...(stats.yearSpan
      ? [{ label: "YEARS ACTIVE", value: stats.yearSpan, note: `${stats.yearsActive.length} recorded years` }]
      : []),
    ...(stats.rankedRecords > 0
      ? [{ label: "RANKED RECORDS", value: stats.rankedRecords, note: "Placements named in the source record" }]
      : []),
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 border-2 border-[var(--color-border)] bg-[var(--color-card)] shadow-[3px_3px_0px_0px_var(--color-border)]">
      {signals.map((signal, index) => (
        <div
          key={signal.label}
          className={`${index > 0 ? "border-t-2 lg:border-t-0 lg:border-l-2 border-[var(--color-border-subtle)]" : ""} p-5 sm:p-6 flex flex-col gap-1`}
        >
          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
            {String(index + 1).padStart(2, "0")} / {signal.label}
          </span>
          <span className="font-display text-3xl sm:text-4xl font-black text-[var(--color-plum)] mt-1">
            {signal.value}
          </span>
          <span className="font-mono text-[11px] text-[var(--color-muted)]">{signal.note}</span>
        </div>
      ))}
    </div>
  );
}