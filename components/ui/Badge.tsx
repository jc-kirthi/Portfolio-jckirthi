/**
 * components/ui/Badge.tsx
 *
 * Small label/tag component. Used for tech tags, categories, statuses.
 */

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "muted" | "outline";
}

const variantMap: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default:
    "bg-[var(--color-card)] text-[var(--color-foreground)] border border-[var(--color-border)]",
  primary:
    "bg-[var(--color-primary)] text-[var(--color-background)]",
  secondary:
    "bg-[var(--color-secondary)] text-[var(--color-foreground)]",
  muted:
    "bg-[var(--color-card)] text-[var(--color-muted)] border border-[var(--color-border)]",
  outline:
    "bg-transparent text-[var(--color-foreground)] border border-[var(--color-border)]",
};

export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-none",
        variantMap[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
