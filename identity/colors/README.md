# Colors

Canonical color references by surface. Prefer tokens in code over reinventing hex values in marketing files.

## Company site (triplevirgo.com)

Source: `src/app/globals.css`

### Dusk sky

| Token | Hex | Role |
|-------|-----|------|
| `--dusk-deep` | `#4a5678` | Deep dusk |
| `--dusk-mid` | `#7d87a8` | Mid dusk |
| `--dusk-soft` | `#b4b9d0` | Soft dusk |
| `--dusk-mist` | `#ddd9e8` | Mist |
| `--dusk-pearl` | `#f0ebe4` | Pearl ground |
| `--dusk-glow` | `#e8e0f0` | Soft glow |

Body background gradient (live): `#3d4668` → `#6a7394` → `#8a92b0` → `#b8b9ce` → `#ddd8e6` → `#efeae3`.

### Ink (type & darkest elements)

| Token | Value |
|-------|--------|
| `--ink` | `#1a2038` |
| `--ink-soft` | `#2c3450` |
| `--ink-muted` | `rgba(26, 32, 56, 0.62)` |
| `--ink-faint` | `rgba(26, 32, 56, 0.42)` |

### Accents

| Token | Hex |
|-------|-----|
| `--rose-gold` | `#b88972` |
| `--warm-gold` | `#c4a07a` |
| `--lilac` | `#9a8fb8` |
| `--pearl` | `#f7f3ee` |
| `--silver` | `#8a90a8` |

### Night hero (component-level, not CSS variables)

Hero uses deep midnight washes such as `#070b16`, `#0a1020`, `#121a32`, `#2a3358` with soft indigo/nebula radials — see `Hero.tsx`. Pearl text on night.

### Reasoning

- Logo/ink darkest; surroundings lighter like dusk sky
- Rose gold / warm gold for quiet sacred accents and guiding stars
- No neon
- Night reserved for hero only

## MyPhase

See [`../products/myphase.md`](../products/myphase.md) — White Moonstone + Rose Quartz system (`#F7F3F0`, `#E7B7BE`, night plate `#0E0D10`, etc.).

## InPhase

**Brand board v1 palette:**

| Name | Hex |
|------|-----|
| Midnight | `#080D1A` |
| Cosmic Violet | `#7B5CFF` |
| Lunar Lilac | `#B689FF` |
| Solar Gold | `#FFB86B` |
| Moonstone | `#F5F5FA` |

Signature Eclipse Gradient: Deep Violet → Cosmic Violet → Solar Gold.

Phase/season/love-language signature colors also live in platform code (`shared/visualIdentity.ts`, `shared/loveLanguages.ts`). Email shell historically `#09090b` with accent `#7c6f9a`. Do not flatten phase colors to monochrome except when intentionally disabled/unknown.

## OurPhase

No dedicated palette file located; inherits shared platform visual identity until product-specific tokens exist.

## Reveal

Night `#070812` / `#0d0e1f`; gold `#F7D488`; periwinkle `#8D9CFF`. See [`../products/reveal.md`](../products/reveal.md).

## Asset drops

Place swatches or exported palette boards in this folder when produced for press. Keep filenames descriptive (`triplevirgo-dusk-palette.png`, etc.).
