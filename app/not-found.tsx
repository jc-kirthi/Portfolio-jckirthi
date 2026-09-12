import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Link } from "@/components/ui/Link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <Section spacing="xl">
      <Container size="sm">
        <p className="text-6xl font-extrabold tracking-tight text-[var(--color-secondary)] mb-4">
          404
        </p>
        <Heading as="h1" size="xl" className="mb-3">
          Page not found
        </Heading>
        <p className="text-[var(--color-muted)] text-sm mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" variant="none" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-primary)] text-[var(--color-background)] text-sm font-medium hover:opacity-90 transition-opacity">
          ← Back to Home
        </Link>
      </Container>
    </Section>
  );
}
