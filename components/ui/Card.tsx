/**
 * components/ui/Card.tsx
 *
 * Content card component. Intentionally not over-styled.
 * Border-led design — no heavy shadows or gradients.
 */

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  /**
   * variant controls the card surface style.
   */
  variant?: "default" | "outlined" | "flat";
  /**
   * padding controls internal spacing.
   */
  padding?: "none" | "sm" | "md" | "lg";
}

const variantMap: Record<NonNullable<CardProps["variant"]>, string> = {
  default:
    "bg-[var(--color-card)] border border-[var(--color-border)]",
  outlined:
    "bg-transparent border border-[var(--color-border)]",
  flat:
    "bg-[var(--color-card)]",
};

const paddingMap: Record<NonNullable<CardProps["padding"]>, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  as: Tag = "div",
  variant = "default",
  padding = "md",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-none",
        variantMap[variant],
        paddingMap[padding],
        className
      )}
    >
      {children}
    </Tag>
  );
}
