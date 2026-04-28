# UI Kit — The Broadsheet Blog

This UI kit recreates **thingsithinkithink** — the personal blog the design system is built for.

## Files

- `index.html` — interactive prototype. Three "screens": index (3-col broadsheet), post (single-column chapter), about (frontispiece). Click chapter cards on the index to navigate to the post.
- `Frame.jsx` — the engraved double-frame wrapper.
- `Masthead.jsx` — sub-line + rule + chapter row.
- `Title.jsx` — title, dek, byline.
- `Plate.jsx` — sepia-tinted framed image.
- `Motto.jsx` — oxblood ornament-bracketed label.
- `Body.jsx` — single-column prose with drop cap.
- `Headings.jsx` — h2 (bracketed by rules with leaf glyphs) and h3 (em-dash bracketed).
- `EndMark.jsx` — chapter close ornament.
- `IndexCard.jsx` — broadsheet 3-col post listing entry.
- `Nav.jsx` — top tab bar to switch screens.
- `App.jsx` — wires it all together.

## Component coverage

| Surface | Components used |
|---|---|
| Index (broadsheet) | `Frame · Masthead · Nav · Broadsheet 3-col of IndexCard` |
| Post (chapter) | `Frame · Masthead · Nav · Title · Plate · Motto · Body · H2 · H3 · Quote · CodeFrame · EndMark` |
| About (frontispiece) | `Frame · Masthead · Nav · Title · Italic dedication · Plate (author) · Colophon` |
