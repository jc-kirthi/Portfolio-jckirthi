import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { education } from "@/data/education";

export const metadata: Metadata = {
  title: "Journey",
  description: "My engineering journey — education, milestones, and what drives me.",
};

export default function JourneyPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="max-w-3xl space-y-5">
          <span className="font-mono text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--color-muted)]">
            THE JOURNEY
          </span>
          <Heading as="h1" size="display" className="leading-[0.9] tracking-[-0.06em]">
            LEARNING.
            <br />
            <span className="text-[var(--color-plum)]">BUILDING.</span>
            <br />
            GROWING.
          </Heading>
          <p className="max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
            A record of the experiences and learning milestones that shape the work.
          </p>
        </div>

        <div className="mt-12">
          {education.length > 0 ? (
            <ol className="relative border-l-2 border-[var(--color-border)] pl-6 sm:pl-8">
              {education.map((entry) => (
                <li key={entry.id} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[35px] top-1 h-4 w-4 border-2 border-[var(--color-border)] bg-[var(--color-secondary)] sm:-left-[43px]" />
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{entry.current ? "CURRENT" : "EDUCATION"}</Badge>
                    <span className="font-mono text-xs text-[var(--color-muted)]">
                      {entry.startYear ?? "CURRENT"}{entry.endYear ? ` – ${entry.endYear}` : " – PRESENT"}
                    </span>
                  </div>
                  <Heading as="h2" size="lg" className="mt-3">
                    {entry.degree} · {entry.field}
                  </Heading>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    {entry.institution} · {entry.location}
                  </p>
                  {entry.highlights.length > 0 && (
                    <ul className="mt-4 flex flex-col gap-2 text-sm text-[var(--color-muted)]">
                      {entry.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span aria-hidden="true" className="text-[var(--color-plum)]">→</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          ) : (
            <div className="border-2 border-dashed border-[var(--color-border-subtle)] p-8 text-sm text-[var(--color-muted)]">
              Journey records will appear here as milestones are ready to publish.
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
