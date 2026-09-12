/**
 * components/ui/Section.tsx
 *
 * Page section wrapper with consistent vertical rhythm.
 */

import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  /**
   * spacing controls the vertical padding.
   * - "sm"  → py-8 md:py-12
   * - "md"  → py-12 md:py-16  (default)
   * - "lg"  → py-16 md:py-24
   * - "xl"  → py-20 md:py-32
   * - "none"→ no padding
   */
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  id?: string;
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
}: SectionProps) {
  return (
    <Tag id={id} className={cn(spacingMap[spacing], className)}>
      {children}
    </Tag>
  );
}
