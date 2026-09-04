// components/sections/projects/ProjectModalImage.tsx

"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/classNames";

type ProjectModalImageProps = {
  src: string;
  alt: string;
};

/**
 * Modal hero image with a fade-in on load.
 * Mount a fresh instance per item (`key={item.id}` at the call site) so the
 * loaded state resets naturally instead of via an effect + setState.
 */
export default function ProjectModalImage({ src, alt }: ProjectModalImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 640px) 768px, 100vw"
      quality={90}
      priority
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover transition-opacity duration-500 ease-out",
        loaded ? "opacity-100" : "opacity-0",
      )}
    />
  );
}
