"use client";

import { useRouter } from "next/navigation";
import { leaveSecondary } from "@/lib/leaveSecondary";

type SecondaryBackProps = {
  className?: string;
};

/** Top-left back control for secondary pages. */
export function SecondaryBack({ className = "" }: SecondaryBackProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() =>
        leaveSecondary(
          () => router.push("/"),
          () => router.back(),
        )
      }
      className={`nav-link inline-flex items-center gap-2 normal-case tracking-[0.12em] ${className}`}
      aria-label="Go back"
    >
      <span aria-hidden="true" className="text-base leading-none">
        ←
      </span>
      <span>Back</span>
    </button>
  );
}

type SecondaryCloseProps = {
  className?: string;
};

/**
 * Bottom close action for informational / footer destinations.
 * Returns to originating context when possible; otherwise home.
 */
export function SecondaryClose({ className = "" }: SecondaryCloseProps) {
  const router = useRouter();

  return (
    <div
      className={`section-pad flex justify-center pb-[max(5rem,env(safe-area-inset-bottom))] pt-16 md:pt-20 ${className}`}
    >
      <button
        type="button"
        onClick={() =>
          leaveSecondary(
            () => router.push("/"),
            () => router.back(),
          )
        }
        className="btn-ghost min-w-[10rem]"
      >
        Close
      </button>
    </div>
  );
}
