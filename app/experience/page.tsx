import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { experience } from "@/data/experience";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { AchievementArchive } from "@/components/achievements/AchievementArchive";
import { ExperienceRow } from "@/components/experience/ExperienceRow";
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
        <p className="text-[var(--color-muted)] text-base mb-10 leading-relaxed">
          A work-in-progress record of project building, competitions, community contributions, and recognition.
        </p>

        <div className="mt-8">
          {experience.map((item, index) => (
            <ExperienceRow key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="mt-14 border-t-2 border-[var(--color-border)] pt-10">
          <div className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">Career record</p>
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
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">Recognition & programs</p>
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
