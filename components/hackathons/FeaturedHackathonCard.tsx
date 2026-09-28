/**
 * components/hackathons/FeaturedHackathonCard.tsx
 *
 * Editorial featured hackathon composition with asymmetric layout variants.
 */

import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";
import type { Hackathon } from "@/data/hackathons";
import { getPlacementLabel, getHackathonYear } from "@/lib/hackathons";

interface FeaturedHackathonCardProps {
  hackathon: Hackathon;
  index: number;
}

export function FeaturedHackathonCard({ hackathon: h, index }: FeaturedHackathonCardProps) {
  const isWinner = h.won;
  const layout = index % 3;
  const year = getHackathonYear(h);
  const placement = getPlacementLabel(h);

  const metaBlock = (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
          CASE · {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`font-display text-2xl font-black opacity-90 ${isWinner ? "text-[var(--color-secondary)]" : "text-[var(--color-accent-warm)]"}`}>
          {year}
        </span>
      </div>

      <Badge variant={isWinner ? "tangerine" : "muted"} size="md" className="w-fit font-bold">
        {placement}
      </Badge>

      <div>
        <span className="font-mono text-[11px] uppercase tracking-wider block text-[var(--color-muted)]">
          EVENT
        </span>
        <p className="font-display text-sm sm:text-base font-bold uppercase mt-0.5 leading-tight">
          {h.name}
        </p>
        <p className="text-xs text-[var(--color-muted)] font-mono mt-1">
          {h.organizer} · {h.location}
        </p>
      </div>

      {h.prize && (
        <div className="border-t border-[var(--color-border-subtle)] pt-3">
          <span className={`font-mono text-[11px] uppercase tracking-wider block font-bold ${isWinner ? "text-[var(--color-secondary)]" : "text-[var(--color-accent-warm)]"}`}>
            PRIZE
          </span>
          <p className="font-display text-xs font-bold mt-0.5">{h.prize}</p>
        </div>
      )}

      <span className="font-mono text-[11px] text-[var(--color-muted)] border-t border-[var(--color-border-subtle)] pt-3">
        TEAM · {h.teamSize} {h.teamSize === 1 ? "ENGINEER" : "ENGINEERS"}
      </span>
    </div>
  );

  const projectBlock = (
    <div className="flex flex-col justify-between gap-6 h-full">
      <div className="flex flex-col gap-4">
        <span className={`font-mono text-xs uppercase tracking-widest font-bold ${isWinner ? "text-[var(--color-secondary)]" : "text-[var(--color-accent-warm)]"}`}>
          PROJECT
        </span>

        <Heading
          as="h3"
          size="2xl"
          uppercase
          className={isWinner ? "text-[#f6f1e8]" : "text-[var(--color-foreground)]"}
        >
          {h.project.title}
        </Heading>

        <p
          className={
            isWinner
              ? "text-sm md:text-base text-[#f6f1e8]/85 leading-relaxed max-w-2xl"
              : "text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-2xl"
          }
        >
          {h.project.description}
        </p>

        <div className="pt-1">
          <span className="font-mono text-[11px] uppercase tracking-wider block mb-2 text-[var(--color-muted)] font-bold">
            TECH STACK
          </span>
          <div className="flex flex-wrap gap-1.5">
            {h.project.tech.map((tech) => (
              <span
                key={tech}
                className={
                  isWinner
                    ? "font-mono text-xs bg-[#f6f1e8]/10 text-[#f6f1e8] px-2.5 py-1 border border-[#f6f1e8]/25 transition-colors duration-150 group-hover:border-[#f6f1e8]/50"
                    : "font-mono text-xs bg-[var(--color-background)] text-[var(--color-foreground)] px-2.5 py-1 border border-[var(--color-border-subtle)] transition-colors duration-150 group-hover:border-[var(--color-border)]"
                }
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-current/20 pt-5">
        <Button
          href={`/hackathons/${h.slug}`}
          variant={isWinner ? "accent" : "primary"}
          size="sm"
          withArrow
        >
          VIEW CASE STUDY
        </Button>

        <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
          {h.project.links?.github && (
            <Link href={h.project.links.github} external variant="arrow" className={isWinner ? "text-[#f6f1e8] hover:text-[var(--color-secondary)]" : undefined}>
              GITHUB
            </Link>
          )}
          {h.project.links?.devpost && (
            <Link href={h.project.links.devpost} external variant="arrow" className={isWinner ? "text-[#f6f1e8] hover:text-[var(--color-secondary)]" : undefined}>
              DEVPOST
            </Link>
          )}
          {h.project.links?.live && (
            <Link href={h.project.links.live} external variant="arrow" className={isWinner ? "text-[#f6f1e8] hover:text-[var(--color-secondary)]" : undefined}>
              LIVE DEMO
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  /* Layout 0: Sidebar left (winner emphasis) */
  if (layout === 0) {
    return (
      <Card
        variant={isWinner ? "featured" : "interactive"}
        padding="none"
        accentStrip={isWinner ? "tangerine" : "none"}
        className="group border-2 border-[var(--color-border)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div
            className={
              isWinner
                ? "lg:col-span-4 p-6 sm:p-8 bg-[var(--color-plum-dark)] border-b-2 lg:border-b-0 lg:border-r-2 border-[#f6f1e8]/20"
                : "lg:col-span-4 p-6 sm:p-8 bg-[var(--color-card-subtle)] border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--color-border)]"
            }
          >
            {metaBlock}
          </div>
          <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10">{projectBlock}</div>
        </div>
      </Card>
    );
  }

  /* Layout 1: Sidebar right (mirrored) */
  if (layout === 1) {
    return (
      <Card
        variant={isWinner ? "featured" : "interactive"}
        padding="none"
        accentStrip="lavender"
        className="group border-2 border-[var(--color-border)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 order-2 lg:order-1 border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--color-border-subtle)]">
            {projectBlock}
          </div>
          <div
            className={
              isWinner
                ? "lg:col-span-4 p-6 sm:p-8 bg-[var(--color-plum-dark)] order-1 lg:order-2"
                : "lg:col-span-4 p-6 sm:p-8 bg-[var(--color-card-subtle)] order-1 lg:order-2"
            }
          >
            {metaBlock}
          </div>
        </div>
      </Card>
    );
  }

  /* Layout 2: Stacked editorial with large index */
  return (
    <Card
      variant={isWinner ? "featured" : "interactive"}
      padding="none"
      accentStrip={isWinner ? "tangerine" : "plum"}
      className="group border-2 border-[var(--color-border)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-2 p-6 sm:p-8 border-b-2 md:border-b-0 md:border-r-2 border-[var(--color-border-subtle)] flex md:flex-col items-center md:items-start justify-between gap-4">
          <span className="font-display text-5xl sm:text-6xl font-black text-[var(--color-accent-warm)] leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Badge variant={isWinner ? "tangerine" : "outline"} size="sm">
            {placement}
          </Badge>
        </div>

        <div className="md:col-span-10 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
            <span className="font-mono text-xs text-[var(--color-muted)] uppercase">
              {year} · {h.name}
            </span>
            <span className="font-mono text-xs text-[var(--color-muted)]">
              {h.organizer} · {h.location}
            </span>
          </div>
          {projectBlock}
        </div>
      </div>
    </Card>
  );
}
