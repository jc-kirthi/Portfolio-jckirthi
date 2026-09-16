/**
 * data/certifications.ts
 *
 * Verified certifications retained from the project and LinkedIn profile.
 */

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerUrl?: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  expires?: string;
  skills: string[];
  image?: string;
}

export const certifications: Certification[] = [
  {
    id: "microsoft-ai-research-agents",
    title: "Microsoft Applied Skills — Generate Reports with AI Research Agents",
    issuer: "Microsoft",
    date: "Details available on request",
    skills: ["AI Research Agents", "Automation", "Reporting"],
  },
  {
    id: "deloitte-forage",
    title: "Deloitte Forage",
    issuer: "Deloitte",
    date: "Details available on request",
    skills: ["Professional Skills", "Business Problem Solving"],
  },
  {
    id: "postman-api-fundamentals",
    title: "Postman API Fundamentals",
    issuer: "Postman",
    date: "Details available on request",
    skills: ["API Testing", "REST APIs", "Postman"],
  },
  {
    id: "google-ai-study-jam",
    title: "Google AI Study Jam",
    issuer: "Google",
    date: "Details available on request",
    skills: ["AI Fundamentals", "Learning Path", "Google AI"],
  },
  {
    id: "cloud-skills-boost",
    title: "Cloud Skills Boost",
    issuer: "Google Cloud",
    date: "Details available on request",
    skills: ["Cloud Learning", "Developer Skills", "Cloud Fundamentals"],
  },
];
