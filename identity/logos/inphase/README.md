# InPhase Brand Assets

## Where this lives

| Location | Role |
|----------|------|
| **`identity/logos/inphase/`** (this folder) | Canonical archive in the TripleVirgo repo — source of truth for the company identity system |
| **`public/brand/inphase/`** | Curated copies served on Brand Resources (`/press`) for download |
| Desktop / Dropbox / etc. | Fine as a **staging inbox** while packaging; after import, treat the repo as canonical |

**Recommendation:** Keep Desktop packs only as temporary drop zones. Once imported here, you can archive or delete the Desktop copy. Do **not** mix AuthKeys / `.p8` signing files into brand folders (keep those in a secrets vault or Xcode/CI only).

For a personal working library outside git, a clean home is:

```text
~/Brand/TripleVirgo/
  triplevirgo/
  myphase/
  inphase/          ← mirror or zip of this pack
  ourphase/
```

The git repo (`identity/logos/…`) remains what Brand Resources and the team use.

---

## Packages in this folder

### Brand Assets v0.9 (working master package)

Imported from `InPhase_Brand_Assets_v0.9`. Safe: images + short text only — no secrets.

| Folder | Contents |
|--------|----------|
| `01_Master` | `InPhase_Master_Logo.png` + prior `InPhase_App_Icon_1024_Final.png` |
| `02_Transparent` | Transparent logo |
| `03_Logo_Variations` | Horizontal, Vertical, Symbol Only, Wordmark Only |
| `04_App_Icons` | Sized app icons (29–1024) |
| `05_Favicons` | Favicon set |
| `06_Social` | Instagram, LinkedIn, Facebook, X, Open Graph |
| `07_Wallpapers` | Desktop, Tablet, Mobile |
| `08_Press` | BrandBoard.png, Hero.png *(logo-plate exports in v0.9)* |
| `09_Brand_Guide` | Brand_Guide.txt |
| `10_README` | README.txt |
| `11_Source_Artwork` | Working master artwork |

### Brand Board v1 (identity sheet)

`06_Brand_Reference/InPhase_Brand_Board_v1.png` — full identity sheet (palette, typography, lockups, usage). **Not** the same as v0.9 `08_Press/BrandBoard.png`.

### Legacy press exports

`05_Press/` — earlier app logo / icon exports kept for reference.

---

## Core mark

Dual luminous crescents — Cosmic Violet body, Solar Gold inner glow, Midnight plate.

## Wordmark & taglines

| Surface | Form |
|---------|------|
| Brand board wordmark | lowercase **inphase** |
| Product / App Store name | **InPhase** |
| Brand board tagline | NAVIGATE RELATIONSHIPS WITH GREATER CLARITY, CONNECTION, AND UNDERSTANDING. |
| Platform tagline | She's not complicated. She's cyclical. |

## Palette (brand board v1)

| Name | Hex |
|------|-----|
| Midnight | `#080D1A` |
| Cosmic Violet | `#7B5CFF` |
| Lunar Lilac | `#B689FF` |
| Solar Gold | `#FFB86B` |
| Moonstone | `#F5F5FA` |

## Site copies

Curated under `public/brand/inphase/`: Final app icon, Brand Board v1, sized app icons, favicons, wallpapers, and `inphase-brand-kit.zip`. Brand Resources heroes are **Final** (`app-icon-1024.png`) and **Brand Board v1** (`brand-board.png`).

### v0.9 placeholder note

Several v0.9 “variants” (master, transparent, lockups, social, pack 1024, press BrandBoard/Hero) are **byte-identical** working plates — not distinct exports. They remain in this archive for provenance. They are **not** served on Brand Resources or listed as separate downloads until real differentiated files exist.

## Usage

- Do not stretch, rotate, recolor, or redraw the crescents
- Prefer Final app icon for product surfaces; Brand Board for identity reference
- Do not treat v0.9 placeholder plates as approved lockup/social variants
