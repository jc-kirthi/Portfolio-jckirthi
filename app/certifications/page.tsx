import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Badge } from "@/components/ui/Badge";
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
        <p className="text-[var(--color-muted)] text-sm mb-8">
          Professional certifications and verified learning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="border border-[var(--color-border)] p-5 flex flex-col gap-3"
            >
              <div>
                <p className="text-sm font-medium mb-1">{cert.title}</p>
                <p className="text-xs text-[var(--color-muted)]">
                  {cert.issuer} · {formatDate(cert.date)}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                  <Badge key={s} variant="outline">
                    {s}
                  </Badge>
                ))}
              </div>

              {cert.credentialUrl && (
                <Link
                  href={cert.credentialUrl}
                  external
                  variant="muted"
                  className="text-xs mt-auto"
                >
                  View credential →
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
