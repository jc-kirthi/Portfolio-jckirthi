/**
 * data/education.ts
 *
 * Academic education history. Replace with real data later.
 */

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  startYear: number;
  endYear?: number;      // Omit if currently enrolled
  current: boolean;
  cgpa?: string;
  highlights: string[];
  logo?: string;
}

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "B.Tech",
    field: "Artificial Intelligence & Machine Learning",
    institution: "Placeholder University",
    location: "Placeholder City, India",
    startYear: 2023,
    current: true,
    highlights: [
      "Placeholder academic highlight or relevant coursework.",
      "Placeholder achievement or leadership role.",
    ],
  },
];
