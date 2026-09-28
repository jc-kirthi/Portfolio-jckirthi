import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Link } from "@/components/ui/Link";
import { certifications } from "@/data/certifications";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Professional certifications and verified learning.",
};

export default function CertificationsPage() {
  return (
    <Section spacing="lg">
      <Container>
        <Heading as="h1" size="2xl" className="mb-2">
          Certifications
        </Heading>
        <p className="text-[var(--color-muted)] text-base mb-8">
          Professional certifications and verified learning.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              variant="interactive"
              accentStrip="lavender"
              className="flex flex-col gap-4 p-5 sm:p-6"
            >
              <div>
                <p className="font-display text-lg font-bold leading-snug text-[var(--color-foreground)]">{cert.title}</p>
                <p className="mt-2 text-sm font-medium text-[var(--color-muted)]">
                  {cert.issuer} · {formatDate(cert.date)}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                  <Badge key={s} variant="outline" size="sm">
                    {s}
                  </Badge>
                ))}
              </div>

              {cert.credentialUrl && (
                <Link
                  href={cert.credentialUrl}
                  external
                  variant="muted"
                  className="mt-auto text-sm"
                >
                  View credential →
                </Link>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
