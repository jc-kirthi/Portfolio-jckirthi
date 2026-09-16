/**
 * data/achievements.ts
 *
 * Awards, recognitions, and notable achievements. Replace with real data later.
 */

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date?: string;      // ISO date string
  description: string;
  category: "award" | "recognition" | "competition" | "scholarship" | "other";
  link?: string;
}

export const achievements: Achievement[] = [
  {
    id: "isme-hackathon-first-prize",
    title: "First Prize — ISME Hackathon",
    issuer: "ISME Hackathon",
    date: "2026-03",
    description: "First-prize result in the ISME Hackathon.",
    category: "competition",
  },
  {
    id: "mlsa-2026",
    title: "Microsoft Student Learn Ambassador",
    issuer: "Microsoft",
    description: "Microsoft Student Learn Ambassador recognition for 2026.",
    category: "recognition",
  },
  {
    id: "girlscript-summer-of-code-2025",
    title: "GirlScript Summer of Code Contributor",
    issuer: "GirlScript Summer of Code",
    description: "Contributor to GirlScript Summer of Code 2025.",
    category: "recognition",
  },
  {
    id: "hacktoberfest-contributor",
    title: "Hacktoberfest Contributor",
    issuer: "Hacktoberfest",
    description: "Contributor to Hacktoberfest.",
    category: "recognition",
  },
];
