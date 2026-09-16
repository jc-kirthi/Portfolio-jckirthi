import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kirthi JC.",
};

export default function ContactPage() {
  const links = [
    { label: "LinkedIn", href: profile.socials.linkedin },
    { label: "GitHub", href: profile.socials.github },
    { label: "LeetCode", href: profile.socials.leetcode },
    { label: "CodeChef", href: profile.socials.codechef },
    { label: "HackerRank", href: profile.socials.hackerRank },
  ].filter((link) => Boolean(link.href));

  return (
    <Section spacing="lg">
      <Container size="md">
        <div className="mb-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Contact</p>
          <Heading as="h1" size="2xl" className="mt-2 text-[var(--color-plum)]">
            Let&apos;s connect
          </Heading>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-[3px_3px_0px_0px_var(--color-border)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">Email</p>
              <Link href={`mailto:${profile.email}`} variant="underline" className="mt-2 block text-lg font-bold">
                {profile.email}
              </Link>
            </div>

            <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-[3px_3px_0px_0px_var(--color-border)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">Phone</p>
              <a href={`tel:${profile.phone}`} className="mt-2 inline-block text-lg font-bold text-[var(--color-plum)] underline decoration-[var(--color-secondary)] underline-offset-4">
                {profile.phone}
              </a>
            </div>

            <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-[3px_3px_0px_0px_var(--color-border)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">Profiles</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {links.map((link) => (
                  <Link key={link.label} href={link.href} external variant="arrow" className="font-display text-[11px] uppercase tracking-[0.14em]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-2 border-[var(--color-border)] bg-[var(--color-background)] p-5 shadow-[4px_4px_0px_0px_var(--color-border)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">Recruiter note</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
              This contact flow opens your default email client so you can send a direct message with minimal friction.
            </p>
            <Button href={`mailto:${profile.email}`} variant="primary" size="md" withArrow className="mt-5">
              Email me
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
