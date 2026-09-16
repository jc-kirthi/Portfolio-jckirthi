import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Link } from "@/components/ui/Link";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Section spacing="lg">
      <Container size="md">
        <Link href="/projects" variant="muted" className="text-xs mb-6 inline-block">
          ← Back to Projects
        </Link>

        <div className="flex items-start justify-between gap-4 mb-4">
          <Heading as="h1" size="2xl">
            {project.title}
          </Heading>
          {project.status && (
            <Badge variant={project.status === "completed" ? "secondary" : "muted"}>
              {project.status}
            </Badge>
          )}
        </div>

        <div className="grid gap-8 border-t-2 border-[var(--color-border)] pt-8">
          <section>
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--color-muted)] mb-2">
              WHY / CONTEXT
            </p>
            <p className="text-sm leading-relaxed">{project.description}</p>
          </section>

          <section>
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--color-muted)] mb-2">
              TECHNICAL APPROACH
            </p>
            {project.tech.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="default">
                    {t}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-sm text-[var(--color-muted)]">
                Technical details will be added as the project documentation is finalized.
              </p>
            )}
          </section>

          <section>
            <p className="font-mono text-xs tracking-[0.16em] text-[var(--color-muted)] mb-2">
              OUTCOME / LEARNING
            </p>
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">
              {project.longDescription ??
                "Details will be added as the project documentation is finalized."}
            </p>
          </section>

          {(project.links.github || project.links.live || project.links.demo) && (
            <section>
              <p className="font-mono text-xs tracking-[0.16em] text-[var(--color-muted)] mb-2">
                LINKS
              </p>
              <div className="flex flex-wrap gap-4">
                {project.links.github && (
                  <Link href={project.links.github} external variant="none" className="text-sm px-4 py-2 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors">
                    View on GitHub
                  </Link>
                )}
                {project.links.live && (
                  <Link href={project.links.live} external variant="none" className="text-sm px-4 py-2 bg-[var(--color-primary)] text-[var(--color-background)] hover:opacity-90 transition-opacity">
                    Live Demo
                  </Link>
                )}
                {!project.links.live && project.links.demo && (
                  <Link href={project.links.demo} external variant="none" className="text-sm px-4 py-2 bg-[var(--color-primary)] text-[var(--color-background)] hover:opacity-90 transition-opacity">
                    Demo
                  </Link>
                )}
              </div>
            </section>
          )}
        </div>
      </Container>
    </Section>
  );
}
