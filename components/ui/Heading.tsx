/**
 * components/ui/Heading.tsx
 *
 * Typographic heading component with semantic and visual size separation.
 * Powered by --font-display (Space Grotesk) with editorial proportions.
 */

import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  /**
   * as: the HTML element to render.
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * size: the visual size (independent of semantic level).
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "display";
  /**
   * weight: font weight variant.
   */
  weight?: "medium" | "semibold" | "bold" | "extrabold";
  /**
   * uppercase: force uppercase editorial display
   */
  uppercase?: boolean;
}

const sizeMap: Record<NonNullable<HeadingProps["size"]>, string> = {
  xs: "text-xs tracking-wider",
  sm: "text-sm md:text-base tracking-tight",
  md: "text-lg md:text-xl tracking-tight",
  lg: "text-xl md:text-2xl lg:text-3xl tracking-tight",
  xl: "text-2xl md:text-4xl tracking-tighter",
  "2xl": "text-4xl md:text-5xl lg:text-6xl tracking-tighter",
  "3xl": "text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-none",
  display: "text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9]",
};

const weightMap: Record<NonNullable<HeadingProps["weight"]>, string> = {
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

export function Heading({
  children,
  className,
  as: Tag = "h2",
  size = "xl",
  weight = "bold",
  uppercase = false,
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display text-[var(--color-foreground)]",
        sizeMap[size],
        weightMap[weight],
        uppercase && "uppercase",
        className
      )}
    >
      {children}
    </Tag>
  );
}
