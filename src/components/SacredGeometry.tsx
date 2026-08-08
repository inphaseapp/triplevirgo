type SacredGeometryProps = {
  className?: string;
  variant?: "flower" | "orbital" | "constellation";
};

export function SacredGeometry({
  className = "",
  variant = "flower",
}: SacredGeometryProps) {
  if (variant === "orbital") {
    return (
      <svg
        viewBox="0 0 600 600"
        className={className}
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="300"
          cy="300"
          r="220"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="0.75"
        />
        <circle
          cx="300"
          cy="300"
          r="160"
          stroke="currentColor"
          strokeOpacity="0.4"
          strokeWidth="0.75"
        />
        <circle
          cx="300"
          cy="300"
          r="100"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="0.75"
        />
        <ellipse
          cx="300"
          cy="300"
          rx="240"
          ry="90"
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="0.6"
          transform="rotate(-18 300 300)"
        />
        <ellipse
          cx="300"
          cy="300"
          rx="240"
          ry="90"
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="0.6"
          transform="rotate(42 300 300)"
        />
      </svg>
    );
  }

  if (variant === "constellation") {
    return (
      <svg
        viewBox="0 0 800 400"
        className={className}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M80 280 L180 120 L320 200 L460 90 L600 180 L720 110"
          stroke="currentColor"
          strokeOpacity="0.45"
          strokeWidth="0.8"
        />
        {[
          [80, 280],
          [180, 120],
          [320, 200],
          [460, 90],
          [600, 180],
          [720, 110],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="2"
            fill="currentColor"
            fillOpacity="0.55"
          />
        ))}
      </svg>
    );
  }

  const centers = [
    [200, 200],
    [200, 140],
    [252, 170],
    [252, 230],
    [200, 260],
    [148, 230],
    [148, 170],
  ] as const;

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {centers.map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="60"
          stroke="currentColor"
          strokeOpacity={i === 0 ? 0.45 : 0.28}
          strokeWidth="0.7"
        />
      ))}
      <circle
        cx="200"
        cy="200"
        r="104"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="0.6"
      />
    </svg>
  );
}
