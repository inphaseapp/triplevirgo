import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { SecondaryPage } from "@/components/SecondaryPage";

export const metadata: Metadata = {
  title: {
    absolute: "triplevirgo",
  },
  description:
    "The story behind the name — curiosity, thoughtful design, and technology that cultivates awareness.",
  alternates: { canonical: "/triplevirgo" },
  openGraph: {
    title: "triplevirgo",
    url: "https://triplevirgo.com/triplevirgo",
  },
};

export default function TripleVirgoStoryPage() {
  return (
    <SecondaryPage
      showClose
      maxWidthClassName="max-w-xl"
      footer={
        <footer className="section-pad mx-auto flex max-w-xl flex-col items-center pb-24">
          <Logo id="story-footer" size={56} />
          <p className="mt-14 text-sm tracking-[0.08em] text-ink/40">
            © 2026 TripleVirgo, LLC
          </p>
        </footer>
      }
    >
      <main className="section-pad mx-auto max-w-xl pb-8 pt-16 md:pt-24">
        <article>
          <h1 className="animate-fade-rise font-serif text-[clamp(2.2rem,4.5vw,3.25rem)] leading-[1.12] tracking-tight text-ink">
            triplevirgo
          </h1>

          <div className="mt-14 space-y-8 text-base leading-[2] text-ink/60 md:mt-16 md:text-[1.05rem] md:leading-[2.05]">
            <p className="animate-fade-rise" style={{ animationDelay: "0.28s" }}>
              Every meaningful company begins with a question.
            </p>

            <p className="animate-fade-rise" style={{ animationDelay: "0.4s" }}>
              For us, it was this:
            </p>

            <p
              className="animate-fade-rise font-serif text-[clamp(1.35rem,2.8vw,1.75rem)] leading-[1.55] text-ink"
              style={{ animationDelay: "0.55s" }}
            >
              How can technology help us better understand ourselves and each
              other?
            </p>
          </div>

          <div
            className="animate-fade-rise divider-line my-14 md:my-16"
            style={{ animationDelay: "0.7s" }}
            aria-hidden="true"
          />

          <div className="space-y-8 text-base leading-[2] text-ink/60 md:text-[1.05rem] md:leading-[2.05]">
            <p className="animate-fade-rise" style={{ animationDelay: "0.8s" }}>
              TripleVirgo was born from the idea that deeper understanding
              creates stronger relationships—with ourselves, with each other,
              and with the world around us.
            </p>

            <p className="animate-fade-rise" style={{ animationDelay: "0.95s" }}>
              The name comes from our founder Jeane Divine&apos;s natal chart—
              <strong className="font-medium text-ink/80">
                Sun, Rising, and Venus in Virgo
              </strong>
              —a reminder that curiosity, thoughtful design, and careful
              observation can become acts of service.
            </p>

            <p className="animate-fade-rise" style={{ animationDelay: "1.1s" }}>
              Today, TripleVirgo builds technology that helps people better
              understand themselves and one another.
            </p>
          </div>

          <div
            className="animate-fade-rise divider-line my-14 md:my-16"
            style={{ animationDelay: "1.2s" }}
            aria-hidden="true"
          />

          <section
            className="animate-fade-rise"
            style={{ animationDelay: "1.3s" }}
            aria-labelledby="north-star-heading"
          >
            <h2
              id="north-star-heading"
              className="font-serif text-[clamp(1.75rem,3.2vw,2.35rem)] leading-[1.2] text-ink"
            >
              Our North Star
            </h2>

            <div className="mt-10 space-y-8 text-base leading-[2] text-ink/60 md:text-[1.05rem] md:leading-[2.05]">
              <p>We don&apos;t build technology to capture attention.</p>
              <p>We build technology to cultivate awareness.</p>
              <p>
                Every product we create has the power to leave people feeling
                more connected to themselves than when they first opened it.
              </p>
            </div>
          </section>
        </article>
      </main>
    </SecondaryPage>
  );
}
