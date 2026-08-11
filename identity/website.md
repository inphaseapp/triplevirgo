# triplevirgo.com — Website Identity

Decisions specific to the public company site. Live implementation is authoritative for current public copy; this document records the intentional rules and final wording, including superseded attempts.

## Purpose

Company / founder / philosophy site — **not** an app landing page. Behind MyPhase, InPhase, and OurPhase.

## Navigation

Home · Apps · Philosophy · Mission · Connect

- Sticky; transparent over hero
- **Apps** → `#constellation` (Our Constellation)
- Footer quiet link: **triplevirgo** → `/triplevirgo`
- Footer also: Privacy Policy · Terms · Support
- Legal entity line: © 2026 TripleVirgo, LLC

## Visual journey

### Canonical rule

**NIGHT (hero only) → DUSK (rest of site).**

Do not make the whole site a dark night sky.

| Region | Spec |
|--------|------|
| Hero night | Deep midnight navy, subtle indigo, faint nebula, tiny stars, shimmer, generous space |
| Scroll bridge | Soft transition — midnight navy → indigo → soft periwinkle → muted lavender → luminous dusk (no hard break) |
| Body dusk | Fixed/page gradient into mist and pearl; ink type |

**Meaning:** Cosmos → Reflection → Human experience. Lower sections lighter, calmer, grounded.

**Mantra:** The background whispers. The details shimmer. The logo sings.

### Superseded

- Early all-dark site → rejected (“too dark”); logo should be darkest element, sweep lighter like dusk
- Brief darkening of Our Constellation + Virgo background visibility push → rolled back (“undo last two moves”)

## Logo on the site

### Canonical rules

- Official asset only: `public/brand/triplevirgo-mark.jpg` via `BrandMark`
- Show once, prominently above hero headline
- Crisp; room to breathe; soft aura allowed behind mark
- **Not** a large transparent watermark
- Do not enlarge behind content; do not put competing sacred geometry behind the mark
- Tagline lives in the official lockup — do not duplicate “Building technology that inspires understanding” as separate hero text

### Superseded

- Temporary watermark / darkened large logo phase → rejected; treat as sacred symbol
- Push toward near full-screen logo → rolled back with undo

## Virgo constellation

### Canonical

- Do **not** place a large Virgo constellation behind the hero / logo
- Faint atmospheric Easter egg elsewhere (Philosophy section uses faint Virgo) — discoverable, never competing with the mark
- Intended feeling: “Wait — that's Virgo.”

### Superseded

- Hero Virgo (too invisible → then more visible) → removed from hero by explicit instruction
- Our Constellation Virgo + darken attempts → rolled back

## Guiding stars

- Mission path words as luminous celestial anchors: small warm-gold guiding star **behind** each word
- Light → Word hierarchy; delicate rays; slow pulse; never hurt readability
- Feel: North Star / starlight through morning mist — not lens flare, sunburst, sparkles
- Same glow treatment behind app names in Our Constellation
- **Keep** Mission connecting line; **remove** connecting golden lines between apps in Our Constellation

## Hero — final copy (live)

| Element | Copy |
|---------|------|
| Lockup tagline | Building technology that inspires understanding. *(in official mark)* |
| Headline | Live in greater alignment. |
| Body | Thoughtfully designed applications for relationships, personal growth, and life's natural rhythms — shaped with presence, compassion, and intention. |
| CTA | Discover Our Apps |

No additional hero marketing copy beyond this stack.

### Superseded hero lines (do not revive without new decision)

- “Technology that helps people understand themselves and each other.” (+ longer support; CTA “Explore Our Apps”)
- “Understanding changes everything.” / “TripleVirgo creates technology…”
- Intermediate CTA labels: Explore Our Apps → Explore Our Constellation → Explore Our Apps → **Discover Our Apps**

## Our Constellation — final copy (live)

**Section label:** Our Constellation  

**Headline:** Many products. One philosophy.

**Intro:** Each TripleVirgo application is thoughtfully designed to illuminate a different part of the human experience. Together, they form a constellation of tools that inspire greater clarity, connection, and growth.

| Product | Lead | Description | CTA / link |
|---------|------|-------------|------------|
| MyPhase | Personal guidance for every phase of your cycle. | Understand your body’s natural rhythm and honor what each phase is asking of you. | Explore MyPhase → https://myphaseapp.com |
| InPhase | Relationship guidance for men. | Better understand her rhythm so you can show up with greater connection and confidence. | Explore InPhase → https://inphaseapp.com |
| OurPhase | Shared guidance for every relationship. | Helping two people better understand each other. | Coming Soon *(no “coming soon” inside the description sentence)* |

**Closing whisper:** One constellation under the TripleVirgo philosophy — with room for new stars to appear.

**Reveal:** Do **not** include on the website. Leave space for future expansion.

### Superseded product lines

- Earlier shorter blurbs (pre–9:40 PM block)
- MyPhase rewrite to “Know your cycle. Know yourself.” + longer body — immediately undone; **not** company-site final
- OurPhase “guidance for any and all relationships” interim — replaced by final block above

## Philosophy — copy (live)

**Headline:** Our Philosophy

Technology should help people become more human, not less.

We believe the most meaningful innovations are those that deepen self-awareness, strengthen relationships, and create greater understanding between people.

Our products are designed to encourage reflection instead of distraction, curiosity instead of judgment, and wisdom instead of noise.

Everything we build begins with a simple question:

> “How can technology help us better understand ourselves and each other?”

Layout: centered editorial; Virgo faint in background; premium vertical rhythm.

## Mission — copy (live)

**Headline:** Why TripleVirgo Exists

We believe understanding creates compassion.  
Compassion creates connection.  
Connection creates a better world.

Every product we build exists in service of that vision.

**Path (guiding stars):** Understanding → Reflection → Growth → Connection → Love

## Connect

- Email only: **connect@triplevirgo.com**
- Newsletter **removed** (after brief presence); Privacy language softened accordingly

### Superseded

- Newsletter invite: “Join the constellation. Receive occasional updates…”

## Footer quote (live / final)

Understanding yourself changes your life.  
Understanding each other changes the world.

### Superseded

1. “You are not here to shrink. / You are here to remember.”
2. “Understanding yourself changes everything. / Understanding each other changes the world.”

## Quiet story page `/triplevirgo`

- Journal / sanctuary feel; quiet discovery; no marketing CTAs, newsletter, or social
- Footer label: **triplevirgo** (not “Why TripleVirgo”)
- Path: `/triplevirgo` (`/why` redirects)
- Content mirrors founder / North Star narrative (see [`founder.md`](./founder.md), [`vision.md`](./vision.md))
- Footer: logo + © 2026 TripleVirgo, LLC only

## Typography & section chrome (implementation)

- Cormorant Garamond + Outfit (see [`typography/README.md`](./typography/README.md))
- `.section-heading`: deeper ink + soft pearl halo for dusk legibility
- Spacing tokens: `--space-section-y`, `--space-block`, `--space-stack`, etc. in `globals.css`

## SEO / share (live)

- Title pattern: `triplevirgo — Building technology that inspires understanding`
- OG/Twitter images; robots; sitemap; Organization JSON-LD
- Home-screen / PWA icons derived from official mark
- Keywords include TripleVirgo, products, self-awareness, relationships, cycle awareness (Reveal not listed in site keywords)

## Accessibility (brief requirements)

Contrast, reduced motion, keyboard access, semantic HTML, fast performance.
