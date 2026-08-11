# Sources & Provenance

Research record for the Identity System. Prefer updating product/company docs when decisions change; keep this file as the audit trail.

## Primary sources

### 1. TripleVirgo website conversation

- Local conversation: [TripleVirgo website design](1a8b71da-3fe6-4145-aee7-ec7e525bbb0d)
- Transcript: agent-transcripts under that UUID
- Date range: August 2026 (site design through identity folder request)

Highest authority for company-site feeling, night→dusk, logo rules, Virgo placement, hero/constellation/footer copy, Reveal exclusion from site, and identity-folder structure intent.

### 2. triplevirgo repository (this repo)

| Area | Path / commits |
|------|----------------|
| Live site copy & layout | `src/components/*`, `src/app/*` |
| CSS tokens | `src/app/globals.css` |
| Official logo asset | `public/brand/triplevirgo-mark.jpg` (+ related brand files) |
| Launch commit | `649d9a3` Launch the TripleVirgo founder site with night-to-dusk brand experience |
| Story page | `adfee6a` Add a quiet /triplevirgo story page… |
| Spacing / titles | `67f1e27` Refine section titles and premium spacing… |
| Icons | `074ee74` Add home screen and app icons… |

### 3. MyPhase product repo

Path: `/Users/jeane/Projects/MyPhase/myphase` (sibling project)

| Asset | Path |
|-------|------|
| Brand constants | `shared/myPhaseBrand.ts` |
| Icon visual source of truth | `public/brand/MyPhase_Icon_Visual_Source_of_Truth.md` (+ PNG) |
| App Store draft | `docs/APP_STORE_CONNECT.md`, `docs/IOS_APP_STORE.md` |

### 4. InPhase / platform repo

Path: `/Users/jeane/Projects/inphase-master/inphase`

| Asset | Path |
|-------|------|
| Platform constitution | `docs/constitution/` especially `product-philosophy.md`, `design-system.md` |
| Code constitution | `shared/platform.ts` |
| App Store draft | `docs/APP_STORE_CONNECT.md` |
| Master rules | `INPHASE_MASTER_RULES.md` |
| Logo component | `client/src/components/ThresholdLogo.tsx` → `/threshold-logo.png` |

### 5. Reveal product repo

Path: `/Users/jeane/Projects/reveal`

| Asset | Path |
|-------|------|
| Landing positioning | `src/pages/Landing.tsx` |
| Themes / accent colors | `src/lib/buildThemes.ts`, `src/lib/chart.ts` |

No founder brief in the TripleVirgo website conversation defined Reveal marketing for the company site — only **exclusion** from the site and later **inclusion in the identity folder**.

## Major supersessions (do not revert casually)

| Topic | Earlier | Final |
|-------|---------|-------|
| Site darkness | All-night aesthetic | Night hero only → dusk below |
| Logo treatment | Watermark / giant transparent | Sacred mark, once, crisp, no watermark |
| Virgo | Behind hero | Not behind hero; faint Easter egg later |
| Hero copy | Several iterations | Live stack in [`website.md`](./website.md) |
| Footer quote | “shrink/remember” → “changes everything” | “changes your life / changes the world” |
| Newsletter | Present | Removed |
| Product constellation lines | Golden connectors | Removed (Mission line kept) |
| Reveal | — | Off website; in identity system |
| MyPhase site rewrite 9:46 PM | New “Know your cycle…” block | Immediately undone |
| Identity folder name | `brand/` | `identity/` |

## Known cross-surface string conflicts (preserve both)

Do not invent a single “winner” without a new decision.

| Concept | Company site (triplevirgo.com) | Product / platform |
|---------|--------------------------------|--------------------|
| MyPhase philosophy / subtitle | Constellation lead/description (cycle guidance) | Brand philosophy: “Know yourself. Love yourself.” · Promise: “Understand your cycle. Understand yourself.” · Platform tagline: “Know yourself. Share your rhythm. Be understood.” |
| InPhase positioning | “Relationship guidance for men…” | Platform tagline: “She's not complicated. She's cyclical.” · App Store subtitle: “Understand her rhythm. Show up better.” |
| OurPhase domain | No live product URL on site CTA | Platform: `https://ourphase.app` (alias `ourphaseapp.com` → redirect) |
| Company tagline | In logo lockup + SEO title | Same spirit across press boilerplate |

## Gaps (not invented)

- Reveal: no approved company-site copy, App Store listing, or official logo package in this research pass beyond implemented prototype UI
- OurPhase: no dedicated product brand constants file found equivalent to `myPhaseBrand.ts`; positioning taken from platform constitution + company site
- Photography / social templates: folders reserved; no finalized asset library yet
- Physical logo file drops into `identity/logos/*` — structure ready; copy assets from product repos when packaging press kit
