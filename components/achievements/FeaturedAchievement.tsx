import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Link } from "@/components/ui/Link";
import type { Achievement } from "@/data/achievements";
import { getAchievementYear, getCategoryLabel, getPlacement } from "@/lib/achievements";

interface FeaturedAchievementProps {
  achievement: Achievement;
  index: number;
}

export function FeaturedAchievement({ achievement, index }: FeaturedAchievementProps) {
  const placement = getPlacement(achievement);
  const accent = achievement.category === "competition" || placement;

  return (
    <article className={`border-2 border-[var(--color-border)] shadow-[4px_4px_0px_0px_var(--color-border)] ${accent ? "bg-[var(--color-plum-dark)] text-[#f6f1e8]" : "bg-[var(--color-card)]"}`}>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className={`md:col-span-2 p-6 sm:p-8 border-b-2 md:border-b-0 md:border-r-2 ${accent ? "border-[#f6f1e8]/20" : "border-[var(--color-border-subtle)]"} flex md:flex-col justify-between gap-5`}>
          <span className={`font-display text-5xl sm:text-6xl font-black leading-none ${accent ? "text-[var(--color-accent-warm)]" : "text-[var(--color-plum)]"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          {placement ? <Badge variant="tangerine" size="sm">{placement}</Badge> : <Badge variant="outline" size="sm">{getCategoryLabel(achievement.category)}</Badge>}
        </div>
        <div className="md:col-span-10 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-xs uppercase text-[var(--color-muted)]">
            <span className={accent ? "text-[#f6f1e8]/70" : ""}>{getAchievementYear(achievement)}</span>
            <span className={accent ? "text-[#f6f1e8]/70" : ""}>{achievement.issuer}</span>
          </div>
          <Heading as="h3" size="2xl" uppercase className={`mt-4 ${accent ? "text-[#f6f1e8]" : "text-[var(--color-foreground)]"}`}>
            {achievement.title}
          </Heading>
          <p className={`mt-5 max-w-2xl text-sm md:text-base leading-relaxed ${accent ? "text-[#f6f1e8]/85" : "text-[var(--color-muted)]"}`}>
            {achievement.description}
          </p>
          {achievement.link && (
            <div className="mt-6">
              <Link href={achievement.link} external variant="arrow" className={accent ? "text-[#f6f1e8]" : ""}>
                VIEW RECORD
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}