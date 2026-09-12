/**
 * data/volunteering.ts
 *
 * Volunteer work, community involvement, and student organizations.
 * Replace with real data later.
 */

export interface Volunteering {
  id: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  location: string;
  startDate: string;     // ISO date string
  endDate?: string;      // ISO date string, omit if ongoing
  current: boolean;
  description: string;
  highlights: string[];
}

export const volunteering: Volunteering[] = [
  {
    id: "vol-1",
    role: "Placeholder Volunteer Role",
    organization: "Placeholder Organization",
    location: "Placeholder City",
    startDate: "2023-08-01",
    current: true,
    description: "Brief description of volunteer responsibilities and mission.",
    highlights: [
      "Placeholder impact highlight.",
      "Another placeholder contribution highlight.",
    ],
  },
];
