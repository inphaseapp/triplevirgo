/**
 * Virgo constellation from J2000 coordinates.
 * Easter egg for later sections — never behind the primary logo.
 */

type Star = {
  name: string;
  ra: number;
  dec: number;
  mag: number;
};

const STARS: Record<string, Star> = {
  zavijava: { name: "Zavijava", ra: 11.845, dec: 1.766, mag: 3.61 },
  zaniah: { name: "Zaniah", ra: 12.333, dec: -0.667, mag: 3.89 },
  porrima: { name: "Porrima", ra: 12.694, dec: -1.449, mag: 2.74 },
  minelauva: { name: "Minelauva", ra: 12.926, dec: 3.398, mag: 3.39 },
  vindemiatrix: { name: "Vindemiatrix", ra: 13.037, dec: 10.959, mag: 2.83 },
  heze: { name: "Heze", ra: 13.578, dec: -0.596, mag: 3.38 },
  spica: { name: "Spica", ra: 13.42, dec: -11.161, mag: 0.98 },
  syrma: { name: "Syrma", ra: 14.267, dec: -6.0, mag: 4.07 },
  kang: { name: "Kang", ra: 14.213, dec: -10.274, mag: 4.18 },
  theta: { name: "θ Vir", ra: 13.165, dec: -5.539, mag: 4.38 },
};

/** Classic Y of Virgo + Spica stem */
const LINES: string[][] = [
  ["zavijava", "zaniah", "porrima", "minelauva", "vindemiatrix"],
  ["porrima", "heze", "spica"],
  ["heze", "syrma"],
  ["spica", "kang"],
];

const RA_MIN = 11.55;
const RA_MAX = 14.45;
const DEC_MIN = -12.5;
const DEC_MAX = 12.5;
const PAD = 10;

function project(ra: number, dec: number) {
  const x = PAD + ((RA_MAX - ra) / (RA_MAX - RA_MIN)) * (100 - PAD * 2);
  const y = PAD + ((DEC_MAX - dec) / (DEC_MAX - DEC_MIN)) * (100 - PAD * 2);
  return { x, y };
}

function starRadius(mag: number) {
  return Math.max(0.32, 1.05 - mag * 0.14);
}

type VirgoConstellationProps = {
  className?: string;
  /** dusk = ink whisper on light sky (default for Easter egg) */
  tone?: "dusk" | "night";
  /** Unique prefix so multiple instances don’t collide on gradient IDs */
  idPrefix?: string;
};

export function VirgoConstellation({
  className = "",
  tone = "dusk",
  idPrefix = "virgo",
}: VirgoConstellationProps) {
  const points = Object.fromEntries(
    Object.entries(STARS).map(([key, star]) => [
      key,
      { ...project(star.ra, star.dec), ...star },
    ]),
  );

  const isDusk = tone === "dusk";
  const lineA = isDusk ? "#5A4E78" : "#E8D5C4";
  const lineB = isDusk ? "#2C3450" : "#F4F1EC";
  const starFill = isDusk ? "#1A2038" : "#F4F1EC";
  const spicaHalo = isDusk ? "#9A8FB8" : "#C9A590";
  const vignetteId = `${idPrefix}-vignette`;
  const maskId = `${idPrefix}-mask`;

  return (
    <svg
      viewBox="0 0 100 100"
      className={`virgo-constellation ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={vignetteId} cx="50%" cy="48%" r="55%">
          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
          <stop offset="45%" stopColor="white" stopOpacity="0.85" />
          <stop offset="100%" stopColor="white" stopOpacity="0.15" />
        </radialGradient>
        <mask id={maskId}>
          <rect width="100" height="100" fill={`url(#${vignetteId})`} />
        </mask>

        {LINES.map((line, i) => {
          const a = points[line[0]!];
          const b = points[line[line.length - 1]!];
          if (!a || !b) return null;
          return (
            <linearGradient
              key={`grad-${i}`}
              id={`${idPrefix}-line-${i}`}
              gradientUnits="userSpaceOnUse"
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
            >
              <stop offset="0%" stopColor={lineA} stopOpacity="0" />
              <stop offset="20%" stopColor={lineA} stopOpacity="0.35" />
              <stop offset="50%" stopColor={lineB} stopOpacity="0.45" />
              <stop offset="80%" stopColor={lineA} stopOpacity="0.35" />
              <stop offset="100%" stopColor={lineA} stopOpacity="0" />
            </linearGradient>
          );
        })}
      </defs>

      <g mask={`url(#${maskId})`}>
        {LINES.map((line, i) => {
          const d = line
            .map((id, idx) => {
              const p = points[id];
              if (!p) return "";
              return `${idx === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
            })
            .join(" ");

          return (
            <path
              key={i}
              d={d}
              stroke={`url(#${idPrefix}-line-${i})`}
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}

        {Object.entries(points).map(([id, star], i) => {
          const r = starRadius(star.mag);
          const isSpica = id === "spica";
          return (
            <g key={id}>
              {isSpica ? (
                <circle
                  cx={star.x}
                  cy={star.y}
                  r={r * 2.2}
                  fill={spicaHalo}
                  fillOpacity={isDusk ? 0.12 : 0.14}
                />
              ) : null}
              <circle
                className="virgo-star"
                cx={star.x}
                cy={star.y}
                r={isSpica ? r * 1.15 : r}
                fill={starFill}
                fillOpacity={isSpica ? (isDusk ? 0.42 : 0.72) : isDusk ? 0.28 : 0.48}
                style={{
                  ["--twinkle-duration" as string]: `${5 + (i % 4) * 1.4}s`,
                  ["--twinkle-delay" as string]: `${(i * 0.85) % 6}s`,
                }}
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
