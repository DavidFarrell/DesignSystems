---
name: awn-design-system
description: Use this skill when the user asks to build, design or restyle anything "in the Awin style", "awin.com style", or asks for an artefact that should sit comfortably next to awin.com - decks, reports, microsites, prototypes, blog templates, partner-facing one-pagers, internal tools, or client deliverables for an Awin / partnership-marketing context.
---

# Awin Design System

A faithful re-creation of awin.com's visual system. Single typeface (Inter), warm-paper-and-lilac surfaces, gradient-orange CTAs, deep-violet dark plates, semibold body emphasis, oversized sentence-case headlines with italic accents, generous space, almost no shadows, two corner radii (rounded card + full pill).

## When to invoke

- "Make this look like awin.com"
- "Awin-style deck / report / one-pager"
- "Style this in the Awin design system"
- "Affiliate / partnership-marketing platform look"

## Files to load

```html
<link rel="stylesheet" href="awn/fonts.css">
<link rel="stylesheet" href="awn/src/tokens.css">
<link rel="stylesheet" href="awn/src/components.css">
<link rel="stylesheet" href="awn/colors_and_type.css">
<body class="awn">…</body>
```

## Class vocabulary

- Layout: `.awn-container`, `.awn-grid` (set `--awn-cols: N` for column count)
- Type: `.awn-f-hero`, `.awn-f-page`, `.awn-f-large`, `.awn-f-section`, `.awn-f-card`, `.awn-f-lead`, `.awn-f-figure`, `.awn-f-emph`, `.awn-f-body`, `.awn-f-label`, `.awn-f-small`, `.awn-eyebrow`, `.awn-prose`
- Header / nav: `.awn-header`, `.awn-header__inner`, `.awn-header__bar`, `.awn-header__brand`, `.awn-nav`, `.awn-header__cta`
- Sections: `.awn-section`, `.awn-section--lilac`, `.awn-section--cream`, `.awn-section--ink`, `.awn-hero`, `.awn-hero--purple`
- Cards: `.awn-card` + `--lilac|cream|sky|orange|purple|ink`
- Stats: `.awn-stat`, `.awn-stat__value` (gradient-orange text-fill), `.awn-stat__label`
- Logos: `.awn-logos`
- Tabs: `.awn-tabs`, `.awn-tab` (use `aria-selected="true"` for the active state)
- Buttons: `.awn-btn`, `.awn-btn--gradient`, `.awn-btn--ghost`, `.awn-btn--quiet`, `.awn-btn--reverse`, `.awn-btn--sm`, `.awn-btn--lg`, `.awn-arrow`
- Tags: `.awn-tag`, `.awn-tag--solid`, `.awn-tag--orange`
- Links: `.awn-link`, `.awn-link--minimal`, `.awn-link--cta` (with the animated `→`)
- Form: `.awn-input`, `.awn-newsletter`
- Footer: `.awn-footer`

## Hard rules

1. **One typeface** - Inter - for everything. Headings 700, body 400, body emphasis 600.
2. **Sentence case** for every headline. Title Case only for proper nouns. Italicise the second half of two-part headlines.
3. **One plate hue per surface.** Don't mix lilac and cream in one section.
4. **Orange is the only loud accent** - CTAs, links, eyebrows, stat numerals. Never on broad surfaces.
5. **Purple is the holding colour** - footer, dark hero, dividers. Never on body type or buttons.
6. **No shadow on anything** except the floating header (`--awn-shadow-popover`) and the soft hover lift on cards. Use surface colour and a 1px hairline instead.
7. **Three radii.** `1rem` for cards / dropdowns, `1.5rem` for large plates, `9999px` for pills.
8. **No emoji, no SVG icon set.** The Awin fire mark plus `→` is the vocabulary. Font Awesome is acceptable inside a soft-orange circle if a small icon is genuinely needed.
9. **No backdrop-blur** except the floating header bar.
10. **Container max-width 1426px**, side padding 24px desktop and mobile, 12-col grid with 24px gutter.
11. **Use the named gradients** (`--awn-gradient-orange`, `--awn-gradient-purple`, `--awn-gradient-pulse`, `--awn-gradient-ava-glow`...). Don't compose new ones.

## Voice rules

- Friendly and capable. Short sentences. Subject-plus-verb headlines.
- Lead with the work and the number. *"Samsung +67% ROI with Awin tools"* not *"client uplift on the platform."*
- No *"world-class"*, *"leverage"*, *"ecosystem"*, *"unlock"*, *"synergy"*, *"holistic"*.
- Spaced en-dashes ( - ) for asides; smart quotes always.
- "We" for Awin, "you" for the reader, *"everyone wins bigger"* for the mutual benefit.
- British English in the wider Paidia house style; Awin's own copy is mixed but lean British by default.

## Reference

`README.md` in this folder is the canonical write-up. Read it before producing anything more elaborate than a single page. The four `preview/*.html` files (colors, type, components, brand) are the visual reference. `ui_kits/homepage/index.html` is a working homepage rebuild that shows the system end-to-end.
