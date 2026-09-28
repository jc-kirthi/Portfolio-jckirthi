import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { achievements } from "@/data/achievements";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Awards, recognitions, and notable achievements.",
};

export default function AchievementsPage() {
  return (
    <Section spacing="lg">
      <Container>
        <Heading as="h1" size="2xl" className="mb-2">
          Achievements
        </Heading>
        <p className="text-[var(--color-muted)] text-base mb-8">
          Awards, recognitions, and milestones.
        </p>

        <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] shadow-[3px_3px_0px_0px_var(--color-border)]">
          {achievements.map((a) => (
            <article key={a.id} className="grid gap-4 border-b border-[var(--color-border-subtle)] p-5 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:p-6 transition-colors duration-200 hover:bg-[var(--color-background)]">
              <div className="min-w-0">
                <p className="font-display text-lg font-bold uppercase leading-snug text-[var(--color-foreground)]">{a.title}</p>
                <p className="mt-1 font-mono text-xs font-medium text-[var(--color-muted)]">
                  {a.issuer} · {formatDate(a.date)}
                </p>
                <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">{a.description}</p>
              </div>
              <Badge variant={a.category === "competition" ? "tangerine" : "lavender"} className="self-start shrink-0">
                {a.category}
              </Badge>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
