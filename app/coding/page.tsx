import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Link } from "@/components/ui/Link";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Coding Profiles",
  description: "Kirthi JC's coding profiles, problem-solving practice, and project repositories.",
};

export default function CodingPage() {
  const codingProfiles = [
    {
      label: "GitHub",
      href: profile.socials.github,
      description: "Project repositories, experiments, and engineering work.",
    },
    {
      label: "LeetCode",
      href: profile.socials.leetcode,
      description: "Structured problem-solving and algorithmic thinking practice.",
    },
    {
      label: "CodeChef",
      href: profile.socials.codechef,
      description: "Competitive programming and contest participation.",
    },
    {
      label: "HackerRank",
      href: profile.socials.hackerRank,
      description: "Skill-based coding and challenge work.",
    },
  ].filter((link) => Boolean(link.href));

  return (
    <Section spacing="lg">
      <Container size="lg">
        <div className="mb-8 max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Coding profiles
          </p>
          <Heading as="h1" size="2xl" className="mt-2 text-[var(--color-plum)]">
            Code, practice, and problem solving
          </Heading>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
            My technical footprint spans product work, competition practice, and collaborative engineering across multiple platforms.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {codingProfiles.map((profileLink) => (
            <div
              key={profileLink.label}
              className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-[3px_3px_0px_0px_var(--color-border)]"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {profileLink.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {profileLink.description}
              </p>
              <Link
                href={profileLink.href}
                external
                variant="arrow"
                className="mt-4 inline-flex text-[11px] font-display uppercase tracking-[0.14em]"
              >
                Visit profile
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
