// components/layout/navbar/MenuToggleButton.tsx

import { cn } from "@/lib/classNames";

type MenuToggleButtonProps = {
  /** Whether the menu is currently open */
  isOpen: boolean;
  /** Toggle handler */
  onClick: () => void;
  /** Additional className */
  className?: string;
};

/**
 * Hamburger / close button for mobile navigation.
 * Only visible on mobile (md:hidden is applied by parent).
 */
export default function MenuToggleButton({
  isOpen,
  onClick,
  className,
}: MenuToggleButtonProps) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      onClick={onClick}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full",
        "border border-btn-toggle-border text-navbar-text",
        "transition-colors hover:bg-btn-toggle-hover-bg",
        className,
      )}
    >
      {isOpen ? (
        <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
          <path
            fill="currentColor"
            d="M3.2 2.5 2.5 3.2 6.9 7.6 2.5 12l.7.7 4.4-4.4 4.4 4.4.7-.7-4.4-4.4 4.4-4.4-.7-.7-4.4 4.4z"
          />
        </svg>
      ) : (
        <span className="flex h-4 w-4 flex-col justify-between" aria-hidden="true">
          <span className="block h-px w-full bg-current" />
          <span className="block h-px w-full bg-current" />
          <span className="block h-px w-full bg-current" />
        </span>
      )}
    </button>
  );
}
