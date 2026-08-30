// components/sections/about/AboutHeader.tsx

"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/classNames";
import { aboutContent } from "@/data/about";

type AboutHeaderProps = {
  className?: string;
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/**
 * Section header for the About section.
 * Displays main title and subtitle with staggered reveal.
 */
export default function AboutHeader({ className }: AboutHeaderProps) {
  return (
    <motion.header
      className={cn("flex flex-col gap-3", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.span
        variants={itemVariants}
        className="text-xs font-medium tracking-widest uppercase text-about-muted"
      >
        {aboutContent.sectionSubtitle}
      </motion.span>
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-semibold tracking-tight text-about-title sm:text-4xl md:text-5xl lg:text-[48px] lg:leading-tight"
      >
        {aboutContent.sectionTitle}
      </motion.h2>
    </motion.header>
  );
}
