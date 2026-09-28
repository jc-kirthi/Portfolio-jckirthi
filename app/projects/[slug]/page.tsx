import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Link } from "@/components/ui/Link";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
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
          <Badge variant={project.status === "completed" ? "secondary" : "muted"}>
            {project.status}
          </Badge>
        </div>

        <p className="text-[var(--color-muted)] mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <Badge key={t} variant="default">
              {t}
            </Badge>
          ))}
        </div>

        {project.longDescription && (
          <p className="text-sm leading-relaxed mb-8">{project.longDescription}</p>
        )}

        <div className="flex flex-wrap gap-3">
          <ProjectLinks project={project} />
        </div>
      </Container>
    </Section>
  );
}
