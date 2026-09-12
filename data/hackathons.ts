/**
 * data/hackathons.ts
 *
 * Hackathon participation and wins. Replace with real data later.
 */

export interface Hackathon {
  slug: string;
  name: string;
  organizer: string;
  date: string;           // ISO date string
  location: string;       // "Online" or city name
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
  teamSize: number;
  coverImage?: string;
}

export const hackathons: Hackathon[] = [
  {
    slug: "hackathon-placeholder-1",
    name: "Placeholder Hackathon 2024",
    organizer: "Placeholder Org",
    date: "2024-03-15",
    location: "Online",
    position: "1st Place",
    won: true,
    project: {
      title: "Placeholder Winning Project",
      description: "Brief description of the winning project goes here.",
      tech: ["Python", "React", "FastAPI"],
    },
    prize: "Placeholder Prize",
    teamSize: 3,
  },
  {
    slug: "hackathon-placeholder-2",
    name: "Placeholder Hackathon 2025",
    organizer: "Placeholder Org 2",
    date: "2025-01-20",
    location: "Placeholder City",
    position: "Finalist",
    won: false,
    project: {
      title: "Placeholder Finalist Project",
      description: "Brief description of the finalist project goes here.",
      tech: ["Next.js", "TypeScript", "Supabase"],
    },
    teamSize: 2,
  },
];
