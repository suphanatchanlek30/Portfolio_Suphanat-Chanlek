// components/sections/hero/DownloadCvButton.tsx

"use client";

import { cn } from "@/lib/classNames";
import { heroContent } from "@/data/hero";

type DownloadCvButtonProps = {
  className?: string;
};

/**
 * CTA button for downloading/viewing CV.
 * Opens the PDF in a new tab for viewing, with download option.
 */
export default function DownloadCvButton({ className }: DownloadCvButtonProps) {
  return (
    <a
      href={heroContent.cta.href}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "group relative inline-flex items-center gap-2 overflow-hidden",
        "rounded-lg px-5 py-2.5 text-xs font-semibold sm:px-7 sm:py-3 sm:text-sm",
        "bg-hero-btn-bg text-hero-btn-text",
        "transition-all duration-300 hover:bg-hero-btn-hover-bg hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]",
        className,
      )}
    >
      {/* Download icon */}
      <svg
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:translate-y-0.5"
        aria-hidden="true"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>

      {heroContent.cta.label}
    </a>
  );
}
