import { achievements, type Achievement } from "@/data/achievements";

export interface AchievementStats {
  total: number;
  competitions: number;
  awardRecords: number;
  rankedRecords: number;
  yearsActive: number[];
  yearSpan: string | null;
}

function getYear(achievement: Achievement): number | null {
  if (!achievement.date) return null;
  const year = new Date(achievement.date).getFullYear();
  return Number.isNaN(year) ? null : year;
}

function getTimestamp(achievement: Achievement): number | null {
  if (!achievement.date) return null;
  const timestamp = new Date(achievement.date).getTime();
  return Number.isNaN(timestamp) ? null : timestamp;
}

export function getAchievementStats(): AchievementStats {
  const yearsActive = Array.from(
    new Set(
      achievements
        .map(getYear)
        .filter((year): year is number => year !== null)
    )
  ).sort((a, b) => b - a);

  return {
    total: achievements.length,
    competitions: achievements.filter((item) => item.category === "competition").length,
    awardRecords: achievements.filter((item) => item.category === "award").length,
    rankedRecords: achievements.filter((item) => getPlacement(item) !== null).length,
    yearsActive,
    yearSpan:
      yearsActive.length > 0
        ? `${yearsActive[yearsActive.length - 1]} - ${yearsActive[0]}`
        : null,
  };
}

function achievementScore(achievement: Achievement) {
  let score = (getTimestamp(achievement) ?? 0) / 1e10;
  if (getPlacement(achievement)) score += 100;
  if (achievement.category === "award") score += 20;
  if (achievement.category === "competition") score += 10;
  return score;
}

export function getFeaturedAchievements(limit = 3) {
  return [...achievements]
    .sort((a, b) => achievementScore(b) - achievementScore(a))
    .slice(0, Math.min(limit, achievements.length));
}

export function getAchievementArchive(featured: Achievement[]) {
  const featuredIds = new Set(featured.map((item) => item.id));
  return [...achievements]
    .filter((item) => !featuredIds.has(item.id))
    .sort((a, b) => {
      const aDate = getTimestamp(a);
      const bDate = getTimestamp(b);
      if (aDate === null && bDate === null) return 0;
      if (aDate === null) return 1;
      if (bDate === null) return -1;
      return bDate - aDate;
    });
}

export function getAchievementYear(achievement: Achievement) {
  return getYear(achievement) ?? "DATE UNKNOWN";
}

export function getPlacement(achievement: Achievement) {
  const match = `${achievement.title} ${achievement.description}`.match(
    /\b(1st|2nd|3rd|winner|finalist)\b/i
  );
  return match?.[1]?.toUpperCase() ?? null;
}

export function getCategoryLabel(category: Achievement["category"]) {
  return category.replace(/-/g, " ").toUpperCase();
}