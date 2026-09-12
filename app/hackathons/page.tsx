import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";
import { hackathons } from "@/data/hackathons";

export const metadata: Metadata = {
  title: "Hackathons",
  description: "10+ hackathons, wins, and the projects built under pressure.",
};

export default function HackathonsPage() {
  const wins = hackathons.filter((h) => h.won);
  const others = hackathons.filter((h) => !h.won);

  return (
    <Section spacing="lg">
      <Container>
        <Heading as="h1" size="2xl" className="mb-2">
          Hackathons
        </Heading>
        <p className="text-[var(--color-muted)] text-sm mb-10">
          {hackathons.length}+ hackathons · {wins.length} wins
        </p>

        {wins.length > 0 && (
          <>
            <Heading as="h2" size="md" className="mb-4 text-[var(--color-primary)]">
              Wins
            </Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {wins.map((h) => (
                <Card key={h.slug} variant="default" padding="md">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{h.position ?? "Winner"}</Badge>
                      <span className="text-xs text-[var(--color-muted)]">
                        {new Date(h.date).getFullYear()}
                      </span>
                    </div>
                    <Heading as="h3" size="sm">{h.name}</Heading>
                    <p className="text-xs text-[var(--color-muted)]">{h.organizer} · {h.location}</p>
                    <p className="text-sm text-[var(--color-muted)]">{h.project.title}</p>
                    <div className="flex flex-wrap gap-1">
                      {h.project.tech.map((t) => (
                        <Badge key={t} variant="outline">{t}</Badge>
                      ))}
                    </div>
                    <Link
                      href={`/hackathons/${h.slug}`}
                      variant="muted"
                      className="text-xs mt-2"
                    >
                      View details →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}

        {others.length > 0 && (
          <>
            <Heading as="h2" size="md" className="mb-4">
              Participated
            </Heading>
            <div className="flex flex-col divide-y divide-[var(--color-border)] border border-[var(--color-border)]">
              {others.map((h) => (
                <div key={h.slug} className="p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{h.name}</p>
                    <p className="text-xs text-[var(--color-muted)]">
                      {h.project.title} · {h.organizer}
                    </p>
                  </div>
                  {h.position && <Badge variant="muted">{h.position}</Badge>}
                  <span className="text-xs text-[var(--color-muted)] shrink-0">
                    {new Date(h.date).getFullYear()}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        <p className="text-xs text-[var(--color-muted)] mt-8 italic">
          Full hackathon detail pages will be implemented in Phase 2.
        </p>
      </Container>
    </Section>
  );
}
