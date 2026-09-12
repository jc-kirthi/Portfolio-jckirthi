/**
 * components/ui/Container.tsx
 *
 * Responsive content container with consistent max-width and padding.
 * Use this as the primary wrapper for page sections.
 */

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  /**
   * size controls the max-width breakpoint.
   * - "sm"  → max-w-2xl  (readable text columns)
   * - "md"  → max-w-4xl  (content + sidebar)
   * - "lg"  → max-w-6xl  (default, standard page content)
   * - "xl"  → max-w-7xl  (wide layouts)
   * - "full"→ no max-width constraint
   */
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeMap: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "",
};

export function Container({
  children,
  className,
  as: Tag = "div",
  size = "lg",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeMap[size],
        className
      )}
    >
      {children}
    </Tag>
  );
}
