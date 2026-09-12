/**
 * components/layout/Navbar.tsx
 *
 * Responsive navigation shell.
 * Mobile: hamburger menu with full-screen overlay.
 * Desktop: horizontal nav.
 *
 * NOTE: Animation/transition polish is deferred to a later phase.
 * Functionality is complete; visual refinement is intentionally minimal.
 */

"use client";

import { useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "Journey", href: "/journey" },
  { label: "Projects", href: "/projects" },
  { label: "Hackathons", href: "/hackathons" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMobileOpen((prev) => !prev);
  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]"
      role="banner"
    >
      <Container>
        <nav
          className="flex h-14 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo / Name */}
          <NextLink
            href="/"
            className="font-bold text-base tracking-tight hover:text-[var(--color-primary)] transition-colors"
            onClick={closeMenu}
          >
            {profile.name}
          </NextLink>

          {/* Desktop links */}
          <ul
            className="hidden md:flex items-center gap-6"
            role="list"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <NextLink
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-[var(--color-primary)]",
                    pathname === link.href
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-muted)]"
                  )}
                >
                  {link.label}
                </NextLink>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-[var(--color-primary)]"
            onClick={toggleMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "block h-0.5 w-5 bg-[var(--color-foreground)] transition-transform duration-200",
                mobileOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-[var(--color-foreground)] transition-opacity duration-200",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-[var(--color-foreground)] transition-transform duration-200",
                mobileOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </button>
        </nav>
      </Container>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-background)]"
        >
          <Container>
            <ul className="flex flex-col py-4 gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NextLink
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "block py-2 text-sm font-medium transition-colors hover:text-[var(--color-primary)]",
                      pathname === link.href
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color-foreground)]"
                    )}
                  >
                    {link.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
