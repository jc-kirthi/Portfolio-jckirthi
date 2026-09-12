import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Link } from "@/components/ui/Link";
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
        <p className="text-[var(--color-muted)] text-sm mb-8">
          Engineering work across AI/ML, web, and beyond.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Card key={project.slug} variant="default" padding="md">
              <div className="flex flex-col gap-3 h-full">
                <div className="flex items-start justify-between gap-2">
                  <Heading as="h2" size="sm">
                    {project.title}
                  </Heading>
                  <Badge
                    variant={
                      project.status === "completed" ? "secondary" : "muted"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>

                <p className="text-sm text-[var(--color-muted)] flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto pt-2">
                  {project.links.github && (
                    <Link href={project.links.github} external variant="muted" className="text-xs">
                      GitHub →
                    </Link>
                  )}
                  {project.links.live && (
                    <Link href={project.links.live} external variant="muted" className="text-xs">
                      Live →
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
