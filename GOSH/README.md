# GOSH Charity Design System

> *Fundraising for the country's most extraordinary children's hospital - in their voice, in their colours, in their type.*

This is a faithful re-creation of the visual system used on **gosh.org**, the website of Great Ormond Street Hospital Charity. Tokens, components and fonts have been audited from the live stylesheet on 1 May 2026 and re-organised into the same convention used by Broadsheet, EditorialMono and OpenSwim.

The system is intended for client-facing artefacts produced for GOSH - decks, reports, microsites, prototypes, internal tools. It is **not** an official Charity asset; it is a working approximation built from the public site so that David's deliverables can sit comfortably alongside their own materials.

---

## Sources

| Source | Path | Notes |
|---|---|---|
| Live stylesheet (audited) | `reference/main.css` | 143 KB minified bundle copied verbatim from `/static/css/main.7e827ff7c2a1.css`. |
| Donate page source | `reference/donate-page-source.html` | Sample of a working Charity page (Children's Cancer Centre appeal). |
| Homepage source | `reference/home-page-source.html` | Top-level Charity page. |
| Fonts | `fonts/`, `fonts.css` | **GOSH Brave** in 4 weights (400 / 500 / 600 / 700) plus italics. Self-hosted, copied directly from gosh.org. |
| Logos | `assets/logo-default.svg`, `assets/logo-mobile.svg` | Master and mobile lockups, as served by the site. |
| Tokens | `src/tokens.css` | Audited values, grouped semantically. |
| Components | `src/components.css` | `.gosh-*` class implementations. |

No Figma file was available - the system is fully expressed in code and reverse-engineered from the live CSS.

---

## Index

```
README.md                       - this file
SKILL.md                        - agent skill manifest
fonts.css                       - @font-face declarations for GOSH Brave
fonts/                          - 8 .woff/.woff2 files (one per weight + italic)
src/
  tokens.css                    - colour, type, spacing, radius, motion (canonical)
  components.css                - .gosh-* component CSS
colors_and_type.css             - semantic CSS variable aliases (fg1, bg1, accent...)
reference/
  main.css                      - live stylesheet, untouched
  donate-page-source.html       - donation page HTML reference
  home-page-source.html         - homepage HTML reference
preview/                        - one-concept-per-file design system cards
ui_kits/
  donate-page/                  - working donate-page recreation
assets/                         - logos
```

---

## Voice in one paragraph

The Charity speaks **directly, warmly, and bravely**. Its voice is parent-to-parent and supporter-to-supporter: it never talks down to the reader, never dresses up children's serious illness in marketing-speak, and never asks for money without first earning trust by being specific. Sentences are short. Verbs are concrete. Numbers are real ("£X funds Y for Z hours"). The signature pattern - `Build it. Beat it.` - is the system in miniature: two short clauses, full stops as punctuation, calls to collective action without sentimentality.

---

## CONTENT FUNDAMENTALS

### Casing

- **Headlines** - sentence case in 95% of cases. Title Case is reserved for proper nouns: *Great Ormond Street Hospital Charity*, *Children's Cancer Centre*. Never all-caps for headlines.
- **Eyebrow labels and tags** - `ALL CAPS, TRACKED 1px`, in the bold weight (700). Used to mark a section type ("APPEAL", "RESEARCH", "STORY") or a meta strip.
- **CTA buttons** - sentence case ("Donate now", "Find out more", "Read Olivia's story"). Never all-caps.
- **Body prose** - sentence case throughout, British English spelling.

### Tone

- **Address the reader as a partner.** "Your gift", "you can help", "we cannot do this without supporters like you" - first-person plural in our voice, second-person for the supporter. Never "the donor" in third person.
- **Specificity is the system.** Replace "we fund world-class research" with the real number: how many researchers, in which lab, working on which disease, with which goal. The Charity's brand is built on real children with real names.
- **Brave, not brash.** Even the activist verbs ("beat it", "build it", "fight") are paired with an unforced, child-centred frame - never machismo. The lime + cyan palette is the visual equivalent: bright but never harsh.
- **No corporate filler.** Avoid "ecosystem", "leverage", "unlock", "stakeholder". Say what you mean.
- **End with the ask, plainly.** Donation pages don't bury the button. The amount toggles, the rectangle, the GO. No multi-step funnel disguised as a journey.

### Mechanics

- **Smart quotes always.** `"`/`'`, never `"`/`'`.
- **Em-dashes** for asides; en-dashes for ranges; spaced en-dashes for thought-breaks.
- **Numbers as words for one to nine; numerals for 10 and above.** Money always as numerals: "£25", "£1,000", "£2.7 million".
- **Dates in long form**: "5 May 2026", not "5/5/26". British, not American.
- **Hyperlinks** are GOSH blue (`--gosh-blue`), underlined, no other decoration.

### Voice exemplars (lifted from live pages)

> "Help beat childhood cancer."
> "When cancer hits, childhood can suffer."
> "The best care, the best chance and the best childhood."
> "We need your help to build it, so we can beat it."
> "Build it. Beat it."

---

## VISUAL FUNDAMENTALS

### The shape of the brand

GOSH Charity is **flat blocks of bright colour, set on warm paper, anchored in deep purple, signed in GOSH Brave**. Photography of children and families is treated as document, not stock - real spaces, real moments, no over-art-direction. Layouts are calm rectangles broken by one strong CTA. The system rarely uses shadows; layering is done with colour and ruled lines, not depth.

### Palette in use

| Role | Token | Hex | Where it shows up |
|---|---|---|---|
| Primary text | `--gosh-ink` | `#212121` | All body, headings, button labels |
| Page paper | `--gosh-paper` | `#FAF9F8` | Default page background |
| Stone slab | `--gosh-paper-stone` | `#EEEDE7` | Hero plates, secondary cards |
| Brand purple | `--gosh-purple` | `#4C3C90` | Eyebrow labels, dark callouts |
| Hero purple | `--gosh-purple-deep` | `#2F1351` | Reverse-out section backgrounds |
| Signature cyan | `--gosh-cyan` | `#0AD7FF` | Search button, hero CTA, panels |
| Donate lime | `--gosh-lime` | `#E3F30C` | "Donate now" header button |
| Pink | `--gosh-pink` | `#EF7A97` | Story panels, secondary CTAs |
| Blue (link) | `--gosh-blue` | `#0078EB` | In-text links |
| Error | `--gosh-error` | `#B00020` | Form errors, destructive |

**Use one accent per surface.** Cyan + lime + pink + purple all on one section is not the brand - it's a clown car.

### Typography in use

- **One family does everything: GOSH Brave.** Display, body, UI chrome, button labels - all the same face. The visual rhythm comes from weight (500 / 600 / 700 / 800) and size, not from family contrast.
- **Default body is 18px / 1.4** in semibold (600). The site is heavier than most - lean into that.
- **CTA labels are 18px in extra-black (800)**. This is the only place 800 is used.
- **Headlines max out at 40-48px** for hero plates; section H2s at 28-30px.

### Buttons - the two shapes

The system has exactly two button shapes. Don't invent a third.

1. **Rectangle** (`.gosh-btn`) - lime fill, ink text, semibold, no rounding. This is the header "Donate now" and any conversion-critical action.
2. **Pill** (`.gosh-cta`) - 30px radius, ink text, padded 10/40, sized 21px. This is the "Call to action" component - reading flow, secondary navigation, "Find out more".

Cyan is the search/utility background. Purple is reverse-out only.

### Photography

GOSH photography is **documentary candid**, not staged. Real children, real families, real wards, real London. The pull-out captions on the live site read "Little boy with feeding tube in buggy on rooftop garden. London skyline visible in the background." That is the spec: descriptive, plain, true. Do not stylise. Do not filter to a single mood. Do not crop a child's face to a hero composition unless the family has agreed.

### Iconography

The live site uses very few icons - donation card chips, social glyphs, a hamburger menu line. There is no comprehensive icon set. When you must add one, use a simple line icon at 1.5-2px stroke, in `--gosh-ink` or the surrounding accent colour. **Never** mix icon styles.

### Layout

- Container max-width is `1180px`.
- Reading column tops out around `680px`.
- Vertical rhythm runs on a 4-px grid: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64.

---

## Quick start

```html
<link rel="stylesheet" href="GOSH/fonts.css">
<link rel="stylesheet" href="GOSH/src/tokens.css">
<link rel="stylesheet" href="GOSH/src/components.css">
<link rel="stylesheet" href="GOSH/colors_and_type.css">

<body class="gosh">
  <h1>Help beat childhood cancer</h1>
  <p class="gosh-lede">When cancer hits, childhood can suffer. Your gift funds the best care, the best chance and the best childhood.</p>
  <a href="#donate" class="gosh-btn">Donate now</a>
  <a href="#more" class="gosh-cta">Find out more</a>
</body>
```

## Do / don't

- **Do** lead every appeal with a specific child, story or number.
- **Do** keep one accent colour per surface.
- **Do** use 18px / line-height 1.4 for body. The site is heavier than yours; don't shrink it.
- **Don't** mix cyan, lime and pink in the same panel.
- **Don't** apply drop shadows. Use a deeper paper tier or a hairline rule instead.
- **Don't** caps-lock headlines. The Charity's tone is calm, not shouty.
- **Don't** pair GOSH Brave with another display face. One family.
