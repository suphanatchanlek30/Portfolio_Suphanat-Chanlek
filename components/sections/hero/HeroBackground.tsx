"use client";

import { motion } from "framer-motion";

/**
 * Animated dashed grid line definition.
 * Each line is revealed via an expanding clip rect,
 * keeping the dashed appearance throughout the animation.
 */
type GridLine = {
  id: string;
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  delay: number;
  direction: "vertical" | "horizontal";
};

/** Vertical lines — reveal from top to bottom */
const verticalLines: GridLine[] = [
  { id: "v1", x1: "15%", y1: "0%", x2: "15%", y2: "100%", delay: 0.1, direction: "vertical" },
  { id: "v2", x1: "50%", y1: "0%", x2: "50%", y2: "100%", delay: 0.4, direction: "vertical" },
  { id: "v3", x1: "85%", y1: "0%", x2: "85%", y2: "100%", delay: 0.25, direction: "vertical" },
];

/** Horizontal lines — reveal from left to right */
const horizontalLines: GridLine[] = [
  { id: "h1", x1: "0%", y1: "20%", x2: "100%", y2: "20%", delay: 0.5, direction: "horizontal" },
  { id: "h2", x1: "0%", y1: "50%", x2: "100%", y2: "50%", delay: 0.7, direction: "horizontal" },
  { id: "h3", x1: "0%", y1: "80%", x2: "100%", y2: "80%", delay: 0.6, direction: "horizontal" },
];

const allLines = [...verticalLines, ...horizontalLines];

/**
 * Decorative animated grid background for the hero section.
 * Starts completely blank — dashed lines are smoothly revealed
 * via animated clip-paths, maintaining the dashed appearance
 * throughout the entire animation.
 * Lines stay visible after animation completes.
 */
export default function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Radial gradient overlay — subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--hero-gradient-end)_70%)]" />

      {/* Animated grid SVG */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Each line gets its own animated clipPath */}
          {allLines.map((line) => (
            <clipPath key={`clip-${line.id}`} id={`clip-${line.id}`}>
              {line.direction === "vertical" ? (
                <motion.rect
                  x="0%"
                  y="0%"
                  width="100%"
                  height="0%"
                  initial={{ height: "0%" }}
                  animate={{ height: "100%" }}
                  transition={{
                    duration: 2.2,
                    delay: line.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              ) : (
                <motion.rect
                  x="0%"
                  y="0%"
                  width="0%"
                  height="100%"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 2.8,
                    delay: line.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              )}
            </clipPath>
          ))}
        </defs>

        {/* Render dashed lines with clip-path reveal */}
        {allLines.map((line) => (
          <line
            key={line.id}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="var(--hero-grid-line)"
            strokeWidth="1"
            strokeDasharray="3 4"
            clipPath={`url(#clip-${line.id})`}
          />
        ))}
      </svg>

      {/* Top-left decorative circle — fades in after lines finish */}
      <motion.svg
        className="absolute top-[20%] left-[15%] hidden -translate-x-1/2 -translate-y-1/2 sm:block"
        width="60"
        height="60"
        viewBox="0 0 70 70"
        fill="none"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 2.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <circle
          cx="35"
          cy="35"
          r="34"
          stroke="var(--hero-grid-dot)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      </motion.svg>

      {/* Bottom-right decorative circle */}
      <motion.svg
        className="absolute right-[15%] bottom-[20%] hidden translate-x-1/2 translate-y-1/2 sm:block"
        width="60"
        height="60"
        viewBox="0 0 70 70"
        fill="none"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 2.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <circle
          cx="35"
          cy="35"
          r="34"
          stroke="var(--hero-grid-dot)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      </motion.svg>

      {/* Corner dots — appear after lines reach their endpoints */}
      <motion.div
        className="absolute top-[20%] right-[15%] h-1.5 w-1.5 rounded-full bg-hero-grid-dot"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 3,
          ease: "easeOut",
        }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[15%] h-1.5 w-1.5 rounded-full bg-hero-grid-dot"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          delay: 3.2,
          ease: "easeOut",
        }}
      />
    </div>
  );
}
