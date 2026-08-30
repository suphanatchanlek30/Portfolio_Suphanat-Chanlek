// components/sections/competition-experience/CompetitionCard.tsx

"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/classNames";
import type { CompetitionItem } from "@/data/competitions";

type CompetitionCardProps = {
  item: CompetitionItem;
  onOpen: (item: CompetitionItem) => void;
  /** Set for the first card(s) in the grid so Next.js preloads it as the LCP candidate. */
  priority?: boolean;
  className?: string;
};

/**
 * Bento grid preview card — image with hover zoom + gradient overlay,
 * title/meta pinned to the bottom, and a diagonal "open" arrow that
 * slides into view on hover/focus. Acts as a trigger for the detail modal.
 *
 * Images fade in on load (instead of popping in) and each variant requests
 * only the pixel width it actually renders at, via `sizes`.
 */
export default function CompetitionCard({
  item,
  onOpen,
  priority = false,
  className,
}: CompetitionCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      aria-haspopup="dialog"
      className={cn(
        "group relative flex h-full w-full flex-col justify-end overflow-hidden rounded-xl border border-competition-card-border text-left",
        "transition-colors duration-300 ease-out hover:border-competition-card-border-hover",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-competition-card-border-hover",
        className,
      )}
    >
      {/* Image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        quality={80}
        sizes={
          item.size === "large"
            ? "(min-width: 1024px) 50vw, (min-width: 640px) 66vw, 100vw"
            : "(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
        }
        onLoad={() => setLoaded(true)}
        className={cn(
          "will-change-transform object-cover transition-[transform,opacity] duration-500 ease-out group-hover:scale-105",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Gradient overlay for text legibility */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-competition-card-overlay-from via-competition-card-overlay-from/20 to-competition-card-overlay-to"
        aria-hidden="true"
      />

      {/* Open arrow */}
      <div
        className="absolute top-3 right-3 z-10 flex h-8 w-8 translate-x-1 -translate-y-1 items-center justify-center rounded-full bg-competition-card-icon-bg opacity-0 backdrop-blur-sm transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 16 16"
          height="14"
          width="14"
          className="text-competition-card-icon-text"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5.75 2H5v1.5h6.44l-9.22 9.22-.53.53 1.06 1.06.53-.53 9.22-9.22V11H14V3a1 1 0 0 0-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Title + meta */}
      <div className="relative z-10 flex flex-col gap-0.5 p-4">
        <span className="text-[11px] font-medium tracking-wide text-competition-card-meta uppercase">
          {item.year} · {item.category}
        </span>
        <span className="text-sm leading-snug font-semibold text-competition-card-title sm:text-base">
          {item.title}
        </span>
      </div>
    </button>
  );
}
