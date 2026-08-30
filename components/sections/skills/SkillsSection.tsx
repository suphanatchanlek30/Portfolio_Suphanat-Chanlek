"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/classNames";
import { skillsSectionContent, skillRows } from "@/data/skills";
import SkillMarquee from "@/components/sections/skills/SkillMarquee";

type SkillsSectionProps = {
  className?: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
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
 * Programming Skills & Tools section.
 * Heading style matches ServicesHeader / AboutHeader pattern.
 * Full-width card with rotating border glow + 3 marquee rows.
 */
export default function SkillsSection({ className }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className={cn(
        "relative w-full bg-background px-6 py-12 sm:px-8 sm:py-16 md:px-16 md:py-32 lg:px-20",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header — same pattern as Services/About */}
        <motion.header
          className="flex flex-col gap-4 mb-16 md:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-semibold tracking-tight text-skills-title sm:text-4xl md:text-5xl lg:text-[48px] lg:leading-tight"
          >
            {skillsSectionContent.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-sm leading-relaxed text-skills-subtitle sm:text-base md:text-lg"
          >
            {skillsSectionContent.subtitle}
          </motion.p>
        </motion.header>

        {/* Card with rotating border glow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={itemVariants}>
            <div className="relative rounded-xl overflow-hidden p-[1.5px]">
              {/* Static border */}
              <div
                className="absolute inset-0 rounded-xl border border-skills-card-border"
                aria-hidden="true"
              />

              {/* Rotating glow light */}
              <div
                className="absolute inset-0 rounded-xl border-2 border-transparent animate-border-rotate"
                aria-hidden="true"
              >
                <div className="absolute -top-2 left-1/2 w-10 h-10 rounded-full bg-white blur-md shadow-[0_0_20px_8px_var(--skills-glow)]" />
              </div>

              {/* Card content */}
              <div className="relative bg-skills-card-bg rounded-xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
                <div className="space-y-3 sm:space-y-4">
                  {skillRows.map((row, idx) => (
                    <SkillMarquee
                      key={idx}
                      skills={row.skills}
                      direction={row.direction}
                      duration={row.duration}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
