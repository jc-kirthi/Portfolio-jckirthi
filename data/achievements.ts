/**
 * data/achievements.ts
 *
 * Awards, recognitions, and notable achievements. Replace with real data later.
 */

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;       // ISO date string
  description: string;
  category: "award" | "recognition" | "competition" | "scholarship" | "other";
  link?: string;
}

export const achievements: Achievement[] = [
  {
    id: "achievement-1",
    title: "Placeholder Achievement",
    issuer: "Placeholder Issuing Body",
    date: "2024-06-01",
    description: "Brief description of this achievement and what it recognizes.",
    category: "award",
  },
  {
    id: "achievement-2",
    title: "Another Placeholder Achievement",
    issuer: "Placeholder Organization",
    date: "2025-02-10",
    description: "Brief description of this recognition and its significance.",
    category: "recognition",
  },
];
