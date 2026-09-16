/**
 * data/education.ts
 *
 * Education timeline retained from the portfolio requirements.
 */

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  startYear: number;
  endYear?: number;
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
    institution: "Engineering Program",
    location: "India",
    startYear: 2023,
    current: true,
    cgpa: "9.4",
    highlights: [
      "Focused on AI/ML fundamentals, applied systems, and product-driven problem solving.",
      "Building projects across civic-tech, security, data science, and modern web engineering.",
    ],
  },
];
