type GuidingStarProps = {
  delay?: string;
  /** Slightly larger for Mission words; compact for app titles */
  size?: "sm" | "md";
  className?: string;
};

/**
 * Soft four-pointed gold star — light behind a word, never a flare.
 */
export function GuidingStar({
  delay = "0s",
  size = "md",
  className = "",
}: GuidingStarProps) {
  const markClass =
    size === "sm"
      ? "mission-star-mark relative h-9 w-9 md:h-10 md:w-10"
      : "mission-star-mark relative h-11 w-11 md:h-12 md:w-12";

  return (
    <span
      className={`mission-guiding-star pointer-events-none absolute left-1/2 top-1/2 ${className}`}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      <span className="mission-star-aura" />

      <svg viewBox="0 0 48 48" className={markClass} fill="none">
        <g className="mission-star-rays" strokeLinecap="round">
          <line x1="24" y1="4" x2="24" y2="44" stroke="#C4A07A" strokeWidth="0.55" />
          <line x1="4" y1="24" x2="44" y2="24" stroke="#C4A07A" strokeWidth="0.55" />
          <line x1="10" y1="10" x2="38" y2="38" stroke="#B88972" strokeWidth="0.35" />
          <line x1="38" y1="10" x2="10" y2="38" stroke="#B88972" strokeWidth="0.35" />
        </g>

        <path
          d="M24 11 L25.7 22.3 L37 24 L25.7 25.7 L24 37 L22.3 25.7 L11 24 L22.3 22.3 Z"
          fill="#C4A07A"
          fillOpacity="0.55"
        />
        <path
          d="M24 15 L25.1 22.9 L33 24 L25.1 25.1 L24 33 L22.9 25.1 L15 24 L22.9 22.9 Z"
          fill="#E8D5C4"
          fillOpacity="0.75"
        />
      </svg>
    </span>
  );
}
