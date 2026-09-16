/**
 * lib/utils.ts
 *
 * Shared utility functions.
 */

/**
 * Merge class names together, filtering out falsy values.
 * A lightweight alternative to clsx/cn for simple use cases.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a date string (ISO 8601) into a human-readable format.
 * e.g. "2024-03-15" → "March 2024"
 */
export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = { month: "long", year: "numeric" }
): string {
  if (!dateString || dateString === "Details available on request") {
    return dateString;
  }

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString("en-US", options);
}

/**
 * Calculate duration between two dates for display.
 * e.g. "May 2024 – Jul 2024"
 */
export function formatDateRange(
  startDate: string,
  endDate?: string
): string {
  if (!startDate) return "Details available on request";
  const start = formatDate(startDate, { month: "short", year: "numeric" });
  if (!endDate) return `${start} – Present`;
  const end = formatDate(endDate, { month: "short", year: "numeric" });
  return `${start} – ${end}`;
}

/**
 * Clamp a string to a maximum character length with ellipsis.
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength).trim()}…`;
}
