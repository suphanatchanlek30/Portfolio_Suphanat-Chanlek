// components/sections/about/AboutTimeline.tsx

"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/classNames";
import { aboutContent, timelineItems, trainingItems } from "@/data/about";
import AboutTimelineItem from "@/components/sections/about/AboutTimelineItem";

type AboutTimelineProps = {
  className?: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/**
 * Scrollable timeline with education info at top + experience entries.
 * Right side of the About section on desktop.
 * Full-width on mobile.
 */
export default function AboutTimeline({ className }: AboutTimelineProps) {
  return (
    <motion.div
      className={cn("flex flex-col", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {/* Bio */}
      <motion.p
        variants={itemVariants}
        className="mb-10 max-w-lg text-sm leading-relaxed text-about-text sm:text-[15px]"
      >
        {aboutContent.bio}
      </motion.p>

      {/* Education card */}
      <motion.div
        variants={itemVariants}
        className="mb-10 rounded-lg border border-about-border bg-about-card-bg p-5"
      >
        <span className="mb-3 block text-xs font-medium tracking-widest uppercase text-about-muted">
          Education
        </span>
        <div className="flex flex-col gap-1">
          <span className="text-lg font-semibold text-about-title">
            {aboutContent.education.degree}
          </span>
          <span className="text-sm text-about-text">
            {aboutContent.education.university}
          </span>
          <div className="mt-1 flex items-center gap-3">
            <span className="font-mono text-[12px] text-about-muted">
              {aboutContent.education.period}
            </span>
            <span className="rounded-full bg-about-tag-bg px-2 py-0.5 font-mono text-[11px] text-about-tag-text">
              GPA {aboutContent.education.gpa}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Experience heading */}
      <motion.span
        variants={itemVariants}
        className="mb-6 text-xs font-medium tracking-widest uppercase text-about-muted"
      >
        Experience
      </motion.span>

      {/* Timeline items */}
      {timelineItems.map((item, index) => (
        <AboutTimelineItem key={item.id} item={item} index={index} />
      ))}

      {/* Training heading */}
      <motion.span
        variants={itemVariants}
        className="mb-6 mt-4 text-xs font-medium tracking-widest uppercase text-about-muted"
      >
        Training & Professional Development
      </motion.span>

      {/* Training items */}
      {trainingItems.map((item, index) => (
        <AboutTimelineItem key={item.id} item={item} index={index} />
      ))}
    </motion.div>
  );
}
