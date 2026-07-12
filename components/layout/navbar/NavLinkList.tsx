// components/layout/navbar/NavLinkList.tsx

import Link from "next/link";

import type { NavigationLink } from "@/types/navigation";

type NavLinkListProps = {
  links: NavigationLink[];
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
};

export default function NavLinkList({
  links,
  className = "",
  linkClassName = "",
  onLinkClick,
}: NavLinkListProps) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.label}>
          {link.external ? (
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              onClick={onLinkClick}
              className={linkClassName}
            >
              {link.label}
            </a>
          ) : (
            <Link href={link.href} onClick={onLinkClick} className={linkClassName}>
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
