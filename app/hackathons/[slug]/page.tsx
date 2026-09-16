/**
 * app/hackathons/[slug]/page.tsx
 *
 * PHASE 4 — HACKATHON MINI CASE STUDY ROUTE
 *
 * Renders only fields present in data/hackathons.ts — no invented sections.
 */

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { hackathons } from "@/data/hackathons";
import {
  findHackathonBySlug,
  getHackathonYear,
  getPlacementLabel,
  hasProjectLinks,
} from "@/lib/hackathons";

interface HackathonPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return hackathons.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: HackathonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const hackathon = findHackathonBySlug(slug);
  if (!hackathon) return { title: "Hackathon Record Not Found" };
  return {
    title: `${hackathon.project.title} — ${hackathon.name}`,
    description: hackathon.project.description,
  };
}

export default async function HackathonDetailPage({ params }: HackathonPageProps) {
  const { slug } = await params;
  const hackathon = findHackathonBySlug(slug);

  if (!hackathon) {
    notFound();
  }

  const isWinner = hackathon.won;
  const year = getHackathonYear(hackathon);
  const placement = getPlacementLabel(hackathon);
  const showLinks = hasProjectLinks(hackathon);

  return (
    <div className="py-8 md:py-12">
      <Container size="lg">
        <div className="mb-8">
          <Link
            href="/hackathons"
            variant="arrow"
            className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
          >
            BACK TO COMPETITION ARCHIVE
          </Link>
        </div>

        {/* ── Result Banner ──────────────────────────────────────── */}
        <div
          className={
            isWinner
              ? "border-2 border-[var(--color-accent-warm)] bg-[var(--color-accent-warm)] text-white p-4 sm:p-5 mb-8 shadow-[3px_3px_0px_0px_var(--color-border)]"
              : "border-2 border-[var(--color-border)] bg-[var(--color-card)] p-4 sm:p-5 mb-8 shadow-[3px_3px_0px_0px_var(--color-border)]"
          }
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-80 block">
                RESULT / PLACEMENT
              </span>
              <span className="font-display text-2xl sm:text-3xl font-black uppercase">
                {placement}
              </span>
            </div>
            {hackathon.prize && (
              <div className="text-right">
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-80 block">
                  PRIZE
                </span>
                <span className="font-display text-sm font-bold">{hackathon.prize}</span>
              </div>
            )}
          </div>
        </div>

        {/* ── Case Study Header ──────────────────────────────────── */}
        <div className="border-b-2 border-[var(--color-border)] pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="outline" size="md">
              {year}
            </Badge>
            <Badge variant="outline" size="md">
              {hackathon.location || "Location not published"}
            </Badge>
            <span className="font-mono text-xs text-[var(--color-muted)] pl-2 border-l border-[var(--color-border-subtle)]">
              {hackathon.date ? new Date(hackathon.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              }) : "Date not published"}
            </span>
          </div>

          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] block mb-1">
            {hackathon.organizer}
          </span>

          <Heading as="h1" size="3xl" uppercase className="text-[var(--color-plum)] mb-2">
            {hackathon.name}
          </Heading>

          <p className="text-sm font-mono text-[var(--color-muted)]">
            {hackathon.teamSize
              ? `TEAM · ${hackathon.teamSize} ${hackathon.teamSize === 1 ? "ENGINEER" : "ENGINEERS"}`
              : "TEAM SIZE NOT PUBLISHED"}
          </p>
        </div>

        {/* ── Cover Image ────────────────────────────────────────── */}
        {hackathon.coverImage && (
          <div className="relative mb-10 border-2 border-[var(--color-border)] overflow-hidden shadow-[3px_3px_0px_0px_var(--color-border)] aspect-video max-h-[420px]">
            <Image
              src={hackathon.coverImage}
              alt={`${hackathon.project.title} cover`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 960px"
              priority
            />
          </div>
        )}

        {/* ── Main Grid ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <Card variant={isWinner ? "featured" : "editorial"} padding="lg" accentStrip={isWinner ? "tangerine" : "none"}>
              <div className="flex flex-col gap-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-accent-warm)]">
                  PROJECT
                </span>

                <Heading
                  as="h2"
                  size="2xl"
                  uppercase
                  className={isWinner ? "text-[#f6f1e8]" : "text-[var(--color-foreground)]"}
                >
                  {hackathon.project.title}
                </Heading>

                <p
                  className={
                    isWinner
                      ? "text-base text-[#f6f1e8]/90 leading-relaxed"
                      : "text-base text-[var(--color-muted)] leading-relaxed"
                  }
                >
                  {hackathon.project.description}
                </p>
              </div>
            </Card>

            <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-6 sm:p-8 shadow-[3px_3px_0px_0px_var(--color-border)]">
              <Heading as="h3" size="md" uppercase className="mb-4 text-[var(--color-foreground)]">
                TECH STACK
              </Heading>

              <div className="flex flex-wrap gap-2">
                {hackathon.project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs bg-[var(--color-background)] text-[var(--color-foreground)] px-3 py-1.5 border border-[var(--color-border)] font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {showLinks && (
              <div className="p-6 border-2 border-[var(--color-border)] bg-[var(--color-card-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="font-display text-sm font-bold uppercase text-[var(--color-foreground)]">
                  LINKS
                </span>

                <div className="flex flex-wrap items-center gap-3">
                  {hackathon.project.links?.github && (
                    <Button href={hackathon.project.links.github} external variant="primary" size="sm" withArrow>
                      GITHUB
                    </Button>
                  )}
                  {hackathon.project.links?.devpost && (
                    <Button href={hackathon.project.links.devpost} external variant="outline" size="sm" withArrow>
                      DEVPOST
                    </Button>
                  )}
                  {hackathon.project.links?.live && (
                    <Button href={hackathon.project.links.live} external variant="accent" size="sm" withArrow>
                      LIVE DEMO
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar: Event Dossier */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[3px_3px_0px_0px_var(--color-border)] sticky top-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--color-muted)] block border-b border-[var(--color-border-subtle)] pb-2 mb-4">
                EVENT DOSSIER
              </span>

              <dl className="flex flex-col gap-4 font-mono text-xs">
                <div>
                  <dt className="text-[var(--color-muted)] uppercase">Event</dt>
                  <dd className="font-display font-bold text-sm text-[var(--color-foreground)] mt-0.5">
                    {hackathon.name}
                  </dd>
                </div>

                <div>
                  <dt className="text-[var(--color-muted)] uppercase">Organizer</dt>
                  <dd className="font-bold text-[var(--color-foreground)] mt-0.5">
                    {hackathon.organizer}
                  </dd>
                </div>

                <div>
                  <dt className="text-[var(--color-muted)] uppercase">Location</dt>
                  <dd className="font-bold text-[var(--color-foreground)] mt-0.5">
                    {hackathon.location || "Not published"}
                  </dd>
                </div>

                <div>
                  <dt className="text-[var(--color-muted)] uppercase">Year</dt>
                  <dd className="font-bold text-[var(--color-foreground)] mt-0.5">{year}</dd>
                </div>

                <div>
                  <dt className="text-[var(--color-muted)] uppercase">Date</dt>
                  <dd className="font-bold text-[var(--color-foreground)] mt-0.5">
                    {hackathon.date ? new Date(hackathon.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }) : "Not published"}
                  </dd>
                </div>

                <div>
                  <dt className="text-[var(--color-muted)] uppercase">Team Size</dt>
                  <dd className="font-bold text-[var(--color-foreground)] mt-0.5">
                    {hackathon.teamSize
                      ? `${hackathon.teamSize} ${hackathon.teamSize === 1 ? "Engineer" : "Engineers"}`
                      : "Not published"}
                  </dd>
                </div>

                <div className="border-t border-[var(--color-border-subtle)] pt-3">
                  <dt className="text-[var(--color-accent-warm)] font-bold uppercase">Result</dt>
                  <dd className="font-display font-bold text-sm text-[var(--color-foreground)] mt-0.5">
                    {placement}
                  </dd>
                </div>

                {hackathon.prize && (
                  <div>
                    <dt className="text-[var(--color-muted)] uppercase">Prize</dt>
                    <dd className="font-display font-bold text-sm text-[var(--color-foreground)] mt-0.5">
                      {hackathon.prize}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
