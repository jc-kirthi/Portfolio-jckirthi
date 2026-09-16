/**
 * data/volunteering.ts
 *
 * Volunteer work, community involvement, and student organizations.
 */

export interface Volunteering {
  id: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  location?: string;
  startDate?: string;    // ISO date string
  endDate?: string;      // ISO date string, omit if ongoing
  current: boolean;
  description: string;
  highlights: string[];
}

export const volunteering: Volunteering[] = [
  {
    id: "oscode-cit-technical-team",
    role: "Technical Team Member",
    organization: "OSCode CIT Chapter",
    current: true,
    description: "Technical team involvement with the OSCode CIT Chapter.",
    highlights: [],
  },
  {
    id: "mlsa-cit-chapter",
    role: "Member",
    organization: "MLSA CIT Chapter",
    current: true,
    description: "Community involvement with the MLSA CIT Chapter.",
    highlights: [],
  },
  {
    id: "microsoft-student-learn-ambassador-2026",
    role: "Microsoft Student Learn Ambassador",
    organization: "Microsoft",
    current: true,
    description: "Microsoft Student Learn Ambassador for 2026.",
    highlights: [],
  },
];
