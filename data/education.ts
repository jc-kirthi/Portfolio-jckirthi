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
  startYear?: number;
  endYear?: number;      // Omit if currently enrolled
  current: boolean;
  cgpa?: string;
  highlights: string[];
  logo?: string;
}

export const education: Education[] = [
  {
    id: "cambridge-institute-of-technology-aiml",
    degree: "B.Tech",
    field: "Artificial Intelligence & Machine Learning",
    institution: "Cambridge Institute of Technology",
    location: "Bengaluru",
    current: true,
    cgpa: "9.65 (1st year)",
    highlights: ["10th: 92%", "12th: 85%"],
  },
];
