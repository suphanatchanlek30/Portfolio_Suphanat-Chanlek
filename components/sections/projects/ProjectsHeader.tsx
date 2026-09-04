// components/sections/projects/ProjectsHeader.tsx

"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/classNames";
import { projectsContent } from "@/data/projects";

type ProjectsHeaderProps = {
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
 * Section header for Projects.
 * Same title/subtitle pattern as the other section headers.
 */
export default function ProjectsHeader({ className }: ProjectsHeaderProps) {
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
        className="text-3xl font-semibold tracking-tight text-projects-title sm:text-4xl md:text-5xl lg:text-[48px] lg:leading-tight"
      >
        {projectsContent.sectionTitle}
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="max-w-2xl text-sm leading-relaxed text-projects-subtitle sm:text-base md:text-lg"
      >
        {projectsContent.sectionSubtitle}
      </motion.p>
    </motion.header>
  );
}
