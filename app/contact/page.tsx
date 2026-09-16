import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Link } from "@/components/ui/Link";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kirthi JC.",
};

export default function ContactPage() {
  return (
    <Section spacing="lg">
      <Container className="space-y-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div className="space-y-5">
            <span className="font-mono text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              CONTACT
            </span>
            <Heading as="h1" size="display" className="!text-[3rem] sm:!text-7xl md:!text-8xl lg:!text-9xl leading-[0.88] tracking-[-0.06em]">
              LET&apos;S
              <br />
              <span className="text-[var(--color-plum)]">BUILD</span>
              <br />
              SOMETHING.
            </Heading>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[var(--color-muted)]">
            Have a role, project, or thoughtful problem to discuss? Send a note and
            let&apos;s make the next useful thing.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <div className="border-2 border-[var(--color-border)] bg-[var(--color-plum)] p-5 text-[#f6f1e8] shadow-[4px_4px_0px_0px_rgba(22,18,25,0.12)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f6f1e8]/70">
                RECRUITER / COLLABORATION
              </p>
              <p className="mt-3 font-display text-xl font-black uppercase leading-tight">
                Start with email or LinkedIn.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                {profile.email && (
                  <Link
                    href={`mailto:${profile.email}`}
                    variant="none"
                    className="font-display text-sm font-bold text-[#f6f1e8] underline decoration-[var(--color-secondary)] decoration-2 underline-offset-4"
                  >
                    {profile.email}
                  </Link>
                )}
                {profile.socials.linkedin && (
                  <Link
                    href={profile.socials.linkedin}
                    external
                    variant="arrow"
                    className="text-sm text-[#f6f1e8]"
                  >
                    LINKEDIN
                  </Link>
                )}
              </div>
            </div>

            <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                OTHER SIGNALS
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                {profile.socials.github && (
                  <Link href={profile.socials.github} external variant="arrow" className="text-sm">
                    GITHUB
                  </Link>
                )}
                {profile.socials.leetcode && (
                  <Link href={profile.socials.leetcode} external variant="arrow" className="text-sm">
                    LEETCODE
                  </Link>
                )}
                {profile.socials.twitter && (
                  <Link href={profile.socials.twitter} external variant="arrow" className="text-sm">
                    TWITTER / X
                  </Link>
                )}
              </div>
            </div>
          </div>

          {profile.email ? (
            <form
              action={`mailto:${profile.email}`}
              method="post"
              encType="text/plain"
              className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-5 sm:p-7"
            >
            <div className="mb-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                SEND A MESSAGE
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                This opens your default email client with the message prepared.
              </p>
            </div>

            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.14em]">
                  Name
                </span>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="min-h-11 border-2 border-[var(--color-border)] bg-[var(--color-background)] px-3 text-sm outline-none transition-colors focus:border-[var(--color-plum)]"
                />
              </label>
              <label className="grid gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.14em]">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="min-h-11 border-2 border-[var(--color-border)] bg-[var(--color-background)] px-3 text-sm outline-none transition-colors focus:border-[var(--color-plum)]"
                />
              </label>
              <label className="grid gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.14em]">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="resize-y border-2 border-[var(--color-border)] bg-[var(--color-background)] px-3 py-3 text-sm outline-none transition-colors focus:border-[var(--color-plum)]"
                />
              </label>
              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center gap-2 border-2 border-[var(--color-border)] bg-[var(--color-secondary)] px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-[var(--color-foreground)] shadow-[3px_3px_0px_0px_var(--color-border)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--color-border)]"
              >
                SEND MESSAGE <span aria-hidden="true">↗</span>
              </button>
            </div>
            </form>
          ) : (
            <div className="border-2 border-dashed border-[var(--color-border-subtle)] p-8 text-sm text-[var(--color-muted)]">
              Direct contact details will appear here once they are ready to publish.
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
