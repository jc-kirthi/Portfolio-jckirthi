/**
 * data/hackathons.ts
 *
 * Verified competition records and truthful event-level summaries.
 */

export interface Hackathon {
  slug: string;
  name: string;
  organizer: string;
  date: string;
  location: string;
  position?: string;
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
    slug: "college-hackathon-win",
    name: "College Hackathon",
    organizer: "College Innovation Team",
    date: "2024",
    location: "College",
    position: "1st Place",
    won: true,
    project: {
      title: "First Hackathon Win",
      description: "Winning prototype built during the first hackathon experience at college, focused on applied problem solving under time constraints.",
      tech: ["React", "Python", "Problem Solving"],
    },
    prize: "Winner",
    teamSize: 3,
  },
  {
    slug: "rift-semi-finalist",
    name: "RIFT",
    organizer: "Nationwide Competition",
    date: "2025",
    location: "India",
    position: "Semi-finalist",
    won: false,
    project: {
      title: "RIFT Competition Entry",
      description: "A nationwide competition entry that advanced to the semi-final round and showcased rapid product thinking and technical execution.",
      tech: ["React", "AI", "Product Design"],
    },
    teamSize: 4,
  },
  {
    slug: "jain-hackathon",
    name: "Jain Hackathon",
    organizer: "Jain Community / Event Organizers",
    date: "2025",
    location: "India",
    position: "Participant",
    won: false,
    project: {
      title: "Jain Hackathon Build",
      description: "An applied build developed for the Jain Hackathon, centered on real-world problem solving and prototype delivery.",
      tech: ["Python", "Full Stack", "AI"],
    },
    teamSize: 3,
  },
  {
    slug: "isme-hackathon-win",
    name: "ISME Hackathon",
    organizer: "ISME",
    date: "2025",
    location: "India",
    position: "1st Place",
    won: true,
    project: {
      title: "ISME Winner Project",
      description: "Second hackathon win with a product-focused prototype and strong technical execution under competition conditions.",
      tech: ["React", "AI", "Full Stack"],
    },
    prize: "Winner",
    teamSize: 4,
  },
  {
    slug: "kaggle-top-10",
    name: "Kaggle Dataset Competition",
    organizer: "Kaggle",
    date: "2025",
    location: "Online",
    position: "Finalist / Top 10",
    won: false,
    project: {
      title: "Dataset Challenge Entry",
      description: "Finalist-level performance on a Kaggle dataset competition, focused on data-driven modeling and rigorous validation.",
      tech: ["Python", "Machine Learning", "Data Science"],
    },
    teamSize: 1,
  },
  {
    slug: "nmit-hacks-blockchain-track",
    name: "NMIT Hacks",
    organizer: "NMIT",
    date: "2025",
    location: "India",
    position: "1st Place",
    won: true,
    project: {
      title: "Blockchain Track Winner",
      description: "Won the Blockchain track at NMIT Hacks with a focused project built around practical blockchain product thinking.",
      tech: ["Blockchain", "Web App", "Solidity / Smart Contracts"],
    },
    prize: "Blockchain Track Winner",
    teamSize: 4,
  },
  {
    slug: "sih-2026",
    name: "SIH2026 / SIH26153",
    organizer: "NTRO",
    date: "2026",
    location: "India",
    position: "Selected Project",
    won: false,
    project: {
      title: "AI-Based Network Attack Forecasting from Network Traffic Data",
      description: "Smart India Hackathon project focused on AI-based forecasting for network attack patterns using traffic data and analytical modeling.",
      tech: ["AI / ML", "Networking", "Data Analysis"],
    },
    teamSize: 5,
  },
];
