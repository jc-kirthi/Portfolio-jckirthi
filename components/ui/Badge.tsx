/**
 * components/ui/Badge.tsx
 *
 * Small label/tag component with neo-brutalist and editorial accents.
 */

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "lime" | "tangerine" | "lavender" | "muted" | "outline";
  size?: "sm" | "md";
}

const variantMap: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default:
    "bg-[var(--color-card)] text-[var(--color-foreground)] border border-[var(--color-border)]",
  primary:
    "bg-[var(--color-plum)] text-[#f6f1e8] border border-[var(--color-plum)]",
  secondary:
    "bg-[var(--color-secondary)] text-[var(--color-foreground)] font-bold border border-[var(--color-border)]",
  lime:
    "bg-[var(--color-secondary)] text-[var(--color-foreground)] font-bold border border-[var(--color-border)]",
  tangerine:
    "bg-[var(--color-accent-warm)] text-[#ffffff] font-bold border border-[var(--color-border)]",
  lavender:
    "bg-[var(--color-accent-cool)] text-[var(--color-foreground)] font-semibold border border-[var(--color-border)]",
  muted:
    "bg-[var(--color-card-subtle)] text-[var(--color-muted)] border border-[var(--color-border-subtle)]",
  outline:
    "bg-transparent text-[var(--color-foreground)] border border-[var(--color-border)]",
};

export function Badge({
  children,
  className,
  variant = "default",
  size = "md",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-none font-mono uppercase tracking-wider select-none",
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs",
        variantMap[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
