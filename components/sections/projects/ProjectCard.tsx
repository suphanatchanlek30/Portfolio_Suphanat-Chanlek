// components/sections/projects/ProjectCard.tsx

"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/classNames";
import type { ProjectItem } from "@/data/projects";

type ProjectCardProps = {
  item: ProjectItem;
  onOpen: (item: ProjectItem) => void;
  priority?: boolean;
};

const VISIBLE_TAGS = 3;

/**
 * Carousel card — image on top, content below. Sizing (width) is controlled
 * by the wrapping element in ProjectCarousel; this component just fills it.
 * Whole card is a button that opens the detail modal.
 */
export default function ProjectCard({ item, onOpen, priority = false }: ProjectCardProps) {
  const [loaded, setLoaded] = useState(false);
  const extraTags = item.techStack.length - VISIBLE_TAGS;

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      aria-haspopup="dialog"
      className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-projects-card-border bg-projects-card-bg text-left transition-colors duration-300 ease-out hover:border-projects-card-border-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-projects-card-border-hover"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          draggable={false}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          quality={80}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 42vw, (min-width: 640px) 60vw, 82vw"
          onLoad={() => setLoaded(true)}
          className={cn(
            "will-change-transform object-cover transition-[transform,opacity] duration-500 ease-out group-hover:scale-105",
            loaded ? "opacity-100" : "opacity-0",
          )}
        />
        {/* Soft blend into the card's content area — avoids a hard seam where a light screenshot meets the dark card body */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-projects-card-bg to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg leading-snug font-semibold text-projects-card-title">
          {item.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-projects-card-desc">
          {item.tagline}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {item.techStack.slice(0, VISIBLE_TAGS).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-projects-card-border bg-projects-tag-bg px-2.5 py-1 font-mono text-[11px] text-projects-tag-text"
            >
              {tech}
            </span>
          ))}
          {extraTags > 0 && (
            <span className="rounded-full border border-projects-card-border bg-projects-tag-bg px-2.5 py-1 font-mono text-[11px] text-projects-tag-text">
              +{extraTags}
            </span>
          )}
        </div>

        <span className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-projects-card-cta-bg px-3 py-1.5 text-xs font-medium text-projects-card-cta-text transition-colors duration-300 ease-out group-hover:bg-projects-arrow-bg-hover">
          View Project
          <svg viewBox="0 0 16 16" height="12" width="12" aria-hidden="true">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5.75 2H5v1.5h6.44l-9.22 9.22-.53.53 1.06 1.06.53-.53 9.22-9.22V11H14V3a1 1 0 0 0-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </button>
  );
}
