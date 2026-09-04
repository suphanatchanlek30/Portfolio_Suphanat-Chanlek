// components/sections/projects/ProjectCarousel.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/classNames";
import { projectItems, type ProjectItem } from "@/data/projects";
import ProjectCard from "@/components/sections/projects/ProjectCard";

type ProjectCarouselProps = {
  onOpen: (item: ProjectItem) => void;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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
 * Horizontally-scrolling project carousel.
 * Native CSS scroll-snap drives the actual scrolling (smooth on touch/trackpad
 * for free); arrow buttons just nudge scrollLeft by one card width. Edge
 * gradients hint that there's more to scroll to.
 */
export default function ProjectCarousel({ onOpen }: ProjectCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrowState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    updateArrowState();
    const el = scrollerRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateArrowState, { passive: true });
    window.addEventListener("resize", updateArrowState);
    return () => {
      el.removeEventListener("scroll", updateArrowState);
      window.removeEventListener("resize", updateArrowState);
    };
  }, []);

  const scrollByDirection = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-project-card]");
    const amount = (card?.offsetWidth ?? 320) + 20;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Arrow controls */}
      <div className="mb-5 hidden justify-end gap-2 sm:flex">
        <button
          type="button"
          aria-label="Scroll left"
          disabled={!canScrollLeft}
          onClick={() => scrollByDirection(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-projects-arrow-bg text-projects-arrow-text transition-colors duration-200 ease-out enabled:hover:bg-projects-arrow-bg-hover disabled:text-projects-arrow-disabled"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          disabled={!canScrollRight}
          onClick={() => scrollByDirection(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-projects-arrow-bg text-projects-arrow-text transition-colors duration-200 ease-out enabled:hover:bg-projects-arrow-bg-hover disabled:text-projects-arrow-disabled"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Edge fade hints */}
      <div
        className={cn(
          "pointer-events-none absolute top-0 bottom-2 left-0 z-10 w-8 bg-gradient-to-r from-projects-edge-fade to-transparent transition-opacity duration-300 sm:w-16",
          canScrollLeft ? "opacity-100" : "opacity-0",
        )}
        aria-hidden="true"
      />
      <div
        className={cn(
          "pointer-events-none absolute top-0 right-0 bottom-2 z-10 w-8 bg-gradient-to-l from-projects-edge-fade to-transparent transition-opacity duration-300 sm:w-16",
          canScrollRight ? "opacity-100" : "opacity-0",
        )}
        aria-hidden="true"
      />

      {/* Scroll track */}
      <motion.div
        ref={scrollerRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {projectItems.map((item, index) => (
          <motion.div
            key={item.id}
            data-project-card
            variants={itemVariants}
            className="snap-start"
          >
            <ProjectCard item={item} onOpen={onOpen} priority={index === 0} />
          </motion.div>
        ))}
        {/* Trailing spacer so the last card can snap fully into view past the edge fade */}
        <div className="w-px shrink-0" aria-hidden="true" />
      </motion.div>
    </div>
  );
}
