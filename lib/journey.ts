/**
 * lib/journey.ts
 *
 * Data-driven timeline helpers for the Journey page.
 */

import { achievements } from "@/data/achievements";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { hackathons } from "@/data/hackathons";
import { contributions, ownProjects } from "@/data/openSource";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { volunteering } from "@/data/volunteering";

export type JourneyCategory =
  | "education"
  | "experience"
  | "build"
  | "compete"
  | "contribute"
  | "recognition";

export interface JourneyTimelineItem {
  id: string;
  year: number;
  period: string;
  category: JourneyCategory;
  label: string;
  title: string;
  context: string;
  description: string;
  href?: string;
  linkLabel?: string;
  meta?: string[];
}

export interface JourneySignal {
  index: string;
  label: string;
  value: string | number;
  note: string;
}

export interface GrowthStage {
  label: string;
  description: string;
  count: number;
}

function yearFromDate(date?: string): number | null {
  if (!date) return null;
  const year = new Date(date).getFullYear();
  return Number.isNaN(year) ? null : year;
}

function formatPeriod(startDate: string, endDate?: string, current?: boolean): string {
  const start = yearFromDate(startDate);
  if (start === null) return "DATE UNKNOWN";
  if (current) return `${start}-NOW`;
  if (!endDate) return String(start);

  const end = yearFromDate(endDate);
  if (end === null) return String(start);
  return start === end ? String(start) : `${start}-${end}`;
}

function unique(values: Array<string | undefined>): string[] {
  return Array.from(new Set(values.filter((value): value is string => Boolean(value))));
}

function context(...values: Array<string | undefined>): string {
  return values.filter((value): value is string => Boolean(value)).join(" / ");
}

export function getJourneyTimeline(): JourneyTimelineItem[] {
  const items: JourneyTimelineItem[] = [
    ...education.flatMap((item) => {
      if (item.startYear === undefined || !Number.isFinite(item.startYear)) return [];
      return [{
      id: `education-${item.id}`,
      year: item.startYear,
      period: item.current
        ? `${item.startYear}-NOW`
        : item.endYear
          ? `${item.startYear}-${item.endYear}`
          : String(item.startYear),
      category: "education" as const,
      label: "LEARN",
      title: `${item.degree} in ${item.field}`,
      context: context(item.institution, item.location),
      description: item.highlights[0] ?? `${item.degree} program at ${item.institution}.`,
      href: item.institutionUrl,
      linkLabel: item.institutionUrl ? "VIEW INSTITUTION" : undefined,
      meta: unique([item.current ? "Current" : undefined, item.cgpa ? `CGPA ${item.cgpa}` : undefined]),
      }];
    }),
    ...experience.flatMap((item) => {
      const year = yearFromDate(item.startDate);
      if (year === null || !item.startDate) return [];
      return [{
      id: `experience-${item.id}`,
      year,
      period: formatPeriod(item.startDate, item.endDate, item.current),
      category: "experience" as const,
      label: "WORK",
      title: item.role,
      context: context(item.company, item.location),
      description: item.description,
      href: item.companyUrl,
      linkLabel: item.companyUrl ? "VIEW ORGANIZATION" : undefined,
      meta: unique([item.type, ...item.tech.slice(0, 3)]),
      }];
    }),
    ...hackathons.flatMap((item) => {
      const year = yearFromDate(item.date);
      if (year === null) return [];
      return [{
      id: `hackathon-${item.slug}`,
      year,
      period: String(year),
      category: "compete" as const,
      label: "COMPETE",
      title: item.name,
      context: context(item.project.title, item.organizer),
      description: item.position
        ? `${item.position}: ${item.project.description}`
        : item.project.description,
      href: `/hackathons/${item.slug}`,
      linkLabel: "VIEW HACKATHON",
      meta: unique([item.position, item.location, ...item.project.tech.slice(0, 3)]),
      }];
    }),
    ...projects.flatMap((item) => {
      if (item.year === undefined || !Number.isFinite(item.year)) return [];
      return [{
      id: `project-${item.slug}`,
      year: item.year,
      period: String(item.year),
      category: "build" as const,
      label: "BUILD",
      title: item.title,
      context: item.tags.join(" / "),
      description: item.description,
      href: `/projects/${item.slug}`,
      linkLabel: "VIEW PROJECT",
      meta: unique([item.status, ...item.tech.slice(0, 3)]),
      }];
    }),
    ...achievements.flatMap((item) => {
      const year = yearFromDate(item.date);
      if (year === null) return [];
      return [{
      id: `achievement-${item.id}`,
      year,
      period: String(year),
      category: "recognition" as const,
      label: "RECOGNITION",
      title: item.title,
      context: item.issuer,
      description: item.description,
      href: item.link,
      linkLabel: item.link ? "VIEW RECORD" : undefined,
      meta: unique([item.category]),
      }];
    }),
    ...volunteering.flatMap((item) => {
      const year = yearFromDate(item.startDate);
      if (year === null || !item.startDate) return [];
      return [{
      id: `volunteering-${item.id}`,
      year,
      period: formatPeriod(item.startDate, item.endDate, item.current),
      category: "contribute" as const,
      label: "CONTRIBUTE",
      title: item.role,
      context: context(item.organization, item.location),
      description: item.description,
      href: item.organizationUrl,
      linkLabel: item.organizationUrl ? "VIEW ORGANIZATION" : undefined,
      meta: unique([item.current ? "Current" : undefined]),
      }];
    }),
  ];

  return items.sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return a.title.localeCompare(b.title);
  });
}

export function getJourneySignals(): JourneySignal[] {
  const timeline = getJourneyTimeline();
  const earliestYear = timeline.length > 0 ? Math.min(...timeline.map((item) => item.year)) : null;
  const openSourceCount = contributions.length + ownProjects.length;

  return [
    {
      index: "01",
      label: "ACADEMIC STAGE",
      value: profile.year,
      note: profile.title,
    },
    {
      index: "02",
      label: "TIMELINE START",
      value: earliestYear ?? "N/A",
      note: earliestYear ? "Earliest dated record" : "No dated records yet",
    },
    {
      index: "03",
      label: "PROJECTS",
      value: projects.length,
      note: "Project records",
    },
    {
      index: "04",
      label: "HACKATHONS",
      value: hackathons.length,
      note: "Competition records",
    },
    {
      index: "05",
      label: "OPEN SOURCE",
      value: openSourceCount,
      note: "Contribution and repo records",
    },
  ];
}

export function getGrowthStages(): GrowthStage[] {
  const stages: GrowthStage[] = [];

  if (education.length > 0) {
    stages.push({
      label: "LEARN",
      description: "Academic foundation and technical coursework.",
      count: education.length,
    });
  }

  if (projects.length > 0) {
    stages.push({
      label: "BUILD",
      description: "Project records where tools become working systems.",
      count: projects.length,
    });
  }

  if (hackathons.length > 0) {
    stages.push({
      label: "COMPETE",
      description: "Hackathon records and time-boxed product builds.",
      count: hackathons.length,
    });
  }

  if (contributions.length + ownProjects.length + volunteering.length > 0) {
    stages.push({
      label: "CONTRIBUTE",
      description: "Open-source, maintained repository, and community records.",
      count: contributions.length + ownProjects.length + volunteering.length,
    });
  }

  stages.push({
    label: "GROW",
    description: profile.tagline,
    count: 1,
  });

  return stages;
}
