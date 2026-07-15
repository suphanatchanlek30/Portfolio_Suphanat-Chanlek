// components/layout/Navbar.tsx

"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/classNames";
import MenuToggleButton from "@/components/layout/navbar/MenuToggleButton";
import NavLinkList from "@/components/layout/navbar/NavLinkList";
import SocialLinkButton from "@/components/layout/navbar/SocialLinkButton";
import {
  drawerNavigationLinks,
  primaryNavigationLinks,
  socialLinks,
} from "@/data/navigation";

/**
 * Main site navigation bar.
 * Includes desktop horizontal nav and mobile collapsible drawer.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "border-b border-navbar-border bg-navbar-bg text-navbar-text",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-3 sm:px-6">
        {/* ─── Mobile header ─── */}
        <div className="flex items-center justify-between gap-3 md:hidden">
          <a
            href="#home"
            className="text-2xl font-medium tracking-wide text-navbar-text"
          >
            Suphanat
          </a>

          <MenuToggleButton
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        </div>

        {/* ─── Desktop header ─── */}
        <div className="hidden items-center justify-between gap-6 md:flex">
          <a
            href="#home"
            className="text-2xl font-medium tracking-wide text-navbar-text"
          >
            Suphanat
          </a>

          <NavLinkList
            links={primaryNavigationLinks}
            className="flex items-center gap-6"
            linkClassName="text-sm font-medium text-navbar-link transition-colors hover:text-navbar-link-hover"
          />

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <SocialLinkButton key={link.label} link={link} />
            ))}
          </div>
        </div>

        {/* ─── Mobile drawer ─── */}
        <div
          className={cn(
            "overflow-hidden border-t border-navbar-border transition-[max-height,opacity] duration-300 md:hidden",
            isMenuOpen ? "mt-3 max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="flex flex-col gap-6 px-1 py-4">
            <NavLinkList
              links={drawerNavigationLinks}
              className="flex flex-col gap-6"
              linkClassName="inline-flex items-center text-[15px] font-medium tracking-tight text-navbar-link-mobile transition-colors hover:text-navbar-link-hover"
              onLinkClick={() => setIsMenuOpen(false)}
            />

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link) => (
                <SocialLinkButton key={link.label} link={link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
