/**
 * data/achievements.ts
 *
 * Verified recognitions and achievements retained from the profile and competition record.
 */

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  category: "award" | "recognition" | "competition" | "scholarship" | "other";
  link?: string;
}

export const achievements: Achievement[] = [
  {
    id: "hackathon-win-1",
    title: "Hackathon Winner",
    issuer: "College Hackathon",
    date: "Details available on request",
    description: "First hackathon win at college, reflecting early product thinking, rapid prototyping, and effective execution under competition pressure.",
    category: "competition",
  },
  {
    id: "hackathon-win-2",
    title: "Hackathon Winner",
    issuer: "ISME Hackathon",
    date: "Details available on request",
    description: "Second hackathon win at ISME, demonstrating strong project execution and technical problem solving in a competitive setting.",
    category: "competition",
  },
  {
    id: "hackathon-win-3",
    title: "Blockchain Track Winner",
    issuer: "NMIT Hacks",
    date: "Details available on request",
    description: "Won the Blockchain track at NMIT Hacks, highlighting technical breadth and product-oriented decision making.",
    category: "competition",
  },
  {
    id: "hackathons-10plus",
    title: "10+ Hackathons Participated",
    issuer: "Competition Circuit",
    date: "Details available on request",
    description: "Participation across multiple hackathons and prototype builds, spanning AI/ML, blockchain, civic-tech, and rapid product development.",
    category: "recognition",
  },
  {
    id: "mlsa-2026",
    title: "Microsoft Student Learn Ambassador",
    issuer: "Microsoft",
    date: "Details available on request",
    description: "Student ambassador role supporting learning communities, technical engagement, and collaborative developer growth.",
    category: "recognition",
  },
  {
    id: "hacktoberfest",
    title: "Hacktoberfest Participation",
    issuer: "Hacktoberfest",
    date: "Details available on request",
    description: "Open-source contribution activity aligned with collaborative engineering and community learning.",
    category: "recognition",
  },
  {
    id: "gssoc-2025",
    title: "GirlScript Summer of Code 2025",
    issuer: "GirlScript Foundation",
    date: "Details available on request",
    description: "Contribution-focused learning engagement through GirlsScript summer coding initiatives and community-driven development.",
    category: "recognition",
  },
];
