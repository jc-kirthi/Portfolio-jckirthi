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
      { name: "C" },
      { name: "Java" },
      { name: "Python" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" },
    ],
  },
  {
    id: "ml-ai",
    label: "ML / AI",
    skills: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "NLP" },
      { name: "Generative AI" },
      { name: "LLMs" },
      { name: "RAG" },
      { name: "Agents" },
      { name: "MCP" },
      { name: "XGBoost" },
      { name: "SHAP" },
      { name: "Hugging Face" },
      { name: "Transformers" },
      { name: "OpenCV" },
    ],
  },
  {
    id: "web",
    label: "Web",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "FastAPI" },
      { name: "Tailwind CSS" },
      { name: "MongoDB / MERN" },
      { name: "MySQL" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    skills: [
      { name: "Git / GitHub" },
      { name: "Firebase" },
      { name: "Vercel" },
      { name: "Google Cloud AI APIs" },
    ],
  },
];
