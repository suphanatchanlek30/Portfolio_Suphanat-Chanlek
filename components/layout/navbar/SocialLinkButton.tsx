// components/layout/navbar/SocialLinkButton.tsx

import { cn } from "@/lib/classNames";
import type { SocialLink } from "@/types/navigation";

type SocialLinkButtonProps = {
  link: SocialLink;
  className?: string;
};

/**
 * Reusable social link button with icon.
 * Styling is handled here in the component, not in data.
 */
export default function SocialLinkButton({ link, className }: SocialLinkButtonProps) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={link.label}
      className={cn(
        "inline-flex h-8 w-12 items-center justify-center rounded-md",
        "bg-btn-social-bg text-btn-social-text",
        "transition-colors hover:bg-btn-social-hover-bg",
        className,
      )}
    >
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={link.svgPath} />
      </svg>
    </a>
  );
}
