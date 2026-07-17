// components/layout/navbar/NavLinkList.tsx

"use client";

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
 * Hash links (#section) use smooth scrollTo for reliable smooth scrolling.
 * External links open in new tab.
 * Other internal links use Next.js Link.
 */
export default function NavLinkList({
  links,
  className,
  linkClassName,
  onLinkClick,
}: NavLinkListProps) {
  function handleAnchorClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onLinkClick?.();
  }

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
            ) : link.href.startsWith("#") ? (
              <a
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
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
