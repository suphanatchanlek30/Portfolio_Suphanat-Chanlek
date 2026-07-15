// components/sections/hero/HeroBackground.tsx

/**
 * Decorative grid background for the hero section.
 * Renders subtle grid lines and corner circle ornaments.
 * Fully responsive — grid scales with viewport.
 */
export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Radial gradient overlay — subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--hero-gradient-end)_70%)]" />

      {/* Vertical grid lines */}
      <div className="absolute inset-0 flex justify-between px-[10%] sm:px-[12%] md:px-[15%]">
        <div className="h-full w-px bg-hero-grid-line" />
        <div className="hidden h-full w-px bg-hero-grid-line sm:block" />
        <div className="h-full w-px bg-hero-grid-line" />
      </div>

      {/* Horizontal grid lines */}
      <div className="absolute inset-0 flex flex-col justify-between py-[15%] sm:py-[12%]">
        <div className="h-px w-full bg-hero-grid-line" />
        <div className="hidden h-px w-full bg-hero-grid-line md:block" />
        <div className="h-px w-full bg-hero-grid-line" />
      </div>

      {/* Top-left decorative circle — hidden on very small screens */}
      <svg
        className="absolute top-[15%] left-[10%] hidden -translate-x-1/2 -translate-y-1/2 sm:block sm:left-[12%] md:left-[15%] md:top-[12%]"
        width="60"
        height="60"
        viewBox="0 0 70 70"
        fill="none"
      >
        <circle
          cx="35"
          cy="35"
          r="34"
          stroke="var(--hero-grid-dot)"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.6"
        />
      </svg>

      {/* Bottom-right decorative circle */}
      <svg
        className="absolute right-[10%] bottom-[15%] hidden translate-x-1/2 translate-y-1/2 sm:block sm:right-[12%] md:right-[15%] md:bottom-[12%]"
        width="60"
        height="60"
        viewBox="0 0 70 70"
        fill="none"
      >
        <circle
          cx="35"
          cy="35"
          r="34"
          stroke="var(--hero-grid-dot)"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.6"
        />
      </svg>

      {/* Corner dots */}
      <div className="absolute top-[15%] right-[10%] h-1.5 w-1.5 rounded-full bg-hero-grid-dot sm:right-[12%] md:top-[12%] md:right-[15%]" />
      <div className="absolute bottom-[15%] left-[10%] h-1.5 w-1.5 rounded-full bg-hero-grid-dot sm:left-[12%] md:bottom-[12%] md:left-[15%]" />
    </div>
  );
}
