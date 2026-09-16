import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/data/experience";
import { formatDateRange } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience, internships, and professional roles.",
};

export default function ExperiencePage() {
  return (
    <Section spacing="lg">
      <Container size="md">
        <Heading as="h1" size="2xl" className="mb-2">
          Experience
        </Heading>
        <p className="text-[var(--color-muted)] text-sm mb-10">
          Community, student leadership, and professional work.
        </p>

        {experience.length > 0 ? (
          <div className="flex flex-col gap-6">
            {experience.map((exp) => (
              <div
              key={exp.id}
              className="border-l-2 border-[var(--color-primary)] pl-6"
            >
              <div className="flex flex-wrap items-start gap-2 mb-1">
                <Heading as="h2" size="md">
                  {exp.role}
                </Heading>
                <Badge variant={exp.current ? "secondary" : "muted"}>
                  {exp.current ? "Current" : exp.type}
                </Badge>
              </div>

              <p className="text-sm font-medium text-[var(--color-primary)] mb-1">
                {exp.company}
              </p>
              <p className="text-xs text-[var(--color-muted)] mb-3">
                {exp.startDate
                  ? `${formatDateRange(exp.startDate, exp.endDate)}${exp.location ? ` · ${exp.location}` : ""}`
                  : exp.location || "Dates not published"}
              </p>

              <p className="text-sm text-[var(--color-muted)] mb-3">
                {exp.description}
              </p>

              {exp.highlights.length > 0 && (
                <ul className="flex flex-col gap-1 mb-3">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-[var(--color-muted)] flex gap-2">
                      <span className="text-[var(--color-primary)] shrink-0">→</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            ))}
          </div>
        ) : (
          <div className="border-2 border-dashed border-[var(--color-border-subtle)] p-8 text-sm text-[var(--color-muted)]">
            Experience records will appear here once they are ready to publish.
          </div>
        )}
      </Container>
    </Section>
  );
}
