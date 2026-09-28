import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/data/experience";
import { formatDateRange } from "@/lib/utils";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { AchievementArchive } from "@/components/achievements/AchievementArchive";
import { achievements } from "@/data/achievements";
import { hackathons } from "@/data/hackathons";
import { getJourneyTimeline } from "@/lib/journey";
import { Link } from "@/components/ui/Link";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience, internships, and professional roles.",
};

export default function ExperiencePage() {
  const careerTimeline = getJourneyTimeline().filter((item) =>
    ["compete", "contribute", "recognition"].includes(item.category)
  );
  const competitionNames = new Set(hackathons.map((item) => item.name.toLowerCase()));
  const timelineAchievementIds = new Set(
    careerTimeline
      .filter((item) => item.category === "recognition")
      .map((item) => item.id.replace("achievement-", ""))
  );
  const standaloneAchievements = achievements.filter(
    (item) =>
      !timelineAchievementIds.has(item.id) &&
      !(item.category === "competition" && competitionNames.has(item.issuer.toLowerCase()))
  );

  return (
    <Section spacing="lg">
      <Container size="md">
        <Heading as="h1" size="2xl" className="mb-2">
          Experience
        </Heading>
        <p className="text-[var(--color-muted)] text-sm mb-10">
          Professional roles, competitive builds, community contributions, and recognition.
        </p>

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
                {formatDateRange(exp.startDate, exp.endDate)} · {exp.location}
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

        <div className="mt-14 border-t-2 border-[var(--color-border)] pt-10">
          <div className="mb-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">Career record</p>
            <Heading as="h2" size="xl" className="mt-2">Competitions & contributions</Heading>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              Hackathon results and community programs connected to the professional record above.
            </p>
          </div>
          <JourneyTimeline items={careerTimeline} />
        </div>

        {standaloneAchievements.length > 0 && (
          <div className="mt-14 border-t border-[var(--color-border-subtle)] pt-10">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">Recognition & programs</p>
                <Heading as="h2" size="xl" className="mt-2">Achievements</Heading>
              </div>
              <Link href="/achievements" variant="arrow" className="font-mono text-xs font-bold uppercase">
                Full achievement archive
              </Link>
            </div>
            <AchievementArchive achievements={standaloneAchievements} />
          </div>
        )}
      </Container>
    </Section>
  );
}
