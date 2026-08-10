"use client";

import { useEffect, useRef, useState } from "react";
import { GuidingStar } from "./GuidingStar";

const nodes = [
  "Understanding",
  "Reflection",
  "Growth",
  "Connection",
  "Love",
] as const;

export function Mission() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="mission"
      className="section-y relative overflow-hidden"
      aria-labelledby="mission-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 55%, rgba(255,255,255,0.4), transparent 70%)",
        }}
      />

      <div className="section-pad relative mx-auto max-w-3xl text-center">
        <div className="section-intro mx-auto">
          <p className="section-label">Mission</p>
          <h2
            id="mission-heading"
            className="section-heading mt-5 font-serif text-[clamp(2.35rem,5vw,3.6rem)] leading-[1.1]"
          >
            Why TripleVirgo Exists
          </h2>
        </div>

        <div className="mx-auto max-w-md space-y-8 text-lg leading-[1.95] text-ink/60 md:space-y-9 md:text-[1.15rem]">
          <p className="font-serif text-[clamp(1.35rem,2.5vw,1.75rem)] leading-[1.5] text-ink">
            We believe understanding creates compassion.
          </p>
          <p>Compassion creates connection.</p>
          <p>Connection creates a better world.</p>
          <p className="pt-6 text-ink/80">
            Every product we build exists in service of that vision.
          </p>
        </div>

        <div
          ref={ref}
          className="relative mx-auto mt-28 max-w-lg md:mt-36"
          aria-label="Path from understanding to love"
        >
          {/* Constellation thread — quiet path between guiding stars */}
          <div
            className="pointer-events-none absolute left-1/2 top-6 bottom-6 w-px -translate-x-1/2"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(180deg, rgba(26,32,56,0.08) 0%, rgba(90,78,120,0.28) 50%, rgba(184,137,114,0.22) 100%)",
              opacity: visible ? 1 : 0,
              transform: "translateX(-50%)",
              transition: "opacity 2.4s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />

          <ol className="relative flex list-none flex-col items-center gap-16 md:gap-[4.5rem]">
            {nodes.map((label, i) => (
              <li
                key={label}
                className="relative flex min-h-16 w-full items-center justify-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(8px)",
                  transition: `opacity 0.9s ease ${0.4 + i * 0.35}s, transform 0.9s ease ${0.4 + i * 0.35}s`,
                }}
              >
                <GuidingStar delay={`${i * 1.4}s`} />
                <span className="relative z-10 font-serif text-xl tracking-[0.08em] text-ink md:text-2xl">
                  {label}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
