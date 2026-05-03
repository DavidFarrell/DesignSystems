---
name: pd-design-system
description: Use this skill when the user asks to build, design or restyle anything "in the Public Digital style", "PD style", "public.digital style", or asks for an artefact that should sit comfortably next to public.digital - decks, reports, microsites, prototypes, blog templates, internal tools, or client-facing slides for a PD-style consultancy voice.
---

# Public Digital Design System

A faithful re-creation of public.digital's visual system. Single typeface (Brown), warm-paper background, near-black ink, one red signature accent, nine categorical plate hues for client-story cards, oversized sentence-case headlines, generous space, no shadows, two corner radii (square + pill).

## When to invoke

- "Make this look like public.digital"
- "PD-style deck / report / one-pager"
- "Style this in the Public Digital design system"
- "Public-sector consultancy look"

## Files to load

```html
<link rel="stylesheet" href="pd/fonts.css">
<link rel="stylesheet" href="pd/src/tokens.css">
<link rel="stylesheet" href="pd/src/components.css">
<link rel="stylesheet" href="pd/colors_and_type.css">
<body class="pd">…</body>
```

## Class vocabulary

- Layout: `.pd-container`, `.pd-grid` (set `--pd-cols: N` for column count)
- Type: `.pd-f-hero`, `.pd-f-page`, `.pd-f-large`, `.pd-f-small-hdr`, `.pd-f-impact`, `.pd-f-figure`, `.pd-f-lead`, `.pd-f-body-bold`, `.pd-f-label`, `.pd-eyebrow`, `.pd-prose`
- Header / nav: `.pd-header`, `.pd-header__inner`, `.pd-header__brand`, `.pd-nav`
- Sections: `.pd-section`, `.pd-section--dark`, `.pd-hero`
- Cards: `.pd-card` + `--orange|yellow|green|turquoise|sky|ice|blue|pink|taupe|red|black`
- Stat: `.pd-stat`, `.pd-stat__value`, `.pd-stat__label`
- Newsletter: `.pd-newsletter`, `.pd-input`
- Buttons: `.pd-btn`, `.pd-btn--ghost`, `.pd-btn--reverse`, `.pd-arrow`
- Tag: `.pd-tag`
- Links: `.pd-link`, `.pd-link--minimal`
- Footer: `.pd-footer`

## Hard rules

1. **One typeface** - Brown - for everything. Headings 700, body 400.
2. **Sentence case** for every headline. Title Case only for proper nouns.
3. **One plate accent per surface.** Never blend two of the nine hues.
4. **PD red is the only signature accent** - links, hover, errors. Never broad fill.
5. **No shadows. Two radii.** `0` for plates, `9999px` for pills, `32px` for the hero / story cards.
6. **No emoji, no SVG icon set.** Use `→ · ●` set in Brown.
7. **No backdrop-blur, no glassmorphism, no gradient.**
8. **Container max-width 1440px**, side padding 64px desktop / 16px mobile, 12-col grid.

## Voice rules

- Plain, concrete, British English, slightly understated.
- Lead with the work, not the boast. Name the programme and the outcome.
- No "world-class", "leverage", "ecosystem", "stakeholder", "unlock", "synergies".
- Em-dashes for asides; smart quotes always.

## Reference

`README.md` in this folder is the canonical write-up. Read it before producing anything more elaborate than a single page.
