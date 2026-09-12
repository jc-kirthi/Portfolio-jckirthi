/**
 * data/certifications.ts
 *
 * Professional certifications and course completions. Replace with real data later.
 */

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerUrl?: string;
  date: string;          // ISO date string
  credentialId?: string;
  credentialUrl?: string;
  expires?: string;      // ISO date string, omit if no expiry
  skills: string[];
  image?: string;        // path relative to /public/certificates/
}

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Placeholder Certification",
    issuer: "Placeholder Issuer",
    date: "2024-04-15",
    skills: ["Skill A", "Skill B"],
    image: "/certificates/placeholder-cert.png",
  },
  {
    id: "cert-2",
    title: "Another Placeholder Certificate",
    issuer: "Another Issuer",
    date: "2024-10-01",
    skills: ["Skill C", "Skill D"],
  },
];
