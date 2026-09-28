/**
 * components/projects/FeaturedProjectCard.tsx
 *
 * Editorial featured project composition with asymmetric layout variants.
 */

import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { getPrimaryCategory, getStatusLabel } from "@/lib/projects";
import type { Project } from "@/data/projects";

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
}

export function FeaturedProjectCard({ project: p, index }: FeaturedProjectCardProps) {
  const layout = index % 3;
  const category = getPrimaryCategory(p);
  const isCompleted = p.status === "completed";

  const metaBlock = (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-muted)]">
          PROJECT · {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`font-display text-2xl font-black ${layout === 0 && isCompleted ? "text-[#f6f1e8]/80" : "text-[var(--color-plum)] opacity-80"}`}>
          {p.year}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge variant="lavender" size="md" className="font-bold">
          {category}
        </Badge>
        <Badge variant={isCompleted ? "lime" : "muted"} size="sm">
          {getStatusLabel(p.status)}
        </Badge>
      </div>

      <div>
        <span className="font-mono text-[10px] uppercase tracking-wider block text-[var(--color-muted)]">
          POSITIONING
        </span>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed mt-1">
          {p.description}
        </p>
      </div>

      <div className="border-t border-[var(--color-border-subtle)] pt-3">
        <span className="font-mono text-[10px] uppercase tracking-wider block mb-2 text-[var(--color-muted)] font-bold">
          TECH STACK
        </span>
        <div className="flex flex-wrap gap-1.5">
          {p.tech.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs bg-[var(--color-background)] text-[var(--color-foreground)] px-2.5 py-1 border border-[var(--color-border-subtle)] transition-colors duration-150 group-hover:border-[var(--color-border)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const titleBlock = (
    <div className="flex flex-col justify-between gap-6 h-full">
      <div className="flex flex-col gap-4">
        <Heading
          as="h3"
          size="2xl"
          uppercase
          className={layout === 0 && isCompleted ? "text-[#f6f1e8]" : "text-[var(--color-foreground)]"}
        >
          {p.title}
        </Heading>

        {p.longDescription && (
          <p
            className={
              layout === 0 && isCompleted
                ? "text-sm md:text-base text-[#f6f1e8]/85 leading-relaxed max-w-2xl"
                : "text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-2xl"
            }
          >
            {p.longDescription}
          </p>
        )}

        <div className="group/visual">
          <ProjectVisual project={p} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-current/20 pt-5">
        <Button
          href={`/projects/${p.slug}`}
          variant={layout === 0 && isCompleted ? "accent" : "primary"}
          size="sm"
          withArrow
        >
          VIEW CASE STUDY
        </Button>
        <ProjectLinks project={p} variant="inline" />
      </div>
    </div>
  );

  /* Layout 0: Sidebar left, plum featured for completed */
  if (layout === 0) {
    return (
      <Card
        variant={isCompleted ? "featured" : "interactive"}
        padding="none"
        accentStrip={isCompleted ? "lime" : "plum"}
        className="group border-2 border-[var(--color-border)]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div
            className={
              isCompleted
                ? "lg:col-span-4 p-6 sm:p-8 bg-[var(--color-plum-dark)] border-b-2 lg:border-b-0 lg:border-r-2 border-[#f6f1e8]/20"
                : "lg:col-span-4 p-6 sm:p-8 bg-[var(--color-card-subtle)] border-b-2 lg:border-b-0 lg:border-r-2 border-[var(--color-border)]"
            }
          >
            {metaBlock}
          </div>
          <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10">{titleBlock}</div>
        </div>
      </Card>
    );
  }

  /* Layout 1: Visual-first stacked */
  if (layout === 1) {
    return (
      <Card
        variant="interactive"
        padding="none"
        accentStrip="lavender"
        className="group border-2 border-[var(--color-border)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-7 p-6 sm:p-8 border-b-2 md:border-b-0 md:border-r-2 border-[var(--color-border-subtle)]">
            <div className="group/visual mb-6">
              <ProjectVisual project={p} />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-plum)] font-bold block mb-2">
              PROJECT · {String(index + 1).padStart(2, "0")}
            </span>
            <Heading as="h3" size="2xl" uppercase className="mb-3">
              {p.title}
            </Heading>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {p.tech.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs bg-[var(--color-background)] px-2.5 py-1 border border-[var(--color-border-subtle)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border-subtle)] pt-5">
              <Button href={`/projects/${p.slug}`} variant="primary" size="sm" withArrow>
                VIEW CASE STUDY
              </Button>
              <ProjectLinks project={p} variant="inline" />
            </div>
          </div>
          <div className="md:col-span-5 p-6 sm:p-8 bg-[var(--color-card-subtle)] flex flex-col justify-between gap-6">
            <div>
              <span className="font-display text-5xl font-black text-[var(--color-plum)]/15 leading-none block mb-4">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Badge variant="lavender" size="md" className="mb-3">
                {category}
              </Badge>
              <Badge variant={isCompleted ? "lime" : "muted"} size="sm" className="ml-2">
                {getStatusLabel(p.status)}
              </Badge>
              <p className="font-mono text-xs text-[var(--color-muted)] mt-4 uppercase">
                {p.year} · {p.tags.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  /* Layout 2: Large index + content */
  return (
    <Card
      variant="interactive"
      padding="none"
      accentStrip="plum"
      className="group border-2 border-[var(--color-border)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-2 p-6 sm:p-8 border-b-2 md:border-b-0 md:border-r-2 border-[var(--color-border-subtle)] flex md:flex-col items-center md:items-start justify-between gap-4">
          <span className="font-display text-5xl sm:text-6xl font-black text-[var(--color-plum)] leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <Badge variant="lavender" size="sm">
            {category}
          </Badge>
        </div>
        <div className="md:col-span-10 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <Heading as="h3" size="2xl" uppercase>
                {p.title}
              </Heading>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs bg-[var(--color-background)] px-2.5 py-1 border border-[var(--color-border-subtle)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href={`/projects/${p.slug}`} variant="primary" size="sm" withArrow>
                  VIEW CASE STUDY
                </Button>
                <ProjectLinks project={p} variant="inline" />
              </div>
            </div>
            <div className="group/visual">
              <ProjectVisual project={p} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
