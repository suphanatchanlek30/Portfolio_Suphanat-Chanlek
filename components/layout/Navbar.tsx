// components/layout/Navbar.tsx

"use client";

import { useEffect, useState } from "react";

import MenuToggleButton from "@/components/layout/navbar/MenuToggleButton";
import NavLinkList from "@/components/layout/navbar/NavLinkList";
import {
  drawerNavigationLinks,
  primaryNavigationLinks,
  socialLinks,
} from "@/data/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-1000 w-full border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-3 sm:px-6">
        {/* Mobile title and menu button. */}
        <div className="flex items-center justify-between gap-3 md:hidden">
          <a href="#home" className="text-2xl font-medium tracking-wide text-white">
            Suphanat
          </a>

          <MenuToggleButton
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          />
        </div>

        <div className="hidden items-center justify-between gap-6 md:flex">
          <div className="flex items-center gap-2">
            <a href="#home" className="text-2xl font-medium tracking-wide text-white">
              Suphanat
            </a>
          </div>

          <NavLinkList
            links={primaryNavigationLinks}
            className="flex items-center gap-6"
            linkClassName="text-sm font-medium text-white/70 transition-colors hover:text-white"
          />

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className={`flex ${link.buttonClassName} items-center justify-center rounded-md bg-white text-black transition-colors hover:bg-gray-200`}
                aria-label={link.label}
              >
                {/* Social icon size. */}
                <svg
                  width={link.iconSize}
                  height={link.iconSize}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={link.svgPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile drawer. */}
        <div
          className={`overflow-hidden border-t border-white/10 transition-[max-height,opacity] duration-300 md:hidden ${
            isMenuOpen ? "mt-3 max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6 px-1 py-4">
            <NavLinkList
              links={drawerNavigationLinks}
              className="flex flex-col gap-6"
              linkClassName="inline-flex items-center text-[15px] font-medium tracking-tight text-white/75 transition-colors hover:text-white"
              onLinkClick={() => setIsMenuOpen(false)}
            />

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`flex ${link.buttonClassName} items-center justify-center rounded-md bg-white text-black transition-colors hover:bg-gray-200`}
                  aria-label={link.label}
                >
                  {/* Social icon size. */}
                  <svg
                    width={link.iconSize}
                    height={link.iconSize}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={link.svgPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}