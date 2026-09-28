/**
 * data/profile.ts
 *
 * Core profile data for Kirthi JC.
 */

export const profile = {
  name: "Kirthi JC",
  title: "AI/ML Engineering Student / Builder",
  year: "3rd Year",
  institution: "AI/ML Engineering Student",
  location: "India",
  tagline: "Building practical AI systems, civic-tech products, and secure web experiences.",
  bio: "I am an AI/ML engineering student focused on applied machine learning, secure identity systems, civic intelligence, and product-minded engineering. I build with code, solve problems through prototypes, and contribute through hackathons and open-source work.",
  email: "its.me.jckirthi@gmail.com",
  phone: "7259103057",
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
