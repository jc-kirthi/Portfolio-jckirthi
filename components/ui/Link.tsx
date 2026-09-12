/**
 * components/ui/Link.tsx
 *
 * Polymorphic link component wrapping Next.js Link.
 * Handles both internal and external links consistently.
 */

import NextLink from "next/link";
import { cn } from "@/lib/utils";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  /**
   * variant controls the visual style.
   */
  variant?: "default" | "underline" | "muted" | "none";
  /**
   * external: if true, opens in a new tab with safe rel attributes.
   */
  external?: boolean;
  "aria-label"?: string;
}

const variantMap: Record<NonNullable<LinkProps["variant"]>, string> = {
  default:
    "text-[var(--color-primary)] hover:opacity-80 transition-opacity",
  underline:
    "underline underline-offset-4 hover:text-[var(--color-primary)] transition-colors",
  muted:
    "text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors",
  none: "",
};

export function Link({
  href,
  children,
  className,
  variant = "default",
  external = false,
  "aria-label": ariaLabel,
}: LinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <NextLink
      href={href}
      className={cn(variantMap[variant], className)}
      aria-label={ariaLabel}
      {...externalProps}
    >
      {children}
    </NextLink>
  );
}
