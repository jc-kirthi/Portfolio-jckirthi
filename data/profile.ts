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
  email: "its.me.jckirthi@gmail.com",
  socials: {
    github: "https://github.com/jc-kirthi/",
    linkedin: "https://www.linkedin.com/in/kirthi-jc-5390b8310/",
    twitter: "",
    leetcode: "https://leetcode.com/u/Coder_kirthi/",
    codechef: "https://www.codechef.com/users/chef_kirthi_26",
    hackerRank: "https://www.hackerrank.com/profile/its_me_jckirthi",
  },
  resumeUrl: "",
} as const;

export type Profile = typeof profile;
