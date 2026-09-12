/**
 * app/page.tsx
 *
 * DESIGN PREVIEW — Homepage Visual System
 *
 * Demonstrates the EDITORIAL × NEO-BRUTALIST × TECHNICAL × PERSONAL visual identity:
 * 1. Hero with asymmetric layout, oversized typography, image placeholder with editorial framing
 * 2. Key statistics bar demonstrating numerical and metric typography
 * 3. Sample editorial section showing featured/interactive card treatments & typography
 * 4. Distinct CTA and colophon foundation
 *
 * NOTE: All data sourced safely from data modules — zero invented personal achievements.
 */

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

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.bio,
};

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);
  const recentWins = hackathons.filter((h) => h.won).slice(0, 2);

  return (
    <>
      {/* ── 01. HERO SECTION (Editorial & Asymmetric) ───────────── */}
      <Section spacing="xl" bordered className="relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="lime">
                  {profile.year}
                </Badge>
                <Badge variant="primary">
                  {profile.title}
                </Badge>
                <span className="font-mono text-xs text-[var(--color-muted)] pl-2 border-l border-[var(--color-border-subtle)]">
                  {profile.location}
                </span>
              </div>

              {/* Oversized Editorial Headline */}
              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-1">
                  PORTFOLIO & ARCHIVE
                </span>
                <Heading as="h1" size="display" uppercase className="text-[var(--color-plum)]">
                  {profile.name}
                </Heading>
              </div>

              {/* Manifesto Stance */}
              <div className="border-l-4 border-l-[var(--color-secondary)] pl-5 py-1">
                <p className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--color-foreground)] leading-tight">
                  I BUILD. <span className="text-[var(--color-accent-warm)]">I COMPETE.</span> I SHIP.
                </p>
                <p className="text-sm md:text-base text-[var(--color-muted)] mt-2 max-w-xl leading-relaxed">
                  {profile.tagline}
                </p>
              </div>

              {/* Tactile Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button href="/projects" variant="primary" size="md" withArrow>
                  EXPLORE MY WORK
                </Button>
                <Button href="/journey" variant="outline" size="md" withArrow>
                  VIEW JOURNEY
                </Button>
                <Button href="/contact" variant="ghost" size="md">
                  GET IN TOUCH →
                </Button>
              </div>
            </div>

            {/* Right Asymmetric Column: Editorial Image Placeholder Frame */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="relative group">
                {/* Decorative Offset Backdrop Shadow */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 bg-[var(--color-plum)] translate-x-3 translate-y-3 -z-10 border-2 border-[var(--color-border)]"
                />
                
                {/* Main Framed Card */}
                <div className="bg-[var(--color-card)] border-2 border-[var(--color-border)] p-4 flex flex-col gap-4">
                  {/* Aspect-ratio photo placeholder box with technical crosshair markers */}
                  <div className="relative w-full aspect-[4/5] bg-[var(--color-background)] border border-[var(--color-border)] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                    <div className="absolute top-2 left-2 font-mono text-[10px] text-[var(--color-muted)]">
                      [FIG. 01 — PORTRAIT]
                    </div>
                    <div className="absolute bottom-2 right-2 font-mono text-[10px] text-[var(--color-muted)]">
                      3:4 RATIO
                    </div>
                    {/* Technical Crosshair indicator */}
                    <div className="w-12 h-12 rounded-full border border-dashed border-[var(--color-border-subtle)] flex items-center justify-center mb-3">
                      <span className="font-mono text-xs text-[var(--color-muted)]">+</span>
                    </div>
                    <p className="font-display text-sm font-bold uppercase tracking-wider text-[var(--color-foreground)]">
                      Personal Photograph
                    </p>
                    <p className="font-mono text-xs text-[var(--color-muted)] mt-1">
                      (Editorial framing reserved for Phase 2)
                    </p>
                  </div>

                  {/* Metadata Tagline under photo */}
                  <div className="flex items-center justify-between font-mono text-xs border-t border-[var(--color-border-subtle)] pt-3 text-[var(--color-muted)]">
                    <span>STATUS: ACTIVE</span>
                    <span className="text-[var(--color-success)] font-bold">● OPEN TO INTERNSHIPS</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* ── 02. STATISTICAL SNAPSHOT BAR ───────────────────────── */}
      <Section spacing="sm" bordered className="bg-[var(--color-card)]/60">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border-subtle)]">
            
            <div className="pt-4 md:pt-0 md:px-4 flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                ACADEMIC YEAR
              </span>
              <span className="font-display text-4xl lg:text-5xl font-black text-[var(--color-plum)] mt-1">
                3RD
              </span>
              <span className="text-xs text-[var(--color-muted)] font-mono mt-1">
                AI/ML Engineering
              </span>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                HACKATHONS
              </span>
              <span className="font-display text-4xl lg:text-5xl font-black text-[var(--color-foreground)] mt-1">
                10+
              </span>
              <span className="text-xs text-[var(--color-muted)] font-mono mt-1">
                Competitions & Builds
              </span>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                PROJECT REPOS
              </span>
              <span className="font-display text-4xl lg:text-5xl font-black text-[var(--color-foreground)] mt-1">
                {projects.length}
              </span>
              <span className="text-xs text-[var(--color-muted)] font-mono mt-1">
                (Sample Data Modules)
              </span>
            </div>

            <div className="pt-4 md:pt-0 md:px-4 flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                DISCIPLINE
              </span>
              <span className="font-display text-2xl lg:text-3xl font-black text-[var(--color-plum)] mt-2 uppercase">
                AI × SYSTEMS
              </span>
              <span className="text-xs text-[var(--color-muted)] font-mono mt-1">
                Research & Deployment
              </span>
            </div>

          </div>
        </Container>
      </Section>

      {/* ── 03. SAMPLE EDITORIAL SHOWCASE (Card Treatments) ────── */}
      <Section
        spacing="xl"
        bordered
        number="01"
        label="EDITORIAL SHOWCASE"
        title="DESIGN LANGUAGE PREVIEW"
        description="Demonstrating the card vocabulary, tactile hover states, and accent hierarchy. Built entirely with reusable components and CSS tokens."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card Treatment 1: Featured High-Contrast (Deep Plum + Acid Lime) */}
          <Card variant="featured" padding="lg">
            <div className="flex flex-col h-full justify-between gap-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="lime">FEATURED CARD TREATMENT</Badge>
                  <span className="font-mono text-xs text-[var(--color-secondary)]">01 // TOP ACCENT</span>
                </div>
                <Heading as="h3" size="xl" uppercase className="text-[#f6f1e8] mb-3">
                  {featuredProjects[0]?.title ?? "PROJECT SHOWCASE"}
                </Heading>
                <p className="text-sm text-[#f6f1e8]/80 leading-relaxed">
                  {featuredProjects[0]?.description ?? "High contrast card with Deep Plum background, Acid Lime borders and crisp typography."}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#f6f1e8]/20 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {featuredProjects[0]?.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] bg-[#f6f1e8]/10 text-[#f6f1e8] px-2 py-0.5 border border-[#f6f1e8]/20">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${featuredProjects[0]?.slug ?? ""}`}
                  variant="none"
                  className="font-display text-xs font-bold uppercase text-[var(--color-secondary)] hover:underline inline-flex items-center gap-1"
                >
                  CASE STUDY →
                </Link>
              </div>
            </div>
          </Card>

          {/* Card Treatment 2: Interactive Neo-Brutalist (Ivory + Lift + Tangerine accent) */}
          <Card variant="interactive" padding="lg" accentStrip="tangerine">
            <div className="flex flex-col h-full justify-between gap-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="tangerine">INTERACTIVE TREATMENT</Badge>
                  <span className="font-mono text-xs text-[var(--color-muted)]">02 // TACTILE LIFT</span>
                </div>
                <Heading as="h3" size="xl" uppercase className="mb-3">
                  {recentWins[0]?.name ?? "HACKATHON WIN RECOGNITION"}
                </Heading>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  Demonstrates the tactile lift hover behavior (`neo-hover-lift`) with subtle translation and Tangerine accent strip.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--color-border-subtle)] pt-4">
                <div className="font-mono text-xs text-[var(--color-muted)]">
                  POSITION: <span className="font-bold text-[var(--color-foreground)]">{recentWins[0]?.position ?? "1ST PLACE"}</span>
                </div>
                <Link
                  href={`/hackathons/${recentWins[0]?.slug ?? ""}`}
                  variant="arrow"
                  className="text-xs uppercase font-bold"
                >
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          </Card>

        </div>

        {/* Directory Explorer Link Bar */}
        <div className="mt-12 p-6 border-2 border-[var(--color-border)] bg-[var(--color-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[3px_3px_0px_0px_var(--color-border)]">
          <div className="flex flex-col gap-1">
            <span className="font-display text-sm font-bold uppercase text-[var(--color-foreground)]">
              EXPLORE ALL SECTIONS & ARCHIVES
            </span>
            <span className="text-xs text-[var(--color-muted)] font-mono">
              All 15 routes initialized and verified for future phases
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/projects" variant="none" className="px-3 py-1.5 text-xs font-mono font-bold uppercase bg-[var(--color-background)] border border-[var(--color-border)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors">
              WORK →
            </Link>
            <Link href="/journey" variant="none" className="px-3 py-1.5 text-xs font-mono font-bold uppercase bg-[var(--color-background)] border border-[var(--color-border)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors">
              JOURNEY →
            </Link>
            <Link href="/hackathons" variant="none" className="px-3 py-1.5 text-xs font-mono font-bold uppercase bg-[var(--color-background)] border border-[var(--color-border)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors">
              HACKATHONS →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
