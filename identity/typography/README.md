# Typography

## Company site (triplevirgo.com)

**Direction (founder brief):** Elegant serif headlines, modern sans body, luxury editorial magazine. Large margins. Quiet, intentional hierarchy.

**Implemented families** (implementation choice satisfying the brief — update if officially changed):

| Role | Family | Weights in use |
|------|--------|----------------|
| Serif / display | Cormorant Garamond | 300–600 |
| Sans / body / UI | Outfit | 300–500 |

Loaded via `next/font/google` in `src/app/layout.tsx` as `--font-serif` / `--font-sans`.

### Usage patterns (live)

- Hero headline, section headings, philosophy lead, mission lead, footer quote: serif
- Body, nav, CTAs, labels: sans
- Section labels: small uppercase tracking (eyebrow treatment)
- Section headings on dusk: deeper ink + soft pearl halo (`.section-heading`) for legibility

### Avoid on company brand surfaces

Default stacks as primary voice (Inter, Roboto, Arial, system) — per brand direction for branded pages.

## MyPhase

Wordmark and taglines are **live text**, never part of the icon. Product UI type system lives in the MyPhase app; do not assume Cormorant/Outfit.

## InPhase

Editorial emails: serif for note body, refined sans for metadata (`email-standards.md`). In-app type tokens in client CSS / visual rhythm docs.

## InPhase (brand board v1)

| Role | Family |
|------|--------|
| Wordmark | Cinzel |
| Elegant headlines | Playfair Display |
| UI / body | Inter |

Product-specific — not company-site fonts.

## Reveal

| Role | Family |
|------|--------|
| Display / wordmark treatment | Instrument Serif |
| UI / body | Work Sans |

Product-specific — not company-site fonts.

## Specimens

Drop type specimens or approved PDF sheets into this folder when produced.
