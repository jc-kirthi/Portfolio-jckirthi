/**
 * data/volunteering.ts
 *
 * Community and student-led participation relevant to engineering and learning.
 */

export interface Volunteering {
  id: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  location: string;
  startDate: string;     // ISO date string
  endDate?: string;      // ISO date string, omit if ongoing
  current: boolean;
  description: string;
  highlights: string[];
}

export const volunteering: Volunteering[] = [
  {
    id: "girlscript-summer-of-code",
    role: "Contributor",
    organization: "GirlScript Summer of Code",
    organizationUrl: "https://gssoc.girlscript.tech/",
    location: "Remote",
    startDate: "2025-05-01",
    current: true,
    description: "Participated in a community-centered open-source learning program focused on building projects, strengthening collaboration, and learning through practical contribution.",
    highlights: [
      "Worked in a collaborative development environment with peer contributors.",
      "Strengthened practical engineering habits through project work and documentation.",
    ],
  },
  {
    id: "oscode-cit",
    role: "Student Contributor",
    organization: "OSCode CIT",
    organizationUrl: "https://www.oscode.org/",
    location: "Coimbatore, India",
    startDate: "2024-08-01",
    current: true,
    description: "Engaged with a student developer community for learning, peer collaboration, and hands-on technical exploration.",
    highlights: [
      "Built and discussed small technical projects with peers.",
      "Contributed to a learning-oriented community focused on coding skills and project execution.",
    ],
  },
];
