/**
 * components/ui/Heading.tsx
 *
 * Typographic heading component with semantic and visual size separation.
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
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  /**
   * weight: font weight variant.
   */
  weight?: "medium" | "semibold" | "bold" | "extrabold";
}

const sizeMap: Record<NonNullable<HeadingProps["size"]>, string> = {
  xs: "text-sm",
  sm: "text-base",
  md: "text-lg md:text-xl",
  lg: "text-xl md:text-2xl",
  xl: "text-2xl md:text-3xl",
  "2xl": "text-3xl md:text-4xl lg:text-5xl",
  "3xl": "text-4xl md:text-5xl lg:text-6xl",
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
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "tracking-tight",
        sizeMap[size],
        weightMap[weight],
        className
      )}
    >
      {children}
    </Tag>
  );
}
