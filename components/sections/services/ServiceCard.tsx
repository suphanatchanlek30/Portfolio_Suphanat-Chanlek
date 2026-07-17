// components/sections/services/ServiceCard.tsx

"use client";

import { cn } from "@/lib/classNames";
import type { ServiceData } from "@/data/services";

type ServiceCardProps = {
  service: ServiceData;
  /** Whether this card spans 2 rows (featured/large card) */
  featured?: boolean;
  className?: string;
};

/**
 * Interactive service card with GPU-accelerated hover effects.
 * Uses pure CSS transforms (no JS re-renders on hover) for buttery smooth interaction.
 * On hover: card lifts, border brightens, glow appears, tags highlight.
 * Responsive: full-width on mobile, grid-based on desktop.
 */
export default function ServiceCard({
  service,
  featured = false,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-lg border border-services-card-border bg-services-card-bg p-6 sm:p-8",
        "translate-y-0 transition-all duration-300 ease-out will-change-transform",
        "hover:-translate-y-1 hover:border-services-card-border-hover",
        featured && "md:row-span-2",
        className,
      )}
    >
      {/* Hover glow — top-left radial gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        aria-hidden="true"
      >
        <div className="absolute -top-24 -left-24 h-60 w-60 rounded-full bg-services-card-glow blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4">
        {/* Subtitle label */}
        <span className="text-xs font-medium tracking-widest uppercase text-services-subtitle">
          {service.subtitle}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold tracking-tight text-services-card-title sm:text-2xl">
          {service.title}
        </h3>

        {/* Description */}
        <p className="max-w-md text-sm leading-relaxed text-services-card-desc sm:text-[15px]">
          {service.description}
        </p>
      </div>

      {/* Tags */}
      <div className="relative z-10 mt-6 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-services-card-border bg-services-tag-bg px-3 py-1 font-mono text-[11px] text-services-tag-text transition-colors duration-300 ease-out group-hover:border-services-card-border-hover group-hover:text-services-card-desc"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
