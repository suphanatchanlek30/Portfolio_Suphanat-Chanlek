// components/sections/competition-experience/CompetitionGrid.tsx

"use client";

import { motion } from "framer-motion";

import { competitionItems, type CompetitionItem } from "@/data/competitions";
import CompetitionCard from "@/components/sections/competition-experience/CompetitionCard";

type CompetitionGridProps = {
  onOpen: (item: CompetitionItem) => void;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/**
 * Bento-style responsive grid. Each item is 1x1 or 2x2 (via `size`);
 * `grid-flow-dense` packs the remaining gaps automatically so the
 * layout stays organic without hand-authored grid-template-areas.
 */
export default function CompetitionGrid({ onOpen }: CompetitionGridProps) {
  return (
    <motion.div
      className="grid auto-rows-[11rem] grid-cols-2 grid-flow-dense gap-4 sm:auto-rows-[12rem] sm:grid-cols-3 sm:gap-5 lg:auto-rows-[13rem] lg:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      {competitionItems.map((item, index) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
          className={item.size === "large" ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}
        >
          <CompetitionCard
            item={item}
            onOpen={onOpen}
            priority={index === 0}
            className="h-full"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
