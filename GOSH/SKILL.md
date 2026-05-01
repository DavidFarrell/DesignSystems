---
name: gosh-design-system
description: Apply the GOSH Charity design system - GOSH Brave type, the warm-paper-with-vivid-accent palette, ink-on-lime CTAs, and the documentary-candid photography style. Use when David is producing client-facing artefacts for Great Ormond Street Hospital Charity (decks, reports, microsites, prototypes, internal tools, donation flows).
---

# GOSH Charity design system - agent skill

## When to use

Activate when the deliverable is for **Great Ormond Street Hospital Charity (GOSH)**. Triggers include:

- David says "GOSH style", "GOSH Charity", "use the GOSH system", "make this look like gosh.org"
- A client artefact is destined for Rich Grove, Sherry Abbassi, Daniel Littlefield, Matthew Martinez, Emma Arbuthnot, Phil, Lauren Molyneux, Jo Rozeik or any other GOSH stakeholder
- A microsite, donation flow, internal tool, deck, training pack or report needs to sit alongside Charity-produced assets without looking out of place
- David asks for a "Charity-style" appeal page

**Do not** use this system for the **hospital** itself (Great Ormond Street Hospital NHS Trust) - the Trust uses NHS Frutiger blue, not GOSH Brave purple-and-cyan. Different brand.

## Inputs

Drop these three CSS files at the top of the document:

```html
<link rel="stylesheet" href="<path>/GOSH/fonts.css">
<link rel="stylesheet" href="<path>/GOSH/src/tokens.css">
<link rel="stylesheet" href="<path>/GOSH/src/components.css">
<link rel="stylesheet" href="<path>/GOSH/colors_and_type.css">
```

Then add `class="gosh"` to `<body>`.

## Hard rules

1. **One family.** GOSH Brave for everything - display, body, UI, buttons. Fallback stack `Arial, Helvetica, sans-serif` matches the live site.
2. **Body is 18px / line-height 1.4 / weight 600 (semibold).** Don't shrink it.
3. **Two button shapes only.**
   - `.gosh-btn` - rectangle, lime fill, ink text. Use for the primary conversion action ("Donate now").
   - `.gosh-cta` - pill, 30px radius, cyan fill by default. Use for reading-flow CTAs.
4. **One accent colour per surface.** Cyan, lime, pink, purple - pick one. Mixing them on a single panel breaks the brand.
5. **Sentence case headlines.** Title Case is for proper nouns only.
6. **No shadows.** Layer with `--gosh-paper-stone`, hairline rules, or a coloured panel - never with `box-shadow`.
7. **Smart quotes, em-dashes, British English** in copy.
8. **Specificity over sentiment.** "Your £25 funds..." beats "Your gift makes a difference."

## Tokens at a glance

```
Ink      --gosh-ink (#212121)        Paper      --gosh-paper (#FAF9F8)
Brand    --gosh-purple (#4C3C90)     Stone      --gosh-paper-stone (#EEEDE7)
Accent   --gosh-cyan (#0AD7FF)       Hero      --gosh-purple-deep (#2F1351)
CTA      --gosh-lime (#E3F30C)       Pink      --gosh-pink (#EF7A97)
Link     --gosh-blue (#0078EB)       Error     --gosh-error (#B00020)

Type     400 / 500 / 600 / 700 / 800   GOSH Brave
Sizes    14 16 18 20 21 22 24 26 28 36 40 48
Radius   0 (rectangle) | 30px (pill) | 50% (circle)
Spacing  4 8 12 16 20 24 32 48 64
```

## Components available

`.gosh` (root), `.gosh-h1 / -h2 / -h3 / -h4`, `.gosh-eyebrow`, `.gosh-lede`, `.gosh-prose`,
`.gosh-btn` (`--cyan`, `--purple`, `--ghost`),
`.gosh-cta` (`--lime`, `--pink`, `--white`, `--small`),
`.gosh-colour-block` (`--purple`, `--lime`, `--pink`, `--cyan`, `--paper`),
`.gosh-card` (`--featured`, `--featured-cyan`, `--featured-lime`),
`.gosh-input`, `.gosh-label`, `.gosh-amount-toggle` (+ `.gosh-amount-toggle__btn`),
`.gosh-tag` (`--cyan`, `--lime`, `--pink`, `--purple`),
`.gosh-header`, `.gosh-rule`, `.gosh-hero` (+ `.gosh-hero__title`, `.gosh-hero__sub`),
`.gosh-bg-*` and `.gosh-text-*` utilities.

## Voice (paste into draft prompts)

> Speak parent-to-parent. Sentences are short. Verbs are concrete. Numbers are real. Avoid corporate filler ("ecosystem", "leverage", "unlock"). End with the ask, plainly. The signature pattern - `Build it. Beat it.` - is the system in miniature.

## Photography brief (paste into image prompts)

> Documentary candid, never staged. Real children, real families, real wards, real London. Natural light. No over-saturated filters. Captions are descriptive and plain ("Little girl sitting with mum, looking to camera and smiling"). Do not crop a child's face to a hero composition unless the family has agreed.

## Cross-references

- The actual Charity site: <https://www.gosh.org/>
- Hospital (NHS Trust) is a separate brand: <https://www.gosh.nhs.uk/>
- David's working folder for GOSH: `obsidian_vault/Private & Shared/Paidia/2025 Projects/2025 GOSH/`
