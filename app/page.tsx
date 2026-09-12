/**
 * app/page.tsx
 *
 * Homepage — Placeholder foundation.
 * Visual design will be implemented in Phase 2.
 * Structure establishes the data-driven pattern.
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { hackathons } from "@/data/hackathons";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.bio,
};

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const recentWins = hackathons.filter((h) => h.won).slice(0, 3);

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <Section spacing="xl" className="border-b border-[var(--color-border)]">
        <Container>
          <div className="flex flex-col gap-6 max-w-3xl">
            <Badge variant="secondary" className="self-start">
              {profile.year} · {profile.institution}
            </Badge>

            <Heading as="h1" size="3xl">
              {profile.name}
            </Heading>

            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/projects"
                variant="none"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-[var(--color-background)] text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                variant="none"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-border)] text-sm font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Featured Projects ──────────────────────────────────── */}
      <Section spacing="lg" className="border-b border-[var(--color-border)]">
        <Container>
          <div className="flex items-baseline justify-between mb-8">
            <Heading as="h2" size="lg">
              Featured Projects
            </Heading>
            <Link href="/projects" variant="muted" className="text-sm">
              All projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProjects.map((project) => (
              <Card key={project.slug} variant="default" padding="md">
                <div className="flex flex-col gap-3 h-full">
                  <div className="flex items-start justify-between gap-2">
                    <Heading as="h3" size="sm">
                      {project.title}
                    </Heading>
                    <Badge
                      variant={
                        project.status === "completed" ? "secondary" : "muted"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <p className="text-sm text-[var(--color-muted)] flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      external
                      variant="muted"
                      className="text-xs mt-auto"
                    >
                      View on GitHub →
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Hackathon Wins ─────────────────────────────────────── */}
      <Section spacing="lg" className="border-b border-[var(--color-border)]">
        <Container>
          <div className="flex items-baseline justify-between mb-8">
            <Heading as="h2" size="lg">
              Hackathon Wins
            </Heading>
            <Link href="/hackathons" variant="muted" className="text-sm">
              All hackathons →
            </Link>
          </div>

          {recentWins.length > 0 ? (
            <div className="flex flex-col divide-y divide-[var(--color-border)]">
              {recentWins.map((h) => (
                <div key={h.slug} className="py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <Badge variant="secondary" className="self-start sm:self-auto shrink-0">
                    {h.position ?? "Winner"}
                  </Badge>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{h.name}</p>
                    <p className="text-xs text-[var(--color-muted)]">
                      {h.project.title} · {h.location}
                    </p>
                  </div>
                  <span className="text-xs text-[var(--color-muted)] shrink-0">
                    {new Date(h.date).getFullYear()}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-[var(--color-muted)]">
              No wins yet — but the next hackathon is around the corner.
            </p>
          )}
        </Container>
      </Section>

      {/* ── Quick Links ────────────────────────────────────────── */}
      <Section spacing="lg">
        <Container>
          <Heading as="h2" size="lg" className="mb-8">
            Explore More
          </Heading>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { label: "Journey", href: "/journey" },
              { label: "Achievements", href: "/achievements" },
              { label: "Experience", href: "/experience" },
              { label: "Certifications", href: "/certifications" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                variant="none"
                className="block p-4 border border-[var(--color-border)] text-sm font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
