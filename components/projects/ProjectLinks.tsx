/**
 * components/projects/ProjectLinks.tsx
 *
 * Renders only links that exist in project data.
 */

import { Button } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";
import type { Project } from "@/data/projects";

interface ProjectLinksProps {
  project: Project;
  variant?: "buttons" | "inline";
  tone?: "default" | "inverse";
}

export function ProjectLinks({ project, variant = "buttons", tone = "default" }: ProjectLinksProps) {
  const { github, live, demo } = project.links;
  const linkTone = tone === "inverse" ? "text-[#f6f1e8] hover:text-white" : undefined;

  if (!github && !live && !demo) return null;

  if (variant === "inline") {
    return (
      <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
        {github && (
          <Link href={github} external variant="arrow" className={linkTone}>
            GITHUB
          </Link>
        )}
        {live && (
          <Link href={live} external variant="arrow" className={linkTone}>
            LIVE DEMO
          </Link>
        )}
        {demo && (
          <Link href={demo} external variant="arrow" className={linkTone}>
            DEMO
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {github && (
        <Button href={github} external variant="outline" size="sm" withArrow>
          GITHUB
        </Button>
      )}
      {live && (
        <Button href={live} external variant="accent" size="sm" withArrow>
          VIEW LIVE
        </Button>
      )}
      {demo && (
        <Button href={demo} external variant="outline" size="sm" withArrow>
          DEMO
        </Button>
      )}
    </div>
  );
}
