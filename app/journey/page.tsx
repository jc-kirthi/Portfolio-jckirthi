import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { education } from "@/data/education";

export const metadata: Metadata = {
  title: "Journey",
  description: "Academic and technical journey of Kirthi JC.",
};

export default function JourneyPage() {
  const currentEducation = education[0];

  return (
    <Section spacing="lg">
      <Container size="md">
        <div className="mb-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Journey</p>
          <Heading as="h1" size="2xl" className="mt-2 text-[var(--color-plum)]">
            Learning by building
          </Heading>
        </div>

        <div className="mb-8 border-2 border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-[4px_4px_0px_0px_var(--color-border)]">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">Academic milestone</p>
          <div className="mt-4 flex flex-wrap items-end gap-3">
            <span className="font-display text-5xl font-black uppercase leading-none text-[var(--color-foreground)]">{currentEducation?.cgpa ?? "9.4"}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">CGPA</span>
          </div>
          <p className="mt-2 font-display text-xl uppercase tracking-tight text-[var(--color-plum)]">Through 2nd year</p>
        </div>

        <div className="space-y-6">
          {education.map((item) => (
            <div key={item.id} className="border-l-4 border-l-[var(--color-plum)] pl-5">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{item.degree}</Badge>
                <Badge variant="outline">{item.current ? "Current" : `${item.startYear} – ${item.endYear ?? "Present"}`}</Badge>
              </div>

              <Heading as="h2" size="lg" className="text-[var(--color-foreground)]">
                {item.field}
              </Heading>

              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {item.institution} · {item.location}
              </p>

              <ul className="mt-4 space-y-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2 text-sm text-[var(--color-muted)]">
                    <span className="font-mono text-[var(--color-plum)]">→</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
