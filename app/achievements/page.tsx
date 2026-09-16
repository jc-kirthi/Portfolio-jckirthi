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
        <p className="text-[var(--color-muted)] text-sm mb-8">
          Awards, recognitions, and milestones.
        </p>

        {achievements.length > 0 ? (
          <div className="flex flex-col divide-y divide-[var(--color-border)] border border-[var(--color-border)]">
            {achievements.map((a) => (
            <div key={a.id} className="p-5 flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-1">
                <p className="text-sm font-medium mb-1">{a.title}</p>
                <p className="text-xs text-[var(--color-muted)] mb-2">
                  {a.issuer}{a.date ? ` · ${formatDate(a.date)}` : ""}
                </p>
                <p className="text-xs text-[var(--color-muted)]">{a.description}</p>
              </div>
              <Badge variant="muted" className="self-start shrink-0">
                {a.category}
              </Badge>
            </div>
            ))}
          </div>
        ) : (
          <div className="border-2 border-dashed border-[var(--color-border-subtle)] p-8 text-sm text-[var(--color-muted)]">
            Recognition records will appear here once they are ready to publish.
          </div>
        )}
      </Container>
    </Section>
  );
}
