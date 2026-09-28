/**
 * components/ui/Link.tsx
 *
 * Polymorphic link component wrapping Next.js Link.
 * Editorial hover behaviors with subtle translation and underline offsets.
 */

import NextLink from "next/link";
import { cn } from "@/lib/utils";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  /**
   * variant controls the visual style:
   * - "default": Deep plum with hover opacity
   * - "underline": Editorial thick bottom underline
   * - "arrow": Text with animated right arrow
   * - "muted": Secondary text transitioning to crisp near black
   * - "tag": Monospace label style
   * - "none": Passthrough style
   */
  variant?: "default" | "underline" | "arrow" | "muted" | "tag" | "none";
  /**
   * external: if true, opens in a new tab with safe rel attributes.
   */
  external?: boolean;
  "aria-label"?: string;
  "aria-current"?: React.AriaAttributes["aria-current"];
}

const variantMap: Record<NonNullable<LinkProps["variant"]>, string> = {
  default:
    "text-[var(--color-plum)] font-semibold hover:text-[var(--color-foreground)] transition-colors",
  underline:
    "font-medium underline decoration-2 underline-offset-4 decoration-[var(--color-primary)] hover:decoration-[var(--color-secondary)] transition-colors",
  arrow:
    "group inline-flex items-center gap-1.5 font-semibold text-[var(--color-foreground)] hover:text-[var(--color-plum)] transition-colors",
  muted:
    "text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors",
  tag:
    "font-mono text-xs uppercase text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors",
  none: "",
};

export function Link({
  href,
  children,
  className,
  variant = "default",
  external = false,
  "aria-label": ariaLabel,
  "aria-current": ariaCurrent,
}: LinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const isArrow = variant === "arrow";

  return (
    <NextLink
      href={href}
      className={cn(variantMap[variant], className)}
      aria-label={ariaLabel}
      aria-current={ariaCurrent}
      {...externalProps}
    >
      <span>{children}</span>
      {isArrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-150 group-hover:translate-x-1 font-mono text-xs inline-block"
        >
          {external ? "↗" : "→"}
        </span>
      )}
    </NextLink>
  );
}
