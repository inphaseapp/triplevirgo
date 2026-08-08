/** Precomputed — avoids Math.sin SSR/client float drift */
const STARS = [
  { x: 12, y: 18, size: 1.2, opacity: 0.35, duration: 4.2, delay: 0.4 },
  { x: 28, y: 8, size: 0.8, opacity: 0.22, duration: 5.1, delay: 1.2 },
  { x: 45, y: 22, size: 1.5, opacity: 0.4, duration: 3.8, delay: 0.8 },
  { x: 62, y: 12, size: 0.7, opacity: 0.2, duration: 6.0, delay: 2.1 },
  { x: 78, y: 28, size: 1.1, opacity: 0.32, duration: 4.6, delay: 0.2 },
  { x: 91, y: 15, size: 0.9, opacity: 0.26, duration: 5.4, delay: 1.7 },
  { x: 8, y: 42, size: 1.0, opacity: 0.28, duration: 4.9, delay: 3.0 },
  { x: 22, y: 55, size: 1.4, opacity: 0.38, duration: 3.6, delay: 0.6 },
  { x: 38, y: 48, size: 0.6, opacity: 0.18, duration: 5.8, delay: 2.4 },
  { x: 55, y: 38, size: 1.3, opacity: 0.34, duration: 4.1, delay: 1.0 },
  { x: 70, y: 52, size: 0.8, opacity: 0.24, duration: 5.5, delay: 1.9 },
  { x: 86, y: 44, size: 1.2, opacity: 0.3, duration: 3.9, delay: 0.3 },
  { x: 15, y: 68, size: 0.9, opacity: 0.26, duration: 4.7, delay: 2.8 },
  { x: 33, y: 75, size: 1.1, opacity: 0.3, duration: 5.2, delay: 1.4 },
  { x: 48, y: 62, size: 0.7, opacity: 0.2, duration: 6.1, delay: 0.9 },
  { x: 65, y: 72, size: 1.4, opacity: 0.36, duration: 3.7, delay: 2.2 },
  { x: 82, y: 66, size: 0.8, opacity: 0.22, duration: 4.4, delay: 1.6 },
  { x: 95, y: 78, size: 1.0, opacity: 0.28, duration: 5.0, delay: 0.5 },
  { x: 5, y: 88, size: 0.6, opacity: 0.16, duration: 5.6, delay: 3.2 },
  { x: 25, y: 92, size: 1.2, opacity: 0.32, duration: 4.0, delay: 1.1 },
  { x: 42, y: 85, size: 0.9, opacity: 0.24, duration: 4.8, delay: 2.6 },
  { x: 58, y: 95, size: 1.1, opacity: 0.3, duration: 3.5, delay: 0.7 },
  { x: 74, y: 88, size: 0.7, opacity: 0.18, duration: 5.9, delay: 1.8 },
  { x: 88, y: 94, size: 1.3, opacity: 0.34, duration: 4.3, delay: 2.0 },
  { x: 18, y: 32, size: 0.8, opacity: 0.22, duration: 5.3, delay: 1.3 },
  { x: 52, y: 8, size: 1.0, opacity: 0.28, duration: 4.5, delay: 2.9 },
  { x: 36, y: 58, size: 1.5, opacity: 0.38, duration: 3.4, delay: 0.1 },
  { x: 68, y: 32, size: 0.6, opacity: 0.18, duration: 6.2, delay: 2.5 },
  { x: 92, y: 58, size: 1.1, opacity: 0.3, duration: 4.2, delay: 1.5 },
  { x: 10, y: 78, size: 0.9, opacity: 0.24, duration: 5.1, delay: 0.8 },
  { x: 46, y: 42, size: 0.7, opacity: 0.2, duration: 4.9, delay: 3.1 },
  { x: 80, y: 20, size: 1.2, opacity: 0.32, duration: 3.8, delay: 1.2 },
  { x: 30, y: 28, size: 1.0, opacity: 0.28, duration: 5.4, delay: 2.3 },
  { x: 60, y: 82, size: 0.8, opacity: 0.22, duration: 4.6, delay: 0.4 },
  { x: 14, y: 50, size: 1.3, opacity: 0.34, duration: 3.9, delay: 1.7 },
  { x: 76, y: 48, size: 0.6, opacity: 0.16, duration: 5.7, delay: 2.7 },
  { x: 40, y: 16, size: 1.1, opacity: 0.3, duration: 4.1, delay: 0.9 },
  { x: 84, y: 72, size: 0.9, opacity: 0.24, duration: 5.2, delay: 1.4 },
  { x: 20, y: 84, size: 1.4, opacity: 0.36, duration: 3.6, delay: 2.1 },
  { x: 56, y: 24, size: 0.7, opacity: 0.2, duration: 5.8, delay: 0.6 },
] as const;

type StarfieldProps = {
  density?: number;
  className?: string;
  /** night = pearl stars on dark sky; dusk = ink dust on light sky */
  tone?: "night" | "dusk";
};

export function Starfield({
  density = 45,
  className = "",
  tone = "night",
}: StarfieldProps) {
  const stars = STARS.slice(0, Math.min(density, STARS.length));
  const color = tone === "night" ? "bg-pearl" : "bg-ink";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {stars.map((star, id) => (
        <span
          key={id}
          className={`animate-twinkle absolute rounded-full ${color}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            ["--twinkle-duration" as string]: `${star.duration}s`,
            ["--twinkle-delay" as string]: `${star.delay}s`,
            boxShadow:
              tone === "night" && star.size > 1.2
                ? "0 0 6px rgba(232, 228, 221, 0.35)"
                : undefined,
          }}
        />
      ))}
    </div>
  );
}
