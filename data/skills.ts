/**
 * data/skills.ts
 *
 * Technical and soft skills. No percentage bars — qualitative groupings only.
 * Replace with real data later.
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
      { name: "C++", level: "proficient" },
      { name: "SQL", level: "proficient" },
    ],
  },
  {
    id: "ml-ai",
    label: "ML / AI",
    skills: [
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "scikit-learn" },
      { name: "Hugging Face" },
      { name: "OpenCV" },
    ],
  },
  {
    id: "web",
    label: "Web",
    skills: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Node.js" },
      { name: "FastAPI" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "Linux" },
      { name: "Placeholder Cloud" },
    ],
  },
];
