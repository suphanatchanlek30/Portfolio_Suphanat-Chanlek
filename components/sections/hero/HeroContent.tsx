// components/sections/hero/HeroContent.tsx

"use client";

import { motion } from "framer-motion";

import { heroContent } from "@/data/hero";
import DownloadCvButton from "@/components/sections/hero/DownloadCvButton";

/** Stagger container animation variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

/** Individual item animation variants */
const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

/**
 * Hero text content with staggered reveal animations.
 * Responsive: centered on mobile, left-aligned on desktop.
 */
export default function HeroContent() {
  return (
    <motion.div
      className="flex flex-col items-center text-center md:items-start md:text-left"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Role label */}
      <motion.span
        className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-hero-role-label sm:mb-4 sm:text-xs md:tracking-[0.25em]"
        variants={itemVariants}
      >
        {heroContent.roleLabel}
      </motion.span>

      {/* Title */}
      <motion.h1
        className="mb-4 text-3xl font-bold leading-tight tracking-tight text-hero-title sm:mb-5 sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl"
        variants={itemVariants}
      >
        {heroContent.title}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mb-8 max-w-md text-sm leading-relaxed text-hero-subtitle sm:max-w-lg sm:text-base md:mb-10 md:max-w-xl md:text-lg"
        variants={itemVariants}
      >
        {heroContent.subtitle}
      </motion.p>

      {/* CTA Button */}
      <motion.div variants={itemVariants}>
        <DownloadCvButton />
      </motion.div>
    </motion.div>
  );
}
