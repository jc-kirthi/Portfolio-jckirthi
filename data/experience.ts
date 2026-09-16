/**
 * data/experience.ts
 *
 * Work experience, internships, and verified student/community roles.
 */

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  type: "full-time" | "part-time" | "internship" | "contract" | "volunteer";
  startDate?: string;   // ISO date string
  endDate?: string;     // ISO date string, omit if current
  current: boolean;
  description: string;
  highlights: string[];
  tech: string[];
  logo?: string;
}

export const experience: Experience[] = [
  {
    id: "oscode-cit-technical-team",
    role: "Technical Team Member",
    company: "OSCode CIT Chapter",
    type: "volunteer",
    current: true,
    description: "Technical team involvement with the OSCode CIT Chapter.",
    highlights: [],
    tech: [],
  },
  {
    id: "mlsa-cit-chapter",
    role: "Member",
    company: "MLSA CIT Chapter",
    type: "volunteer",
    current: true,
    description: "Community involvement with the MLSA CIT Chapter.",
    highlights: [],
    tech: [],
  },
  {
    id: "microsoft-student-learn-ambassador-2026",
    role: "Microsoft Student Learn Ambassador",
    company: "Microsoft",
    type: "volunteer",
    current: true,
    description: "Microsoft Student Learn Ambassador for 2026.",
    highlights: [],
    tech: [],
  },
];
