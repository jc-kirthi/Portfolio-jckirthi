import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { ProjectLinks } from "@/components/projects/ProjectLinks";

import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { hackathons } from "@/data/hackathons";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { skills } from "@/data/skills";
import { achievements } from "@/data/achievements";
import { certifications } from "@/data/certifications";
import { contributions, ownProjects } from "@/data/openSource";
import { getFeaturedHackathons } from "@/lib/hackathons";
import { getExperiencePeriod } from "@/lib/experience";
import { formatDate } from "@/lib/utils";
import { ExperienceRow } from "@/components/experience/ExperienceRow";
import { FeaturedHackathonCard } from "@/components/hackathons/FeaturedHackathonCard";

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
  const featuredHackathons = getFeaturedHackathons().slice(0, 2);

  const profileLinks = [
    { label: "GitHub", href: profile.socials.github },
    { label: "LinkedIn", href: profile.socials.linkedin },
    { label: "LeetCode", href: profile.socials.leetcode },
    { label: "CodeChef", href: profile.socials.codechef },
    { label: "HackerRank", href: profile.socials.hackerRank },
  ].filter((link) => Boolean(link.href));

  return (
    <>
      <Section id="home" spacing="xl" bordered className="relative overflow-hidden">
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
                <Button href="#experience" variant="primary" size="md" withArrow magnetic>
                  VIEW WORK
                </Button>
                <Button href="#projects" variant="outline" size="md" withArrow>
                  VIEW PROJECTS
                </Button>
                <Button href={profile.resumeUrl} variant="accent" size="md" withArrow download="Kirthi-JC-Resume.pdf" aria-label="Download Kirthi JC's resume PDF">
                  DOWNLOAD RESUME
                </Button>
                <Button href="#contact" variant="secondary" size="md" withArrow>
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
                    <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
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
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                          AI/ML engineering student
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 flex items-end justify-between gap-3">
                      <div className="space-y-1">
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">Focus</p>
                        <p className="font-display text-sm font-black uppercase text-[var(--color-plum)]">Applied AI</p>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">Current</p>
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

      <Section id="signals" spacing="md" bordered className="bg-[var(--color-card)]/80">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="border-2 border-[var(--color-border)] bg-[var(--color-background)] p-4 shadow-[3px_3px_0px_0px_var(--color-border)]">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">Hackathons</p>
              <p className="mt-2 font-display text-4xl font-black text-[var(--color-accent-warm)]">10+</p>
            </div>
            <div className="border-2 border-[var(--color-border)] bg-[var(--color-background)] p-4 shadow-[3px_3px_0px_0px_var(--color-border)]">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">Wins</p>
              <p className="mt-2 font-display text-4xl font-black text-[var(--color-plum)]">{hackathonWins}</p>
            </div>
            <div className="border-2 border-[var(--color-border)] bg-[var(--color-background)] p-4 shadow-[3px_3px_0px_0px_var(--color-border)]">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">CGPA · 2ND YEAR</p>
              <p className="mt-2 font-display text-4xl font-black text-[var(--color-foreground)]">{primaryEducation?.cgpa ?? "9.4"}</p>
            </div>
            <div className="border-2 border-[var(--color-border)] bg-[var(--color-background)] p-4 shadow-[3px_3px_0px_0px_var(--color-border)]">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">Projects</p>
              <p className="mt-2 font-display text-4xl font-black text-[var(--color-foreground)]">{allProjectsCount}</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="about" spacing="xl" bordered number="01" label="A little context" title="About" description={profile.bio}>
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <p className="max-w-3xl border-l-4 border-[var(--color-secondary)] pl-5 font-display text-xl font-bold leading-snug text-[var(--color-plum)] sm:text-2xl">
            {profile.tagline}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["STUDYING", profile.institution],
              ["CURRENT YEAR", profile.year],
              ["BASED IN", profile.location],
              ["BUILDING AT", "AI / ML · WEB · DATA"],
            ].map(([label, value]) => (
              <div key={label} className="border-t-2 border-[var(--color-border)] pt-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">{label}</p>
                <p className="mt-1 font-display text-sm font-bold uppercase text-[var(--color-foreground)]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="skills" spacing="xl" bordered number="02" label="What I work with" title="Skills" description="A practical toolkit across programming, applied AI, web development, and the tools that help ideas ship.">
        <div className="grid gap-x-8 md:grid-cols-2">
          {skills.map((category, index) => (
            <article key={category.id} data-scroll-reveal="" className="border-t-2 border-[var(--color-border)] py-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-black uppercase text-[var(--color-plum)]">{category.label}</h3>
                <span className="font-mono text-xs font-bold text-[var(--color-accent-warm)]">0{index + 1}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill.name} variant="outline" size="sm">{skill.name}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="experience" spacing="xl" bordered number="03" label="How the work grows" title="Experience" description="A progression built through projects, competitions, and collaborative contribution.">
        <div className="mb-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {experience.map((item) => (
            <div key={item.id} className="border-l-2 border-[var(--color-accent-cool)] bg-[var(--color-card)] px-4 py-3">
              <p className="font-mono text-xs font-bold uppercase text-[var(--color-plum)]">{getExperiencePeriod(item)}</p>
              <p className="mt-1 font-display text-sm font-bold uppercase">{item.company}</p>
            </div>
          ))}
          <div className="border-l-2 border-[var(--color-secondary)] bg-[var(--color-card)] px-4 py-3">
            <p className="font-mono text-xs font-bold uppercase text-[var(--color-plum)]">{profile.year}</p>
            <p className="mt-1 font-display text-sm font-bold uppercase">Learning by building</p>
          </div>
        </div>
        <div className="border-t-2 border-[var(--color-border)]">
          {experience.map((item, index) => <ExperienceRow key={item.id} item={item} index={index} />)}
        </div>
      </Section>

      <Section id="projects" spacing="xl" bordered number="04" label="Technical direction" title="Featured work" description="Applied engineering across civic-tech, privacy-preserving systems, machine learning, and product-driven problem solving.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Card key={project.slug} variant="interactive" padding="lg" className="group flex h-full flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    Project 0{index + 1}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">{project.year}</span>
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

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border-subtle)] pt-4">
                  <Link href={`/projects/${project.slug}`} variant="arrow" className="font-display text-xs font-bold uppercase tracking-[0.12em]">
                    Case study
                  </Link>
                  <ProjectLinks project={project} variant="inline" />
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-9 flex justify-end">
          <Button href="/projects" variant="outline" size="sm" withArrow>Explore all projects</Button>
        </div>
      </Section>

      <Section id="community" spacing="xl" bordered number="05" label="Portfolio signals" title="Open source + community" description="Technical contribution and practical engineering are part of the portfolio story beyond classwork and competitions.">
        <div className="grid gap-6 md:grid-cols-3">
          <Card variant="default" padding="lg" className="border-2 border-[var(--color-border)] bg-[var(--color-card)]">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">Contributions</p>
            <p className="mt-3 font-display text-5xl font-black text-[var(--color-plum)]">{allContributionsCount}</p>
            <p className="mt-3 text-sm text-[var(--color-muted)]">Open-source and community-oriented development activity across engineering and learning initiatives.</p>
          </Card>
          <Card variant="default" padding="lg" className="border-2 border-[var(--color-border)] bg-[var(--color-card)]">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">Core focus</p>
            <p className="mt-3 font-display text-3xl font-black uppercase text-[var(--color-foreground)]">AI & Data</p>
            <p className="mt-3 text-sm text-[var(--color-muted)]">From civic intelligence and identity systems to trustable product prototypes and rapid experimentation.</p>
          </Card>
          <Card variant="default" padding="lg" className="border-2 border-[var(--color-border)] bg-[var(--color-card)]">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">Current chapter</p>
            <p className="mt-3 font-display text-3xl font-black uppercase text-[var(--color-foreground)]">Building</p>
            <p className="mt-3 text-sm text-[var(--color-muted)]">Designing useful systems, shipping real prototypes, and continuing to grow through technical challenges.</p>
          </Card>
        </div>
      </Section>

      <Section id="hackathons" spacing="xl" bordered number="06" label="Rapid prototypes" title="Building under pressure" description="A small selection from the competition archive: focused teams, short clocks, and ideas made tangible.">
        <div className="flex flex-col gap-6">
          {featuredHackathons.map((hackathon, index) => (
            <FeaturedHackathonCard key={hackathon.slug} hackathon={hackathon} index={index} />
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <Button href="/hackathons" variant="outline" size="sm" withArrow>Open competition archive</Button>
        </div>
      </Section>

      <Section id="journey" spacing="xl" bordered number="07" label="Learning by building" title="The journey" description="An academic path in AI and machine learning, with each stage adding a new reason to build.">
        <div className="relative ml-2 border-l-2 border-[var(--color-border-subtle)] pl-6 sm:ml-4 sm:pl-9">
          {education.map((item) => (
            <article key={item.id} data-scroll-reveal="" className="relative border-b border-[var(--color-border-subtle)] py-5 first:pt-0 last:border-b-0">
              <span aria-hidden="true" className="absolute -left-[33px] top-6 h-3 w-3 border-2 border-[var(--color-border)] bg-[var(--color-secondary)] sm:-left-[46px]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-black uppercase text-[var(--color-plum)]">{item.field || item.degree}</h3>
                <span className="font-mono text-xs font-bold text-[var(--color-accent-warm)]">{item.startYear}{item.endYear && item.endYear !== item.startYear ? ` — ${item.endYear}` : ""}</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-[var(--color-foreground)]">{item.institution}</p>
              {item.cgpa && <p className="mt-2 font-mono text-xs uppercase text-[var(--color-muted)]">{item.gradeLabel ?? "CGPA"}: {item.cgpa}</p>}
              {item.activities?.length ? <p className="mt-2 text-sm text-[var(--color-muted)]">{item.activities.join(" · ")}</p> : null}
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <Link href="/journey" variant="arrow" className="font-mono text-xs font-bold uppercase">More about the journey</Link>
        </div>
      </Section>

      <Section id="achievements" spacing="xl" bordered number="08" label="Selected recognition" title="Achievements" description="Milestones earned through building, competing, and showing up for technical communities.">
        <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] shadow-[3px_3px_0px_0px_var(--color-border)]">
          {achievements.slice(0, 4).map((achievement) => (
            <article key={achievement.id} className="grid gap-2 border-b border-[var(--color-border-subtle)] p-4 last:border-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:p-5">
              <div>
                <h3 className="font-display text-base font-bold uppercase">{achievement.title}</h3>
                <p className="mt-1 font-mono text-xs text-[var(--color-muted)]">{achievement.issuer} · {formatDate(achievement.date)}</p>
              </div>
              <Badge variant={achievement.category === "competition" ? "tangerine" : "lavender"}>{achievement.category}</Badge>
            </article>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Link href="/achievements" variant="arrow" className="font-mono text-xs font-bold uppercase">Full achievement archive</Link>
        </div>
      </Section>

      <Section id="certifications" spacing="xl" bordered number="09" label="Continued learning" title="Certifications">
        <div className="grid gap-4 md:grid-cols-3">
          {certifications.slice(0, 3).map((certification) => (
            <article key={certification.id} className="flex min-h-36 flex-col border-t-4 border-[var(--color-accent-cool)] bg-[var(--color-card)] p-4">
              <h3 className="font-display text-base font-bold leading-snug">{certification.title}</h3>
              <p className="mt-auto pt-4 font-mono text-xs text-[var(--color-muted)]">{certification.issuer} · {formatDate(certification.date)}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Link href="/certifications" variant="arrow" className="font-mono text-xs font-bold uppercase">All certifications</Link>
        </div>
      </Section>

      <Section id="coding" spacing="xl" bordered number="10" label="Practice is part of the process" title="Problem solving" description="Problem solving is part of the build process, from algorithm practice to shipping public work.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {profileLinks.filter((link) => link.label !== "LinkedIn").map((link, index) => (
            <Link key={link.label} href={link.href} external variant="none" className="group flex items-center justify-between border-2 border-[var(--color-border)] bg-[var(--color-card)] p-4 shadow-[2px_2px_0px_0px_var(--color-border)] transition-transform hover:-translate-y-1">
              <span>
                <span className="block font-mono text-[10px] text-[var(--color-accent-warm)]">0{index + 1} / PROFILE</span>
                <span className="mt-1 block font-display text-lg font-black uppercase text-[var(--color-plum)]">{link.label}</span>
              </span>
              <span aria-hidden="true" className="font-mono text-lg transition-transform group-hover:translate-x-1">↗</span>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Link href="/coding" variant="arrow" className="font-mono text-xs font-bold uppercase">Coding profiles</Link>
        </div>
      </Section>

      <Section id="contact" spacing="xl" bordered number="11" label="The next chapter" title="Let’s build something useful." description="Open to internships, collaborations, hackathons, and interesting engineering problems.">
        <div className="mb-6 flex flex-col gap-5 border-2 border-[var(--color-border)] border-l-4 border-l-[var(--color-secondary)] bg-[var(--color-card)] p-5 shadow-[3px_3px_0px_0px_var(--color-border)] sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="min-w-0">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--color-plum)]">Full profile · PDF · 2026</p>
            <h3 className="mt-2 font-display text-lg font-black uppercase tracking-tight text-[var(--color-foreground)]">Want the complete overview?</h3>
            <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">
              A concise look at my technical skills, projects, experience, and recognition.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button href={profile.resumeUrl} external variant="outline" size="sm" withArrow aria-label="View Kirthi JC's resume PDF in a new tab">
              View resume
            </Button>
            <Button href={profile.resumeUrl} variant="accent" size="sm" download="Kirthi-JC-Resume.pdf" aria-label="Download Kirthi JC's resume PDF">
              <>Download PDF <span aria-hidden="true" className="font-mono">↓</span></>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-7 border-l-4 border-[var(--color-secondary)] bg-[var(--color-card)] p-5 sm:flex-row sm:items-center sm:p-7">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">A direct line</p>
            <Link href={`mailto:${profile.email}`} variant="underline" className="mt-2 block break-all font-display text-lg font-bold text-[var(--color-plum)] sm:text-xl">{profile.email}</Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={`mailto:${profile.email}`} variant="primary" size="md" withArrow>Email me</Button>
            <Button href={profile.socials.linkedin} variant="outline" size="md" withArrow>LinkedIn</Button>
            <Button href={profile.socials.github} external variant="outline" size="md" withArrow>GitHub</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
