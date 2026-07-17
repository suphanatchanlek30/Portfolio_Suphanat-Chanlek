// components/layout/Footer.tsx

import { cn } from "@/lib/classNames";
import { allSocialLinks } from "@/data/navigation";
import { footerContent } from "@/data/footer";

type FooterProps = {
  className?: string;
};

/**
 * Site footer with logo, social links, nav links, and copyright.
 * Responsive: stacked on mobile, grid on md+.
 * Follows dark theme with subtle borders.
 */
export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "w-full border-t border-footer-border bg-footer-bg px-6 py-12 sm:px-8 md:px-16 lg:px-20",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">
        {/* Top: Logo + Social links */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo/Name */}
          <span className="text-lg font-semibold tracking-tight text-footer-text-hover">
            {footerContent.brand}
          </span>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {allSocialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
                className="text-footer-text transition-colors duration-200 hover:text-footer-text-hover"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d={social.svgPath} />
                </svg>
              </a>
            ))}
            {/* Email */}
            <a
              href={`mailto:${footerContent.email}`}
              aria-label="Email"
              className="text-footer-text transition-colors duration-200 hover:text-footer-text-hover"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-8.953 5.468a1.5 1.5 0 0 1-1.594 0L2.25 6.75"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-footer-border" aria-hidden="true" />

        {/* Bottom: Navigation + Copyright */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Quick nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerContent.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-footer-text transition-colors duration-200 hover:text-footer-text-hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-footer-text">
            © {currentYear} {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
