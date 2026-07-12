// components/layout/navbar/MenuToggleButton.tsx

type MenuToggleButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function MenuToggleButton({ isOpen, onClick }: MenuToggleButtonProps) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      onClick={onClick}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10 md:hidden"
    >
      {isOpen ? (
        <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
          <path
            fill="currentColor"
            d="M3.2 2.5 2.5 3.2 6.9 7.6 2.5 12l.7.7 4.4-4.4 4.4 4.4.7-.7-4.4-4.4 4.4-4.4-.7-.7-4.4 4.4z"
          />
        </svg>
      ) : (
        <span className="flex h-4 w-4 flex-col justify-between">
          <span className="block h-px w-full bg-current" />
          <span className="block h-px w-full bg-current" />
          <span className="block h-px w-full bg-current" />
        </span>
      )}
    </button>
  );
}
