/**
 * components/ui/Button.tsx
 *
 * Neo-Brutalist & Editorial Button language.
 * Tactile, responsive, with crisp border offsets and hover translation.
 * Supports rendering as a standard button OR as an anchor/NextLink via `href`.
 */

import NextLink from "next/link";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  /**
   * variant controls visual style.
   * - "primary": Deep Plum background, crisp Near Black border, Acid Lime pop or white text.
   * - "accent": Acid Lime (#D7FF3F) high-contrast action with Near Black text.
   * - "warm": Tangerine (#FF6B35) energetic action.
   * - "outline": Crisp Near Black border, inverted fill on hover.
   * - "ghost": Borderless, subtle card background on hover.
   */
  variant?: "primary" | "accent" | "warm" | "outline" | "ghost" | "secondary";
  /**
   * size controls padding and font size.
   */
  size?: "sm" | "md" | "lg";
  /**
   * withArrow: appends an editorial arrow icon (→) with hover shift.
   */
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

export type ButtonProps =
  | (ButtonBaseProps & { href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | (ButtonBaseProps & { href: string; external?: boolean } & React.AnchorHTMLAttributes<HTMLAnchorElement>);

const variantMap: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary:
    "bg-[var(--color-plum)] text-[#f6f1e8] border-2 border-[var(--color-border)] hover:bg-[var(--color-foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_0px_var(--color-border)] hover:shadow-[4px_4px_0px_0px_var(--color-border)]",
  accent:
    "bg-[var(--color-secondary)] text-[var(--color-foreground)] font-bold border-2 border-[var(--color-border)] hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_0px_var(--color-border)] hover:shadow-[4px_4px_0px_0px_var(--color-border)]",
  warm:
    "bg-[var(--color-accent-warm)] text-[#ffffff] font-bold border-2 border-[var(--color-border)] hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_0px_var(--color-border)] hover:shadow-[4px_4px_0px_0px_var(--color-border)]",
  secondary:
    "bg-[var(--color-secondary)] text-[var(--color-foreground)] font-bold border-2 border-[var(--color-border)] hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_0px_var(--color-border)] hover:shadow-[4px_4px_0px_0px_var(--color-border)]",
  outline:
    "bg-transparent text-[var(--color-foreground)] border-2 border-[var(--color-border)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0px_0px_var(--color-border)] hover:shadow-[4px_4px_0px_0px_var(--color-border)]",
  ghost:
    "bg-transparent text-[var(--color-foreground)] border-2 border-transparent hover:border-[var(--color-border)] hover:bg-[var(--color-card)]",
};

const sizeMap: Record<NonNullable<ButtonBaseProps["size"]>, string> = {
  sm: "px-3 py-1.5 text-xs font-semibold uppercase tracking-wider",
  md: "px-5 py-2.5 text-sm font-semibold uppercase tracking-wider",
  lg: "px-7 py-3.5 text-base font-bold uppercase tracking-wider",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  withArrow = false,
  ...props
}: ButtonProps) {
  const commonClasses = cn(
    "group inline-flex items-center justify-center gap-2 rounded-none transition-all duration-150 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed font-display text-center",
    variantMap[variant],
    sizeMap[size],
    className
  );

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-150 group-hover:translate-x-1 inline-block font-mono"
        >
          →
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external, ...anchorProps } = props;
    if (external) {
      return (
        <a
          href={href}
          className={commonClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...anchorProps}
        >
          {inner}
        </a>
      );
    }
    return (
      <NextLink href={href} className={commonClasses} {...anchorProps}>
        {inner}
      </NextLink>
    );
  }

  return (
    <button className={commonClasses} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {inner}
    </button>
  );
}
