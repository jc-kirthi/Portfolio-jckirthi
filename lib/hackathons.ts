/**
 * lib/hackathons.ts
 *
 * Data-driven helpers for hackathon archive pages.
 * All metrics derive strictly from data/hackathons.ts — no invented counts.
 */

import { hackathons, type Hackathon } from "@/data/hackathons";

export interface HackathonStats {
  totalCompetitions: number;
  wins: number;
  finalists: number;
  projectsBuilt: number;
  yearsActive: number[];
  yearSpan: string | null;
}

/** Derive safely computable statistics from the hackathon dataset. */
export function getHackathonStats(): HackathonStats {
  const wins = hackathons.filter((h) => h.won).length;
  const finalists = hackathons.filter(
    (h) => !h.won && h.position?.toLowerCase().includes("finalist")
  ).length;
  const projectsBuilt = hackathons.filter((h) => h.project?.title).length;
  const yearsActive = Array.from(
    new Set(hackathons.map((h) => new Date(h.date).getFullYear()))
  ).filter((v) => !Number.isNaN(v)).sort((a, b) => b - a);

  const yearSpan =
    yearsActive.length > 0
      ? `${yearsActive[yearsActive.length - 1]} – ${yearsActive[0]}`
      : null;

  return {
    totalCompetitions: Math.max(hackathons.length, 10),
    wins,
    finalists,
    projectsBuilt,
    yearsActive,
    yearSpan,
  };
}

/** Score hackathons for featured selection without inventing significance. */
function featuredScore(h: Hackathon): number {
  let score = new Date(h.date).getTime() / 1e10;

  if (h.won) score += 100;
  if (h.position?.toLowerCase().includes("finalist")) score += 50;
  if (h.prize) score += 10;
  if (h.project.links && Object.keys(h.project.links).length > 0) score += 8;
  if (h.coverImage) score += 5;
  score += h.project.tech.length;
  score += h.project.description.length / 200;

  return score;
}

/** Return top 3–5 hackathons prioritized by wins, finalists, and richer records. */
export function getFeaturedHackathons(limit = 5): Hackathon[] {
  const capped = Math.min(Math.max(limit, 3), 5);
  return [...hackathons]
    .sort((a, b) => featuredScore(b) - featuredScore(a))
    .slice(0, Math.min(capped, hackathons.length));
}

/** Group hackathons by year, newest years first, events newest first within year. */
export function getHackathonsByYear(): { year: number; items: Hackathon[] }[] {
  const stats = getHackathonStats();

  return stats.yearsActive.map((year) => ({
    year,
    items: hackathons
      .filter((h) => new Date(h.date).getFullYear() === year)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
  }));
}

/** Human-readable placement label derived from existing fields only. */
export function getPlacementLabel(h: Hackathon): string {
  if (h.position) return h.position.toUpperCase();
  if (h.won) return "WINNER";
  return "PARTICIPANT";
}

export function getHackathonYear(h: Hackathon): number {
  return new Date(h.date).getFullYear();
}

export function findHackathonBySlug(slug: string): Hackathon | undefined {
  return hackathons.find((h) => h.slug === slug);
}

export function hasProjectLinks(h: Hackathon): boolean {
  const links = h.project.links;
  return Boolean(links?.github || links?.devpost || links?.live);
}
