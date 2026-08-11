# MyPhase

Canonical product identity. Company-site constellation copy and product-repo brand constants are both recorded; see conflicts at the end.

## Status & domains

| Field | Value |
|-------|--------|
| Status | Live |
| Product site | https://myphaseapp.com |
| Company constellation | Yes — Understanding yourself |
| Legal | TripleVirgo, LLC |
| Bundle ID | `com.triplevirgo.myphase` |
| App Store name | MyPhase: Personal Insights (≤30 chars) |
| Home-screen / display name | MyPhase |
| Support email (ASC draft) | connect@triplevirgo.com |

## Role

**Self-understanding** — valuable regardless of relationship status; partner connection is optional, never required.

Platform purpose: Help users better understand themselves.

Feature focus (platform): Self-awareness · Personal rhythm · Emotional patterns · Needs and boundaries · Optional partner sharing.

## Company site copy (triplevirgo.com — live)

| Element | Copy |
|---------|------|
| Lead | Personal guidance for women. |
| Description | Understand your body’s natural rhythm and honor what each phase is asking of you. |
| CTA | Explore MyPhase |

## Brand philosophy & promises (product brand file)

Source: `MyPhase/myphase/shared/myPhaseBrand.ts`

| Label | String | Typical surface |
|-------|--------|-----------------|
| Brand philosophy | Know yourself. Love yourself. | About; App Store subtitle |
| Philosophy lines | Know yourself. / Love yourself. | Stacked UI |
| Product promise | Understand your cycle. Understand yourself. | Landing / onboarding |

## Platform tagline (shared constitution)

Source: `shared/platform.ts` / product-philosophy.md

> Know yourself. Share your rhythm. Be understood.

## Icon / mark

### Official brand asset pack

Canonical pack: `identity/logos/myphase/` (imported from `MyPhase_Brand_Assets`).

| Path | Use |
|------|-----|
| `01_Master/MyPhase_Emblem_MASTER.png` | Standalone emblem — visual master |
| `02_Transparent/` | Transparent emblem + lockup |
| `03_Backgrounds/` | Emblem on Pearl, Warm Ivory, Charcoal |
| `04_Web_Social/` | Avatars & sized emblems |
| `05_Press/` | 3000px emblem; dark & light lockups |
| `06_Brand_Reference/` | Brand presentation board |

Curated Brand Resources copies: `/brand/myphase/` (see [`../logos/myphase/README.md`](../logos/myphase/README.md)).

### App icon / emblem (gemstones only)

- **Only** two opposing gemstone crescents — no text in the **icon**
- **Left crescent:** White Moonstone — Awareness
- **Right crescent:** Rose Quartz — Self-Love
- Together: **Understanding yourself with compassion.**
- Lockups add wordmark + tagline **Know yourself. Love yourself.**
- Do not recolor, stretch, rotate, separate, or redraw the crescents
- Future icon iterations evolve from this artwork — not from the InPhase logo

### Feel

Calm · Elegant · Premium · Timeless · Feminine · Compassionate · Grounded

Imagine two polished gemstones resting together under soft moonlight.

### Avoid in the icon

Gold · Bronze · Metallic finishes · Heavy glow · Eclipse styling · Neon effects

Beauty from gemstone materials, not dramatic lighting.

### Asset paths (product repo)

Documented in `MYPHASE_LOGO_ASSETS` — e.g. `logo-dark.png`, `logo-light.png`, `mark.png`, `app-icon-1024.png`, SVG companions for scaling/marketing. Canonical UI fidelity from the PNG source of truth.

## Color palette (product brand)

Source: `MYPHASE_BRAND_COLORS`

| Name | Hex |
|------|-----|
| Pearl white / moonstone pearl | `#F7F3F0` |
| Soft cream / soft ivory | `#F0E6E2` |
| Blush pink / rose quartz light | `#F4D8DF` |
| Rose quartz | `#E7B7BE` |
| Muted taupe | `#9E8E93` |
| Night plate | `#0E0D10` |
| Moonstone glow | `#FFFFFF` |
| Warm pearl | `#EFE8E2` |

Wordmark gradient: rose quartz → pearl white.

## App Store listing (draft — product docs)

Source: `docs/APP_STORE_CONNECT.md`

| Field | Value |
|-------|--------|
| Subtitle | Know yourself. Love yourself. |
| Copyright | © 2026 TripleVirgo, LLC |
| Primary category | Lifestyle |
| Secondary | Health & Fitness |
| Promotional text | Understand your cycle. Understand yourself. Daily phase insight, lunar rhythm, and gentle self-care — calm personal guidance, not a period tracker. |

**Positioning constraints (ASC description):** Not a period tracker, not medical advice, not birth control. Personal insight inspired by cycle awareness.

Surfaces named in listing: Now · Phase · Lunar · Nourish · You.

## Design system note

MyPhase participates in the shared Phase platform design language (calm, elegant, premium, spacious, intentional; phase/season signature colors). See InPhase `docs/constitution/design-system.md`.

## Cross-surface conflicts (do not silently merge)

1. **Company constellation** emphasizes cycle guidance in plain language.
2. **Brand philosophy** for About/ASC subtitle is “Know yourself. Love yourself.”
3. **Platform tagline** adds “Share your rhythm. Be understood.”
4. A company-site MyPhase rewrite to “Know your cycle. Know yourself.” was drafted then **immediately undone** — not live.

When choosing copy for a surface, pick the string approved for that surface; if creating a new surface, decide explicitly and update this file.
