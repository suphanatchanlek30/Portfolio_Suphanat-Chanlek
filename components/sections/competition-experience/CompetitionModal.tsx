// components/sections/competition-experience/CompetitionModal.tsx

"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { CompetitionItem } from "@/data/competitions";
import ModalImage from "@/components/sections/competition-experience/ModalImage";

type CompetitionModalProps = {
  item: CompetitionItem | null;
  onClose: () => void;
};

/**
 * Detail modal for a competition/hackathon entry.
 * Closes on backdrop click, Escape key, or the close button.
 * Locks body scroll while open.
 */
export default function CompetitionModal({
  item,
  onClose,
}: CompetitionModalProps) {
  useEffect(() => {
    if (!item) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-competition-modal-backdrop backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex h-full w-full flex-col overflow-y-auto bg-competition-modal-bg sm:h-auto sm:max-h-[90vh] sm:max-w-3xl sm:rounded-2xl sm:border sm:border-competition-modal-border"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image */}
            <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden">
              <ModalImage key={item.id} src={item.image} alt={item.title} />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-competition-modal-bg to-transparent"
                aria-hidden="true"
              />

              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-competition-modal-close-bg text-competition-modal-title backdrop-blur-sm transition-colors duration-200 hover:bg-competition-modal-close-hover-bg"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="h-4.5 w-4.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-5 px-6 py-6 sm:px-8 sm:py-8">
              {/* Badge row */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-competition-badge-bg px-3 py-1 text-xs font-medium tracking-wide text-competition-badge-text uppercase">
                  {item.category}
                </span>
                <span className="rounded-full bg-competition-badge-bg px-3 py-1 text-xs font-medium tracking-wide text-competition-badge-text">
                  {item.year}
                </span>
              </div>

              {/* Title + organizer */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl font-semibold tracking-tight text-competition-modal-title sm:text-3xl">
                  {item.title}
                </h3>
                <p className="text-sm text-competition-subtitle">{item.organizer}</p>
              </div>

              {/* Summary */}
              <p className="text-sm leading-relaxed text-competition-modal-text sm:text-[15px]">
                {item.summary}
              </p>

              {/* Description */}
              <p className="text-sm leading-relaxed text-competition-modal-text sm:text-[15px]">
                {item.description}
              </p>

              {/* Role */}
              {item.role && (
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium tracking-widest text-competition-modal-label uppercase">
                    My Role
                  </span>
                  <p className="text-sm text-competition-modal-text">{item.role}</p>
                </div>
              )}

              {/* Tech stack */}
              {item.techStack && item.techStack.length > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium tracking-widest text-competition-modal-label uppercase">
                    Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-competition-modal-border bg-competition-tag-bg px-3 py-1 font-mono text-[11px] text-competition-tag-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievement */}
              {item.achievement && (
                <div className="rounded-lg border border-competition-accent/30 bg-competition-accent/5 px-4 py-3">
                  <span className="text-xs font-medium tracking-widest text-competition-accent uppercase">
                    Achievement
                  </span>
                  <p className="mt-1 text-sm text-competition-modal-text">
                    {item.achievement}
                  </p>
                </div>
              )}

              {/* External link */}
              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-fit items-center gap-2 rounded-md bg-hero-btn-bg px-4 py-2 text-sm font-medium text-hero-btn-text transition-colors duration-200 hover:bg-hero-btn-hover-bg"
                >
                  {item.link.label}
                  <svg viewBox="0 0 16 16" height="14" width="14">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M5.75 2H5v1.5h6.44l-9.22 9.22-.53.53 1.06 1.06.53-.53 9.22-9.22V11H14V3a1 1 0 0 0-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
