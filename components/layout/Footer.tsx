/**
 * components/layout/Footer.tsx
 *
 * Minimal site footer with navigation links, social links, and copyright.
 */

import { Container } from "@/components/ui/Container";
import { Link } from "@/components/ui/Link";
import { profile } from "@/data/profile";

const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: "Journey", href: "/journey" },
  { label: "Projects", href: "/projects" },
  { label: "Hackathons", href: "/hackathons" },
  { label: "Experience", href: "/experience" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer
      className="mt-auto border-t border-[var(--color-border)] py-10"
      role="contentinfo"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <span className="font-bold text-sm">{profile.name}</span>
            <span className="text-xs text-[var(--color-muted)]">
              {profile.title}
            </span>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    variant="muted"
                    className="text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex gap-4">
            {profile.socials.github && (
              <Link
                href={profile.socials.github}
                external
                variant="muted"
                aria-label="GitHub profile"
                className="text-xs"
              >
                GitHub
              </Link>
            )}
            {profile.socials.linkedin && (
              <Link
                href={profile.socials.linkedin}
                external
                variant="muted"
                aria-label="LinkedIn profile"
                className="text-xs"
              >
                LinkedIn
              </Link>
            )}
            {profile.socials.twitter && (
              <Link
                href={profile.socials.twitter}
                external
                variant="muted"
                aria-label="Twitter/X profile"
                className="text-xs"
              >
                Twitter
              </Link>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-[var(--color-border)] pt-4">
          <p className="text-xs text-[var(--color-muted)]">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
