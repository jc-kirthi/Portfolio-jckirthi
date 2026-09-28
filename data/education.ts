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
  location?: string;
  startYear: number;
  endYear?: number;
  current: boolean;
  cgpa?: string;
  gradeLabel?: string;
  skills?: string[];
  activities?: string[];
  highlights: string[];
  logo?: string;
}

export const education: Education[] = [
  {
    id: "edu-1",
    degree: "B.E.",
    field: "Artificial Intelligence & Machine Learning",
    institution: "CAMBRIDGE INSTITUTE OF TECHNOLOGY",
    startYear: 2024,
    endYear: 2028,
    current: true,
    cgpa: "9.4",
    gradeLabel: "CGPA (2nd year)",
    skills: ["C (Programming Language)", "Jupyter Notebook"],
    highlights: [],
  },
  {
    id: "edu-2",
    degree: "12th",
    field: "",
    institution: "TCIS — The Cambridge International School",
    startYear: 2022,
    endYear: 2024,
    current: false,
    cgpa: "8.9",
    gradeLabel: "CGPA",
    skills: ["Teamwork"],
    highlights: [],
  },
  {
    id: "edu-3",
    degree: "10th",
    field: "",
    institution: "AMC Cambridge Public School",
    startYear: 2022,
    endYear: 2022,
    current: false,
    cgpa: "9.8",
    gradeLabel: "CGPA",
    skills: ["Java", "Leadership", "+1 skill"],
    activities: ["Cabinet Member", "House Vice-Captain (2020)", "House Captain (2021)"],
    highlights: [],
  },
];
