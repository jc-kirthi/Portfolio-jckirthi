"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Link } from "@/components/ui/Link";
import { profile } from "@/data/profile";

const currentYear = new Date().getFullYear();

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="portfolio-footer mt-auto border-t-4 border-[var(--color-secondary)] bg-[var(--color-card)]/80 pt-12 pb-9" role="contentinfo">
      <Container>
        <div className="grid gap-10 border-b border-[var(--color-border-subtle)] pb-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-black uppercase tracking-tighter text-[var(--color-foreground)] sm:text-[2rem]">
                {profile.name}
              </span>
              <span className="font-mono text-[11px] font-bold uppercase text-[var(--color-accent-warm)]">®</span>
            </div>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-muted)]">{profile.tagline}</p>
            <p className="mt-3 font-display text-sm font-bold text-[var(--color-plum)]">{profile.title}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-6">
            <div>
              <p className="border-b border-[var(--color-border-subtle)] pb-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-foreground)]">
                Index
              </p>
              <ul className="mt-3 space-y-2" role="list">
                {[
                  ["01 / HOME", "/"],
                  ["02 / PROJECTS", pathname === "/" ? "#projects" : "/projects"],
                  ["03 / HACKATHONS", pathname === "/" ? "#hackathons" : "/hackathons"],
                  ["04 / JOURNEY", pathname === "/" ? "#journey" : "/journey"],
                  ["05 / EXPERIENCE", pathname === "/" ? "#experience" : "/experience"],
                  ["06 / CONTACT", pathname === "/" ? "#contact" : "/contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} variant="none" aria-current={pathname === href ? "page" : undefined} className={`font-display text-[12px] font-medium uppercase tracking-[0.16em] transition-all duration-200 hover:text-[var(--color-foreground)] ${pathname === href ? "translate-x-1 text-[var(--color-foreground)] before:mr-2 before:inline-block before:h-1.5 before:w-1.5 before:bg-[var(--color-secondary)] before:content-['']" : "text-[var(--color-muted)]"}`}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="border-b border-[var(--color-border-subtle)] pb-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-foreground)]">
                Signals
              </p>
              <ul className="mt-3 space-y-2" role="list">
                {[
                  ["GitHub", profile.socials.github],
                  ["LinkedIn", profile.socials.linkedin],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} external variant="none" className="font-display text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]">
                      {label} ↗
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href={`mailto:${profile.email}`} variant="none" className="font-display text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]">
                    Email ↗
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-[var(--color-border-subtle)] pt-5 text-xs text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p>Built, debugged &amp; deployed with curiosity · Next.js, React &amp; TypeScript.</p>
        </div>
      </Container>
    </footer>
  );
}
