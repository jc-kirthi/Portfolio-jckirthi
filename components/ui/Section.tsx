/**
 * components/ui/Section.tsx
 *
 * Page section wrapper supporting the standard editorial rhythm:
 * Optional reusable numbering + label (e.g., "01 — THE JOURNEY")
 * Title + Supporting description + Content grid
 */

import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Heading } from "./Heading";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  /**
   * spacing controls the vertical padding.
   */
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  id?: string;
  /**
   * Editorial Section Header options
   */
  number?: string;      // e.g., "01"
  label?: string;       // e.g., "PROJECTS", "THE JOURNEY"
  title?: string;       // Large section title
  description?: string; // Supporting narrative
  bordered?: boolean;   // Bottom border dividing sections
}

const spacingMap: Record<NonNullable<SectionProps["spacing"]>, string> = {
  none: "",
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-20 md:py-32",
};

export function Section({
  children,
  className,
  as: Tag = "section",
  spacing = "md",
  id,
  number,
  label,
  title,
  description,
  bordered = false,
}: SectionProps) {
  const hasHeader = number || label || title || description;

  return (
    <Tag
      id={id}
      className={cn(
        spacingMap[spacing],
        bordered && "border-b border-[var(--color-border)]",
        className
      )}
    >
      {hasHeader ? (
        <Container>
          <div className="mb-10 md:mb-14 border-b border-[var(--color-border-subtle)] pb-6">
            {(number || label) && (
              <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold tracking-wider uppercase text-[var(--color-muted)]">
                {number && (
                  <span className="text-[var(--color-foreground)] font-extrabold bg-[var(--color-card)] px-1.5 py-0.5 border border-[var(--color-border)]">
                    {number}
                  </span>
                )}
                {number && label && <span>—</span>}
                {label && <span>{label}</span>}
              </div>
            )}
            {title && (
              <Heading as="h2" size="2xl" uppercase className="mb-3">
                {title}
              </Heading>
            )}
            {description && (
              <p className="text-base md:text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
                {description}
              </p>
            )}
          </div>
          {children}
        </Container>
      ) : (
        children
      )}
    </Tag>
  );
}
