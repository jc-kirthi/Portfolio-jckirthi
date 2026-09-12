/**
 * components/ui/Card.tsx
 *
 * Distinctive Editorial & Neo-Brutalist Card Language:
 * 1. "editorial": Warm card surface, crisp dark border, optional offset shadow, interactive lift.
 * 2. "flat": Minimalist card with subtle hairline border.
 * 3. "featured": Deep Plum background with refined Near Black / subtle border and clean contrast.
 * 4. "archive": Raw ivory with dotted border for historical or archive records.
 * 5. "interactive": Highlighted on hover with translation and border shift.
 */

import { cn } from "@/lib/utils";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  /**
   * Card styling treatment:
   * - "editorial": Standard neo-brutalist card with crisp dark border & 3px offset shadow
   * - "flat": Clean info surface with subtle border
   * - "featured": High contrast Deep Plum card with grounded dark border
   * - "archive": Monospace/record feel with dashed/dotted border
   * - "interactive": Lifts and shifts shadow on hover
   * - "default": Maps to editorial
   * - "outlined": Transparent with border
   */
  variant?: "default" | "editorial" | "flat" | "featured" | "archive" | "interactive" | "outlined";
  /**
   * padding controls internal spacing.
   */
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  /**
   * accentStrip: Optional decorative accent color bar at top or side
   */
  accentStrip?: "lime" | "tangerine" | "lavender" | "plum" | "none";
}

const variantMap: Record<NonNullable<CardProps["variant"]>, string> = {
  default:
    "bg-[var(--color-card)] border-2 border-[var(--color-border)] shadow-[3px_3px_0px_0px_var(--color-border)]",
  editorial:
    "bg-[var(--color-card)] border-2 border-[var(--color-border)] shadow-[3px_3px_0px_0px_var(--color-border)]",
  flat:
    "bg-[var(--color-card-subtle)] border border-[var(--color-border-subtle)]",
  featured:
    "bg-[var(--color-plum)] text-[#f6f1e8] border-2 border-[var(--color-border)] shadow-[4px_4px_0px_0px_var(--color-border)]",
  archive:
    "bg-[var(--color-background)] border-2 border-dashed border-[var(--color-border)]",
  interactive:
    "bg-[var(--color-card)] border-2 border-[var(--color-border)] shadow-[3px_3px_0px_0px_var(--color-border)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_var(--color-border)] hover:border-[var(--color-foreground)]",
  outlined:
    "bg-transparent border-2 border-[var(--color-border)]",
};

const paddingMap: Record<NonNullable<CardProps["padding"]>, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
};

const accentStripMap: Record<NonNullable<CardProps["accentStrip"]>, string> = {
  none: "",
  lime: "border-t-4 border-t-[var(--color-secondary)]",
  tangerine: "border-t-4 border-t-[var(--color-accent-warm)]",
  lavender: "border-t-4 border-t-[var(--color-accent-cool)]",
  plum: "border-t-4 border-t-[var(--color-plum)]",
};

export function Card({
  children,
  className,
  as: Tag = "div",
  variant = "editorial",
  padding = "md",
  accentStrip = "none",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-none relative overflow-hidden",
        variantMap[variant],
        paddingMap[padding],
        accentStripMap[accentStrip],
        className
      )}
    >
      {children}
    </Tag>
  );
}
