// components/layout/navbar/NavLinkList.tsx

import Link from "next/link";

import { cn } from "@/lib/classNames";
import type { NavigationLink } from "@/types/navigation";

type NavLinkListProps = {
  links: NavigationLink[];
  /** Container className for the <ul> element */
  className?: string;
  /** Additional className applied to each link */
  linkClassName?: string;
  /** Callback fired when any link is clicked (useful for closing mobile drawer) */
  onLinkClick?: () => void;
};

/**
 * Renders a list of navigation links.
 * Handles both internal (Next.js Link) and external links automatically.
 */
export default function NavLinkList({
  links,
  className,
  linkClassName,
  onLinkClick,
}: NavLinkListProps) {
  return (
    <nav aria-label="Navigation">
      <ul className={cn(className)}>
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                onClick={onLinkClick}
                className={cn(linkClassName)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                onClick={onLinkClick}
                className={cn(linkClassName)}
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
