# Alasdair Gray Design System

> *A blog set as a Scottish broadsheet of the imagination.*

This is the design system for **thingsithinkithink** — a personal blog modelled on the Glaswegian broadsheets and book-jackets of Alasdair Gray. Engraved double frames, sepia plates, fell-letter display, and a single oxblood accent for mottos.

The system was given to us complete: tokens, components, fonts, and a hand-written styleguide. This project re-organises those assets for use by the design agent (cards, semantic CSS, UI kit, sample slides, skill manifest) without changing the original style.

---

## Sources

| Source | Path | Notes |
|---|---|---|
| Original styleguide HTML | `reference/original_styleguide.html` | The hand-set V6 styleguide. Read this first — it is the canonical document. |
| Tokens | `src/tokens.css` | All design tokens (color, type scale, spacing, ornaments, motion). |
| Components | `src/components.css` | `.v6-*` class implementations. |
| Fonts | `fonts/`, `fonts.css` | Cormorant Garamond, Cormorant SC, IM Fell English, IM Fell English SC, JetBrains Mono — bundled as `.woff2`. |
| Original codebase mount | `Alasdair Gray/` (read-only mount provided to the agent) | Direct copy of the V6 source. |

No Figma file, no slide deck, no screenshots were provided — this system is fully expressed in code.

---

## Index

```
README.md                       — this file (overview, content + visual rules)
SKILL.md                        — agent skill manifest
colors_and_type.css             — semantic CSS variable aliases (fg1, h1, body…) over V6 tokens
fonts.css                       — @font-face declarations
fonts/                          — local .woff2 files
src/
  tokens.css                    — V6 tokens (canonical)
  components.css                — V6 components (canonical)
reference/
  original_styleguide.html      — the hand-set styleguide, untouched
preview/                        — design-system cards (Type, Colors, Spacing, Components, Brand)
ui_kits/
  blog/                         — UI kit: the broadsheet blog itself
slides/                         — broadsheet-styled sample slides
assets/                         — logos, ornament glyphs reference
```

---

## Voice in one paragraph

The system's job is to make a personal blog feel like a chapter from a strange, generous, hand-set book — without becoming a costume. Ornaments are real components, not decoration. The frame, the plate, the motto, and the drop cap are the system. **Posts are always single-column "chapters."** Three-column broadsheet layout is reserved for the index — this is a system rule, not a recommendation.

---

## CONTENT FUNDAMENTALS

The voice is **literary, slightly antique, dryly observant.** It is the voice of an essayist writing in 2026 who would rather be writing in 1826 — but who would never pretend they were. Modern subjects (Claude Code, Coral Hart and her 200 AI-co-authored romance novels, balloon animals) are treated with the same plain seriousness as a chapter on natural history. The juxtaposition is the joke and the point.

### Casing

- **Titles** — Title Case, set in IM Fell English. *"Like a Ragged Prayer."* Never all caps; the small-caps face does that work for labels.
- **Labels, mottos, chapter rules, byline** — `ALL CAPS, WIDELY LETTERSPACED`, set in IM Fell English SC. Tracking is generous (3–8px) — these are meant to read as engraved markings, not shouted text.
- **Body prose** — sentence case, justified, hyphenated. Use the Oxford comma. British or American spelling is fine, but pick one per post.
- **Mottos** — short, declarative, capitalised: `❦ ON BALLOON ANIMALS ❦`, `❦ A QUESTION OF MOMENT ❦`. Two to four words, ideally.

### Tone

- **First person, plural-of-modesty when reasoning.** "I" for personal anecdote; "we" or implicit "the reader and I" when working through an argument. Avoid the corporate "we."
- **"You" is used sparingly** and never for marketing. The reader is addressed as a fellow inhabitant of the page, not a customer.
- **Plain words, deployed precisely.** Romance novelist Coral Hart "has gone from about ten books a year to over two hundred" — not "scaled her output 20×." Numbers are written as words for small counts; numerals for anything that wants to feel like a record.
- **Italics carry the dek**, always phrased as a sub-clause: *"— in which the author considers a question of moment —"*, *"— in which the author considers what the romance novelists know that we do not —"*. The em-dashes are part of the form.
- **Irony is dry, never winking.** The system mocks the broadsheet form by inhabiting it perfectly.

### Mechanics

- **Em-dashes for asides; en-dashes for ranges.** No double hyphens.
- **Smart quotes always.** `"`/`'`, never `"`/`'`.
- **The end-mark `❦ ❦ ❦` followed by `HERE ENDS CHAPTER THE FIRST`** closes every post. The chapter number is real and increments.
- **Hyperlinks are dotted-underlined in ink, oxblood on hover.** Never blue, never bare.

### Specific examples (lifted from the styleguide)

- Sub-masthead line: `THINGSITHINKITHINK · A BLOG IN BROADSHEET FORM`
- Chapter rule: `CHAPTER THE FIRST · 2026-02-15 · 6 MIN READ`
- Title: *Like a Ragged Prayer*
- Dek: *— in which the author considers what the romance novelists know that we do not —*
- Byline: `By DAVID GÉROUVILLE-FARRELL · February 15, 2026`
- Plate caption: *Plate the First. Drawn from the life.*
- Motto: `❦ ON BALLOON ANIMALS ❦`
- Code label: `❦ A SAMPLE OF THE PYTHON LANGUAGE ❦`
- Closer: `HERE ENDS CHAPTER THE FIRST`

### What the voice is NOT

- Not jokey, not reactive, not snarky. No exclamation marks.
- **No emoji.** The ornament glyphs (`❦ ❧ ☙`) are part of the voice, but they are typographic, not pictorial. The Unicode set is the system's set.
- No emoji-style bullet points. Lists are em-dash-led or numbered.
- No "Hey friends" or "Hot take" or "TL;DR." If you need a TL;DR, write a dek.

---

## VISUAL FOUNDATIONS

### Palette (5 tokens, 1 filter)

- **Paper** `#efe7d3` — a warm cream with a 3px radial-dot tooth (`rgba(60,40,20,.05)`). The tooth is non-negotiable; it reads as rotogravure paper, not as background colour. Apply via `background-image: radial-gradient(...)`.
- **Ink** `#1a1612` — warm near-black. Type, frames, ornament strokes. Soft/mute/faint/thread variants drop alpha to 0.85 / 0.70 / 0.40 / 0.30 respectively, and these are used in that order: soft for secondary text, mute for labels, faint for hairlines, thread for the finest rules between rows.
- **Accent (oxblood)** `#7a1f1a` — appears on motto bars, drop caps, chapter labels, ornament emphases, link hover. **Never on broad surfaces.** A page with too much red stops being a broadsheet and becomes a warning sign. Soft variant `#a13a30` for the hover/lit state when oxblood is already in use.
- **Plate bg** `#d8cfb8` with `sepia(0.18) contrast(1.05)` — applied to *every* image. Photographs, screenshots, illustrations all get the sepia tint. The frame is what signals "this is part of the broadsheet"; the tint is what makes it a plate.

### Type

Three families. The ornamentation comes from glyphs and frames, not a fourth font.

- **IM Fell English** — display: titles, drop caps, end ornaments. A 17th-century revival face; rough, inky, irregular. **Embrace the irregularity** — don't smooth it with anti-aliasing tweaks.
- **IM Fell English SC** — small caps: every label, motto, chapter rule, byline, h2 inline rule, h3.
- **Cormorant Garamond** — body prose; italic for the dek and figcaptions.
- **JetBrains Mono** — code only. Never used for UI labels, never for "tech-y" decoration.

The scale is 11 stops, defined in `tokens.css` as `--v6-type-*`. Body is 19px / 1.55, justified, hyphenated. The drop cap on the first paragraph is 78px in oxblood. **Indent every paragraph after the first by 1.6em** — this is a chapter, not a web page.

### Spacing & layout

4px base. Stops at 4 / 8 / 12 / 18 / 24 / 36 / 48 / 64 / 96. Reading column **680px** — narrower than most "blog" measures, because the broadsheet voice asks for an intimate measure. Frame margins (32px outer, 64×40px inner padding) are not negotiable.

Two layout modes:
- **POST mode** — single column, 680px max, drop cap, plates centred at 600px max. **Always** for posts.
- **HOMEPAGE mode** — broadsheet 3-column with 1px ink rule between columns. **Only** on the index.

### Backgrounds, textures, imagery

- **Always** the cream-paper-with-tooth background. Never a solid colour, never a gradient mesh, never a hero photograph behind text.
- **No full-bleed imagery.** Imagery lives inside plates with double-rule frames, max 600px wide (760px for the hero plate).
- **All images get the sepia tint** via `--v6-plate-tint`. Treat this as a system rule, not a stylistic option. Modern photographs, screenshots, AI illustrations — all of them go through the filter.
- **No gradients.** None. The closest the system comes is the radial-dot tooth.

### Borders, frames, rules

- **The double engraved frame is the page itself.** 2px outer / 3px gap / 1px inner. Four corner ornaments (`❦`) at 8px inset. Every page sits inside this frame.
- **Plates are framed twice too** — outer 1px, 6px gap, inner 1px around the image.
- **Section heading h2** is bracketed by 1px ink rules above and below the inline label, with `❧` on either side.
- **Horizontal rules** are hairline-thin (`1px solid var(--fg-faint)`) — they're meant to read as printer's rules, not dividers.
- **Corner radius is 0. Always 0.** `--v6-radius: 0`. Never round anything.

### Shadows

**There are none.** No box-shadow, no drop-shadow, no inset shadow. The visual depth in this system comes from frames and ink weight, not light. If you find yourself wanting a shadow, you want a frame.

### Animation & motion

- Two durations: 120ms (fast — link hover, button press) and 260ms (norm — page transitions).
- One easing: `cubic-bezier(0.2, 0.7, 0.2, 1)` — fast-out, slow-in. Stored as `--v6-ease`.
- **No bounces, no springs, no parallax, no scroll-driven animation.** A broadsheet doesn't bounce. Crossfades and colour-shifts only.
- `prefers-reduced-motion` zeroes both durations.

### Hover & press states

- **Links** — text colour shifts ink → oxblood, dotted underline shifts to oxblood with it.
- **Plates** — no hover state; they are objects on the page, not buttons.
- **Buttons** (rare in this system; the blog has only nav links) — when used, they invert: ink-bg flips to paper-bg with oxblood ink, or vice versa. No scale change, no shadow.
- **Press** — opacity 0.85 momentarily. No shrink, no displacement.

### Transparency, blur, capsules

- **No backdrop-blur.** Ever. This is print.
- **No translucent capsules over imagery.** No "protection gradient" under text on photos — because there are no full-bleed photos.
- **Transparency** appears only as alpha on ink (soft/mute/faint/thread) and as the 4–6% black wash inside `.v6-quote`.

### Cards / containers

A card is **a 1px ink border with `rgba(255,255,255,0.4)` fill**. No rounded corners. No shadow. The fill lifts the card off the tooth-textured paper just enough to read as a separate plate without breaking the print metaphor. Use sparingly; the styleguide itself uses cards but the live blog rarely does.

### Imagery vibe

Warm. Sepia-tinted. Slightly low-contrast. Think aquatint engravings, 19th-century book plates, brown-edged photographs in a regional newspaper archive. **Never cool, never neon, never iridescent, never glassmorphism.**

### Layout rules (fixed)

- Outer frame margin **32px** on every page (12px on mobile).
- Inner frame padding **64px × 40px** on desktop, 24×18 on mobile.
- Reading column **680px** for post body.
- Plates max **600px** (hero: **760px**).
- Aspect ratio of plates **16:9** by default.
- Three-column index has **32px column gap** and a **1px ink rule** between columns.

---

## ICONOGRAPHY

**There are no icons in this system.** This is the most important thing to know.

The system's "iconographic" vocabulary is six Unicode glyphs and one frame:

| Glyph | Code | Role |
|---|---|---|
| `❦` | U+2766 | Frame corner ornament; motto bookend |
| `❧` | U+2767 | Section heading bookend; caption close |
| `☙` | U+2619 | Caption open |
| `❦ ❦ ❦` | (composed) | End-mark above chapter close |
| `—` | U+2014 | Brackets H3; dek delimiters |
| (frame) | (CSS) | The 2px / 3px gap / 1px engraved double border with 4 `❦` corners |

These are pasted as text, not images. They take the page's ink colour. Use them; don't substitute SVG icons, don't substitute emoji, don't substitute icon-font glyphs (Lucide, Heroicons, Material, etc).

**No emoji.** No 🎯, no 🚀, no 🔥. Emoji break the print metaphor instantly.

**No SVG iconography.** Not for nav, not for "social", not for "share." If you need a "social" link, set the words `MASTODON · BLUESKY · RSS` in small caps with `·` separators.

**No icon font CDN.** The system explicitly does not load Lucide or Heroicons. The only "icons" it loads are the four font families above.

**No PNG icons.** None.

If a future component genuinely needs a pictorial mark — a brand crest for the blog, a frontispiece engraving — it should be drawn as an actual engraving (line art, sepia-tinted, framed in a plate), not as a flat icon. Until that exists, the masthead wordmark is the brand mark.

### Logo / wordmark

The blog's "logo" is its title set in IM Fell English at display size, sometimes preceded by a `❦`, with the small-caps tagline below. There is no graphic logo file. See `assets/wordmark.html` for a self-contained example.

---

## How to use this system

1. Load `fonts.css`, then `src/tokens.css` (or `colors_and_type.css` for semantic aliases), then `src/components.css`.
2. Wrap the page in `<body class="v6">`.
3. Wrap the chapter in `.v6-frame > .v6-frame__inner` with two `.v6-frame__corner-bl/br` spans for bottom corners.
4. Inside: `.v6-masthead` → `.v6-title` → `.v6-dek` → `.v6-byline` → hero `.v6-plate.v6-plate--hero` → `.v6-motto` → `.v6-body` → `.v6-end`.
5. Inside `.v6-body`: `.v6-h2`, `.v6-h3`, `.v6-quote`, `.v6-plate`, `.v6-code-frame` as needed.
6. For the index page only, replace the body with a `.v6-broadsheet` wrapper.

If you need a new component, ask: does it fit the three principles (frame the page, read in one column, plate-motto-dropcap)? If yes, propose it. If no, you probably want a different system.

---

*Here ends the README.*
