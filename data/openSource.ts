/**
 * data/openSource.ts
 *
 * Community and open-source contribution context.
 */

export interface OpenSourceContribution {
  id: string;
  project: string;
  projectUrl: string;
  description: string;
  type: "feature" | "bugfix" | "documentation" | "refactor" | "other";
  prUrl?: string;
  issueUrl?: string;
  mergedDate?: string;
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
    id: "hacktoberfest-2025",
    project: "Hacktoberfest 2025",
    projectUrl: "https://hacktoberfest.com",
    description: "Open-source contribution work through community-driven developer participation and collaborative coding learning.",
    type: "other",
    status: "merged",
    language: "Multiple",
  },
  {
    id: "gssoc-2025",
    project: "GirlScript Summer of Code 2025",
    projectUrl: "https://gssoc.girlscript.tech/",
    description: "Community-driven open-source development participation focused on learning, contribution, and practical engineering experience.",
    type: "documentation",
    status: "merged",
    language: "Multiple",
  },
];

export const ownProjects: OpenSourceProject[] = [
  {
    id: "oss-samriddhi",
    name: "Samriddhi Parivar",
    description: "AI-powered civic technical project for multilingual reporting and geospatial civic action support.",
    url: "https://github.com/jc-kirthi/Samriddhi-Parivar",
    language: "TypeScript",
    topics: ["AI", "civic-tech", "react", "firebase"],
    isOwner: true,
  },
  {
    id: "oss-privakyc",
    name: "PrivaKYC",
    description: "Privacy-focused identity verification system exploring zero-knowledge and WebAuthn-driven flows.",
    url: "https://github.com/jc-kirthi/PrivaKYC",
    language: "TypeScript",
    topics: ["security", "zkp", "identity"],
    isOwner: true,
  },
];
