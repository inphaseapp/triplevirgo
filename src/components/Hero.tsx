"use client";

import { BrandMark } from "./BrandMark";
import { Starfield } from "./Starfield";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Night sky — cosmos */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 55% 40% at 70% 20%, rgba(60, 50, 100, 0.35), transparent 55%),
            radial-gradient(ellipse 40% 30% at 20% 60%, rgba(40, 55, 90, 0.3), transparent 50%),
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(50, 55, 90, 0.45), transparent 55%),
            linear-gradient(180deg, #070b16 0%, #0a1020 45%, #121a32 78%, #2a3358 100%)
          `,
        }}
      />

      {/* Extremely faint nebula */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 40% 28% at 60% 40%, rgba(120, 100, 160, 0.12), transparent 70%),
            radial-gradient(ellipse 30% 22% at 30% 30%, rgba(80, 100, 140, 0.1), transparent 70%)
          `,
        }}
      />

      <Starfield density={50} tone="night" className="opacity-70" />

      {/* Soft bridge into dusk — bottom of hero only */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 md:h-52"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(90, 100, 140, 0.35) 50%, rgba(138, 146, 176, 0.75) 100%)",
        }}
      />

      <div className="h-[5.25rem] shrink-0" aria-hidden="true" />

      <div className="section-pad relative z-10 mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-4 pb-28 pt-6 text-center md:pb-32 md:pt-8">
        {/* Official logo — identity mark, room to breathe */}
        <div
          className="animate-fade-rise relative mb-6 w-[min(88vw,420px)] md:mb-8 md:w-[480px]"
          style={{ animationDelay: "0.12s" }}
        >
          {/* Soft aura behind the mark — filter would break mix-blend */}
          <div
            className="pointer-events-none absolute left-1/2 top-[38%] h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(160, 180, 230, 0.22) 0%, rgba(100, 120, 180, 0.08) 45%, transparent 70%)",
              filter: "blur(18px)",
            }}
          />
          <BrandMark priority />
        </div>

        {/* Tagline lives in the official lockup — no duplicate */}

        <h1
          id="hero-heading"
          className="animate-fade-rise mt-4 max-w-2xl font-serif text-[clamp(2.1rem,5vw,3.5rem)] leading-[1.14] tracking-tight text-pearl md:mt-6"
          style={{ animationDelay: "0.4s" }}
        >
          Live in greater alignment.
        </h1>

        <p
          className="animate-fade-rise mx-auto mt-7 max-w-md text-base leading-[1.9] text-pearl/65 md:mt-8 md:text-lg"
          style={{ animationDelay: "0.6s" }}
        >
          Thoughtfully designed applications for relationships, personal growth,
          and life&apos;s natural rhythms — shaped with presence, compassion, and
          intention.
        </p>

        <div
          className="animate-fade-rise mt-12 md:mt-14"
          style={{ animationDelay: "0.8s" }}
        >
          <a href="#constellation" className="btn-primary btn-primary-night">
            Discover Our Apps
          </a>
        </div>
      </div>
    </section>
  );
}
