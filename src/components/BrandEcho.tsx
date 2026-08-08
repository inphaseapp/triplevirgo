/** Tiny visual whispers derived from the TripleVirgo mark */

export function BrandDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-ink/20 md:w-14" />
      <span className="text-[0.4rem] text-ink/35">✦</span>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-ink/20 md:w-14" />
    </div>
  );
}

export function OrbitalWhisper({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="60"
        cy="60"
        r="48"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="0.6"
        strokeDasharray="1.2 3.5"
      />
      <circle
        cx="60"
        cy="60"
        r="32"
        stroke="currentColor"
        strokeOpacity="0.14"
        strokeWidth="0.5"
        strokeDasharray="0.8 2.8"
      />
      <path
        d="M60 28 L88 92 L32 92 Z"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="28" r="1.2" fill="currentColor" fillOpacity="0.25" />
    </svg>
  );
}
