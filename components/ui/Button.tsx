/**
 * components/ui/Button.tsx
 *
 * Primary button component. Intentionally minimal — no external library.
 * Styled with design tokens only.
 */

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * variant controls visual style.
   */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /**
   * size controls padding and font size.
   */
  size?: "sm" | "md" | "lg";
  /**
   * asChild is not implemented in this phase.
   * Use the `as` pattern or wrap with a link instead.
   */
}

const variantMap: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[var(--color-primary)] text-[var(--color-background)] hover:opacity-90 border border-[var(--color-primary)]",
  secondary:
    "bg-[var(--color-secondary)] text-[var(--color-foreground)] hover:opacity-90 border border-[var(--color-secondary)]",
  outline:
    "bg-transparent text-[var(--color-foreground)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
  ghost:
    "bg-transparent text-[var(--color-foreground)] border border-transparent hover:bg-[var(--color-card)]",
};

const sizeMap: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-none font-medium transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        variantMap[variant],
        sizeMap[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
