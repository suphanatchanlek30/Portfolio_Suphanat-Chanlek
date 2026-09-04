// components/sections/projects/ProjectModal.tsx

"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { ProjectItem } from "@/data/projects";
import ProjectModalImage from "@/components/sections/projects/ProjectModalImage";

type ProjectModalProps = {
  item: ProjectItem | null;
  onClose: () => void;
};

/**
 * Detail modal for a project entry.
 * Closes on backdrop click, Escape key, or the close button.
 * Locks body scroll while open. Full-bleed on mobile, centered card on sm+.
 */
export default function ProjectModal({ item, onClose }: ProjectModalProps) {
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-projects-modal-backdrop backdrop-blur-sm sm:p-6"
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
            className="relative flex h-full w-full flex-col overflow-y-auto bg-projects-modal-bg sm:h-auto sm:max-h-[90vh] sm:max-w-3xl sm:rounded-2xl sm:border sm:border-projects-modal-border"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image */}
            <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden">
              <ProjectModalImage key={item.id} src={item.image} alt={item.title} />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-projects-modal-bg to-transparent"
                aria-hidden="true"
              />

              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-projects-modal-close-bg text-projects-modal-title backdrop-blur-sm transition-colors duration-200 hover:bg-projects-modal-close-hover-bg"
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
              {/* Title + tagline */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl font-semibold tracking-tight text-projects-modal-title sm:text-3xl">
                  {item.title}
                </h3>
                <p className="text-sm text-projects-subtitle">{item.tagline}</p>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-projects-modal-text sm:text-[15px]">
                {item.description}
              </p>

              {/* Role */}
              {item.role && (
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium tracking-widest text-projects-modal-label uppercase">
                    My Role
                  </span>
                  <p className="text-sm text-projects-modal-text">{item.role}</p>
                </div>
              )}

              {/* Tech stack */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium tracking-widest text-projects-modal-label uppercase">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-projects-modal-border bg-projects-tag-bg px-3 py-1 font-mono text-[11px] text-projects-tag-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

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
