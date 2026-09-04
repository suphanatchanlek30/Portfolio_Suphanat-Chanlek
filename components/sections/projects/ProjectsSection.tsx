// components/sections/projects/ProjectsSection.tsx

"use client";

import { useState } from "react";

import { cn } from "@/lib/classNames";
import type { ProjectItem } from "@/data/projects";
import ProjectsHeader from "@/components/sections/projects/ProjectsHeader";
import ProjectCarousel from "@/components/sections/projects/ProjectCarousel";
import ProjectModal from "@/components/sections/projects/ProjectModal";

type ProjectsSectionProps = {
  className?: string;
};

/**
 * Projects — horizontally-scrolling carousel of shipped work.
 * Clicking a card opens a detail modal, same interaction pattern as the
 * Competition & Hackathon Experience section right below it.
 */
export default function ProjectsSection({ className }: ProjectsSectionProps) {
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  return (
    <section
      id="projects"
      className={cn(
        "relative w-full overflow-hidden bg-background py-12 sm:py-16 md:py-32",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-16 lg:px-20">
        <ProjectsHeader className="mb-12 md:mb-14" />
        <ProjectCarousel onOpen={setSelected} />
      </div>

      <ProjectModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
