// components/sections/services/ServicesSection.tsx

"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/classNames";
import { services } from "@/data/services";
import ServiceCard from "@/components/sections/services/ServiceCard";
import ServicesHeader from "@/components/sections/services/ServicesHeader";

type ServicesSectionProps = {
  className?: string;
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/**
 * "What I Do" services section.
 * Layout: Header on top, then a responsive grid of 3 service cards.
 * Mobile: single column stacked cards.
 * Tablet (md+): 2-column grid — first card spans 2 rows (featured).
 * Desktop: same 2-column with more spacing.
 */
export default function ServicesSection({ className }: ServicesSectionProps) {
  return (
    <section
      id="what-i-do"
      className={cn(
        "relative w-full bg-background px-6 py-12 sm:px-8 sm:py-16 md:px-16 md:py-32 lg:px-20",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <ServicesHeader className="mb-16 md:mb-14" />

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Software Engineering — featured (spans 2 rows on md+) */}
          <motion.div variants={cardItemVariants} className="md:row-span-2">
            <ServiceCard
              service={services[0]}
              featured
              className="h-full"
            />
          </motion.div>

          {/* DevOps Engineering */}
          <motion.div variants={cardItemVariants}>
            <ServiceCard service={services[1]} className="h-full" />
          </motion.div>

          {/* AI/ML Engineering */}
          <motion.div variants={cardItemVariants}>
            <ServiceCard service={services[2]} className="h-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
