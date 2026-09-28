import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { hackathons } from "@/data/hackathons";
import { education } from "@/data/education";
import { contributions, ownProjects } from "@/data/openSource";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.bio,
};

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const hackathonWins = hackathons.filter((hackathon) => hackathon.won).length;
  const primaryEducation = education[0];
  const allProjectsCount = projects.length;
  const allContributionsCount = contributions.length + ownProjects.length;

  const profileLinks = [
    { label: "GitHub", href: profile.socials.github },
    { label: "LinkedIn", href: profile.socials.linkedin },
    { label: "LeetCode", href: profile.socials.leetcode },
    { label: "CodeChef", href: profile.socials.codechef },
    { label: "HackerRank", href: profile.socials.hackerRank },
  ].filter((link) => Boolean(link.href));

  return (
    <>
      <Section spacing="xl" bordered className="relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col gap-6 lg:col-span-7">
              <div data-entrance="" className="flex flex-wrap items-center gap-2">
                <Badge variant="primary">{profile.year}</Badge>
                <Badge variant="outline">AI/ML ENGINEERING</Badge>
                <span className="border-l border-[var(--color-border-subtle)] pl-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Builder • Competitor • Contributor
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span data-entrance="" className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Personal portfolio & archive
                </span>
                <div data-entrance="">
                  <Heading as="h1" size="display" uppercase className="text-[var(--color-plum)]">
                    {profile.name}
                  </Heading>
                </div>
              </div>

              <div className="border-l-4 border-l-[var(--color-plum)] pl-5 py-1">
                <p data-entrance="" className="font-display text-2xl font-black uppercase leading-none tracking-tight text-[var(--color-foreground)] sm:text-3xl lg:text-5xl">
                  AI/ML engineering student / <span className="text-[var(--color-plum)] underline decoration-[var(--color-secondary)] decoration-4 underline-offset-4">builder</span>
                </p>
                <p data-entrance="" className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
                  {profile.tagline} {profile.bio}
                </p>
              </div>

              <div data-entrance="" className="flex flex-wrap items-center gap-3 pt-2">
                <Button href="/experience" variant="primary" size="md" withArrow magnetic>
                  VIEW WORK
                </Button>
                <Button href="/projects" variant="outline" size="md" withArrow>
                  VIEW PROJECTS
                </Button>
                <Button href="/contact" variant="secondary" size="md" withArrow>
                  CONTACT / CONNECT
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-3 border-t border-[var(--color-border-subtle)] pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                <span className="font-bold text-[var(--color-foreground)]">Profiles:</span>
                {profileLinks.map((link) => (
                  <Link key={link.label} href={link.href} external variant="arrow" className="text-[11px]">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div data-entrance="" className="lg:col-span-5">
              <div className="relative group">
                <div aria-hidden="true" className="absolute inset-0 -z-10 translate-x-3 translate-y-3 border-2 border-[var(--color-border)] bg-[var(--color-plum)]" />
                <div data-tilt="" className="portfolio-card-motion animate-float border-2 border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-[4px_4px_0px_0px_var(--color-border)]">
                  <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden border border-[var(--color-border)] bg-[var(--color-background)] p-4">
                    <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      <span>Portfolio</span>
                      <span className="font-bold text-[var(--color-plum)]">AI/ML</span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="portfolio-orbit h-28 w-28 rounded-full border border-dashed border-[var(--color-border)]" />
                    </div>

                    <div className="relative z-10 flex flex-col gap-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" size="sm">CIVIC TECH</Badge>
                        <Badge variant="outline" size="sm">SECURE SYSTEMS</Badge>
                      </div>

                      <div className="space-y-1">
                        <p className="font-display text-xl font-black uppercase tracking-tight text-[var(--color-foreground)]">
                          Kirthi JC
                        </p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                          AI/ML engineering student
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 flex items-end justify-between gap-3">
                      <div className="space-y-1">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">Focus</p>
                        <p className="font-display text-sm font-black uppercase text-[var(--color-plum)]">Applied AI</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">Current</p>
                        <p className="font-display text-sm font-black uppercase text-[var(--color-foreground)]">{profile.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="md" bordered className="bg-[var(--color-card)]/80">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="border-2 border-[var(--color-border)] bg-[var(--color-background)] p-4 shadow-[3px_3px_0px_0px_var(--color-border)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">Hackathons</p>
              <p className="mt-2 font-display text-4xl font-black text-[var(--color-accent-warm)]">10+</p>
            </div>
            <div className="border-2 border-[var(--color-border)] bg-[var(--color-background)] p-4 shadow-[3px_3px_0px_0px_var(--color-border)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">Wins</p>
              <p className="mt-2 font-display text-4xl font-black text-[var(--color-plum)]">{hackathonWins}</p>
            </div>
            <div className="border-2 border-[var(--color-border)] bg-[var(--color-background)] p-4 shadow-[3px_3px_0px_0px_var(--color-border)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">CGPA</p>
              <p className="mt-2 font-display text-4xl font-black text-[var(--color-foreground)]">{primaryEducation?.cgpa ?? "9.4"}</p>
            </div>
            <div className="border-2 border-[var(--color-border)] bg-[var(--color-background)] p-4 shadow-[3px_3px_0px_0px_var(--color-border)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">Projects</p>
              <p className="mt-2 font-display text-4xl font-black text-[var(--color-foreground)]">{allProjectsCount}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="xl" bordered number="01" label="Technical direction" title="Featured work" description="Applied engineering across civic-tech, privacy-preserving systems, machine learning, and product-driven problem solving.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Card key={project.slug} variant="interactive" padding="lg" className="group flex h-full flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Project 0{index + 1}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">{project.year}</span>
                </div>

                <Heading as="h2" size="xl" uppercase className="mb-3 text-[var(--color-foreground)]">
                  {project.title}
                </Heading>

                <p className="mb-5 text-sm leading-relaxed text-[var(--color-muted)]">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-[var(--color-border-subtle)] pt-4">
                  <Link href={`/projects/${project.slug}`} variant="arrow" className="font-display text-[11px] uppercase tracking-[0.15em]">
                    View case study
                  </Link>
                  {project.links.github && (
                    <Link href={project.links.github} external variant="muted" className="font-mono text-[10px] uppercase tracking-[0.15em]">
                      GitHub ↗
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section spacing="xl" bordered number="02" label="Portfolio signals" title="Open source + community" description="Technical contribution and practical engineering are part of the portfolio story beyond classwork and competitions.">
        <div className="grid gap-6 md:grid-cols-3">
          <Card variant="default" padding="lg" className="border-2 border-[var(--color-border)] bg-[var(--color-card)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">Contributions</p>
            <p className="mt-3 font-display text-5xl font-black text-[var(--color-plum)]">{allContributionsCount}</p>
            <p className="mt-3 text-sm text-[var(--color-muted)]">Open-source and community-oriented development activity across engineering and learning initiatives.</p>
          </Card>
          <Card variant="default" padding="lg" className="border-2 border-[var(--color-border)] bg-[var(--color-card)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">Core focus</p>
            <p className="mt-3 font-display text-3xl font-black uppercase text-[var(--color-foreground)]">AI & Data</p>
            <p className="mt-3 text-sm text-[var(--color-muted)]">From civic intelligence and identity systems to trustable product prototypes and rapid experimentation.</p>
          </Card>
          <Card variant="default" padding="lg" className="border-2 border-[var(--color-border)] bg-[var(--color-card)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">Current chapter</p>
            <p className="mt-3 font-display text-3xl font-black uppercase text-[var(--color-foreground)]">Building</p>
            <p className="mt-3 text-sm text-[var(--color-muted)]">Designing useful systems, shipping real prototypes, and continuing to grow through technical challenges.</p>
          </Card>
        </div>
      </Section>
    </>
  );
}
