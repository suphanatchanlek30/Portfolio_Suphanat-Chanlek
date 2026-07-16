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
 * Clear typography hierarchy: small label → big bold title → medium subtitle → CTA
 *
 * Mobile (default): compact but readable, top-down flow
 * Tablet portrait (md/lg): scaled up proportionally to fill tall screen
 * Landscape/Desktop (landscape-lg): left-aligned, desktop proportions
 */
export default function HeroContent() {
  return (
    <motion.div
      className="flex flex-col items-center text-center landscape-lg:items-start landscape-lg:text-left"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Role label — small, uppercase, subtle */}
      <motion.span
        className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-hero-role-label sm:mb-5 sm:text-xs sm:tracking-[0.3em] md:mb-6 md:text-sm md:tracking-[0.3em] lg:mb-7 lg:text-base landscape-lg:mb-5 landscape-lg:text-xs landscape-lg:tracking-[0.25em]"
        variants={itemVariants}
      >
        {heroContent.roleLabel}
      </motion.span>

      {/* Title — bold, dominant, eye-catching */}
      <motion.h1
        className="mb-4 text-4xl font-bold leading-[1.05] tracking-tight text-hero-title sm:mb-5 sm:text-5xl md:mb-6 md:text-7xl lg:mb-8 lg:text-8xl landscape-lg:mb-5 landscape-lg:text-5xl xl:text-6xl"
        variants={itemVariants}
      >
        {heroContent.title}
      </motion.h1>

      {/* Subtitle — lighter weight, readable, good line height */}
      <motion.p
        className="mb-8 max-w-[280px] text-sm font-light leading-[1.7] text-hero-subtitle sm:mb-9 sm:max-w-sm sm:text-base sm:leading-[1.8] md:mb-10 md:max-w-md md:text-lg md:leading-[1.8] lg:mb-12 lg:max-w-lg lg:text-xl lg:leading-[1.8] landscape-lg:mb-8 landscape-lg:max-w-md landscape-lg:text-sm landscape-lg:leading-relaxed xl:max-w-xl xl:text-base"
        variants={itemVariants}
      >
        {heroContent.subtitle}
      </motion.p>

      {/* CTA Button — proportional to surrounding text */}
      <motion.div variants={itemVariants}>
        <DownloadCvButton className="px-6 py-3 text-sm sm:px-7 sm:py-3 sm:text-base md:px-9 md:py-4 md:text-lg lg:px-10 lg:py-4 lg:text-xl landscape-lg:px-7 landscape-lg:py-3 landscape-lg:text-sm" />
      </motion.div>
    </motion.div>
  );
}
