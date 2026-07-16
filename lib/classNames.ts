// lib/classNames.ts

/**
 * Utility for conditionally joining CSS class names together.
 * Filters out falsy values (false, null, undefined, empty string).
 *
 * @example
 * cn("base-class", isActive && "active", className)
 * // => "base-class active custom-class"
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
