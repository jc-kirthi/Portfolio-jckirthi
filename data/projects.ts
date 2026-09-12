/**
 * data/projects.ts
 *
 * Portfolio projects. Replace with real data in a later phase.
 */

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  tech: string[];
  status: "completed" | "in-progress" | "archived";
  featured: boolean;
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  year: number;
  coverImage?: string;
}

export const projects: Project[] = [
  {
    slug: "project-alpha",
    title: "Project Alpha",
    description: "A placeholder project showcasing ML capabilities.",
    tags: ["ML", "Python"],
    tech: ["Python", "PyTorch", "FastAPI"],
    status: "completed",
    featured: true,
    links: {
      github: "https://github.com/placeholder/project-alpha",
    },
    year: 2024,
  },
  {
    slug: "project-beta",
    title: "Project Beta",
    description: "Another placeholder demonstrating full-stack engineering.",
    tags: ["Web", "TypeScript"],
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    status: "in-progress",
    featured: true,
    links: {
      github: "https://github.com/placeholder/project-beta",
      live: "https://example.com",
    },
    year: 2025,
  },
];
