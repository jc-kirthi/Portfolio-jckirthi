import type { Achievement } from "@/data/achievements";
import { getAchievementYear, getCategoryLabel } from "@/lib/achievements";
import { Link } from "@/components/ui/Link";

interface AchievementArchiveProps {
  achievements: Achievement[];
  startIndex?: number;
}

export function AchievementArchive({ achievements, startIndex = 1 }: AchievementArchiveProps) {
  return (
    <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] shadow-[3px_3px_0px_0px_var(--color-border)] overflow-hidden">
      {achievements.map((achievement, index) => (
        <div key={achievement.id} className="group grid grid-cols-[2.25rem_minmax(0,1fr)_auto] sm:grid-cols-[3rem_minmax(0,1fr)_auto] gap-3 sm:gap-5 items-center p-4 sm:px-5 sm:py-5 border-b border-[var(--color-border-subtle)] last:border-b-0 hover:bg-[var(--color-background)] transition-colors">
          <span className="font-mono text-xs text-[var(--color-muted)] font-bold">{String(startIndex + index).padStart(2, "0")}</span>
          <div className="min-w-0">
            <p className="font-display text-sm sm:text-base font-bold uppercase break-words">{achievement.title}</p>
            <p className="font-mono text-[11px] sm:text-xs text-[var(--color-muted)] uppercase mt-1 break-words">{achievement.issuer} / {getCategoryLabel(achievement.category)}</p>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="font-mono text-xs text-[var(--color-muted)]">{getAchievementYear(achievement)}</span>
            {achievement.link && <Link href={achievement.link} external variant="arrow" aria-label={`View ${achievement.title}`}>VIEW</Link>}
          </div>
        </div>
      ))}
    </div>
  );
}