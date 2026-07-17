// components/sections/about/AboutTimelineItem.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/classNames";
import type { TimelineItem } from "@/data/about";

type AboutTimelineItemProps = {
  item: TimelineItem;
  index: number;
  className?: string;
};

/**
 * GPU-friendly animation variants.
 * Only animates opacity + transform (y) — no blur/filter for performance.
 */
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/**
 * Individual timeline item showing experience/education entry.
 * Uses transform-only animations for GPU compositing (no repaint).
 */
export default function AboutTimelineItem({
  item,
  index,
  className,
}: AboutTimelineItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        "relative flex gap-4 will-change-[transform,opacity] sm:gap-5",
        className,
      )}
    >
      {/* Timeline line + dot */}
      <div className="relative flex flex-col items-center">
        <div className="relative z-10 mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border border-about-timeline-dot bg-background" />
        <div className="h-full w-px bg-about-timeline-line" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-10">
        {/* Header row: logo + org + period */}
        <div className="mb-2 flex items-center gap-3">
          {item.logo && (
            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md border border-about-border bg-about-card-bg p-0.5">
              <Image
                src={item.logo}
                alt={item.organization}
                fill
                className="object-contain brightness-0 invert"
                sizes="32px"
              />
            </div>
          )}
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3">
            <span className="text-sm font-medium text-about-title">
              {item.organization}
            </span>
            <span className="font-mono text-[11px] text-about-muted">
              {item.period}
            </span>
          </div>
        </div>

        {/* Title */}
        <h4 className="mb-2 text-[15px] font-medium text-about-text">
          {item.title}
        </h4>

        {/* Description */}
        <p className="max-w-lg text-sm leading-relaxed text-about-muted">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
