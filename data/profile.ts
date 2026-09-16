/**
 * data/profile.ts
 *
 * Core profile data for Kirthi JC.
 * Keep personal details centralized so every page uses the same source.
 */

export const profile = {
  name: "Kirthi JC",
  title: "AI/ML Engineering Student",
  year: "3rd Year",
  institution: "Cambridge Institute of Technology, Bengaluru",
  location: "India",
  tagline: "Building intelligent systems. Shipping real products.",
  bio: "3rd year AI/ML engineering student passionate about applied machine learning, hackathons, and open-source.",
  email: "",
  socials: {
    github: "",
    linkedin: "",
    twitter: "",
    leetcode: "",
  },
  resumeUrl: "",
} as const;

export type Profile = typeof profile;
