/**
 * lib/experience.ts
 *
 * Data helpers for the combined Experience page.
 */

import { achievements } from "@/data/achievements";
import { experience, type Experience } from "@/data/experience";
import { contributions, ownProjects } from "@/data/openSource";
import { volunteering, type Volunteering } from "@/data/volunteering";
import { formatDateRange } from "@/lib/utils";

export interface ExperienceSignal {
  index: string;
  label: string;
  value: string | number;
  note: string;
}

export function getExperienceSignals(): ExperienceSignal[] {
  return [
    {
      index: "01",
      label: "ROLES",
      value: experience.length,
      note: "Experience records",
    },
    {
      index: "02",
      label: "OPEN SOURCE",
      value: contributions.length + ownProjects.length,
      note: "Contribution and repo records",
    },
    {
      index: "03",
      label: "COMMUNITY",
      value: volunteering.length,
      note: "Volunteering records",
    },
    {
      index: "04",
      label: "ACHIEVEMENTS",
      value: achievements.length,
      note: "Recognition records",
    },
  ];
}

export function getExperiencePeriod(item: Experience): string {
  return item.startDate
    ? formatDateRange(item.startDate, item.endDate)
    : "DATE UNKNOWN";
}

export function getCommunityPeriod(item: Volunteering): string {
  return item.startDate
    ? formatDateRange(item.startDate, item.endDate)
    : "DATE UNKNOWN";
}

export function getAchievementYear(date: string): number {
  return new Date(date).getFullYear();
}
