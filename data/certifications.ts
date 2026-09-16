/**
 * data/certifications.ts
 *
 * Professional certifications and course completions.
 */

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerUrl?: string;
  date?: string;         // ISO date string
  credentialId?: string;
  credentialUrl?: string;
  expires?: string;      // ISO date string, omit if no expiry
  skills: string[];
  image?: string;        // path relative to /public/certificates/
}

export const certifications: Certification[] = [
  {
    id: "microsoft-applied-skills-ai-research-agents",
    title: "Generate Reports with AI Research Agents",
    issuer: "Microsoft Applied Skills",
    skills: ["AI Research Agents", "Generative AI"],
  },
  {
    id: "deloitte-forage",
    title: "Deloitte Forage",
    issuer: "Deloitte",
    skills: [],
  },
  {
    id: "postman-api-fundamentals",
    title: "API Fundamentals",
    issuer: "Postman",
    skills: ["APIs"],
  },
  {
    id: "google-ai-study-jam",
    title: "Google AI Study Jam",
    issuer: "Google",
    skills: ["Artificial Intelligence"],
  },
  {
    id: "cloud-skills-boost",
    title: "Cloud Skills Boost Badge",
    issuer: "Google Cloud",
    skills: ["Cloud"],
  },
];
