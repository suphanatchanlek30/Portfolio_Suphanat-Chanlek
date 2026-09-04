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

/** Pointer-drag beyond this distance (px) counts as a drag, not a click. */
const DRAG_CLICK_THRESHOLD = 6;

/**
 * Horizontally-scrolling project carousel.
 * - Cards are sized as a fraction of the row so they always tile edge-to-edge
 *   with the next card peeking in — no leftover dead space.
 * - Native CSS scroll-snap drives touch/trackpad scrolling for free.
 * - Mouse users can click-and-drag: scrollLeft tracks the pointer 1:1 with
 *   snap disabled (set imperatively via the DOM, not React state, so there's
 *   no one-frame lag before the first drag pixel lands), then glides to the
 *   nearest card with a real `scrollTo({ behavior: "smooth" })` animation on
 *   release. Arrow buttons use the same exact-card-aligned smooth scroll so
 *   the motion is always one continuous slide, never a snap-correction jump.
 */
export default function ProjectCarousel({ onOpen }: ProjectCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const dragState = useRef({ startX: 0, startScrollLeft: 0, distance: 0 });

  const getCards = () => {
    const el = scrollerRef.current;
    if (!el) return [];
    return Array.from(el.querySelectorAll<HTMLElement>("[data-project-card]"));
  };

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

  /** Finds the card nearest the current scroll position, offset by `step` cards, and glides to it. */
  const glideToCard = (step: number) => {
    const el = scrollerRef.current;
    const cards = getCards();
    if (!el || cards.length === 0) return;

    let nearestIndex = 0;
    let nearestDistance = Infinity;
    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - el.scrollLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    const targetIndex = Math.min(Math.max(nearestIndex + step, 0), cards.length - 1);
    el.scrollTo({ left: cards[targetIndex].offsetLeft, behavior: "smooth" });
  };

  // Drag tracking uses window-level listeners rather than setPointerCapture:
  // capturing the pointer on the scroller retargets the resulting click event
  // to the scroller itself, which would stop real clicks from ever reaching
  // a card's button.
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = scrollerRef.current;
    if (!el) return;

    // Set imperatively (not via React state) so the very first drag pixel
    // is already unsnapped — no one-render-frame lag/jank at drag start.
    el.style.scrollSnapType = "none";
    dragState.current = { startX: e.clientX, startScrollLeft: el.scrollLeft, distance: 0 };
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleWindowPointerMove = (e: PointerEvent) => {
      const el = scrollerRef.current;
      if (!el) return;
      const delta = e.clientX - dragState.current.startX;
      dragState.current.distance = Math.abs(delta);
      el.scrollLeft = dragState.current.startScrollLeft - delta;
    };

    const handleWindowPointerUp = () => {
      setIsDragging(false);
      const el = scrollerRef.current;
      if (el) el.style.scrollSnapType = "";
      // Real drag → glide to whichever card is now nearest (step 0 = don't
      // force a direction change, just settle cleanly on one card).
      if (dragState.current.distance > DRAG_CLICK_THRESHOLD) glideToCard(0);
    };

    window.addEventListener("pointermove", handleWindowPointerMove);
    window.addEventListener("pointerup", handleWindowPointerUp);
    return () => {
      window.removeEventListener("pointermove", handleWindowPointerMove);
      window.removeEventListener("pointerup", handleWindowPointerUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging]);

  /** Swallow the click that follows a real drag so it doesn't open a card's modal. */
  const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragState.current.distance > DRAG_CLICK_THRESHOLD) {
      e.stopPropagation();
      e.preventDefault();
    }
    dragState.current.distance = 0;
  };

  return (
    <div className="relative">
      {/* Arrow controls */}
      <div className="mb-5 hidden justify-end gap-2 sm:flex">
        <button
          type="button"
          aria-label="Scroll left"
          disabled={!canScrollLeft}
          onClick={() => glideToCard(-1)}
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
          onClick={() => glideToCard(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-projects-arrow-bg text-projects-arrow-text transition-colors duration-200 ease-out enabled:hover:bg-projects-arrow-bg-hover disabled:text-projects-arrow-disabled"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Scroll track */}
      <motion.div
        ref={scrollerRef}
        className={cn(
          "scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 select-none sm:gap-6",
          isDragging ? "cursor-grabbing" : "cursor-grab",
        )}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        onPointerDown={handlePointerDown}
        onClickCapture={handleClickCapture}
        onDragStart={(e) => e.preventDefault()}
      >
        {projectItems.map((item, index) => (
          <motion.div
            key={item.id}
            data-project-card
            variants={itemVariants}
            className="w-[82%] shrink-0 snap-start sm:w-[60%] md:w-[42%] lg:w-[31%]"
          >
            <ProjectCard item={item} onOpen={onOpen} priority={index === 0} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
