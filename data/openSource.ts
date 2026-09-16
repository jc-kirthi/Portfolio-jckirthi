/**
 * data/openSource.ts
 *
 * Open source contributions. Replace with real data later.
 */

export interface OpenSourceContribution {
  id: string;
  project: string;
  projectUrl?: string;
  description: string;
  type: "feature" | "bugfix" | "documentation" | "refactor" | "other";
  prUrl?: string;
  issueUrl?: string;
  mergedDate?: string;   // ISO date string
  status?: "merged" | "open" | "closed";
  language?: string;
}

export interface OpenSourceProject {
  id: string;
  name: string;
  description: string;
  url: string;
  stars?: number;
  language: string;
  topics: string[];
  isOwner: boolean;
}

export const contributions: OpenSourceContribution[] = [
  {
    id: "girlscript-summer-of-code-2025",
    project: "GirlScript Summer of Code 2025",
    description: "Contributor to GirlScript Summer of Code 2025.",
    type: "other",
  },
  {
    id: "hacktoberfest",
    project: "Hacktoberfest",
    description: "Contributor to Hacktoberfest.",
    type: "other",
  },
];

export const ownProjects: OpenSourceProject[] = [];
