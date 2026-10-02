"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const primaryLinks = [
  { label: "Home", id: "home", route: "/" },
  { label: "About", id: "about", route: "/" },
  { label: "Skills", id: "skills", route: "/" },
  { label: "Experience", id: "experience", route: "/experience" },
  { label: "Projects", id: "projects", route: "/projects" },
] as const;

const moreLinks = [
  { label: "Hackathons", id: "hackathons", route: "/hackathons" },
  { label: "Journey", id: "journey", route: "/journey" },
  { label: "Achievements", id: "achievements", route: "/achievements" },
  { label: "Certifications", id: "certifications", route: "/certifications" },
  { label: "Coding", id: "coding", route: "/coding" },
  { label: "Contact", id: "contact", route: "/contact" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["home", "about", "skills", "experience", "projects", "hackathons", "journey", "achievements", "certifications", "coding", "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: 0 }
    );
    sections.forEach((section) => sectionObserver.observe(section));

    const heroObserver = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.05 }
    );
    const hero = document.getElementById("home");
    if (hero) heroObserver.observe(hero);

    return () => {
      sectionObserver.disconnect();
      heroObserver.disconnect();
    };
  }, [pathname]);

  const getHref = (link: (typeof primaryLinks)[number] | (typeof moreLinks)[number]) => {
    if (pathname === "/") return link.id === "home" ? "/#home" : `/#${link.id}`;
    return link.route === "/" ? `/#${link.id}` : link.route;
  };
  const isActive = (link: (typeof primaryLinks)[number] | (typeof moreLinks)[number]) =>
    pathname === "/" ? activeSection === link.id : pathname === link.route || pathname.startsWith(`${link.route}/`);
  const moreActive = moreLinks.some((link) => isActive(link));
  const hasScrolledSurface = scrolled || pathname !== "/";

  const closeMenu = () => {
    setMobileOpen(false);
    setMoreOpen(false);
  };

  return (
    <header className={cn("sticky top-0 z-50 border-b-2 border-[var(--color-border)] backdrop-blur-sm transition-[background-color,box-shadow] duration-300", hasScrolledSurface ? "bg-[var(--color-background)]/95 shadow-[0_3px_0_rgba(23,19,26,0.06)]" : "bg-[var(--color-background)]/80")} role="banner">
      <div className={cn("border-b border-[var(--color-border-subtle)] transition-colors duration-300", hasScrolledSurface ? "bg-[var(--color-card)]/90" : "bg-[var(--color-card)]/50")}>
        <Container size="xl" className="!max-w-[1500px]">
          <nav className="flex h-20 items-center justify-between gap-3 py-3" aria-label="Main navigation">
            <NextLink href="/" className="group flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[var(--color-foreground)]" onClick={closeMenu}>
              <span className="font-display text-xl font-black uppercase tracking-tighter text-[var(--color-foreground)] sm:text-2xl">
                KIRTHI
              </span>
              <span className="font-mono text-[11px] font-black uppercase text-[var(--color-accent-warm)]">®</span>
              <span className="hidden border-l border-[var(--color-border)] pl-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)] sm:inline-block">
                AI/ML ENG
              </span>
            </NextLink>

            <div className="hidden items-center gap-5 lg:flex">
              <ul className="flex items-center gap-2 rounded-none border border-[var(--color-border)] bg-[var(--color-background)] p-1.5" role="list">
                {primaryLinks.map((link) => {
                  const active = isActive(link);
                  return (
                    <li key={link.id}>
                      <NextLink
                        href={getHref(link)}
                        className={cn(
                          "inline-flex items-center gap-2 rounded-none border border-transparent px-3 py-2 font-display text-xs font-bold uppercase tracking-[0.14em] transition-all duration-200",
                          active
                            ? "border-[var(--color-border)] bg-[var(--color-secondary)] text-[var(--color-plum)] shadow-[2px_2px_0px_0px_var(--color-border)]"
                            : "text-[var(--color-muted)] hover:border-[var(--color-border)] hover:bg-[var(--color-card)] hover:text-[var(--color-foreground)]"
                        )}
                        aria-current={active ? (pathname === "/" ? "location" : "page") : undefined}
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
                      "inline-flex items-center gap-2 rounded-none border border-transparent px-3 py-2 font-display text-xs font-bold uppercase tracking-[0.14em] transition-all duration-200",
                      moreOpen || moreActive
                        ? "border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-plum)] shadow-[2px_2px_0px_0px_var(--color-border)]"
                        : "text-[var(--color-muted)] hover:border-[var(--color-border)] hover:bg-[var(--color-card)] hover:text-[var(--color-foreground)]"
                    )}
                  >
                    More <span aria-hidden="true" className="font-mono text-[10px]">▾</span>
                  </button>

                  {moreOpen && (
                    <div id="more-menu" aria-label="More pages" className="absolute right-0 top-full mt-3 min-w-52 border-2 border-[var(--color-border)] bg-[var(--color-background)] shadow-[4px_4px_0px_0px_var(--color-border)]">
                      <ul className="divide-y divide-[var(--color-border-subtle)]" role="list">
                        {moreLinks.map((link) => (
                          <li key={link.id}>
                            <NextLink
                              href={getHref(link)}
                              onClick={closeMenu}
                              className={cn(
                                "flex items-center justify-between px-3 py-2.5 font-display text-[11px] font-bold uppercase tracking-[0.18em] transition-colors",
                                isActive(link) ? "bg-[var(--color-card)] text-[var(--color-plum)]" : "text-[var(--color-foreground)] hover:bg-[var(--color-card)]"
                              )}
                              aria-current={isActive(link) ? "location" : undefined}
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
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border-2 border-[var(--color-border)] bg-[var(--color-accent-warm)] px-3 py-2 font-display text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-foreground)] shadow-[2px_2px_0px_0px_var(--color-border)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_var(--color-border)]">
                  Resume <span aria-hidden="true" className="font-mono">↗</span>
                </a>
              )}
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="border-2 border-[var(--color-border)] bg-[var(--color-accent-warm)] px-2.5 py-1.5 font-display text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-foreground)] shadow-[2px_2px_0px_0px_var(--color-border)]">
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
        <div id="mobile-menu" className="border-t-2 border-[var(--color-border)] bg-[var(--color-background)] py-4 lg:hidden">
          <Container size="xl">
            <ul className="flex flex-col divide-y divide-[var(--color-border-subtle)]" role="list">
              {[...primaryLinks, ...moreLinks].map((link) => {
                const active = isActive(link);
                return (
                  <li key={link.id}>
                    <NextLink
                      href={getHref(link)}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-center justify-between py-3.5 font-display text-sm font-bold uppercase tracking-[0.14em] transition-colors",
                        active ? "bg-[var(--color-card)] px-2 text-[var(--color-plum)]" : "text-[var(--color-foreground)] hover:bg-[var(--color-card)]"
                      )}
                      aria-current={active ? (pathname === "/" ? "location" : "page") : undefined}
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
