"use client";

import { useEffect, useRef, useState } from "react";
import { GuidingStar } from "./GuidingStar";
import { VirgoConstellation } from "./VirgoConstellation";

const stars = [
  {
    name: "MyPhase",
    lead: "Personal guidance for women.",
    description:
      "Understand your body’s natural rhythm and honor what each phase is asking of you.",
    cta: "Explore MyPhase",
    href: "https://myphaseapp.com",
    available: true,
    /** Desktop triangle vertex — title sits on the node */
    desktopClass: "md:left-[14%] md:top-[52%]",
  },
  {
    name: "InPhase",
    lead: "Relationship guidance for men.",
    description:
      "Better understand her rhythm so you can show up with greater connection and confidence.",
    cta: "Explore InPhase",
    href: "https://inphaseapp.com",
    available: true,
    desktopClass: "md:left-1/2 md:top-[6%]",
  },
  {
    name: "OurPhase",
    lead: "Shared guidance for every relationship.",
    description:
      "Helping two people better understand each other.",
    cta: "Coming Soon",
    href: undefined,
    available: false,
    desktopClass: "md:left-[86%] md:top-[52%]",
  },
] as const;

function StarCard({
  star,
  index,
}: {
  star: (typeof stars)[number];
  index: number;
}) {
  return (
    <>
      <div className="relative flex items-center justify-center py-2">
        <GuidingStar delay={`${index * 1.2}s`} size="sm" />
        <h3 className="relative z-10 font-serif text-2xl tracking-[0.06em] text-ink md:text-[1.75rem]">
          {star.name}
        </h3>
      </div>
      <p className="mx-auto mt-3.5 max-w-[240px] text-sm leading-[1.55] text-ink/80">
        {star.lead}
      </p>
      <p className="mx-auto mt-4 max-w-[240px] text-sm leading-[1.8] text-ink/55">
        {star.description}
      </p>
      <div className="mt-7">
        {star.available && star.href ? (
          <a
            href={star.href}
            className="btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            {star.cta}
          </a>
        ) : (
          <button type="button" className="btn-ghost" disabled>
            {star.cta}
          </button>
        )}
      </div>
    </>
  );
}

export function Constellation() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.22 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="constellation"
      className="section-y relative overflow-hidden"
      aria-labelledby="constellation-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 40%, rgba(255,255,255,0.35), transparent 70%)",
        }}
      />

      {/* Real Virgo — atmospheric background, discoverable on a longer look */}
      <VirgoConstellation
        idPrefix="constellation-virgo"
        tone="dusk"
        className="pointer-events-none absolute left-1/2 top-[42%] h-[min(110vw,780px)] w-[min(110vw,780px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.14] md:top-[48%] md:h-[min(85vw,820px)] md:w-[min(85vw,820px)] md:opacity-[0.18]"
      />

      <div className="section-pad relative mx-auto max-w-6xl">
        <div className="section-intro mx-auto max-w-2xl text-center">
          <p className="section-label">Our Constellation</p>
          <h2
            id="constellation-heading"
            className="section-heading mt-5 font-serif text-[clamp(2.1rem,4.2vw,3.25rem)] leading-[1.15]"
          >
            Many products. One philosophy.
          </h2>
          <p className="mx-auto text-base text-ink/60 md:text-lg">
            Each TripleVirgo application is thoughtfully designed to illuminate a
            different part of the human experience. Together, they form a
            constellation of tools that inspire greater clarity, connection, and
            growth.
          </p>
        </div>

        <div ref={ref}>
          {/* Mobile — natural stack */}
          <div className="relative md:hidden">
            <ul className="relative flex list-none flex-col items-center gap-24 pt-8 md:pt-4">
              {stars.map((star, i) => (
                <li
                  key={star.name}
                  className={`w-full max-w-[280px] text-center transition-opacity duration-1000 ${
                    visible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${0.45 + i * 0.28}s` }}
                >
                  <StarCard star={star} index={i} />
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop — three luminous points */}
          <div className="relative mx-auto mt-4 hidden min-h-[760px] w-full max-w-5xl md:mt-8 md:block lg:min-h-[820px]">
            <ul className="absolute inset-0 list-none">
              {stars.map((star, i) => (
                <li
                  key={star.name}
                  className={`absolute w-[min(100%,260px)] text-center transition-opacity duration-1000 lg:w-[280px] ${star.desktopClass} ${
                    visible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transform: "translate(-50%, 0)",
                    transitionDelay: `${0.45 + i * 0.28}s`,
                  }}
                >
                  <StarCard star={star} index={i} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-20 max-w-sm text-center text-sm leading-[1.9] tracking-wide text-ink/40 md:mt-24">
          One constellation under the TripleVirgo philosophy — with room for
          new stars to appear.
        </p>
      </div>
    </section>
  );
}
