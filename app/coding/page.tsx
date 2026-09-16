import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Link } from "@/components/ui/Link";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Coding",
  description: "External technical profiles and coding-focused links.",
};

const profileLinks = [
  {
    key: "github",
    label: "GITHUB",
    category: "OPEN SOURCE",
    url: profile.socials.github,
  },
  {
    key: "linkedin",
    label: "LINKEDIN",
    category: "PROFESSIONAL",
    url: profile.socials.linkedin,
  },
  {
    key: "leetcode",
    label: "LEETCODE",
    category: "DSA / PROBLEM SOLVING",
    url: profile.socials.leetcode,
  },
] as const;

export default function CodingPage() {
  const validProfiles = profileLinks.filter((profileLink) => Boolean(profileLink.url));

  return (
    <Section spacing="lg">
      <Container className="space-y-8">
        <div className="space-y-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
            CODE
          </span>
          <Heading as="h1" size="display" className="!text-[3rem] sm:!text-7xl md:!text-8xl lg:!text-9xl leading-none tracking-[-0.06em]">
            OUTSIDE
            <span className="text-[var(--color-plum)]"> THE</span>
            <br />
            CLASSROOM.
          </Heading>
        </div>

        {validProfiles.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {validProfiles.map((profileLink) => (
              <article
                key={profileLink.key}
                className="flex min-h-32 flex-col justify-between gap-5 border-2 border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-[4px_4px_0px_0px_rgba(22,18,25,0.08)]"
              >
                <div className="space-y-2">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {profileLink.label}
                  </div>
                  <p className="font-display text-xl font-black uppercase leading-none text-[var(--color-foreground)]">
                    {profileLink.category}
                  </p>
                </div>

                <Link
                  href={profileLink.url}
                  external
                  variant="arrow"
                  className="self-start text-sm uppercase tracking-[0.14em]"
                >
                  VIEW PROFILE
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-sm text-[var(--color-muted)]">
            No external profiles are currently available in the profile data.
          </p>
        )}
      </Container>
    </Section>
  );
}
