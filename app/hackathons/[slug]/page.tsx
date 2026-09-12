import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Link } from "@/components/ui/Link";
import { hackathons } from "@/data/hackathons";

interface HackathonPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return hackathons.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: HackathonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const hackathon = hackathons.find((h) => h.slug === slug);
  if (!hackathon) return { title: "Hackathon Not Found" };
  return {
    title: hackathon.name,
    description: `${hackathon.project.title} — built at ${hackathon.name}`,
  };
}

export default async function HackathonDetailPage({ params }: HackathonPageProps) {
  const { slug } = await params;
  const hackathon = hackathons.find((h) => h.slug === slug);

  if (!hackathon) {
    notFound();
  }

  return (
    <Section spacing="lg">
      <Container size="md">
        <Link href="/hackathons" variant="muted" className="text-xs mb-6 inline-block">
          ← Back to Hackathons
        </Link>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          {hackathon.won && hackathon.position && (
            <Badge variant="secondary">{hackathon.position}</Badge>
          )}
          <Badge variant="muted">{hackathon.location}</Badge>
          <span className="text-xs text-[var(--color-muted)]">
            {new Date(hackathon.date).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

        <Heading as="h1" size="2xl" className="mb-1">
          {hackathon.name}
        </Heading>
        <p className="text-sm text-[var(--color-muted)] mb-8">
          {hackathon.organizer} · Team of {hackathon.teamSize}
        </p>

        <Heading as="h2" size="md" className="mb-2">
          Project: {hackathon.project.title}
        </Heading>
        <p className="text-sm text-[var(--color-muted)] mb-6">
          {hackathon.project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {hackathon.project.tech.map((t) => (
            <Badge key={t} variant="default">
              {t}
            </Badge>
          ))}
        </div>

        {hackathon.prize && (
          <p className="text-sm mb-6">
            <span className="font-medium">Prize:</span>{" "}
            <span className="text-[var(--color-muted)]">{hackathon.prize}</span>
          </p>
        )}
      </Container>
    </Section>
  );
}
