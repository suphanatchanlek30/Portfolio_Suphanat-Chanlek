// components/sections/services/ServicesHeader.tsx

"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/classNames";
import { servicesContent } from "@/data/services";

type ServicesHeaderProps = {
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
 * Section header for "What I Do".
 * Large title + descriptive subtitle with staggered reveal animation.
 */
export default function ServicesHeader({ className }: ServicesHeaderProps) {
  return (
    <motion.header
      className={cn("flex flex-col gap-4", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-semibold tracking-tight text-services-title sm:text-4xl md:text-5xl lg:text-[48px] lg:leading-tight"
      >
        {servicesContent.sectionTitle}
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="max-w-2xl text-sm leading-relaxed text-services-subtitle sm:text-base md:text-lg"
      >
        {servicesContent.sectionSubtitle}
      </motion.p>
    </motion.header>
  );
}
