"use client";

import { cn } from "@/lib/classNames";
import SkillBadge from "@/components/sections/skills/SkillBadge";
import type { Skill } from "@/data/skills";

type SkillMarqueeProps = {
  skills: Skill[];
  direction: "left" | "right";
  duration: number;
  className?: string;
};

/**
 * Infinite scrolling marquee row — GPU-accelerated.
 * Duplicates content 4x for seamless infinite loop.
 * Uses transform: translate3d for hardware acceleration.
 * Direction "right" = items visually scroll to the right.
 * Direction "left" = items visually scroll to the left.
 */
export default function SkillMarquee({
  skills,
  direction,
  duration,
  className,
}: SkillMarqueeProps) {
  // 4x duplication ensures seamless loop at any viewport width
  const duplicated = [...skills, ...skills, ...skills, ...skills];

  const animationClass =
    direction === "right" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div
      className={cn("overflow-hidden w-full", className)}
      aria-hidden="true"
    >
      <div
        className={cn(
          "flex gap-3 sm:gap-4 py-1.5 min-w-max",
          animationClass,
        )}
        style={{
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          willChange: "transform",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        {duplicated.map((skill, idx) => (
          <SkillBadge
            key={`${skill.name}-${idx}`}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
}
