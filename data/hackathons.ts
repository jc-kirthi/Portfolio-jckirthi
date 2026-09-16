/**
 * data/hackathons.ts
 *
 * Hackathon participation and wins.
 */

export interface Hackathon {
  slug: string;
  name: string;
  organizer: string;
  date?: string;          // ISO date string
  location?: string;      // "Online" or city name
  position?: string;      // e.g. "1st Place", "Finalist"
  won: boolean;
  project: {
    title: string;
    description: string;
    tech: string[];
    links?: {
      github?: string;
      devpost?: string;
      live?: string;
    };
  };
  prize?: string;
  teamSize?: number;
  coverImage?: string;
}

export const hackathons: Hackathon[] = [
  {
    slug: "sih2026-sih26153",
    name: "SIH2026 — SIH26153",
    organizer: "NTRO",
    location: "",
    position: "Selected",
    won: false,
    project: {
      title: "AI-Based Network Attack Forecasting",
      description: "AI-based forecasting of network attacks from network traffic data.",
      tech: [],
    },
  },
];
