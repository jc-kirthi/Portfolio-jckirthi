import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of engineering projects spanning ML, web, and systems.",
};

export default function ProjectsPage() {
  return (
    <Section spacing="lg">
      <Container>
        <Heading as="h1" size="2xl" className="mb-2">
          Projects
        </Heading>
        <p className="text-[var(--color-muted)] text-base mb-8">
          Ideas that made it out of the notes stage and into repositories, across AI/ML, web, and systems.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.slug} variant="interactive" padding="md" className="group flex h-full flex-col">
              <div className="flex h-full flex-col gap-4">
                <div className="flex items-start justify-between gap-3 border-b border-[var(--color-border-subtle)] pb-3">
                  <Heading as="h2" size="md">
                    {project.title}
                  </Heading>
                  <Badge
                    variant={
                      project.status === "completed" ? "secondary" : "muted"
                    }
                    size="sm"
                  >
                    {project.status}
                  </Badge>
                </div>

                <p className="text-base leading-relaxed text-[var(--color-muted)] flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex flex-col items-start gap-3 border-t border-[var(--color-border-subtle)] pt-4">
                  <ProjectLinks project={project} variant="inline" />
                  <Button href={`/projects/${project.slug}`} variant="primary" size="sm" withArrow>
                    CASE STUDY
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
