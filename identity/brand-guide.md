# Brand Guide

Cross-surface principles for TripleVirgo. Company overview: [`company.md`](./company.md). Site-specific rules: [`website.md`](./website.md).

## Essence

Calm. Intentional. Celestial. Sophisticated.

**The background whispers. The details shimmer. The logo sings.**

## Name

- Brand as **triplevirgo** (lowercase) in wordmarks and primary branding
- Legal: **TripleVirgo, LLC**
- Product names use PascalCase: MyPhase, InPhase, OurPhase, Reveal

## Core question

How can technology help us better understand ourselves and each other?

## Visual journey

**Night → dusk.**

| Zone | Character |
|------|-----------|
| Night (hero / cosmos entry) | Deep midnight navy, subtle indigo, faint nebula, tiny stars, shimmer, generous space |
| Dusk (everything below) | Soft periwinkle → muted lavender → luminous mist → pearl; calmer, more grounded |

Do **not** make entire branded experiences a dark night sky by default. Night is sacred entry; dusk is the living world.

## Logo principles (company mark)

- Use the **official provided asset** — do not redraw or reinterpret the sacred geometry
- Contents of the official lockup: triangle, three outer stars, central star, circles, dotted orbits, lowercase wordmark, company tagline
- Identity mark, not texture or watermark
- Opacity should remain high (do not fade into background; historically: not below ~90% when shown as mark)
- Subtle star shimmer only — no spin, flash, or neon
- Rose-gold / pearl strokes when rendering companion geometry
- Give the mark room to breathe; frame it — do not box it like a UI chrome card

Product logos have their own rules under [`products/`](./products/) and [`logos/`](./logos/).

## Typography

**Company site (live implementation):**

| Role | Family | Note |
|------|--------|------|
| Serif / display | Cormorant Garamond | Elegant headlines, editorial quotes |
| Sans / body | Outfit | Modern body and UI |

**Direction from brief (before font pick):** elegant serif headlines, modern sans body, luxury editorial magazine. Large margins. Section titles must remain legible — deeper ink with soft pearl halo on dusk (`.section-heading`).

**Provenance:** Specific font families (Cormorant Garamond, Outfit) were chosen in implementation to satisfy the brief; they were not named by the founder in the original brief. Changing them is a brand decision — update this file if changed.

Product apps may use different type systems (see product docs). Do not assume company-site fonts apply inside every app.

## Color direction (company)

| Token family | Role |
|--------------|------|
| Ink (`#1a2038` and soft variants) | Logo & type on light / dusk surfaces — darkest elements |
| Pearl / soft light | Type on night sky |
| Rose gold / warm gold | Quiet accents, guiding stars, dividers |
| Lilac / silver | Soft secondary accents |
| Dusk ramp | `#4a5678` → `#7d87a8` → `#b4b9d0` → `#ddd9e8` → `#f0ebe4` |

Full tokens: [`colors/README.md`](./colors/README.md) and `src/app/globals.css`.

**Avoid:** neon, loud gradients, purple-on-white SaaS clichés as the primary look, treating the whole site as night sky.

## Spacing & luxury

- Luxury is space
- Generous whitespace; quiet intentional; nothing flashy or loud
- One composition per viewport where possible; philosophy centered like other sections
- Star accents sit tightly with titles (not floating far away)
- Prefer premium magazine rhythm over dense dashboard layouts

## Motion

- Presence and hierarchy, not noise
- Gentle fade/rise, slow star pulse, subtle shimmer
- Respect `prefers-reduced-motion`

## Voice

| Do | Don’t |
|----|-------|
| Thoughtful, present, compassionate | Hype, urgency, FOMO |
| Clarity and intention | Cluttered claims, feature laundry lists in hero |
| Reflection, curiosity, wisdom | Distraction, judgment, noise |
| Inspire — not prescribe (platform editorial) | Transactional / generic suggestion tone |

## Products in the constellation

- MyPhase · InPhase · OurPhase — public company constellation
- Reveal — reserved in identity; **not** on the public company site until explicitly included

Each illuminates a different part of the human experience. Together: one philosophy.

## Platform founding principle (Phase products)

From InPhase platform constitution (applies across InPhase / MyPhase / OurPhase):

> Every feature should strengthen the relationship—not increase dependence on the app.

> Technology should become invisible. Love should become visible.

> The goal is transformation, not engagement.

Company North Star language (story page):

> We don’t build technology to capture attention. We build technology to cultivate awareness.
