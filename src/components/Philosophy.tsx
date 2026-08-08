import { OrbitalWhisper } from "./BrandEcho";
import { VirgoConstellation } from "./VirgoConstellation";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="section-y relative overflow-hidden"
      aria-labelledby="philosophy-heading"
    >
      {/* Virgo — faint discovery, never competing with the hero mark */}
      <VirgoConstellation
        idPrefix="philosophy-virgo"
        tone="dusk"
        className="pointer-events-none absolute -right-[18%] top-[8%] h-[min(70vw,520px)] w-[min(70vw,520px)] opacity-[0.1] md:-right-[8%] md:top-[12%] md:opacity-[0.12]"
      />

      <OrbitalWhisper className="pointer-events-none absolute -left-8 bottom-[12%] h-28 w-28 text-ink opacity-40 md:left-8 md:h-36 md:w-36" />

      <div className="section-pad relative mx-auto max-w-3xl">
        <div className="section-intro">
          <p className="section-label">Philosophy</p>
          <h2
            id="philosophy-heading"
            className="mt-5 font-serif text-[clamp(2.35rem,5vw,3.85rem)] leading-[1.1] text-ink"
          >
            Our Philosophy
          </h2>
        </div>

        <div className="editorial-measure space-y-10 text-lg leading-[2] text-ink/60 md:space-y-12 md:text-[1.2rem]">
          <p className="font-serif text-[clamp(1.4rem,2.6vw,1.85rem)] leading-[1.55] text-ink">
            Technology should help people become more human, not less.
          </p>

          <p>
            We believe the most meaningful innovations are those that deepen
            self-awareness, strengthen relationships, and create greater
            understanding between people.
          </p>

          <p>
            Our products are designed to encourage reflection instead of
            distraction, curiosity instead of judgment, and wisdom instead of
            noise.
          </p>

          <p className="pt-2">Everything we build begins with a simple question:</p>

          <blockquote className="border-l border-rose-gold/50 py-2 pl-8 font-serif text-[clamp(1.3rem,2.5vw,1.7rem)] leading-[1.55] text-ink md:pl-10">
            &ldquo;How can technology help us better understand ourselves and
            each other?&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
