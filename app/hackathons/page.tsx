/**
 * app/hackathons/page.tsx
 *
 * PHASE 4 — HACKATHON SHOWCASE & COMPETITION ARCHIVE
 *
 * Sections:
 * 01 — INTRO: Editorial header, dynamic statistics, Tangerine accent
 * 02 — HACKATHON SIGNALS: Compact publication index with real counts
 * 03 — FEATURED HACKATHONS: 3–5 curated case studies with asymmetric layouts
 * 04 — FULL ARCHIVE: Compact chronological index by year
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HackathonSignals } from "@/components/hackathons/HackathonSignals";
import { FeaturedHackathonCard } from "@/components/hackathons/FeaturedHackathonCard";
import { ArchiveIndexRow } from "@/components/hackathons/ArchiveIndexRow";
import {
  getHackathonStats,
  getFeaturedHackathons,
  getHackathonsByYear,
} from "@/lib/hackathons";

export const metadata: Metadata = {
  title: "Hackathons & Competitions",
  description:
    "Engineering archive of hackathons, prototypes built under pressure, and competition wins.",
};

export default function HackathonsPage() {
  const stats = getHackathonStats();
  const featuredHackathons = getFeaturedHackathons();
  const archiveByYear = getHackathonsByYear();

  const archiveWithIndex = archiveByYear.map(({ year, items }) => {
    const priorCount = archiveByYear
      .slice(0, archiveByYear.findIndex((g) => g.year === year))
      .reduce((sum, g) => sum + g.items.length, 0);

    return {
      year,
      items: items.map((h, i) => ({ hackathon: h, globalIndex: priorCount + i + 1 })),
    };
  });

  return (
    <>
      {stats.totalCompetitions === 0 && (
        <Section spacing="xl">
          <Container>
            <div className="max-w-3xl space-y-5">
              <Badge variant="tangerine">COMPETITION LOG</Badge>
              <Heading as="h1" size="display" uppercase className="leading-[0.9] text-[var(--color-plum)]">
                BUILDING
                <br />
                UNDER
                <br />
                <span className="text-[var(--color-foreground)]">PRESSURE.</span>
              </Heading>
              <p className="max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
                Hackathon records will appear here once they are ready to publish.
              </p>
            </div>
          </Container>
        </Section>
      )}
      {/* ── 01 — INTRO ───────────────────────────────────────────── */}
      <Section spacing="xl" bordered className="relative overflow-hidden">
        <Container>
          <div className="max-w-4xl flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="tangerine">COMPETITION LOG</Badge>
              <Badge variant="outline">RAPID PROTOTYPING</Badge>
              <span className="font-mono text-xs text-[var(--color-muted)] pl-2 border-l border-[var(--color-border-subtle)] uppercase">
                ENGINEERING ARCHIVE
              </span>
            </div>

            <div className="border-l-4 border-l-[var(--color-accent-warm)] pl-5 sm:pl-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block mb-2">
                HACKATHONS
              </span>
              <Heading as="h1" size="display" uppercase className="text-[var(--color-plum)] leading-[0.95]">
                BUILDING
                <br />
                UNDER
                <br />
                <span className="text-[var(--color-foreground)]">PRESSURE.</span>
              </Heading>
            </div>

            <p className="text-base md:text-lg text-[var(--color-muted)] leading-relaxed max-w-2xl">
              Hackathons are where theoretical algorithms meet real-world constraints.
              This archive records the systems, prototypes, and solutions designed,
              implemented, and shipped under high-intensity timeframes — with teams,
              under deadlines, against competition.
            </p>

            {stats.totalCompetitions > 0 && (
              <p className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-wider">
                {stats.totalCompetitions}{" "}
                {stats.totalCompetitions === 1 ? "competition" : "competitions"} recorded
                {stats.wins > 0 && (
                  <>
                    {" · "}
                    <span className="text-[var(--color-accent-warm)] font-bold">
                      {stats.wins} {stats.wins === 1 ? "win" : "wins"}
                    </span>
                  </>
                )}
                {stats.yearSpan && <> · active {stats.yearSpan}</>}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="#featured" variant="primary" size="md" withArrow>
                VIEW KEY BUILDS
              </Button>
              <Button href="#archive" variant="outline" size="md">
                INDEX CHRONOLOGY ↓
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 02 — HACKATHON SIGNALS ───────────────────────────────── */}
      {stats.totalCompetitions > 0 && (
        <Section spacing="sm" bordered className="bg-[var(--color-card)]/70">
          <Container>
            <HackathonSignals stats={stats} />
          </Container>
        </Section>
      )}

      {/* ── 03 — FEATURED HACKATHONS ────────────────────────────── */}
      {featuredHackathons.length > 0 && (
        <Section
          id="featured"
          spacing="xl"
          bordered
          number="01"
          label="CURATED BUILDS"
          title="FEATURED SPRINT CASE STUDIES"
          description="Priority records showcasing system design, prototype delivery, and competitive team performance under 24–48 hour clocks."
        >
          <div className="flex flex-col gap-10 md:gap-14">
            {featuredHackathons.map((h, idx) => (
              <FeaturedHackathonCard key={h.slug} hackathon={h} index={idx} />
            ))}
          </div>
        </Section>
      )}

      {/* ── 04 — FULL ARCHIVE ───────────────────────────────────── */}
      {archiveByYear.length > 0 && (
        <Section
          id="archive"
          spacing="xl"
          bordered
          number="02"
          label="COMPLETE ARCHIVE"
          title="CHRONOLOGICAL COMPETITION INDEX"
          description="Full historical record of competitive builds, jury evaluations, and prototype releases organized by year."
        >
          <div className="flex flex-col gap-12">
            {archiveWithIndex.map(({ year, items }) => (
              <div key={year} className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between border-b-2 border-[var(--color-border)] pb-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-black text-3xl sm:text-4xl text-[var(--color-plum)]">
                      {year}
                    </span>
                    <span className="font-mono text-xs text-[var(--color-muted)] uppercase">
                      · {items.length} {items.length === 1 ? "EVENT" : "EVENTS"}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[var(--color-muted)] uppercase hidden sm:inline">
                    RESULT / PROJECT
                  </span>
                </div>

                <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] shadow-[3px_3px_0px_0px_var(--color-border)] overflow-hidden">
                  {items.map(({ hackathon, globalIndex }) => (
                    <ArchiveIndexRow
                      key={hackathon.slug}
                      hackathon={hackathon}
                      globalIndex={globalIndex}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
