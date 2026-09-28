"use client";

import { useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Hackathons", href: "/hackathons" },
  { label: "Journey", href: "/journey" },
  { label: "Experience", href: "/experience" },
] as const;

const moreLinks = [
  { label: "Achievements", href: "/achievements" },
  { label: "Certifications", href: "/certifications" },
  { label: "Coding", href: "/coding" },
  { label: "Contact", href: "/contact" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const closeMenu = () => {
    setMobileOpen(false);
    setMoreOpen(false);
  };

  return (
    <header data-entrance="" className="sticky top-0 z-50 border-b-2 border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-sm" role="banner">
      <div className="border-b border-[var(--color-border-subtle)] bg-[var(--color-card)]/80">
        <Container size="xl" className="!max-w-[1500px]">
          <nav className="flex h-20 items-center justify-between gap-3 py-3" aria-label="Main navigation">
            <NextLink href="/" className="group flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[var(--color-foreground)]" onClick={closeMenu}>
              <span className="font-display text-xl font-black uppercase tracking-tighter text-[var(--color-foreground)] sm:text-2xl">
                KIRTHI
              </span>
              <span className="font-mono text-[11px] font-black uppercase text-[var(--color-accent-warm)]">®</span>
              <span className="hidden border-l border-[var(--color-border)] pl-2 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)] sm:inline-block">
                AI/ML ENG
              </span>
            </NextLink>

            <div className="hidden items-center gap-5 md:flex">
              <ul className="flex items-center gap-2 rounded-none border border-[var(--color-border)] bg-[var(--color-background)] p-1.5" role="list">
                {primaryLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <li key={link.href}>
                      <NextLink
                        href={link.href}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-none border border-transparent px-3 py-2 font-display text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-200",
                          active
                            ? "border-[var(--color-border)] bg-[var(--color-secondary)] text-[var(--color-plum)] shadow-[2px_2px_0px_0px_var(--color-border)]"
                            : "text-[var(--color-muted)] hover:border-[var(--color-border)] hover:bg-[var(--color-card)] hover:text-[var(--color-foreground)]"
                        )}
                      >
                        {link.label}
                      </NextLink>
                    </li>
                  );
                })}
                <li className="relative">
                  <button
                    type="button"
                    aria-expanded={moreOpen}
                    aria-controls="more-menu"
                    onClick={() => setMoreOpen((value) => !value)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-none border border-transparent px-3 py-2 font-display text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-200",
                      moreOpen
                        ? "border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-plum)] shadow-[2px_2px_0px_0px_var(--color-border)]"
                        : "text-[var(--color-muted)] hover:border-[var(--color-border)] hover:bg-[var(--color-card)] hover:text-[var(--color-foreground)]"
                    )}
                  >
                    More <span aria-hidden="true" className="font-mono text-[10px]">▾</span>
                  </button>

                  {moreOpen && (
                    <div id="more-menu" role="menu" className="absolute right-0 top-full mt-3 min-w-52 border-2 border-[var(--color-border)] bg-[var(--color-background)] shadow-[4px_4px_0px_0px_var(--color-border)]">
                      <ul className="divide-y divide-[var(--color-border-subtle)]" role="list">
                        {moreLinks.map((link) => (
                          <li key={link.href}>
                            <NextLink
                              href={link.href}
                              onClick={closeMenu}
                              className={cn(
                                "flex items-center justify-between px-3 py-2.5 font-display text-[11px] font-bold uppercase tracking-[0.18em] transition-colors",
                                isActive(link.href) ? "bg-[var(--color-card)] text-[var(--color-plum)]" : "text-[var(--color-foreground)] hover:bg-[var(--color-card)]"
                              )}
                            >
                              <span>{link.label}</span>
                              <span aria-hidden="true" className="font-mono text-[10px]">→</span>
                            </NextLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              </ul>

              {profile.resumeUrl && (
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border-2 border-[var(--color-border)] bg-[var(--color-accent-warm)] px-3 py-2 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-[#fff9f3] shadow-[2px_2px_0px_0px_var(--color-border)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_var(--color-border)]">
                  Resume <span aria-hidden="true" className="font-mono">↗</span>
                </a>
              )}
            </div>

            <div className="flex items-center gap-3 md:hidden">
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="border-2 border-[var(--color-border)] bg-[var(--color-accent-warm)] px-2.5 py-1.5 font-display text-[10px] font-bold uppercase tracking-[0.15em] text-[#fff9f3] shadow-[2px_2px_0px_0px_var(--color-border)]">
                  CV ↗
                </a>
              )}
              <button
                type="button"
                className="flex h-10 w-10 flex-col justify-center gap-1.5 border-2 border-[var(--color-border)] bg-[var(--color-card)] p-2.5 focus-visible:outline-2 focus-visible:outline-[var(--color-foreground)]"
                onClick={() => setMobileOpen((value) => !value)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                <span className={cn("block h-0.5 w-full bg-[var(--color-foreground)] transition-transform duration-200", mobileOpen && "translate-y-2 rotate-45")} />
                <span className={cn("block h-0.5 w-full bg-[var(--color-foreground)] transition-opacity duration-200", mobileOpen && "opacity-0")} />
                <span className={cn("block h-0.5 w-full bg-[var(--color-foreground)] transition-transform duration-200", mobileOpen && "-translate-y-2 -rotate-45")} />
              </button>
            </div>
          </nav>
        </Container>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t-2 border-[var(--color-border)] bg-[var(--color-background)] py-4 md:hidden">
          <Container size="xl">
            <ul className="flex flex-col divide-y divide-[var(--color-border-subtle)]" role="list">
              {[...primaryLinks, ...moreLinks].map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <NextLink
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-center justify-between py-3.5 font-display text-sm font-bold uppercase tracking-[0.18em] transition-colors",
                        active ? "bg-[var(--color-card)] px-2 text-[var(--color-plum)]" : "text-[var(--color-foreground)] hover:bg-[var(--color-card)]"
                      )}
                    >
                      <span>{link.label}</span>
                      <span aria-hidden="true" className="font-mono text-xs">→</span>
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
