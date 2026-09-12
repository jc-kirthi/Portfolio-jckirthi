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
      <Container size="sm">
        <Heading as="h1" size="2xl" className="mb-4">
          Get in Touch
        </Heading>
        <p className="text-[var(--color-muted)] mb-8">
          Whether you want to collaborate, discuss a project, or just say hello —
          I&apos;m always happy to chat.
        </p>

        <div className="flex flex-col gap-4">
          <div className="border border-[var(--color-border)] p-5">
            <p className="text-xs text-[var(--color-muted)] mb-1 uppercase tracking-wider">
              Email
            </p>
            <Link
              href={`mailto:${profile.email}`}
              variant="underline"
              className="text-sm"
            >
              {profile.email}
            </Link>
          </div>

          <div className="border border-[var(--color-border)] p-5">
            <p className="text-xs text-[var(--color-muted)] mb-3 uppercase tracking-wider">
              Socials
            </p>
            <div className="flex flex-col gap-2">
              {profile.socials.github && (
                <Link href={profile.socials.github} external variant="muted" className="text-sm">
                  GitHub →
                </Link>
              )}
              {profile.socials.linkedin && (
                <Link href={profile.socials.linkedin} external variant="muted" className="text-sm">
                  LinkedIn →
                </Link>
              )}
              {profile.socials.twitter && (
                <Link href={profile.socials.twitter} external variant="muted" className="text-sm">
                  Twitter →
                </Link>
              )}
            </div>
          </div>

          <div className="border border-[var(--color-border)] p-5">
            <p className="text-xs text-[var(--color-muted)] mb-1 uppercase tracking-wider">
              Resume
            </p>
            <Link href={profile.resumeUrl} external variant="underline" className="text-sm">
              Download Resume
            </Link>
          </div>
        </div>

        <p className="text-xs text-[var(--color-muted)] mt-8 italic">
          A full contact form will be added in a later phase.
        </p>
      </Container>
    </Section>
  );
}
