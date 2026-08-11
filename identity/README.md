# TripleVirgo Identity System

Canonical source of truth for TripleVirgo company and product identity.

This folder records intentional design decisions gathered from prior TripleVirgo website work, product codebases (MyPhase, InPhase, OurPhase, Reveal), App Store drafts, constitution docs, and conversation history. It does **not** invent new brand language. Where something was never decided, it is marked as such.

## How to use this system

1. Start with [`company.md`](./company.md) for company-level identity.
2. Open the relevant product brief under [`products/`](./products/).
3. Use [`brand-guide.md`](./brand-guide.md) for visual and voice rules that apply across surfaces.
4. Use [`website.md`](./website.md) for triplevirgo.com-specific decisions (many were refined in situ).
5. Use [`sources.md`](./sources.md) when you need provenance, supersessions, or conflict notes.

## Authority & conflict resolution

| Layer | Authority |
|-------|-----------|
| Explicit founder / owner decisions in TripleVirgo website chats | Highest for company site & company brand language |
| Live copy on triplevirgo.com (implemented from those decisions) | Current public company surface |
| Product brand files & App Store Connect drafts in product repos | Highest for that product’s store listing, icon, and in-app brand |
| Platform constitution (`inphase` `docs/constitution/`, `shared/platform.ts`) | Shared platform philosophy & product boundaries across InPhase / MyPhase / OurPhase |
| This `identity/` folder | Canonical *compiled* record — update it when decisions change; do not contradict higher layers without noting supersession |

When two layers disagree, document both and state which surface uses which string. Do not silently merge them.

## Folder map

| Path | Purpose |
|------|---------|
| [`company.md`](./company.md) | Company identity (name, essence, constellation, contact) |
| [`brand-guide.md`](./brand-guide.md) | Cross-product brand principles |
| [`philosophy.md`](./philosophy.md) | Company philosophy |
| [`founder.md`](./founder.md) | Founder / name story |
| [`mission.md`](./mission.md) | Mission |
| [`vision.md`](./vision.md) | Vision & North Star |
| [`impact.md`](./impact.md) | Intended impact |
| [`website.md`](./website.md) | triplevirgo.com design & copy decisions |
| [`sources.md`](./sources.md) | Research provenance & supersessions |
| [`products/`](./products/) | Per-product identity |
| [`logos/`](./logos/) | Logo assets & usage (canonical brand packs) |

## Where to put brand folders

Drop new packs on the Desktop (or Downloads) as a temporary inbox — then import into:

```text
identity/logos/<product>/     ← canonical archive (git)
public/brand/<product>/       ← curated files for Brand Resources downloads
```

Do not commit AuthKeys, `.p8` files, or other secrets into brand folders. A personal mirror outside the repo can live at `~/Brand/TripleVirgo/` if useful; the repo remains source of truth for the company site.
| [`icons/`](./icons/) | App / UI icon assets |
| [`colors/`](./colors/) | Palette references |
| [`typography/`](./typography/) | Type rules |
| [`photography/`](./photography/) | Photography direction |
| [`social/`](./social/) | Social avatars & templates |
| [`press/`](./press/) | Press kit |
| [`app-store/`](./app-store/) | Store listing creative pointers |

## Products in the constellation

| Product | Public company site | Identity system |
|---------|---------------------|-----------------|
| MyPhase | Yes | [`products/myphase.md`](./products/myphase.md) |
| InPhase | Yes | [`products/inphase.md`](./products/inphase.md) |
| OurPhase | Yes (Coming Soon) | [`products/ourphase.md`](./products/ourphase.md) |
| Reveal | **No** — reserved; do not market on triplevirgo.com until decided | [`products/reveal.md`](./products/reveal.md) |

## Research snapshot

Compiled August 2026 from:

- Conversation: [TripleVirgo website design](1a8b71da-3fe6-4145-aee7-ec7e525bbb0d)
- Repo: `triplevirgo` (site implementation, `public/brand/`, existing stubs)
- Repo: `MyPhase/myphase` (`shared/myPhaseBrand.ts`, icon source-of-truth, App Store docs)
- Repo: `inphase-master/inphase` (constitution, `shared/platform.ts`, App Store docs)
- Repo: `reveal` (landing / theme implementation — product still reserved on company site)

See [`sources.md`](./sources.md) for detail.
