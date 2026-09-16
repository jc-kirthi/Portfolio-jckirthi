/**
 * data/skills.ts
 *
 * Technical and soft skills organized by domain without percentage bars.
 */

export type SkillLevel = "familiar" | "proficient" | "expert";

export interface Skill {
  name: string;
  level?: SkillLevel;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "Python", level: "expert" },
      { name: "TypeScript", level: "proficient" },
      { name: "C", level: "proficient" },
      { name: "SQL", level: "proficient" },
    ],
  },
  {
    id: "ml-ai",
    label: "ML / AI",
    skills: [
      { name: "Machine Learning" },
      { name: "Generative AI" },
      { name: "Data Analysis" },
      { name: "Feature Engineering" },
      { name: "Model Evaluation" },
    ],
  },
  {
    id: "web",
    label: "Web",
    skills: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Firebase" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Vercel" },
      { name: "Figma" },
    ],
  },
];
