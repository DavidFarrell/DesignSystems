# Editorial Mono Design System

A Swiss editorial system for **thingsithinkithink** — a personal/studio blog. Reads like a working notebook: hierarchy through space and weight (not boxes and color), one accent voice, no rounding, generous measure, mono carries structure.

> **Three families. One accent. Sharp corners.**
> Mono carries structure — labels, captions, indices. Serif carries prose. Sans carries UI chrome. Vermilion is the only voice raised above the page.

---

## Sources

The system was extracted from a single attached codebase, mounted via File System Access:

- `Editorial Mono/` — five files: `index.html` (full living style guide), `tokens.css` (all design tokens), `components.css` (class-based components), `fonts.css` (local @font-face declarations), `fonts/` (8 woff2 subsets — Inter, JetBrains Mono, Source Serif 4).

All assets, tokens and component CSS were copied directly from source. No values were inferred, invented, or substituted. Fonts are bundled locally — no Google Fonts CDN dependency.

The original style guide is preserved at `reference/original-style-guide.html`.

---

## Index

| File / Folder              | What it is                                                                |
|----------------------------|---------------------------------------------------------------------------|
| `README.md`                | This file — system overview, content + visual foundations, iconography.   |
| `SKILL.md`                 | Agent skill manifest — usable from Claude Code.                           |
| `tokens.css`               | All design tokens (color, type scale, spacing, motion). Source of truth.  |
| `components.css`           | Class-based components (`.v2-*`). Built on tokens.                        |
| `fonts.css`                | Local `@font-face` declarations. Loads before tokens.                     |
| `colors_and_type.css`      | Friendly semantic vars (`--fg1`, `--bg1`, `--accent`) + element defaults. |
| `fonts/`                   | 8 local woff2 files — Inter, JetBrains Mono, Source Serif 4 (latin + ext).|
| `assets/`                  | Brand SVGs (wordmark, glyphs, dingbats).                                  |
| `reference/`               | The original full style-guide HTML for reference.                         |
| `preview/`                 | Per-token cards rendered for the Design System tab.                       |
| `ui_kits/blog/`            | Click-thru recreation of the three core blog templates.                   |

---

## What this is for

The **thingsithinkithink** blog is the only product. The system supports three page templates:

- **INDEX** — list of posts. Rail nav highlights "Index". Meta strip across top reads `ARCHIVE · 142 POSTS · UPDATED FEB 15`.
- **POST** — long-form essay. Rail collapses to current post (title, TOC, tags, prev/next). Content area: meta strip → h1 → italic dek → author → hero plate → prose with drop cap.
- **TAGS / ARCHIVE** — year-grouped list. Rail nav highlights tag. Content = h2 per year + monospace year-month-title rows; vermilion appears on hover only.

Same rail. Same content padding. Same vermilion logic. Only the slot changes.

---

## Content fundamentals

**Voice.** A working notebook from a software-and-design studio that respects the reader. Unhurried, specific, allergic to filler. First-person plural is rare; first-person singular is fine when honest. The reader is "you" only when giving instruction inside the system docs themselves — never in essays.

**Tone.** Considered, slightly wry, never breezy. Posts open with a premise and a doubt. Sentences favor concrete nouns over corporate abstractions ("vermilion" not "primary brand color"; "mono carries structure" not "monospace typography is leveraged for hierarchical clarity").

**Casing.**
- **Sentence case** for all running prose — h1, h3, body, dek.
- **ALL CAPS, monospaced, tracked** for everything structural — section headings (h2), eyebrow strips, meta lines, captions, tags, button labels. Letter-spacing in caps is `1.4–2px`.
- **Lowercase** brand mark: `thingsithinkithink` is always one word, lowercase, even at the top of the page.

**Punctuation & glyphs.**
- Em-dashes (`—`) for asides; never spaced hyphens.
- Middle-dot separator (`·`) inside mono strips: `FEB 15, 2026 · 6 MIN READ`.
- Section glyph `§` opens every H2 in vermilion.
- Published-state dot `●` appears once per post in the eyebrow strip.
- Caption stamp `FIG ·` prefixes every figure caption automatically.
- No emoji, ever. No icon set. The mono is doing all the iconographic work.

**Examples from the source.**

> "A working notebook"
> "Like a Ragged Prayer"
> "Some interesting stuff from Alexandra Alter on how AI is disrupting the romance novel industry."
> "I was expecting to hear a story about how threatened romance novelists feel… But there was a lot more nuance than I anticipated."
> Eyebrow: `POST · 2026-02-15 · ● PUBLISHED · 6 MIN READ`
> End rule: `END · 2026-02-15` / `thingsithinkithink / v2`

**Length.** Posts are essays, not posts. 6–15 minute reads. The reading column caps at **760px** regardless of viewport — measure matters more than fill.

---

## Visual foundations

**Color.** Two warm-paper surfaces (`#f5f3ed`, `#ece9e0`), one near-black ink with three softnesses (`#0f0f0e`, `#1d1d1b`, `#6b6b66`), one vermilion accent (`#d8543d`). Nine tokens total. **The system explicitly forbids a tenth.** Vermilion appears in exactly five places: the section glyph `§`, the drop cap on the first paragraph, link underlines, the published-state dot, and prev/next chevrons. Nowhere else.

**Type.** Three families, no more.
- **Source Serif 4** — prose, the title, the dek, the drop cap, the H3.
- **Inter** — UI chrome, navigation, default UI fallback. Almost invisible by design.
- **JetBrains Mono** — metadata, structural labels, captions, code, the H2 (set in caps). The mono is doing more work than usual — it isn't decoration, it's wayfinding.

Eleven scales, all defined in `tokens.css`. Body sets at 18px / 1.65 line-height — generous, deliberate, "lets the reader breathe inside dense argument."

**Spacing.** 4px base, nine steps: 4, 8, 12, 16, 24, 32, 44, 64, 96. **No half-steps. No 5px, no 10px.** The vertical rhythm of a page should "feel like a poem you can scan from across the room."

**Layout.** Two-column: 260px persistent dark rail + fluid reading column. Content padding `56px y / 88px x`. Reading column tops out at 760px.

**Backgrounds.** Flat warm paper. **No images, no full-bleed, no patterns, no textures, no gradients.** Hero plates exist but are 16:9 frames with a hairline border around an image — the image is content, not background. Code blocks are flat near-black (`#0f0f0e`).

**Borders & corners.**
- **Every corner is square.** `--v2-radius: 0`. No exceptions, including buttons, code blocks, and hero plates.
- **Hairline only** — `1px solid var(--v2-ink)` on light, `1px solid #2c2c29` on dark. No 2px borders, no 3px borders.
- The only thicker rule in the system is the 3px vermilion left-border on `.v2-quote`.

**Shadow.** **None.** No drop shadows, no inner shadows, no elevation system. Hierarchy comes from rule weight and position, never from depth.

**Animation.** Minimal. Two durations (`120ms`, `220ms`) on a single ease (`cubic-bezier(0.2, 0.7, 0.2, 1)`). The only animated property in the system is button background-color on hover. No fades, no bounces, no scale, no slide-ins. `prefers-reduced-motion` zeroes both durations.

**Hover.**
- **Buttons** — solid black flips to vermilion (`#d8543d`).
- **Ghost buttons** — transparent flips to solid black with paper-color text.
- **Links** — gain a faint vermilion wash (`rgba(216,84,61,0.08)`) behind the text. The vermilion underline is always present, hover or not.
- **Archive rows** — `prev/next` chevrons go vermilion on hover; row title gains the same wash.

**Press.** No press states defined. The system relies on color-flip alone.

**Transparency & blur.** Only one transparency token in the entire system — the link hover wash at 8% vermilion. **No blur anywhere.** No backdrop-filter, no semi-transparent panels, no glassmorphism.

**Imagery.** Warm, natural, slightly muted. The single sample hero plate uses a sand-to-cream linear gradient (`#d8cfb8 → #efece4`) as a stand-in. Real imagery, when used, should match: warm neutrals, low saturation, no high-contrast color casts. **Never** cool blues or violets.

**Cards.** Cards exist only in the style-guide chrome (1px black border on white). In the actual product, content is never boxed — separation is by space and rule, not by container.

**Fixed elements.** The 260px rail is the only persistently fixed element. Below 900px it collapses to a single column.

---

## Iconography

**There is no icon set.** This is a deliberate, load-bearing decision in the system: "The mono is doing all the iconographic work the page needs."

The system owns exactly **three marks**:

| Mark   | Where it appears                                                  | Color     |
|--------|-------------------------------------------------------------------|-----------|
| `§`    | Opens every H2 section heading (set in Source Serif 4, 48–13px).  | Vermilion |
| `●`    | The published-state dot in the post eyebrow strip — once per post.| Vermilion |
| `FIG ·`| Stamp prefix on every figure caption (set in JetBrains Mono).     | Mute ink  |

Plus one navigational glyph used in the rail nav: `›` (single right chevron). And `→` inside the SUBSCRIBE button. That's the entire iconographic vocabulary.

**No emoji.** The style guide states the rule plainly. Don't add them.
**No SVG icon set.** Don't pull in Lucide, Heroicons, Phosphor, or anything else. The mono labels (e.g. `READ`, `BY`, `IN THIS POST`) replace what an icon set would normally do.
**No PNG icons.** The codebase ships zero raster icons.
**Unicode glyphs are the substrate.** When you need a mark, choose from `§ ● › → ·` — set in the family that's already on the page. If you find yourself needing a sixth, you probably want a different system.

A small SVG wordmark for `thingsithinkithink` lives in `assets/wordmark.svg` for use in OG images / favicons / external embeds. It is the brand mark, not a logo with a separate symbol — there is no symbol.

---

## Iteration & extension

> If you need a new component, ask: does it fit the three principles (structure first, one accent, no rounding)? If yes, propose it. If no, you probably want a different system.

— from the original style guide

