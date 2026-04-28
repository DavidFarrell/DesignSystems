---
name: editorial-mono-design
description: Use this skill to generate well-branded interfaces and assets for thingsithinkithink (the Editorial Mono system), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick start

Always load CSS in this order:

```html
<link rel="stylesheet" href="fonts.css" />
<link rel="stylesheet" href="tokens.css" />
<link rel="stylesheet" href="components.css" />
```

Then put `class="v2"` on `<body>`. Use `.v2-*` classes (see `components.css`) — these are the canonical components.

## Three principles (do not violate)

1. **Structure first.** Mono labels everything before prose begins.
2. **One accent.** Vermilion `#d8543d` is the only color that raises its voice. Five places only: § section glyph, drop cap, link underline, ● published dot, prev/next chevrons.
3. **No rounding.** Every corner is square. Every rule is hairline.

## Forbidden

- Emoji, icon sets, PNG icons. The mono labels do the work.
- Drop shadows. Inner shadows. Elevation.
- Rounded corners. Anywhere.
- A fourth font.
- Vermilion fills on large areas.
- Cool blues / violets in imagery — keep warm and low-saturation.
