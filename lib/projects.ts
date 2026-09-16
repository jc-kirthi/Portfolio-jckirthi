/**
 * lib/projects.ts
 *
 * Data-driven helpers for project showcase pages.
 * All metrics derive strictly from data/projects.ts — no invented counts.
 */

import { projects, type Project } from "@/data/projects";

export interface ProjectStats {
  totalProjects: number;
  featuredCount: number;
  completedCount: number;
  inProgressCount: number;
  yearSpan: string | null;
  categories: string[];
}

const showcasePriority = [
  "samriddhi-parivar",
  "privakyc",
  "rapidauth",
  "foodwise",
  "c-solution",
] as const;

export function projectCategorySlug(category: string): string {
  return category
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Derive safely computable statistics from the project dataset. */
export function getProjectStats(): ProjectStats {
  const featuredCount = projects.filter((p) => p.featured).length;
  const completedCount = projects.filter((p) => p.status === "completed").length;
  const inProgressCount = projects.filter((p) => p.status === "in-progress").length;

  const years = Array.from(new Set(projects.map((p) => p.year).filter((year): year is number => year !== undefined)))
    .sort((a, b) => b - a);
  const yearSpan =
    years.length > 0 ? `${years[years.length - 1]}-${years[0]}` : null;

  const categories = Array.from(
    new Set(projects.flatMap((p) => p.tags.map((t) => t.toUpperCase())))
  ).sort();

  return {
    totalProjects: projects.length,
    featuredCount,
    completedCount,
    inProgressCount,
    yearSpan,
    categories,
  };
}

/** Score projects for fallback featured selection when featured flag is sparse. */
function featuredScore(p: Project): number {
  let score = (p.year ?? 0) / 1000;
  if (p.featured) score += 100;
  if (p.status === "completed") score += 20;
  if (p.coverImage) score += 10;
  if (p.longDescription) score += 8;
  score += Object.keys(p.links).filter((k) => p.links[k as keyof typeof p.links]).length * 5;
  score += p.tech.length;
  return score;
}

/** Return featured projects, falling back to strongest records if no records are flagged. */
export function getFeaturedProjects(limit = 4): Project[] {
  const featured = projects.filter((p) => p.featured);
  const pool = featured.length > 0 ? featured : [...projects];

  return pool
    .sort((a, b) => {
      const aPriority = showcasePriority.findIndex((slug) => slug === a.slug);
      const bPriority = showcasePriority.findIndex((slug) => slug === b.slug);
      const aRank = aPriority === -1 ? showcasePriority.length : aPriority;
      const bRank = bPriority === -1 ? showcasePriority.length : bPriority;
      if (aRank !== bRank) return aRank - bRank;
      return featuredScore(b) - featuredScore(a);
    })
    .slice(0, Math.min(Math.max(limit, 2), 4, pool.length));
}

/** Primary category label from project tags — uses actual tag data only. */
export function getPrimaryCategory(p: Project): string {
  return p.tags[0]?.toUpperCase() ?? "PROJECT";
}

/** All projects sorted for archive: newest year first, then title. */
export function getArchiveProjects(): Project[] {
  return [...projects].sort((a, b) => {
    if (a.year === undefined && b.year === undefined) return 0;
    if (a.year === undefined) return 1;
    if (b.year === undefined) return -1;
    if (b.year !== a.year) return b.year - a.year;
    return a.title.localeCompare(b.title);
  });
}

/** Projects filtered by tag category (case-insensitive). */
export function getProjectsByCategory(category: string): Project[] {
  const normalized = category.toLowerCase();
  return getArchiveProjects().filter((p) =>
    p.tags.some((t) => t.toLowerCase() === normalized)
  );
}

export function findProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function hasProjectLinks(p: Project): boolean {
  return Boolean(p.links.github || p.links.live || p.links.demo);
}

export function getStatusLabel(status: Project["status"]): string {
  switch (status) {
    case "completed":
      return "COMPLETED";
    case "in-progress":
      return "IN PROGRESS";
    case "archived":
      return "ARCHIVED";
  }
  return "STATUS UNKNOWN";
}

/** Adjacent projects for editorial next/previous navigation. */
export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
  index: number;
} {
  const ordered = getArchiveProjects();
  const index = ordered.findIndex((p) => p.slug === slug);

  return {
    prev: index > 0 ? ordered[index - 1] : null,
    next: index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : null,
    index: index >= 0 ? index + 1 : 0,
  };
}
