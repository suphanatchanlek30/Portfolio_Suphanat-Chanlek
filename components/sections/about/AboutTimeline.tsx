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
        className="mb-5 max-w-lg text-sm leading-relaxed text-about-text sm:text-[15px]"
      >
        {aboutContent.bio}
      </motion.p>

      {/* Email */}
      <motion.a
        variants={itemVariants}
        href={`mailto:${aboutContent.email}`}
        className="group mb-6 inline-flex items-center gap-3 rounded-lg border border-about-border bg-about-card-bg px-5 py-3 transition-colors duration-200 hover:border-about-timeline-dot"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-4 w-4 shrink-0 text-about-muted transition-colors duration-200 group-hover:text-about-title"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-8.953 5.468a1.5 1.5 0 0 1-1.594 0L2.25 6.75"
          />
        </svg>
        <span className="text-sm text-about-text transition-colors duration-200 group-hover:text-about-title">
          {aboutContent.email}
        </span>
      </motion.a>

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
