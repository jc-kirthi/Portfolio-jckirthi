import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { education } from "@/data/education";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Journey",
  description: "Academic and technical journey of Kirthi JC.",
};

export default function JourneyPage() {
  const currentEducation = education.find((item) => item.current);

  return (
    <Section spacing="lg">
      <Container size="md">
        <div className="mb-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Journey</p>
          <Heading as="h1" size="2xl" className="mt-2 text-[var(--color-plum)]">
            Learning by building
          </Heading>
        </div>

        <div className="mb-8 border-2 border-[var(--color-border)] border-t-4 border-t-[var(--color-secondary)] bg-[var(--color-card)] p-5 shadow-[4px_4px_0px_0px_var(--color-border)] sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">Academic milestone</p>
            <Badge variant="lime">{profile.year}</Badge>
          </div>
          <div className="mt-5 flex flex-wrap items-end gap-x-4 gap-y-2">
            <span className="font-display text-5xl font-black uppercase leading-none text-[var(--color-foreground)]">{currentEducation?.cgpa ?? "9.4"}</span>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">CGPA · 2ND YEAR</span>
          </div>
          <p className="mt-4 font-display text-xl font-bold uppercase leading-snug tracking-tight text-[var(--color-plum)]">{currentEducation?.field}</p>
          <p className="mt-1 text-base font-semibold text-[var(--color-foreground)]">{currentEducation?.institution}</p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">
            {currentEducation?.startYear} – {currentEducation?.endYear} · Current program
          </p>
        </div>

        <div className="space-y-6">
          {education.map((item) => (
            <article key={item.id} data-scroll-reveal="" className="border-2 border-[var(--color-border-subtle)] border-l-4 border-l-[var(--color-plum)] bg-[var(--color-card-subtle)] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-border)] hover:shadow-[3px_3px_0px_0px_var(--color-border)] sm:p-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge variant={item.current ? "lime" : "secondary"}>{item.degree}</Badge>
                <Badge variant="outline">{item.startYear}{item.endYear && item.endYear !== item.startYear ? ` – ${item.endYear}` : ""}</Badge>
                {item.current && <Badge variant="muted">Current</Badge>}
              </div>

              <Heading as="h2" size="lg" className="text-[var(--color-foreground)]">
                {item.field || item.degree}
              </Heading>

              <p className="mt-2 text-base font-medium text-[var(--color-muted)] break-words">
                {item.institution}{item.location ? ` · ${item.location}` : ""}
              </p>

              {item.cgpa && <p className="mt-3 inline-flex border border-[var(--color-border-subtle)] bg-[var(--color-background)] px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-foreground)]">{item.gradeLabel ?? "CGPA"}: {item.cgpa}</p>}

              {item.highlights.length > 0 && <ul className="mt-4 space-y-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2 text-sm text-[var(--color-muted)]">
                    <span className="font-mono text-[var(--color-plum)]">→</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>}

              {item.skills && item.skills.length > 0 && (
                <div className="mt-4">
                  <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">Skills</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => <Badge key={skill} variant="outline">{skill}</Badge>)}
                  </div>
                </div>
              )}

              {item.activities && item.activities.length > 0 && (
                <div className="mt-4">
                  <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">Activities and societies</p>
                  <ul className="space-y-1">
                    {item.activities.map((activity) => <li key={activity} className="text-sm text-[var(--color-muted)]">{activity}</li>)}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
