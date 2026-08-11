import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";
import {
  companyColors,
  companyColorsCore,
  companyFacts,
  constellationIntro,
  downloadGroups,
  founderCopy,
  pressFaq,
  pressSections,
  productPalettes,
  products,
  typography,
  voiceDo,
  voiceDont,
} from "@/lib/pressContent";

function SectionHeading({
  id,
  label,
  title,
}: {
  id: string;
  label: string;
  title: string;
}) {
  return (
    <div className="section-intro max-w-2xl">
      <p className="section-label">{label}</p>
      <h2
        id={id}
        className="section-heading mt-5 scroll-mt-28 font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.12]"
      >
        {title}
      </h2>
    </div>
  );
}

function AssetPlaceholder({
  label,
  hint,
  tone = "mist",
}: {
  label: string;
  hint: string;
  tone?: "mist" | "night";
}) {
  const night = tone === "night";
  return (
    <div
      className="relative flex aspect-[4/3] w-full flex-col items-center justify-center overflow-hidden px-6 text-center"
      style={{
        background: night
          ? `radial-gradient(ellipse 70% 55% at 50% 42%, rgba(80, 90, 130, 0.35), transparent 65%),
             linear-gradient(180deg, #0a1020 0%, #121a32 55%, #1e2748 100%)`
          : `linear-gradient(160deg, rgba(255,255,255,0.42) 0%, rgba(247,243,238,0.22) 100%)`,
        border: night
          ? "1px solid rgba(247, 243, 238, 0.1)"
          : "1px solid rgba(26, 32, 56, 0.08)",
      }}
      aria-label={`${label} — asset forthcoming`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background: night
            ? "radial-gradient(circle at 50% 48%, rgba(196,160,122,0.12), transparent 45%)"
            : "radial-gradient(circle at 50% 40%, rgba(184,137,114,0.1), transparent 55%)",
        }}
      />
      <span
        className={`relative font-serif text-xl tracking-wide ${
          night ? "text-pearl/85" : "text-ink/70"
        }`}
      >
        {label}
      </span>
      <span
        className={`relative mt-3 text-[0.65rem] uppercase tracking-[0.22em] ${
          night ? "text-pearl/40" : "text-ink/35"
        }`}
      >
        {hint}
      </span>
    </div>
  );
}

export function PressKit() {
  return (
    <div className="cosmic-bg min-h-screen">
      <header className="section-pad mx-auto flex h-[5.25rem] max-w-5xl items-center justify-between">
        <Link href="/" className="transition-opacity duration-500 hover:opacity-90">
          <Logo id="press-header" size={30} withWordmark />
          <span className="sr-only">triplevirgo home</span>
        </Link>
        <nav aria-label="Brand resources header">
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Intro */}
        <section className="section-pad relative mx-auto max-w-5xl pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="animate-fade-rise mx-auto max-w-2xl text-center">
            <p className="section-label">Identity</p>
            <h1 className="mt-6 font-serif text-[clamp(2.75rem,7vw,4.75rem)] leading-[1.05] tracking-tight text-ink">
              triplevirgo
            </h1>
            <p className="mt-5 font-serif text-[clamp(1.35rem,2.8vw,1.85rem)] leading-[1.4] text-ink/75">
              Brand Resources
            </p>
            <p className="mx-auto mt-10 max-w-lg text-base leading-[1.95] text-ink/55 md:text-[1.05rem]">
              A central resource for media, partners, designers, developers, and
              collaborators.
            </p>
            <p className="mx-auto mt-8 max-w-sm font-serif text-lg leading-[1.65] text-ink/80 md:text-xl">
              {companyFacts.tagline}
            </p>
          </div>

          <nav
            aria-label="Brand resource sections"
            className="animate-fade-rise mx-auto mt-16 max-w-3xl md:mt-20"
            style={{ animationDelay: "0.2s" }}
          >
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-8">
              {pressSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-[0.7rem] uppercase tracking-[0.18em] text-ink/45 transition-colors duration-500 hover:text-ink"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <div className="divider-line mb-4" />

        <div className="section-pad mx-auto max-w-5xl space-y-[clamp(5.5rem,12vw,9rem)] pb-32 pt-16 md:pt-24">
          {/* Company */}
          <section aria-labelledby="company">
            <SectionHeading id="company" label="Company" title="Who we are" />
            <div className="mt-12 grid gap-16 md:grid-cols-[1fr_1.15fr] md:gap-20">
              <dl className="space-y-7 text-sm leading-[1.8]">
                {(
                  [
                    ["Legal name", companyFacts.legalName],
                    ["Brand", companyFacts.brandName],
                    ["Website", companyFacts.website],
                    ["Contact", companyFacts.contact],
                  ] as const
                ).map(([term, value]) => (
                  <div key={term}>
                    <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-ink/40">
                      {term}
                    </dt>
                    <dd className="mt-2 text-base text-ink/80">
                      {term === "Website" ? (
                        <a
                          href={value}
                          className="underline decoration-ink/15 underline-offset-4 transition-opacity hover:opacity-70"
                        >
                          {value.replace("https://", "")}
                        </a>
                      ) : term === "Contact" ? (
                        <a
                          href={`mailto:${value}`}
                          className="underline decoration-ink/15 underline-offset-4 transition-opacity hover:opacity-70"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="space-y-8 text-base leading-[1.95] text-ink/60 md:text-[1.05rem]">
                <p>{companyFacts.boilerplateShort}</p>
                <p className="font-serif text-[clamp(1.25rem,2.2vw,1.55rem)] leading-[1.55] text-ink">
                  {companyFacts.coreQuestion}
                </p>
                <p className="text-ink/50">{companyFacts.mantra}</p>
                <div className="space-y-3 pt-4 text-ink/70">
                  {companyFacts.mission.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <p className="pt-2 text-[0.7rem] uppercase tracking-[0.18em] text-ink/35">
                  {companyFacts.missionPath.join(" · ")}
                </p>
              </div>
            </div>

            <div className="mt-16 max-w-2xl space-y-5 text-base leading-[1.95] text-ink/55 md:mt-20">
              <p className="section-label">Boilerplate</p>
              <p>{companyFacts.boilerplateLong}</p>
            </div>
          </section>

          {/* Founder */}
          <section aria-labelledby="founder">
            <SectionHeading id="founder" label="Founder" title="Why the name" />
            <div className="mt-12 max-w-xl space-y-8 text-base leading-[2] text-ink/60 md:text-[1.05rem]">
              <p>{founderCopy.opening}</p>
              <p className="font-serif text-[clamp(1.35rem,2.6vw,1.75rem)] leading-[1.55] text-ink">
                {founderCopy.question}
              </p>
              <div className="divider-line !mx-0 my-4 max-w-[8rem]" />
              {founderCopy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="space-y-4 pt-6 text-ink/70">
                <p className="section-label">North Star</p>
                {companyFacts.northStar.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className="pt-4">
                <Link
                  href={founderCopy.storyPath}
                  className="text-[0.75rem] uppercase tracking-[0.18em] text-ink/50 underline decoration-ink/15 underline-offset-4 transition-colors hover:text-ink"
                >
                  Read the full story
                </Link>
              </p>
            </div>
          </section>

          {/* Products */}
          <section aria-labelledby="products">
            <SectionHeading
              id="products"
              label="Products"
              title="Our Constellation"
            />
            <p className="mt-8 max-w-2xl text-base leading-[1.9] text-ink/55 md:text-lg">
              {constellationIntro}
            </p>

            <ul className="mt-16 space-y-16 md:mt-20 md:space-y-20">
              {products.map((product) => (
                <li
                  key={product.name}
                  className="grid gap-6 border-t border-ink/8 pt-10 md:grid-cols-[minmax(0,12rem)_1fr] md:gap-12 md:pt-12"
                >
                  <div>
                    <p className="font-serif text-[clamp(1.75rem,3vw,2.25rem)] text-ink">
                      {product.name}
                    </p>
                    <p className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-ink/40">
                      {product.role}
                    </p>
                    <p className="mt-4 text-sm text-ink/45">{product.status}</p>
                  </div>
                  <div className="max-w-lg space-y-4">
                    <p className="font-serif text-xl leading-[1.45] text-ink/85 md:text-[1.35rem]">
                      {product.lead}
                    </p>
                    <p className="text-base leading-[1.9] text-ink/55">
                      {product.description}
                    </p>
                    {product.href ? (
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block pt-2 text-[0.7rem] uppercase tracking-[0.18em] text-ink/50 underline decoration-ink/15 underline-offset-4 transition-colors hover:text-ink"
                      >
                        {product.href.replace("https://", "")}
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-16 max-w-md text-sm leading-[1.85] text-ink/40 md:mt-20">
              One constellation under the TripleVirgo philosophy — with room for
              new stars to appear. Additional products may be reserved in our
              identity system before they appear in public marketing.
            </p>
          </section>

          {/* Logos */}
          <section aria-labelledby="logos">
            <SectionHeading id="logos" label="Logos" title="Identity marks" />
            <p className="mt-8 max-w-xl text-base leading-[1.9] text-ink/55">
              The official TripleVirgo mark is a sacred symbol — never a watermark,
              never redrawn. Product marks use their official icon assets when available.
            </p>

            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <figure className="sm:col-span-2 lg:col-span-2">
                <div
                  className="relative flex aspect-[4/3] items-center justify-center overflow-hidden px-10"
                  style={{
                    background: `
                      radial-gradient(ellipse 55% 40% at 70% 20%, rgba(60, 50, 100, 0.35), transparent 55%),
                      linear-gradient(180deg, #070b16 0%, #0a1020 45%, #121a32 78%, #2a3358 100%)
                    `,
                    border: "1px solid rgba(247, 243, 238, 0.1)",
                  }}
                >
                  <Image
                    src="/brand/triplevirgo-lockup.jpg"
                    alt="triplevirgo official mark lockup"
                    width={640}
                    height={640}
                    className="h-auto w-full max-w-[300px] object-contain mix-blend-screen md:max-w-[340px]"
                  />
                </div>
                <figcaption className="mt-5 space-y-1">
                  <p className="font-serif text-lg text-ink">triplevirgo</p>
                  <p className="text-sm text-ink/45">
                    Official lockup — sacred geometry, wordmark, tagline
                  </p>
                </figcaption>
              </figure>

              <figure>
                <div
                  className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
                  style={{
                    background: "#0E0D10",
                    border: "1px solid rgba(247, 243, 238, 0.1)",
                  }}
                >
                  <Image
                    src="/brand/myphase/avatar-charcoal-1024.png"
                    alt="MyPhase emblem — moonstone and rose quartz crescents"
                    width={512}
                    height={512}
                    className="h-[78%] w-[78%] object-contain"
                  />
                </div>
                <figcaption className="mt-5 space-y-1">
                  <p className="font-serif text-lg text-ink">MyPhase</p>
                  <p className="text-sm text-ink/45">
                    Core emblem — moonstone & rose quartz
                  </p>
                </figcaption>
              </figure>

              <figure>
                <div
                  className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
                  style={{
                    background: "#050508",
                    border: "1px solid rgba(247, 243, 238, 0.1)",
                  }}
                >
                  <Image
                    src="/brand/inphase/app-icon-1024.png"
                    alt="InPhase app icon — dual luminous crescents"
                    width={512}
                    height={512}
                    className="h-[72%] w-[72%] object-contain"
                  />
                </div>
                <figcaption className="mt-5 space-y-1">
                  <p className="font-serif text-lg text-ink">InPhase</p>
                  <p className="text-sm text-ink/45">
                    Official app icon — Cosmic Violet & Solar Gold
                  </p>
                </figcaption>
              </figure>

              <figure className="sm:col-span-2 lg:col-span-2 lg:max-w-md">
                <AssetPlaceholder
                  label="OurPhase"
                  hint="Mark forthcoming"
                  tone="mist"
                />
                <figcaption className="mt-5 space-y-1">
                  <p className="font-serif text-lg text-ink">OurPhase</p>
                  <p className="text-sm text-ink/45">Coming soon with the product</p>
                </figcaption>
              </figure>
            </div>

            {/* TripleVirgo pack previews */}
            <div className="mt-16 border-t border-ink/8 pt-14">
              <p className="section-label">triplevirgo pack</p>
              <p className="mt-4 max-w-xl text-base leading-[1.85] text-ink/55">
                Official brand assets from the approved master — full logo and sacred
                mark. Do not redraw the geometry or move the luminous stars.
              </p>
              <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <li>
                  <div
                    className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
                    style={{
                      background: "#070b16",
                      border: "1px solid rgba(247, 243, 238, 0.1)",
                    }}
                  >
                    <Image
                      src="/brand/triplevirgo/sacred-mark-navy-1024.png"
                      alt="triplevirgo sacred mark on navy"
                      width={512}
                      height={512}
                      className="h-[72%] w-[72%] object-contain"
                    />
                  </div>
                  <p className="mt-4 font-serif text-base text-ink">Sacred mark</p>
                  <p className="mt-1 text-sm text-ink/45">
                    Mark only — avatars & small uses
                  </p>
                </li>
                <li>
                  <div
                    className="relative flex aspect-[4/3] items-center justify-center overflow-hidden px-8"
                    style={{
                      background: `
                        radial-gradient(ellipse 55% 40% at 50% 40%, rgba(60, 50, 100, 0.3), transparent 55%),
                        #070b16
                      `,
                      border: "1px solid rgba(247, 243, 238, 0.1)",
                    }}
                  >
                    <Image
                      src="/brand/triplevirgo/full-logo-transparent.png"
                      alt="triplevirgo full logo transparent"
                      width={800}
                      height={800}
                      className="h-auto w-full max-w-[260px] object-contain"
                    />
                  </div>
                  <p className="mt-4 font-serif text-base text-ink">Full logo</p>
                  <p className="mt-1 text-sm text-ink/45">
                    Transparent — flexible layouts
                  </p>
                </li>
                <li className="sm:col-span-2 lg:col-span-1">
                  <div
                    className="relative flex aspect-[4/3] items-center justify-center overflow-hidden px-6"
                    style={{
                      background: "#070b16",
                      border: "1px solid rgba(247, 243, 238, 0.1)",
                    }}
                  >
                    <Image
                      src="/brand/triplevirgo/full-logo-navy-1024.png"
                      alt="triplevirgo full logo on navy square"
                      width={512}
                      height={512}
                      className="h-[85%] w-[85%] object-contain"
                    />
                  </div>
                  <p className="mt-4 font-serif text-base text-ink">Navy square</p>
                  <p className="mt-1 text-sm text-ink/45">
                    Full logo — web & social
                  </p>
                </li>
              </ul>
            </div>

            {/* InPhase — curated heroes only (v0.9 placeholder variants excluded) */}
            <div className="mt-16 border-t border-ink/8 pt-14">
              <p className="section-label">InPhase</p>
              <p className="mt-4 max-w-xl text-base leading-[1.85] text-ink/55">
                Official heroes: Final app icon and Brand Board v1. Do not stretch,
                rotate, or recolor the crescents. Sized icons and wallpapers are in the
                brand kit ZIP.
              </p>
              <ul className="mt-10 grid gap-8 sm:grid-cols-2">
                <li>
                  <div
                    className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
                    style={{
                      background: "#080D1A",
                      border: "1px solid rgba(247, 243, 238, 0.1)",
                    }}
                  >
                    <Image
                      src="/brand/inphase/app-icon-1024.png"
                      alt="InPhase app icon Final"
                      width={512}
                      height={512}
                      className="h-[72%] w-[72%] object-contain"
                    />
                  </div>
                  <p className="mt-4 font-serif text-base text-ink">App icon</p>
                  <p className="mt-1 text-sm text-ink/45">
                    1024 Final — Cosmic Violet & Solar Gold
                  </p>
                </li>
                <li>
                  <div
                    className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
                    style={{
                      background: "#0B0D1A",
                      border: "1px solid rgba(247, 243, 238, 0.1)",
                    }}
                  >
                    <Image
                      src="/brand/inphase/brand-board.png"
                      alt="InPhase brand board v1"
                      width={900}
                      height={600}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <p className="mt-4 font-serif text-base text-ink">Brand board</p>
                  <p className="mt-1 text-sm text-ink/45">
                    Palette, type, lockups, usage v1.0
                  </p>
                </li>
              </ul>
            </div>

            {/* MyPhase pack previews */}
            <div className="mt-16 border-t border-ink/8 pt-14">
              <p className="section-label">MyPhase pack</p>
              <p className="mt-4 max-w-xl text-base leading-[1.85] text-ink/55">
                Official brand assets — emblem, dark & light lockups, and presentation
                board. Do not recolor, stretch, or redraw the gemstone crescents.
              </p>
              <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <li>
                  <div
                    className="relative flex aspect-[4/3] items-center justify-center overflow-hidden px-6"
                    style={{
                      background: "#0E0D10",
                      border: "1px solid rgba(247, 243, 238, 0.1)",
                    }}
                  >
                    <Image
                      src="/brand/myphase/lockup-dark.png"
                      alt="MyPhase dark lockup"
                      width={800}
                      height={600}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                  <p className="mt-4 font-serif text-base text-ink">Dark lockup</p>
                  <p className="mt-1 text-sm text-ink/45">
                    Name + tagline on charcoal
                  </p>
                </li>
                <li>
                  <div
                    className="relative flex aspect-[4/3] items-center justify-center overflow-hidden px-6"
                    style={{
                      background: "#F7F3F0",
                      border: "1px solid rgba(26, 32, 56, 0.08)",
                    }}
                  >
                    <Image
                      src="/brand/myphase/lockup-light.png"
                      alt="MyPhase light lockup"
                      width={800}
                      height={600}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                  <p className="mt-4 font-serif text-base text-ink">Light lockup</p>
                  <p className="mt-1 text-sm text-ink/45">
                    Name + tagline on pearl
                  </p>
                </li>
                <li className="sm:col-span-2 lg:col-span-1">
                  <div
                    className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
                    style={{
                      background: "#F0E6E2",
                      border: "1px solid rgba(26, 32, 56, 0.08)",
                    }}
                  >
                    <Image
                      src="/brand/myphase/brand-presentation.png"
                      alt="MyPhase brand presentation board"
                      width={900}
                      height={700}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <p className="mt-4 font-serif text-base text-ink">
                    Brand presentation
                  </p>
                  <p className="mt-1 text-sm text-ink/45">
                    Materials, palette, approved treatments
                  </p>
                </li>
              </ul>
            </div>

            <ul className="mt-12 max-w-xl space-y-3 text-sm leading-[1.8] text-ink/50">
              <li>Use the provided official asset — do not reinterpret the geometry.</li>
              <li>Give the mark room to breathe. It is an identity mark, not decoration.</li>
              <li>
                Never use the company mark as a watermark, and do not move the luminous
                stars.
              </li>
              <li>Brand as lowercase <span className="text-ink/70">triplevirgo</span> in wordmarks.</li>
              <li>
                MyPhase: prefer transparent emblem for flexible layouts; lockups when
                name and tagline appear together.
              </li>
            </ul>
          </section>

          {/* Colors */}
          <section aria-labelledby="colors">
            <SectionHeading id="colors" label="Colors" title="Color systems" />
            <p className="mt-8 max-w-xl text-base leading-[1.9] text-ink/55">
              Company surfaces live in dusk. Each product carries its own
              material language — use the strip that matches the brand.
            </p>

            <div className="mt-14">
              <p className="font-serif text-[clamp(1.35rem,2.2vw,1.65rem)] text-ink">
                triplevirgo
              </p>
              <p className="mt-3 max-w-lg text-sm leading-[1.75] text-ink/45">
                Night belongs to the cosmos entry. The living world is dusk —
                ink darkest, surroundings lifting into mist and pearl. No neon.
              </p>
              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
                {companyColorsCore.map((swatch) => (
                  <li key={swatch.hex}>
                    <div
                      className="aspect-[5/4] w-full"
                      style={{
                        backgroundColor: swatch.hex,
                        boxShadow: "inset 0 0 0 1px rgba(26,32,56,0.06)",
                      }}
                      aria-hidden="true"
                    />
                    <p className="mt-3 font-serif text-base text-ink">
                      {swatch.name}
                    </p>
                    <p className="mt-1 font-mono text-[0.7rem] tracking-wide text-ink/40">
                      {swatch.hex}
                    </p>
                    <p className="mt-1 text-sm text-ink/45">{swatch.role}</p>
                  </li>
                ))}
              </ul>

              <details className="mt-12 max-w-2xl">
                <summary className="cursor-pointer text-[0.7rem] uppercase tracking-[0.2em] text-ink/40 transition-colors hover:text-ink/60">
                  Extended dusk tokens
                </summary>
                <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
                  {companyColors
                    .filter(
                      (swatch) =>
                        !companyColorsCore.some(
                          (core) => core.hex === swatch.hex,
                        ),
                    )
                    .map((swatch) => (
                      <li key={swatch.hex}>
                        <div
                          className="aspect-[5/4] w-full"
                          style={{
                            backgroundColor: swatch.hex,
                            boxShadow: "inset 0 0 0 1px rgba(26,32,56,0.06)",
                          }}
                          aria-hidden="true"
                        />
                        <p className="mt-3 font-serif text-base text-ink">
                          {swatch.name}
                        </p>
                        <p className="mt-1 font-mono text-[0.7rem] tracking-wide text-ink/40">
                          {swatch.hex}
                        </p>
                      </li>
                    ))}
                </ul>
              </details>
            </div>

            {productPalettes.map((palette) => (
              <div
                key={palette.id}
                className="mt-16 border-t border-ink/8 pt-14"
              >
                <p className="font-serif text-[clamp(1.35rem,2.2vw,1.65rem)] text-ink">
                  {palette.label}
                </p>
                <p className="mt-3 max-w-lg text-sm leading-[1.75] text-ink/45">
                  {palette.note}
                </p>
                <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3">
                  {palette.colors.map((swatch) => (
                    <li key={`${palette.id}-${swatch.hex}`}>
                      <div
                        className="aspect-[5/4] w-full"
                        style={{
                          backgroundColor: swatch.hex,
                          boxShadow: "inset 0 0 0 1px rgba(26,32,56,0.08)",
                        }}
                        aria-hidden="true"
                      />
                      <p className="mt-3 font-serif text-base text-ink">
                        {swatch.name}
                      </p>
                      <p className="mt-1 font-mono text-[0.7rem] tracking-wide text-ink/40">
                        {swatch.hex}
                      </p>
                      {swatch.role ? (
                        <p className="mt-1 text-sm text-ink/45">{swatch.role}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Typography */}
          <section aria-labelledby="typography">
            <SectionHeading
              id="typography"
              label="Typography"
              title="Editorial type"
            />
            <p className="mt-8 max-w-xl text-base leading-[1.9] text-ink/55">
              Elegant serif headlines. Modern sans body. Luxury editorial magazine —
              never a default system stack as the brand voice.
            </p>

            <div className="mt-14 space-y-16">
              <div className="border-t border-ink/8 pt-10">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-ink/40">
                  {typography.serif.role}
                </p>
                <p className="mt-3 text-sm text-ink/50">{typography.serif.name}</p>
                <p className="mt-8 font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] text-ink">
                  {typography.serif.specimen}
                </p>
              </div>
              <div className="border-t border-ink/8 pt-10">
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-ink/40">
                  {typography.sans.role}
                </p>
                <p className="mt-3 text-sm text-ink/50">{typography.sans.name}</p>
                <p className="mt-8 max-w-xl text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.85] text-ink/70">
                  {typography.sans.specimen}
                </p>
              </div>
            </div>
          </section>

          {/* Brand Voice */}
          <section aria-labelledby="voice">
            <SectionHeading id="voice" label="Brand Voice" title="How we speak" />
            <p className="mt-8 max-w-xl font-serif text-[clamp(1.25rem,2.4vw,1.6rem)] leading-[1.55] text-ink">
              Technology should help people become more human, not less.
            </p>

            <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-20">
              <div>
                <p className="section-label">Prefer</p>
                <ul className="mt-6 space-y-4 text-base leading-[1.85] text-ink/65">
                  {voiceDo.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="section-label">Avoid</p>
                <ul className="mt-6 space-y-4 text-base leading-[1.85] text-ink/45">
                  {voiceDont.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <blockquote className="mt-16 max-w-lg border-t border-rose-gold/35 pt-10 font-serif text-[clamp(1.25rem,2.4vw,1.65rem)] leading-[1.55] text-ink">
              Understanding yourself changes your life.
              <br />
              Understanding each other changes the world.
            </blockquote>
          </section>

          {/* Downloads */}
          <section aria-labelledby="downloads">
            <SectionHeading id="downloads" label="Downloads" title="Brand kits" />
            <p className="mt-8 max-w-xl text-base leading-[1.9] text-ink/55">
              Start with a brand kit ZIP, then grab individual masters as needed.
              OurPhase assets will appear here when the mark is ready.
            </p>

            <div className="mt-14 space-y-16">
              {downloadGroups.map((group) => (
                <div key={group.id} className="border-t border-ink/8 pt-10">
                  <p className="font-serif text-[clamp(1.5rem,2.5vw,1.85rem)] text-ink">
                    {group.label}
                  </p>
                  {group.note ? (
                    <p className="mt-3 max-w-lg text-sm leading-[1.75] text-ink/45">
                      {group.note}
                    </p>
                  ) : null}
                  <ul className="mt-8 divide-y divide-ink/8 border-y border-ink/8">
                    {group.items.map((item) => (
                      <li
                        key={item.href}
                        className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10"
                      >
                        <div className="max-w-lg">
                          <p className="font-serif text-lg text-ink md:text-xl">
                            {item.name}
                            {item.primary ? (
                              <span className="ml-3 align-middle text-[0.6rem] uppercase tracking-[0.18em] text-ink/35">
                                Recommended
                              </span>
                            ) : null}
                          </p>
                          <p className="mt-2 text-sm leading-[1.75] text-ink/50">
                            {item.description}
                          </p>
                        </div>
                        <a
                          href={item.href}
                          download={item.filename}
                          className={
                            item.primary
                              ? "btn-primary shrink-0 self-start sm:self-center"
                              : "btn-ghost shrink-0 self-start sm:self-center"
                          }
                        >
                          Download
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section aria-labelledby="faq">
            <SectionHeading id="faq" label="FAQ" title="Quick answers" />
            <p className="mt-8 max-w-xl text-base leading-[1.9] text-ink/55">
              Short answers for media and partners. For deeper story, see Founder
              and the company page.
            </p>
            <dl className="mt-14 divide-y divide-ink/8 border-y border-ink/8">
              {pressFaq.map((item) => (
                <div key={item.question} className="py-8 md:py-9">
                  <dt className="font-serif text-xl text-ink md:text-[1.35rem]">
                    {item.question}
                  </dt>
                  <dd className="mt-3 max-w-2xl text-base leading-[1.85] text-ink/55">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Contact */}
          <section aria-labelledby="contact" className="pb-8">
            <SectionHeading id="contact" label="Contact" title="Media & partners" />
            <div className="mt-12 max-w-xl space-y-8 text-base leading-[1.95] text-ink/60">
              <p>
                For press inquiries, interview requests, brand asset access, or
                partnership notes, please email us. We aim to respond thoughtfully
                and promptly.
              </p>
              <p>
                <a
                  href={`mailto:${companyFacts.contact}`}
                  className="font-serif text-[clamp(1.5rem,3vw,2rem)] text-ink underline decoration-ink/15 underline-offset-4 transition-opacity hover:opacity-70"
                >
                  {companyFacts.contact}
                </a>
              </p>
              <p className="text-sm text-ink/40">
                Website{" "}
                <a
                  href={companyFacts.website}
                  className="text-ink/55 underline decoration-ink/15 underline-offset-4"
                >
                  triplevirgo.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="section-pad mx-auto flex max-w-5xl flex-col items-center pb-20 pt-8 md:pb-24">
        <div className="divider-line mb-14" />
        <Logo id="press-footer" size={48} />
        <p className="mt-12 text-sm tracking-[0.08em] text-ink/40">
          © 2026 TripleVirgo, LLC
        </p>
      </footer>
    </div>
  );
}
