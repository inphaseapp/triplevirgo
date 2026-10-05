import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { SecondaryBack, SecondaryClose } from "./SecondaryNav";

type SecondaryPageProps = {
  children: ReactNode;
  /** Informational / footer destinations show Close. Default true. */
  showClose?: boolean;
  /** Optional header actions (e.g. in-page Contact). */
  headerTrailing?: ReactNode;
  /** Accessible name for the header actions nav. */
  headerNavLabel?: string;
  /** Content column max width. */
  maxWidthClassName?: string;
  /** Optional footer below Close (e.g. copyright). */
  footer?: ReactNode;
};

/**
 * Shared shell for secondary / informational pages.
 * Top: Back (history-aware). Bottom: optional Close for footer destinations.
 */
export function SecondaryPage({
  children,
  showClose = true,
  headerTrailing,
  headerNavLabel = "Page",
  maxWidthClassName = "max-w-2xl",
  footer,
}: SecondaryPageProps) {
  return (
    <div className="cosmic-bg min-h-screen">
      <header
        className={`section-pad mx-auto flex h-[5.25rem] items-center justify-between pt-[env(safe-area-inset-top)] ${maxWidthClassName}`}
      >
        <div className="flex items-center gap-6 md:gap-8">
          <SecondaryBack />
          <span className="hidden h-4 w-px bg-ink/10 sm:block" aria-hidden="true" />
          <div className="hidden sm:block">
            <Logo id="secondary-header" size={28} withWordmark />
          </div>
        </div>
        {headerTrailing ? (
          <nav aria-label={headerNavLabel}>{headerTrailing}</nav>
        ) : (
          <span className="w-16" aria-hidden="true" />
        )}
      </header>

      {children}

      {showClose ? <SecondaryClose /> : null}

      {footer}
    </div>
  );
}
