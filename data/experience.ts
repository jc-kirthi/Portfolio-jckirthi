/**
 * data/experience.ts
 *
 * Work experience, internships, and roles. Replace with real data later.
 */

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: "full-time" | "part-time" | "internship" | "contract" | "volunteer";
  startDate: string;    // ISO date string
  endDate?: string;     // ISO date string, omit if current
  current: boolean;
  description: string;
  highlights: string[];
  tech: string[];
  logo?: string;
}

export const experience: Experience[] = [
  {
    id: "exp-1",
    role: "Placeholder Intern",
    company: "Placeholder Company",
    location: "Remote",
    type: "internship",
    startDate: "2024-05-01",
    endDate: "2024-07-31",
    current: false,
    description: "Brief description of responsibilities and impact.",
    highlights: [
      "Placeholder highlight demonstrating measurable impact.",
      "Another placeholder highlight with technical depth.",
    ],
    tech: ["Python", "ML framework", "Cloud platform"],
  },
];
