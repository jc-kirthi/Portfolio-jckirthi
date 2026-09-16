/**
 * components/projects/ProjectCategoryIndex.tsx
 *
 * Simple scannable category index derived from project tags.
 */

import { Badge } from "@/components/ui/Badge";
import { getProjectsByCategory, projectCategorySlug } from "@/lib/projects";

interface ProjectCategoryIndexProps {
  categories: string[];
}

export function ProjectCategoryIndex({ categories }: ProjectCategoryIndexProps) {
  if (categories.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
        CLASSIFICATION INDEX
      </span>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const count = getProjectsByCategory(cat).length;
          return (
            <a
              key={cat}
              href={`#category-${projectCategorySlug(cat)}`}
              className="group inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-foreground)]"
            >
              <Badge variant="outline" size="md" className="group-hover:bg-[var(--color-plum)] group-hover:text-[#f6f1e8] transition-colors duration-150">
                {cat}
              </Badge>
              <span className="font-mono text-[10px] text-[var(--color-muted)] group-hover:text-[var(--color-foreground)] transition-colors">
                ({count})
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
