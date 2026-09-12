/**
 * app/page.tsx
 *
 * PHASE 3 (CALIBRATED) — ACTUAL HOMEPAGE EXPERIENCE
 *
 * Visual Calibration:
 * - Reduced perceived accent brightness (Acid Lime & Tangerine used purposefully as highlights)
 * - Enhanced Deep Plum as sophisticated grounding color
 * - Increased visual breathing room and reduced simultaneous loud accents
 * - Preserved Warm Ivory base, neo-brutalist structure, and strict data integrity
 */

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";

// Data modules (Strict single-source-of-truth)
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { hackathons } from "@/data/hackathons";
import { education } from "@/data/education";
import { contributions, ownProjects } from "@/data/openSource";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.bio,
};

export default function HomePage() {
  // Data extraction without invention
  const featuredProjects = projects.filter((p) => p.featured);
  const hackathonWins = hackathons.filter((h) => h.won);
  const primaryEducation = education[0];
  const allHackathonsCount = hackathons.length;
  const allProjectsCount = projects.length;
  const allContributionsCount = contributions.length + ownProjects.length;

  return (
    <>
      {/* ── SECTION 01 — HERO ────────────────────────────────────── */}
      <Section spacing="xl" bordered className="relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* 1. Small status / category label */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="primary">
                  {profile.year}
                </Badge>
                <Badge variant="outline">
                  AI/ML ENGINEERING
                </Badge>
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)] pl-2 border-l border-[var(--color-border-subtle)]">
                  BUILDER • COMPETITOR • CONTRIBUTOR
                </span>
              </div>

              {/* 2. Large Name */}
              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-1">
                  PERSONAL PORTFOLIO & ARCHIVE
                </span>
                <Heading as="h1" size="display" uppercase className="text-[var(--color-plum)]">
                  {profile.name}
                </Heading>
              </div>

              {/* 3. Positioning Statement: Visual Brand Statement */}
              <div className="border-l-4 border-l-[var(--color-plum)] pl-5 py-1">
                <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[var(--color-foreground)] leading-none">
                  I BUILD. <span className="text-[var(--color-plum)] underline decoration-[var(--color-secondary)] decoration-4 underline-offset-4">I COMPETE.</span> I CONTRIBUTE.
                </p>
                {/* 4. Short supporting description explaining who Kirthi is */}
                <p className="text-sm md:text-base text-[var(--color-muted)] mt-3 max-w-xl leading-relaxed">
                  {profile.tagline} {profile.bio}
                </p>
              </div>

              {/* 5 & 6. Primary and Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/projects" variant="primary" size="md" withArrow>
                  VIEW MY WORK
                </Button>
                <Button href="/contact" variant="outline" size="md" withArrow>
                  LET&apos;S CONNECT
                </Button>
                <Button href={profile.resumeUrl} external variant="ghost" size="md">
                  RESUME ↗
                </Button>
              </div>

              {/* 7. Social / Profile links */}
              <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-[var(--color-border-subtle)] font-mono text-xs text-[var(--color-muted)]">
                <span className="font-bold text-[var(--color-foreground)]">PROFILES:</span>
                {profile.socials.github && (
                  <Link href={profile.socials.github} external variant="arrow">
                    GITHUB
                  </Link>
                )}
                {profile.socials.linkedin && (
                  <Link href={profile.socials.linkedin} external variant="arrow">
                    LINKEDIN
                  </Link>
                )}
                {profile.socials.twitter && (
                  <Link href={profile.socials.twitter} external variant="arrow">
                    TWITTER
                  </Link>
                )}
                {profile.socials.leetcode && (
                  <Link href={profile.socials.leetcode} external variant="arrow">
                    LEETCODE
                  </Link>
                )}
              </div>
            </div>

            {/* 8. Right Asymmetric Column: Editorial Portrait Area */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="relative group">
                {/* Decorative Offset Shadow */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 bg-[var(--color-plum)] translate-x-3 translate-y-3 -z-10 border-2 border-[var(--color-border)]"
                />
                
                {/* Main Framed Card */}
                <div className="bg-[var(--color-card)] border-2 border-[var(--color-border)] p-4 flex flex-col gap-4">
                  
                  {/* Aspect-ratio photo placeholder box with technical crosshair markers */}
                  <div className="relative w-full aspect-[4/5] bg-[var(--color-background)] border border-[var(--color-border)] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                    <div className="absolute top-2.5 left-2.5 font-mono text-[10px] uppercase font-bold text-[var(--color-muted)]">
                      [FIG. 01 — PORTRAIT]
                    </div>
                    <div className="absolute top-2.5 right-2.5 font-mono text-[10px] text-[var(--color-muted)]">
                      3:4 RATIO
                    </div>
                    <div className="absolute bottom-2.5 left-2.5 font-mono text-[10px] text-[var(--color-muted)]">
                      {profile.institution}
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 font-mono text-[10px] font-bold text-[var(--color-plum)]">
                      {profile.year}
                    </div>

                    {/* Technical Crosshair indicator */}
                    <div className="w-14 h-14 rounded-full border border-dashed border-[var(--color-border)] flex items-center justify-center mb-3 bg-[var(--color-card)]/50">
                      <span className="font-mono text-sm text-[var(--color-muted)] font-bold">+</span>
                    </div>

                    <p className="font-display text-sm font-black uppercase tracking-wider text-[var(--color-foreground)]">
                      Personal Photograph
                    </p>
                    <p className="font-mono text-xs text-[var(--color-muted)] mt-1 max-w-[200px]">
                      Editorial portrait framing reserved for upcoming photo asset
                    </p>
                  </div>

                  {/* Metadata Tagline under photo */}
                  <div className="flex items-center justify-between font-mono text-xs border-t border-[var(--color-border-subtle)] pt-3 text-[var(--color-muted)]">
                    <span className="flex items-center gap-1.5 font-bold text-[var(--color-foreground)]">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-success)] inline-block animate-pulse" />
                      ACTIVE
                    </span>
                    <span className="text-[var(--color-plum)] font-bold">
                      {profile.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* ── SECTION 02 — QUICK PROOF / SIGNALS ───────────────────── */}
      <Section spacing="sm" bordered className="bg-[var(--color-card)]/70">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border-subtle)]">
            
            {/* Signal 1: Academic Standing */}
            <div className="pt-4 md:pt-0 md:px-4 flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                01 / EDUCATION
              </span>
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-plum)] mt-1">
                {primaryEducation?.degree ?? "B.Tech"}
              </span>
              <span className="text-xs text-[var(--color-muted)] font-mono mt-1 truncate" title={primaryEducation?.field}>
                {primaryEducation?.field ?? "AI & Machine Learning"}
              </span>
            </div>

            {/* Signal 2: Hackathon Activity */}
            <div className="pt-4 md:pt-0 md:px-4 flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                02 / HACKATHONS
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-foreground)]">
                  {allHackathonsCount}
                </span>
                {hackathonWins.length > 0 && (
                  <span className="font-mono text-xs font-bold text-[var(--color-accent-warm)] uppercase">
                    ({hackathonWins.length} WINS)
                  </span>
                )}
              </div>
              <span className="text-xs text-[var(--color-muted)] font-mono mt-1">
                Verified in Hackathons Data
              </span>
            </div>

            {/* Signal 3: Verified Projects */}
            <div className="pt-4 md:pt-0 md:px-4 flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                03 / WORK REPOS
              </span>
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-foreground)] mt-1">
                {allProjectsCount}
              </span>
              <span className="text-xs text-[var(--color-muted)] font-mono mt-1">
                Active Projects & Case Studies
              </span>
            </div>

            {/* Signal 4: Open Source & Community */}
            <div className="pt-4 md:pt-0 md:px-4 flex flex-col">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                04 / OPEN SOURCE
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--color-plum)]">
                  {allContributionsCount}
                </span>
                <span className="font-mono text-xs font-bold text-[#f6f1e8] bg-[var(--color-plum)] px-1.5 py-0.5 border border-[var(--color-border)]">
                  OSS
                </span>
              </div>
              <span className="text-xs text-[var(--color-muted)] font-mono mt-1">
                Contribs & Maintained Repos
              </span>
            </div>

          </div>
        </Container>
      </Section>

      {/* ── SECTION 03 — "WHAT I BUILD" ──────────────────────────── */}
      <Section
        spacing="xl"
        bordered
        number="01"
        label="TECHNICAL DIRECTION"
        title="WHAT I WORK ON"
        description="Applied technical focus spanning intelligence models, resilient software systems, and data platforms. Grounded in university research and production-grade software."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.slice(0, 3).map((category, idx) => {
            const isFirst = idx === 0;
            return (
              <Card
                key={category.id}
                variant={isFirst ? "featured" : "editorial"}
                padding="lg"
                accentStrip={isFirst ? "none" : idx === 1 ? "tangerine" : "lavender"}
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-current/20 pb-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider">
                      0{idx + 1} · DOMAIN
                    </span>
                    <Badge variant={isFirst ? "outline" : "default"} size="sm" className={isFirst ? "border-[#f6f1e8]/30 text-[#f6f1e8]" : ""}>
                      {category.skills.length} SKILLS
                    </Badge>
                  </div>

                  <Heading
                    as="h3"
                    size="xl"
                    uppercase
                    className={isFirst ? "text-[#f6f1e8] mb-3" : "text-[var(--color-foreground)] mb-3"}
                  >
                    {category.label}
                  </Heading>

                  <p className={isFirst ? "text-sm text-[#f6f1e8]/80 mb-6 leading-relaxed" : "text-sm text-[var(--color-muted)] mb-6 leading-relaxed"}>
                    {category.id === "languages" && "Core foundation languages for algorithms, high-throughput backend services, and machine learning pipelines."}
                    {category.id === "ml-ai" && "Deep neural architectures, model evaluation, computer vision, and machine learning deployments."}
                    {category.id === "web" && "Responsive, accessible, production-grade applications engineered with modern web standards and App Router architectures."}
                  </p>
                </div>

                <div>
                  <div className="font-mono text-xs uppercase tracking-wider mb-2 font-bold opacity-80">
                    STACK INCLUDES:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={
                          isFirst
                            ? "font-mono text-xs bg-[#f6f1e8]/10 text-[#f6f1e8] px-2 py-0.5 border border-[#f6f1e8]/20"
                            : "font-mono text-xs bg-[var(--color-card)] text-[var(--color-foreground)] px-2 py-0.5 border border-[var(--color-border-subtle)]"
                        }
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* ── SECTION 04 — SELECTED WORK ───────────────────────────── */}
      <Section
        spacing="xl"
        bordered
        number="02"
        label="CURATED REPOSITORIES"
        title="SELECTED WORK"
        description="Representative projects from data/projects.ts demonstrating end-to-end technical execution across machine learning and full-stack engineering."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <Card
              key={project.slug}
              variant="interactive"
              padding="lg"
              className="flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4 border-b border-[var(--color-border-subtle)] pb-3">
                  <span className="font-mono text-xs font-bold text-[var(--color-muted)] uppercase tracking-wider">
                    PROJECT · 0{idx + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <Badge variant={project.status === "completed" ? "default" : "muted"} size="sm">
                      {project.status}
                    </Badge>
                    <span className="font-mono text-xs text-[var(--color-muted)]">
                      {project.year}
                    </span>
                  </div>
                </div>

                <Heading as="h3" size="xl" uppercase className="mb-3 text-[var(--color-foreground)]">
                  {project.title}
                </Heading>

                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-6 border-t border-[var(--color-border-subtle)] pt-4">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>

                {/* Card actions */}
                <div className="flex items-center justify-between pt-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    variant="arrow"
                    className="font-display text-xs font-bold uppercase tracking-wider"
                  >
                    VIEW CASE STUDY
                  </Link>

                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      external
                      variant="muted"
                      className="font-mono text-xs"
                    >
                      GITHUB ↗
                    </Link>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Section bottom link */}
        <div className="mt-10 flex justify-end">
          <Link
            href="/projects"
            variant="arrow"
            className="font-display text-sm font-bold uppercase tracking-wider text-[var(--color-plum)]"
          >
            VIEW ALL {allProjectsCount} PROJECTS IN ARCHIVE
          </Link>
        </div>
      </Section>

      {/* ── SECTION 05 — HACKATHON / BUILD SIGNAL ────────────────── */}
      <Section
        spacing="xl"
        bordered
        number="03"
        label="BUILDING UNDER PRESSURE"
        title="HACKATHONS & WINS"
        description="Hackathons represent rapid prototyping, team execution, and shipping functional systems in high-intensity timeframes."
      >
        <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] shadow-[4px_4px_0px_0px_var(--color-border)]">
          
          {/* Header Banner: Grounded Deep Plum with intentional Tangerine indicator */}
          <div className="bg-[var(--color-plum)] text-[#f6f1e8] px-6 py-3.5 border-b-2 border-[var(--color-border)] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 bg-[var(--color-accent-warm)] border border-[#ffffff]/40 inline-block" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider">
                COMPETITION ARCHIVE · REPRESENTATIVE ENTRIES
              </span>
            </div>
            <span className="font-mono text-xs font-bold uppercase text-[var(--color-accent-warm)]">
              {allHackathonsCount} TOTAL IN DATA
            </span>
          </div>

          {/* List Entries */}
          <div className="divide-y divide-[var(--color-border)]">
            {hackathons.map((hackathon) => (
              <div
                key={hackathon.slug}
                className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[var(--color-background)] transition-colors duration-150"
              >
                <div className="flex flex-col gap-1 max-w-xl">
                  <div className="flex items-center gap-2">
                    {hackathon.won && (
                      <Badge variant="tangerine" size="sm">
                        {hackathon.position ?? "WINNER"}
                      </Badge>
                    )}
                    <span className="font-mono text-xs font-bold text-[var(--color-muted)]">
                      {new Date(hackathon.date).getFullYear()}
                    </span>
                    <span className="font-mono text-xs text-[var(--color-muted)]">
                      • {hackathon.location}
                    </span>
                  </div>

                  <Heading as="h4" size="md" uppercase className="text-[var(--color-foreground)] mt-1">
                    {hackathon.name}
                  </Heading>

                  <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                    Built <span className="font-bold text-[var(--color-foreground)]">{hackathon.project.title}</span> — {hackathon.project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-1">
                    {hackathon.project.tech.map((tech) => (
                      <span key={tech} className="font-mono text-[10px] bg-[var(--color-card-subtle)] border border-[var(--color-border-subtle)] px-1.5 py-0.5 text-[var(--color-muted)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href={`/hackathons/${hackathon.slug}`}
                    variant="arrow"
                    className="font-display text-xs font-bold uppercase"
                  >
                    DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href="/hackathons"
            variant="arrow"
            className="font-display text-sm font-bold uppercase tracking-wider text-[var(--color-plum)]"
          >
            EXPLORE COMPLETE HACKATHON RECORD
          </Link>
        </div>
      </Section>

      {/* ── SECTION 06 — CURRENTLY (Live Builder Pulse) ───────────── */}
      <Section
        spacing="lg"
        bordered
        number="04"
        label="LIVE STATUS"
        title="CURRENT DISPATCH"
        description="Active focus areas and ongoing engineering endeavors derived from active profile records."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Currently Learning */}
          <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-5 flex flex-col justify-between shadow-[2px_2px_0px_0px_var(--color-border)]">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-[var(--color-muted)] tracking-widest">
                [FOCUS 01]
              </span>
              <p className="font-display text-sm font-black uppercase text-[var(--color-foreground)] mt-2">
                ACADEMICS & RESEARCH
              </p>
              <p className="text-xs text-[var(--color-muted)] mt-2 leading-relaxed">
                {profile.year} coursework at {profile.institution} in {primaryEducation?.field ?? "AI/ML"}.
              </p>
            </div>
            <span className="font-mono text-[10px] text-[var(--color-muted)] border-t border-[var(--color-border-subtle)] pt-2 mt-4 block">
              STATUS: ENROLLED
            </span>
          </div>

          {/* Currently Building */}
          <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-5 flex flex-col justify-between shadow-[2px_2px_0px_0px_var(--color-border)]">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-[var(--color-muted)] tracking-widest">
                [FOCUS 02]
              </span>
              <p className="font-display text-sm font-black uppercase text-[var(--color-foreground)] mt-2">
                BUILDING WORK
              </p>
              <p className="text-xs text-[var(--color-muted)] mt-2 leading-relaxed">
                Iterating on active repositories including {featuredProjects[1]?.title ?? "Project Beta"}.
              </p>
            </div>
            <span className="font-mono text-[10px] text-[var(--color-muted)] border-t border-[var(--color-border-subtle)] pt-2 mt-4 block">
              STATUS: IN-PROGRESS
            </span>
          </div>

          {/* Currently Contributing */}
          <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-5 flex flex-col justify-between shadow-[2px_2px_0px_0px_var(--color-border)]">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-[var(--color-success)] tracking-widest">
                [FOCUS 03]
              </span>
              <p className="font-display text-sm font-black uppercase text-[var(--color-foreground)] mt-2">
                OPEN SOURCE
              </p>
              <p className="text-xs text-[var(--color-muted)] mt-2 leading-relaxed">
                Contributing to {contributions[0]?.project ?? "open source libraries"} in Python and ML tooling.
              </p>
            </div>
            <span className="font-mono text-[10px] text-[var(--color-muted)] border-t border-[var(--color-border-subtle)] pt-2 mt-4 block">
              STATUS: MERGED RECENTLY
            </span>
          </div>

          {/* Currently Seeking */}
          <div className="border-2 border-[var(--color-border)] bg-[var(--color-plum)] text-[#f6f1e8] p-5 flex flex-col justify-between shadow-[3px_3px_0px_0px_var(--color-border)]">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-[var(--color-secondary)] tracking-widest">
                [FOCUS 04]
              </span>
              <p className="font-display text-sm font-black uppercase text-[#f6f1e8] mt-2">
                OPPORTUNITIES
              </p>
              <p className="text-xs text-[#f6f1e8]/80 mt-2 leading-relaxed">
                Available for internships, research fellowships, and technical project collaborations.
              </p>
            </div>
            <span className="font-mono text-[10px] text-[var(--color-secondary)] border-t border-[#f6f1e8]/20 pt-2 mt-4 block">
              STATUS: AVAILABLE
            </span>
          </div>

        </div>
      </Section>

      {/* ── SECTION 07 — FINAL CTA ───────────────────────────────── */}
      <Section spacing="xl">
        <Container>
          <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[6px_6px_0px_0px_var(--color-border)]">
            
            {/* Background Decorative Index Marker */}
            <div 
              aria-hidden="true" 
              className="absolute -right-6 -bottom-10 font-display font-black text-9xl text-[var(--color-border-subtle)]/30 select-none pointer-events-none"
            >
              BUILD
            </div>

            <div className="max-w-2xl relative z-10 flex flex-col gap-6">
              
              <div className="inline-flex items-center gap-2">
                <Badge variant="primary">LET&apos;S CONNECT</Badge>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
                  DIRECT ACCESS
                </span>
              </div>

              <Heading as="h2" size="3xl" uppercase className="text-[var(--color-plum)] leading-none">
                LET&apos;S BUILD SOMETHING.
              </Heading>

              <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
                Open to internships, research collaborations, and interesting technical problems in AI/ML and systems. Reach out directly or review my complete resume.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button href="/contact" variant="primary" size="lg" withArrow>
                  CONTACT ME
                </Button>
                <Button href={profile.resumeUrl} external variant="outline" size="lg">
                  VIEW RESUME ↗
                </Button>
                <Button href="/journey" variant="ghost" size="md">
                  READ THE JOURNEY →
                </Button>
              </div>

              <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-wrap gap-6 font-mono text-xs text-[var(--color-muted)]">
                <span>DIRECT EMAIL: <a href={`mailto:${profile.email}`} className="text-[var(--color-foreground)] font-bold hover:underline">{profile.email}</a></span>
                <span>BASED IN: <strong className="text-[var(--color-foreground)]">{profile.location}</strong></span>
              </div>

            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
