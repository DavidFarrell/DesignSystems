---
name: zre-design-system
description: Use this skill when the user asks to build, design or restyle anything "in the ZINC Real Estate style", "ZRE style", "zincre.com style", or asks for an artefact that should sit comfortably next to zincre.com - decks for ZINC RE, IM teasers, AI-enablement materials for the ZINC team, prototypes, internal tools, or any client-facing slides for a discreet real-estate asset manager voice.
---

# Zinc Real Estate Design System

A faithful re-creation of zincre.com's visual system. Two type families (Reservation Wide for display + UI labels, Plantin for body), forest-green / cream palette with no second brand colour, square corners, hairline rules, no shadows, oversized Title-Case headlines, generous space, grayscale portraits.

## When to invoke

- "ZINC style deck"
- "ZRE-style report / one-pager / IM teaser"
- "Style this in the Zinc Real Estate design system"
- "Make this look like zincre.com"
- Anything where David is producing materials for his ZINC RE engagement (see `obsidian_vault/.../2026 Projects/2026_04 ZINC RE/`).

## Files to load

```html
<link rel="stylesheet" href="zre/fonts.css">
<link rel="stylesheet" href="zre/src/tokens.css">
<link rel="stylesheet" href="zre/src/components.css">
<link rel="stylesheet" href="zre/colors_and_type.css">
<body class="zre">…</body>
```

## Class vocabulary

- Layout: `.zre-container`, `.zre-grid` (set `--zre-cols: N` for column count)
- Type: `.zre-display`, `.zre-serif`, `.zre-eyebrow`, `.zre-eyebrow--reverse`, `.zre-lead`
- Header / nav: `.zre-header`, `.zre-header--dark`, `.zre-header__inner`, `.zre-header__brand`, `.zre-nav`
- Hero: `.zre-hero`, `.zre-hero__inner`
- Sections: `.zre-section`, `.zre-section--tight`, `.zre-section--dark`, `.zre-section--forest`, `.zre-section--bone`, `.zre-section__lead`
- Stats: `.zre-stat`, `.zre-stat--reverse`, `.zre-stat__value`, `.zre-stat__label`
- Asset cards: `.zre-asset`, `.zre-asset__plate`, `.zre-asset__meta`, `.zre-asset__loc`, `.zre-asset__title`, `.zre-asset__desc`
- People: `.zre-person`, `.zre-person__photo`, `.zre-person__name`, `.zre-person__role`
- Quote: `.zre-quote`
- Card: `.zre-card`
- Form: `.zre-input`
- Buttons: `.zre-btn`, `.zre-btn--ghost`, `.zre-btn--reverse`, `.zre-btn--ghost-reverse`
- Links: `.zre-link`, `.zre-link--arrow`
- Footer: `.zre-footer`, `.zre-footer__rule`
- Wordmark: `.zre-wordmark`, `.zre-wordmark--lg`

## Hard rules

1. **Two families** - Reservation Wide (display, all-caps labels) + Plantin (body, italic accents). No third family.
2. **One brand colour family** - forest green. Never introduce a second hue.
3. **Title Case** for headlines; **ALL CAPS, tracked** for eyebrows / buttons / nav / person names.
4. **Square corners.** 2px max micro-radius on inputs / buttons. No 8/12/16/32px rounding.
5. **No shadows.** Hairline rules and deeper green tiers do all the layering.
6. **Grayscale portraits.** Always.
7. **No emoji, no SVG icon set.** Right-arrow `→` is the entire iconographic vocabulary.
8. **Container max-width 1320px**, side padding 56px desktop / 20px mobile, 12-col grid, 28px gutter.

## Voice rules

- Title Case headlines, sentence-case body, British English.
- Short declarative sentences. Numbers do the heavy lifting.
- *Driven*, *deliver*, *manage*, *partner*, *commit*. Never *unlock*, *synergy*, *ecosystem*.
- The firm is *ZINC Real Estate*. The folder shorthand `zre` does not appear in copy.

## Reference

`README.md` in this folder is the canonical write-up. Read it before producing anything more elaborate than a single page. The original CSS bundle and homepage shell live in `reference/`.
