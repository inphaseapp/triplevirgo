export function Connect() {
  return (
    <section
      id="connect"
      className="section-y relative overflow-hidden"
      aria-labelledby="connect-heading"
    >
      <div className="section-pad relative mx-auto max-w-xl text-center">
        <div className="section-intro mx-auto">
          <p className="section-label">Connect</p>
          <h2
            id="connect-heading"
            className="section-heading mt-5 font-serif text-[clamp(2.2rem,4.5vw,3.35rem)] leading-[1.12]"
          >
            Join the constellation.
          </h2>
          <p className="mx-auto text-base text-ink/60 md:text-lg">
            For questions, thoughtful ideas, or what&apos;s next from
            TripleVirgo — write to us anytime.
          </p>
        </div>

        <a
          href="mailto:connect@triplevirgo.com"
          className="mt-10 inline-block font-serif text-xl tracking-[0.06em] text-ink transition-opacity duration-500 hover:opacity-70 md:mt-12 md:text-2xl"
        >
          connect@triplevirgo.com
        </a>
      </div>
    </section>
  );
}
