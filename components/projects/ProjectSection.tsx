/**
 * components/projects/ProjectSection.tsx
 *
 * Numbered editorial section wrapper for case study pages.
 */

import { Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/utils";

interface ProjectSectionProps {
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function ProjectSection({ number, title, children, className }: ProjectSectionProps) {
  return (
    <section className={cn("flex flex-col gap-4", className)}>
      <div className="flex items-baseline gap-3 border-b border-[var(--color-border-subtle)] pb-3">
        <span className="font-mono text-xs font-bold text-[var(--color-plum)] bg-[var(--color-card)] px-1.5 py-0.5 border border-[var(--color-border)]">
          {number}
        </span>
        <Heading as="h2" size="md" uppercase className="text-[var(--color-foreground)]">
          {title}
        </Heading>
      </div>
      {children}
    </section>
  );
}
