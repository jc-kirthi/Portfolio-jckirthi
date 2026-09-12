/**
 * components/layout/Footer.tsx
 *
 * Publication-style editorial footer.
 * Clean, structured, resembling the colophon of a designed product.
 */

import { Container } from "@/components/ui/Container";
import { Link } from "@/components/ui/Link";
import { profile } from "@/data/profile";

const currentYear = new Date().getFullYear();

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const navSections: FooterSection[] = [
  {
    title: "INDEX",
    links: [
      { label: "01 / WORK", href: "/projects" },
      { label: "02 / JOURNEY", href: "/journey" },
      { label: "03 / HACKATHONS", href: "/hackathons" },
      { label: "04 / EXPERIENCE", href: "/experience" },
      { label: "05 / ACHIEVEMENTS", href: "/achievements" },
      { label: "06 / CERTIFICATIONS", href: "/certifications" },
    ],
  },
  {
    title: "SIGNALS",
    links: [
      { label: "GITHUB", href: profile.socials.github, external: true },
      { label: "LINKEDIN", href: profile.socials.linkedin, external: true },
      { label: "TWITTER / X", href: profile.socials.twitter, external: true },
      { label: "LEETCODE", href: profile.socials.leetcode, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer
      className="mt-auto border-t-2 border-[var(--color-border)] bg-[var(--color-card)]/50 pt-16 pb-12"
      role="contentinfo"
    >
      <Container>
        {/* Top Editorial Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[var(--color-border-subtle)]">
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex items-baseline gap-2">
              <span className="font-display font-black text-2xl tracking-tighter uppercase text-[var(--color-foreground)]">
                {profile.name}
              </span>
              <span className="text-xs font-mono font-bold text-[var(--color-accent-warm)]">
                ®
              </span>
            </div>
            <p className="text-sm text-[var(--color-muted)] max-w-md leading-relaxed">
              {profile.tagline}
            </p>
            <div className="pt-2">
              <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-wider bg-[var(--color-plum)] text-[#f6f1e8] px-2.5 py-1 border border-[var(--color-border)]">
                BUILD • COMPETE • CONTRIBUTE • GROW
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-8">
            {navSections.map((sec) => (
              <div key={sec.title} className="flex flex-col gap-3">
                <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[var(--color-foreground)] border-b border-[var(--color-border-subtle)] pb-1">
                  {sec.title}
                </span>
                <ul className="flex flex-col gap-2" role="list">
                  {sec.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        external={link.external}
                        variant="none"
                        className="font-display text-xs font-medium text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors inline-block"
                      >
                        {link.label} {link.external ? "↗" : ""}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[11px] text-[var(--color-muted)]">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {profile.name}</span>
            <span>·</span>
            <span>3RD YEAR AI/ML ENGINEERING</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[var(--color-foreground)] font-bold">
              WARM IVORY × DEEP PLUM × ACID LIME
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
