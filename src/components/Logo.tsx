type LogoProps = {
  className?: string;
  size?: number;
  withWordmark?: boolean;
  /** Unique suffix so gradient IDs never collide or mismatch across SSR */
  id?: string;
  /**
   * ink — dark mark for light surfaces (nav/footer)
   * sacred — pearl / rose-gold symbol for the hero
   */
  variant?: "ink" | "sacred";
};

export function Logo({
  className = "",
  size = 48,
  withWordmark = false,
  id = "mark",
  variant = "ink",
}: LogoProps) {
  const glowId = `tv-glow-${id}`;
  const strokeId = `tv-stroke-${id}`;
  const isSacred = variant === "sacred";

  const orbit = isSacred ? "#E8E0D4" : "#3D3558";
  const orbitOpacity = isSacred
    ? ([0.42, 0.32, 0.28] as const)
    : ([0.28, 0.18, 0.14] as const);
  const innerStroke = isSacred ? "#F4F1EC" : "#1A2038";
  const starFill = isSacred ? "#F7F3EE" : "#1A2038";
  const wordmarkClass = isSacred ? "text-pearl" : "text-ink";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`max-w-full ${isSacred ? "logo-sacred" : "logo-shimmer"}`}
        role="img"
        aria-hidden={withWordmark ? true : undefined}
        aria-label={withWordmark ? undefined : "triplevirgo"}
        style={{ opacity: isSacred ? 0.95 : 1 }}
      >
        <defs>
          <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
            {isSacred ? (
              <>
                <stop offset="0%" stopColor="#F7F3EE" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#C9A590" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#C9A590" stopOpacity="0" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#2C3450" stopOpacity="0.55" />
                <stop offset="45%" stopColor="#5A4E78" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#5A4E78" stopOpacity="0" />
              </>
            )}
          </radialGradient>
          <linearGradient id={strokeId} x1="0%" y1="0%" x2="100%" y2="100%">
            {isSacred ? (
              <>
                <stop offset="0%" stopColor="#F4F1EC" stopOpacity="0.98" />
                <stop offset="45%" stopColor="#E8D5C4" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#C9A590" stopOpacity="0.92" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#1A2038" stopOpacity="0.92" />
                <stop offset="100%" stopColor="#3D3558" stopOpacity="0.78" />
              </>
            )}
          </linearGradient>
        </defs>

        <circle
          cx="100"
          cy="105"
          r="78"
          stroke={orbit}
          strokeOpacity={orbitOpacity[0]}
          strokeWidth="0.7"
          strokeDasharray="0.9 3"
        />
        <circle
          cx="100"
          cy="105"
          r="68"
          stroke={orbit}
          strokeOpacity={orbitOpacity[1]}
          strokeWidth="0.6"
          strokeDasharray="0.7 2.6"
        />
        <circle
          cx="100"
          cy="105"
          r="58"
          stroke={orbit}
          strokeOpacity={orbitOpacity[2]}
          strokeWidth="0.55"
          strokeDasharray="0.6 2.3"
        />

        <path
          d="M100 32 L168 152 L32 152 Z"
          stroke={`url(#${strokeId})`}
          strokeWidth={isSacred ? 1.5 : 1.35}
          strokeLinejoin="round"
        />

        <circle
          cx="100"
          cy="112"
          r="36"
          stroke={innerStroke}
          strokeOpacity={isSacred ? 0.88 : 0.55}
          strokeWidth={isSacred ? 1.15 : 1}
        />

        <line
          x1="100"
          y1="32"
          x2="100"
          y2="152"
          stroke={innerStroke}
          strokeOpacity={isSacred ? 0.55 : 0.35}
          strokeWidth={isSacred ? 0.85 : 0.7}
        />

        {/* Three vertex stars — gentle shimmer when sacred */}
        <g className="star-vertex">
          <circle cx="100" cy="32" r="12" fill={`url(#${glowId})`} />
          <path
            d="M100 22 L101.2 30.8 L110 32 L101.2 33.2 L100 42 L98.8 33.2 L90 32 L98.8 30.8 Z"
            fill={starFill}
            fillOpacity="0.98"
          />
        </g>
        <g className="star-vertex">
          <circle cx="168" cy="152" r="11" fill={`url(#${glowId})`} />
          <path
            d="M168 143 L169.1 150.9 L177 152 L169.1 153.1 L168 161 L166.9 153.1 L159 152 L166.9 150.9 Z"
            fill={starFill}
            fillOpacity="0.98"
          />
        </g>
        <g className="star-vertex">
          <circle cx="32" cy="152" r="11" fill={`url(#${glowId})`} />
          <path
            d="M32 143 L33.1 150.9 L41 152 L33.1 153.1 L32 161 L30.9 153.1 L23 152 L30.9 150.9 Z"
            fill={starFill}
            fillOpacity="0.98"
          />
        </g>

        {/* Center star — still, no shimmer */}
        <g>
          <circle cx="100" cy="112" r="13" fill={`url(#${glowId})`} />
          <path
            d="M100 100 L101.4 110.6 L112 112 L101.4 113.4 L100 124 L98.6 113.4 L88 112 L98.6 110.6 Z"
            fill={starFill}
            fillOpacity="0.95"
          />
        </g>
      </svg>

      {withWordmark ? (
        <span
          className={`font-serif text-[1.05rem] tracking-[0.18em] lowercase ${wordmarkClass}`}
        >
          triplevirgo
        </span>
      ) : null}
    </span>
  );
}
