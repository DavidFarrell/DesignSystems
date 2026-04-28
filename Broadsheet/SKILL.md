---
name: alasdair-gray-design
description: Use this skill to generate well-branded interfaces and assets for the Alasdair Gray Broadsheet Design System (the "thingsithinkithink" blog), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

This is the design system for **thingsithinkithink** — a personal blog set as a Glaswegian broadsheet of the imagination. Engraved double frames, sepia plates, fell-letter display, oxblood accent. **No icons, no emoji, no shadows, no rounded corners, no gradients, no full-bleed imagery.** The vocabulary is six Unicode glyphs (❦ ❧ ☙ — · ❦❦❦) and one frame.

## Files

- `README.md` — overview, sources, content rules, visual rules, iconography. Read first.
- `colors_and_type.css` — semantic CSS aliases (`--fg1`, `--accent`, `--serif-display`, `h1`, `body` defaults).
- `src/tokens.css` — canonical V6 tokens (`--v6-*`).
- `src/components.css` — canonical `.v6-*` components.
- `fonts.css` + `fonts/` — local woff2 for IM Fell English (+ SC), Cormorant Garamond, Cormorant SC, JetBrains Mono.
- `reference/original_styleguide.html` — the hand-set styleguide. Authoritative reference.
- `preview/` — small design-system cards (one concept each).
- `ui_kits/blog/` — interactive React UI kit: Frame, Masthead, Nav, Title, Plate, Motto, Body, Headings, Quote, CodeFrame, EndMark, IndexCard. See `ui_kits/blog/README.md`.
- `assets/` — wordmark + glyph reference. There are no logo files or icons.

## Loading order for any new HTML

```html
<link rel="stylesheet" href="fonts.css"/>
<link rel="stylesheet" href="src/tokens.css"/>
<link rel="stylesheet" href="src/components.css"/>
<body class="v6">…</body>
```

Or use `colors_and_type.css` (which imports the first two) for semantic-name access:

```html
<link rel="stylesheet" href="colors_and_type.css"/>
<link rel="stylesheet" href="src/components.css"/>
```

## The three principles

1. **Frame the page.** Wrap any new page in `.v6-frame > .v6-frame__inner` with two `.v6-frame__corner-bl/br` spans.
2. **Read in one column.** Posts use `.v6-body` (680px). The 3-col `.v6-broadsheet` is for the index ONLY.
3. **Plate, motto, drop cap.** These three carry the voice. Don't substitute icons or color blocks.

## Voice cheat sheet

- Title in `IM Fell English`, dek in italic Cormorant bracketed by em-dashes (*— in which the author considers… —*).
- Labels, mottos, byline in `IM FELL ENGLISH SC` with 3–8px letter-spacing, ALL CAPS.
- Body in justified Cormorant Garamond, 19/1.55, hyphenated, paragraphs after the first indent 1.6em.
- First paragraph drop cap in oxblood, 78px.
- Close every chapter with `❦ ❦ ❦` and `HERE ENDS CHAPTER THE Nth`.
- No emoji. No exclamation marks. Smart quotes. Em-dashes for asides; en-dashes for ranges.

## Forbidden by default

box-shadow · border-radius > 0 · backdrop-filter · linear-gradient backgrounds · emoji · SVG icons · icon fonts · CDN icon libraries · colour fills in oxblood · full-bleed photography · sans-serif body · scroll-driven animation · bouncy easings.

If a brief seems to require any of these, propose a frame-respecting alternative first.
