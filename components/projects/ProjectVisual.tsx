/**
 * components/projects/ProjectVisual.tsx
 *
 * Cover image or intentional editorial placeholder — never fake screenshots.
 */

import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectVisualProps {
  project: Project;
  priority?: boolean;
  className?: string;
}

export function ProjectVisual({ project, priority = false, className = "" }: ProjectVisualProps) {
  if (project.coverImage) {
    return (
      <div
        className={`relative border-2 border-[var(--color-border)] overflow-hidden shadow-[3px_3px_0px_0px_var(--color-border)] aspect-video bg-[var(--color-card-subtle)] ${className}`}
      >
        <Image
          src={project.coverImage}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 960px"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative border-2 border-dashed border-[var(--color-border)] bg-[var(--color-card-subtle)] aspect-video flex flex-col items-center justify-center gap-3 p-6 ${className}`}
      aria-label={`${project.title} — visual preview not yet available`}
    >
      <span className="font-display text-4xl sm:text-5xl font-black text-[var(--color-plum)]/20 uppercase leading-none">
        {String(project.year).slice(-2)}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)] text-center">
        PROJECT VISUAL
        <br />
        <span className="opacity-70">PREVIEW PENDING</span>
      </span>
      <div className="flex flex-wrap gap-1 justify-center max-w-[240px]">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] px-2 py-0.5 border border-[var(--color-border-subtle)] text-[var(--color-muted)]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
