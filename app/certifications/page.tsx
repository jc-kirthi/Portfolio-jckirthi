import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Link } from "@/components/ui/Link";
import { Button } from "@/components/ui/Button";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Professional certifications and verified learning.",
};

export default function CertificationsPage() {
  const validCertifications = certifications.filter((cert) => cert.title && cert.issuer);
  const totalCredentials = validCertifications.length;
  const issuers = new Set(validCertifications.map((cert) => cert.issuer)).size;
  const datedCertifications = validCertifications.filter((cert) => cert.date);
  const latestYear = datedCertifications.length
    ? Math.max(
        ...datedCertifications.map((cert) => new Date(cert.date as string).getFullYear()).filter((year) => Number.isFinite(year))
      )
    : null;
  const featured = validCertifications.slice(0, 2);
  const certificatePreviews = validCertifications.filter(
    (cert): cert is (typeof cert) & { image: string } => Boolean(cert.image)
  );

  return (
    <Section spacing="lg">
      <Container className="space-y-10">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-4">
            <span className="font-mono text-[11px] font-extrabold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              CERTIFICATIONS
            </span>
            <Heading as="h1" size="display" className="leading-none tracking-[-0.06em]">
              LEARN.
              <span className="text-[var(--color-plum)]"> VERIFY.</span>
              <br />
              BUILD.
            </Heading>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-[var(--color-muted)]">
            Verified learning, practical skill-building, and the credentials that support the work.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              TOTAL CREDENTIALS
            </p>
            <p className="mt-3 font-display text-3xl font-black text-[var(--color-foreground)]">
              {totalCredentials}
            </p>
          </div>
          <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              ISSUERS
            </p>
            <p className="mt-3 font-display text-3xl font-black text-[var(--color-foreground)]">
              {issuers}
            </p>
          </div>
          <div className="border-2 border-[var(--color-border)] bg-[var(--color-card)] p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
              LATEST YEAR
            </p>
            <p className="mt-3 font-display text-3xl font-black text-[var(--color-foreground)]">
              {latestYear ?? "—"}
            </p>
          </div>
        </div>

        {validCertifications.length > 0 && <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              FEATURED CREDENTIALS
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {featured.map((cert) => (
              <article
                key={cert.id}
                className="flex h-full flex-col gap-4 border-2 border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-[4px_4px_0px_0px_rgba(22,18,25,0.08)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {cert.issuer}
                    </p>
                    <Heading as="h2" size="lg" className="mt-2">
                      {cert.title}
                    </Heading>
                  </div>
                  {cert.date && <Badge variant="secondary">{new Date(cert.date).getFullYear()}</Badge>}
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {cert.credentialUrl ? (
                  <Link href={cert.credentialUrl} external variant="arrow" className="mt-auto text-sm">
                    VERIFY
                  </Link>
                ) : (
                  <p className="mt-auto text-sm text-[var(--color-muted)]">Credential details available on request.</p>
                )}
              </article>
            ))}
          </div>
        </div>}

        {validCertifications.length > 0 ? (
          <div className="space-y-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              CERTIFICATION ARCHIVE
            </span>

            <ol className="divide-y divide-[var(--color-border)] border-2 border-[var(--color-border)] bg-[var(--color-card)]">
              {validCertifications.map((cert, index) => (
                <li key={cert.id} className="grid gap-3 px-4 py-4 sm:grid-cols-[32px_minmax(0,1.5fr)_minmax(0,1fr)_auto] sm:items-center">
                  <span className="font-mono text-sm text-[var(--color-muted)]">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-display text-lg font-black uppercase leading-none text-[var(--color-foreground)]">
                      {cert.title}
                    </p>
                    <p className="mt-1 text-xs font-mono uppercase tracking-[0.12em] text-[var(--color-muted)]">
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="text-sm text-[var(--color-muted)]">{cert.date ? new Date(cert.date).getFullYear() : "—"}</div>
                  <div className="sm:text-right">
                    {cert.credentialUrl ? (
                      <Link href={cert.credentialUrl} external variant="arrow" className="text-xs uppercase tracking-[0.12em]">
                        VERIFY
                      </Link>
                    ) : (
                      <span className="text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">UNVERIFIED</span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div className="border-2 border-dashed border-[var(--color-border-subtle)] p-8 text-sm text-[var(--color-muted)]">
            Certification records will appear here once they are ready to publish.
          </div>
        )}

        {certificatePreviews.length > 0 && (
          <div className="space-y-4 border-2 border-[var(--color-border)] bg-[var(--color-card)] p-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              CERTIFICATE PREVIEW
            </span>
            <div className="grid gap-4 lg:grid-cols-2">
              {certificatePreviews.map((cert) => (
                <div key={cert.id} className="border border-[var(--color-border)] bg-[var(--color-background)] p-3">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate issued by ${cert.issuer}`}
                    width={1200}
                    height={800}
                    className="h-56 w-full object-cover border border-[var(--color-border)] bg-[var(--color-card)]"
                  />
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-display text-base font-black uppercase text-[var(--color-foreground)]">
                        {cert.title}
                      </p>
                      <p className="text-xs text-[var(--color-muted)]">{cert.issuer}</p>
                    </div>
                    {cert.credentialUrl && (
                      <Link href={cert.credentialUrl} external variant="arrow" className="text-xs uppercase">
                        VIEW
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-3 pt-2">
          <Button href="/projects" variant="primary" size="md" withArrow>
            VIEW MY PROJECTS
          </Button>
          <Button href="/achievements" variant="outline" size="md" withArrow>
            VIEW MY ACHIEVEMENTS
          </Button>
          <Button href="/contact" variant="ghost" size="md" withArrow>
            LET&apos;S CONNECT
          </Button>
        </div>
      </Container>
    </Section>
  );
}
