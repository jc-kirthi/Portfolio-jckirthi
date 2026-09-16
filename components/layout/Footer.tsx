import { Container } from "@/components/ui/Container";
import { Link } from "@/components/ui/Link";
import { profile } from "@/data/profile";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-[var(--color-border)] bg-[var(--color-card)]/70 pt-12 pb-10" role="contentinfo">
      <Container>
        <div className="grid gap-10 border-b border-[var(--color-border-subtle)] pb-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-black uppercase tracking-tighter text-[var(--color-foreground)]">
                {profile.name}
              </span>
              <span className="font-mono text-[11px] font-bold uppercase text-[var(--color-accent-warm)]">®</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--color-muted)]">{profile.tagline}</p>
            <div className="mt-4 inline-block border-2 border-[var(--color-border)] bg-[var(--color-plum)] px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#f6f1e8]">
              Build • Compete • Contribute
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-6">
            <div>
              <p className="border-b border-[var(--color-border-subtle)] pb-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-foreground)]">
                Index
              </p>
              <ul className="mt-3 space-y-2" role="list">
                {[
                  ["01 / HOME", "/"],
                  ["02 / PROJECTS", "/projects"],
                  ["03 / HACKATHONS", "/hackathons"],
                  ["04 / JOURNEY", "/journey"],
                  ["05 / EXPERIENCE", "/experience"],
                  ["06 / CONTACT", "/contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} variant="none" className="font-display text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="border-b border-[var(--color-border-subtle)] pb-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-foreground)]">
                Signals
              </p>
              <ul className="mt-3 space-y-2" role="list">
                {[
                  ["GitHub", profile.socials.github],
                  ["LinkedIn", profile.socials.linkedin],
                  ["LeetCode", profile.socials.leetcode],
                  ["CodeChef", profile.socials.codechef],
                  ["HackerRank", profile.socials.hackerRank],
                ]
                  .filter(([, href]) => Boolean(href))
                  .map(([label, href]) => (
                    <li key={label}>
                      <Link href={href as string} external variant="none" className="font-display text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]">
                        {label} ↗
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-[11px] font-mono text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <div>© {currentYear} {profile.name}</div>
          <div className="font-bold uppercase text-[var(--color-foreground)]">Warm ivory × deep plum × acid lime</div>
        </div>
      </Container>
    </footer>
  );
}
