/**
 * components/layout/Navbar.tsx
 *
 * Editorial & Neo-Brutalist Navigation Shell:
 * Brand signature: "KIRTHI®"
 * Clean desktop links + Quick Resume / Action
 * Full mobile accessible menu drawer with keyboard focus handling
 */

"use client";

import { useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "WORK", href: "/projects" },
  { label: "JOURNEY", href: "/journey" },
  { label: "HACKATHONS", href: "/hackathons" },
  { label: "EXPERIENCE", href: "/experience" },
  { label: "CONTACT", href: "/contact" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMobileOpen((prev) => !prev);
  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className="sticky top-0 z-50 border-b-2 border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-sm"
      role="banner"
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo / Brand signature */}
          <NextLink
            href="/"
            className="group flex items-baseline gap-1.5 focus-visible:outline-2 focus-visible:outline-[var(--color-foreground)]"
            onClick={closeMenu}
          >
            <span className="font-display font-black text-xl tracking-tighter text-[var(--color-foreground)] uppercase">
              KIRTHI
            </span>
            <span className="text-[11px] font-mono font-bold text-[var(--color-accent-warm)]">
              ®
            </span>
            <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-widest text-[var(--color-muted)] pl-2 border-l border-[var(--color-border-subtle)]">
              AI/ML ENG
            </span>
          </NextLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6" role="list">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <NextLink
                      href={link.href}
                      className={cn(
                        "font-display text-xs font-bold tracking-wider uppercase transition-colors duration-150 py-1 border-b-2",
                        isActive
                          ? "text-[var(--color-plum)] border-[var(--color-secondary)] bg-[var(--color-card)] px-2"
                          : "text-[var(--color-muted)] border-transparent hover:text-[var(--color-foreground)] hover:border-[var(--color-border)]"
                      )}
                    >
                      {link.label}
                    </NextLink>
                  </li>
                );
              })}
            </ul>

            {/* Quick Resume Link */}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--color-secondary)] text-[var(--color-foreground)] font-display text-xs font-bold uppercase tracking-wider border border-[var(--color-border)] shadow-[2px_2px_0px_0px_var(--color-border)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--color-border)] transition-all"
            >
              <span>RESUME</span>
              <span className="font-mono text-xs" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 bg-[var(--color-secondary)] text-[var(--color-foreground)] font-display text-[11px] font-bold uppercase border border-[var(--color-border)] shadow-[1px_1px_0px_0px_var(--color-border)]"
            >
              CV ↗
            </a>
            <button
              className="flex flex-col justify-center gap-1.5 w-9 h-9 p-2 border border-[var(--color-border)] bg-[var(--color-card)] focus-visible:outline-2 focus-visible:outline-[var(--color-foreground)]"
              onClick={toggleMenu}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span
                className={cn(
                  "block h-0.5 w-full bg-[var(--color-foreground)] transition-transform duration-200",
                  mobileOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-full bg-[var(--color-foreground)] transition-opacity duration-200",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-full bg-[var(--color-foreground)] transition-transform duration-200",
                  mobileOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t-2 border-[var(--color-border)] bg-[var(--color-background)] py-6 shadow-[0px_8px_0px_0px_rgba(23,19,26,0.08)]"
        >
          <Container>
            <ul className="flex flex-col divide-y divide-[var(--color-border-subtle)]" role="list">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <NextLink
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-center justify-between py-3.5 font-display text-sm font-bold uppercase tracking-wider transition-colors",
                        isActive
                          ? "text-[var(--color-plum)] bg-[var(--color-card)] px-3 border-l-4 border-l-[var(--color-secondary)]"
                          : "text-[var(--color-foreground)] hover:bg-[var(--color-card)] hover:px-2"
                      )}
                    >
                      <span>{link.label}</span>
                      <span className="font-mono text-xs text-[var(--color-muted)]">→</span>
                    </NextLink>
                  </li>
                );
              })}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
