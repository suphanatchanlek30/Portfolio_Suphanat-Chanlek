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
 * Mobile: left-aligned, top-down flow
 * Desktop: left-aligned on right side
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
        className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-hero-role-label sm:text-xs md:mb-5 md:text-xs md:tracking-[0.2em] lg:text-sm lg:tracking-[0.25em]"
        variants={itemVariants}
      >
        {heroContent.roleLabel}
      </motion.span>

      {/* Title */}
      <motion.h1
        className="mb-5 text-[32px] font-bold leading-[1.1] tracking-tight text-hero-title sm:text-4xl md:mb-5 md:text-4xl lg:text-5xl xl:text-6xl"
        variants={itemVariants}
      >
        {heroContent.title}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mb-8 max-w-[300px] text-[13px] font-light leading-[1.8] text-hero-subtitle sm:max-w-sm sm:text-sm md:mb-8 md:max-w-sm md:text-sm md:leading-relaxed lg:max-w-xl lg:text-base xl:text-lg"
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
