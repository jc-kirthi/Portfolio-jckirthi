/**
 * data/experience.ts
 *
 * Verified and community-grounded role records for the portfolio.
 */

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: "full-time" | "part-time" | "internship" | "contract" | "volunteer";
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  highlights: string[];
  tech: string[];
  logo?: string;
}

export const experience: Experience[] = [
  {
    id: "exp-1",
    role: "AI/ML Engineering Student",
    company: "Independent Projects & Hackathons",
    location: "India",
    type: "volunteer",
    startDate: "2023",
    current: true,
    description: "Building applied AI and software systems through personal projects, hackathons, and iterative product development.",
    highlights: [
      "Developed civic-tech, privacy-preserving identity, and blockchain-oriented prototypes with real end-user problem framing.",
      "Built and iterated on full-stack and ML systems across hackathons, competitive programming, and public-facing demos.",
      "Contributed to technical learning, peer education, and project-driven experimentation across campus and community contexts.",
    ],
    tech: ["AI / ML", "Full Stack", "Product Prototyping", "Hackathons"],
  },
  {
    id: "exp-2",
    role: "Open Source & Community Contributor",
    company: "Community / Open Source",
    location: "India",
    type: "volunteer",
    startDate: "2024",
    current: true,
    description: "Participating in developer communities, open-source contribution programs, and peer learning initiatives in software engineering and AI.",
    highlights: [
      "Engaged with Hacktoberfest and community-driven open-source learning pathways.",
      "Supported accessible technical learning and collaborative engineering through project-based community work.",
      "Worked on practical coding and development contributions that improve visibility, reuse, and learning value.",
    ],
    tech: ["Open Source", "Git", "Python", "Web Development"],
  },
];
