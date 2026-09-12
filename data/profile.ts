/**
 * data/profile.ts
 *
 * Core profile data for Kirthi JC.
 * Replace placeholders with real details in a later phase.
 */

export const profile = {
  name: "Kirthi JC",
  title: "AI/ML Engineering Student",
  year: "3rd Year",
  institution: "Placeholder University",
  location: "India",
  tagline: "Building intelligent systems. Shipping real products.",
  bio: "3rd year AI/ML engineering student passionate about applied machine learning, hackathons, and open-source. Currently exploring [placeholder research area].",
  email: "hello@example.com",
  socials: {
    github: "https://github.com/placeholder",
    linkedin: "https://linkedin.com/in/placeholder",
    twitter: "https://twitter.com/placeholder",
    leetcode: "https://leetcode.com/placeholder",
  },
  resumeUrl: "/resume.pdf",
} as const;

export type Profile = typeof profile;
