// components/sections/about/AboutSection.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/classNames";
import AboutHeader from "@/components/sections/about/AboutHeader";
import AboutTimeline from "@/components/sections/about/AboutTimeline";

type AboutSectionProps = {
  className?: string;
};

/**
 * About section with Vercel Eve-style layout.
 * Desktop (lg+): 12-column grid — sticky photo stack on left (col 1-5),
 * scrollable timeline content on right (col 7-12).
 * Mobile/Tablet: stacked layout — header, image, then timeline.
 *
 * Performance: all animations use transform + opacity only (GPU-composited).
 * No filter/blur animations. will-change hints on animated elements.
 */
export default function AboutSection({ className }: AboutSectionProps) {
  return (
    <section
      id="about"
      className={cn(
        "relative w-full bg-background px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-28 lg:px-20",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header — full width */}
        <AboutHeader className="mb-14 md:mb-20" />

        {/* Main content grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-x-8">
          {/* Left: Sticky photo stack (hidden on mobile, shown lg+) */}
          <div className="hidden lg:col-span-5 lg:col-start-1 lg:block">
            <div className="sticky top-24">
              <div className="relative">
                {/* Main image — slight tilt, GPU-only transform */}
                <motion.div
                  className="relative aspect-[3/4] w-[85%] overflow-hidden rounded-xl border border-about-border will-change-transform"
                  initial={{ opacity: 0, x: -30, rotate: -2 }}
                  whileInView={{ opacity: 1, x: 0, rotate: -1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src="/about/About_Image.webp"
                    alt="Suphanat Chanlek"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 35vw, 0vw"
                    priority
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Secondary image — overlapping, opposite tilt */}
                <motion.div
                  className="absolute -right-2 bottom-8 aspect-[4/3] w-[55%] overflow-hidden rounded-lg border border-about-border shadow-2xl will-change-transform xl:bottom-12"
                  initial={{ opacity: 0, x: 40, rotate: 4, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 2, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src="/about/About_Image2.jpg"
                    alt="Suphanat Chanlek - Hackathon"
                    fill
                    className="object-cover brightness-90"
                    sizes="(min-width: 1024px) 20vw, 0vw"
                    loading="lazy"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-black/5"
                    aria-hidden="true"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile image — shown on small screens only */}
          <motion.div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-about-border will-change-transform lg:hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/about/About_Image.webp"
              alt="Suphanat Chanlek"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 0vw"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"
              aria-hidden="true"
            />
          </motion.div>

          {/* Right: Scrollable timeline content */}
          <div className="lg:col-span-6 lg:col-start-7">
            <AboutTimeline />
          </div>
        </div>
      </div>
    </section>
  );
}
