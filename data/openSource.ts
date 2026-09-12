/**
 * data/openSource.ts
 *
 * Open source contributions. Replace with real data later.
 */

export interface OpenSourceContribution {
  id: string;
  project: string;
  projectUrl: string;
  description: string;
  type: "feature" | "bugfix" | "documentation" | "refactor" | "other";
  prUrl?: string;
  issueUrl?: string;
  mergedDate?: string;   // ISO date string
  status: "merged" | "open" | "closed";
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
    id: "contrib-1",
    project: "Placeholder OSS Project",
    projectUrl: "https://github.com/placeholder/project",
    description: "Placeholder description of the contribution and its impact.",
    type: "feature",
    status: "merged",
    language: "Python",
  },
];

export const ownProjects: OpenSourceProject[] = [
  {
    id: "oss-1",
    name: "placeholder-repo",
    description: "Brief description of an open-source project I maintain.",
    url: "https://github.com/placeholder/placeholder-repo",
    language: "Python",
    topics: ["machine-learning", "placeholder"],
    isOwner: true,
  },
];
