import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

export const metadata: Metadata = {
  title: "Journey",
  description: "My engineering journey — education, milestones, and what drives me.",
};

export default function JourneyPage() {
  return (
    <Section spacing="lg">
      <Container>
        <Heading as="h1" size="2xl" className="mb-4">
          The Journey
        </Heading>
        <p className="text-[var(--color-muted)] text-sm">
          — This page will be implemented in Phase 2.
        </p>
      </Container>
    </Section>
  );
}
