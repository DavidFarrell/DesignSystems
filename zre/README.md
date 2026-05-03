# Zinc Real Estate (ZRE) Design System

> *A discreet, expensively-quiet design system for a real-estate asset manager. Forest green on cream, classical serif paired with a tightly-set wide display, almost no curves, almost no colour.*

This is a faithful re-creation of the visual system used on **zincre.com** - the website of Zinc Real Estate, a real-estate investment and asset-management firm. Tokens, components and fonts have been audited from the live single-page-app bundle on **3 May 2026** and re-organised into the same convention used by Broadsheet, EditorialMono, OpenSwim, GOSH and pd.

The system is intended for client-facing artefacts produced for ZINC RE - decks, IM teasers, internal AI-enablement materials, prototypes, slides. It is **not** an official ZRE asset; it is a working approximation built from the public site so deliverables can sit comfortably alongside their own materials.

---

## Sources

| Source | Path | Notes |
|---|---|---|
| Live stylesheet (audited) | `reference/original_styleguide.css` | 60 KB compiled bundle copied verbatim from `/css/app.main.85a6ab3cb932ecfb8357.bundle.css`. Mostly Fancybox/Swiper plumbing - the brand-relevant rules are concentrated in `@font-face` blocks and a small palette. |
| Homepage source | `reference/original_homepage.html` | The shipped index. The site is a Vue/SPA so the document is mostly a `<div id="app">` shell - real content lives in the JS bundle, scraped directly. |
| Fonts | `fonts/`, `fonts.css` | **Reservation Wide** (display, Regular + Bold) and **Plantin** (serif, Light + Roman + Semibold). Self-hosted .ttf / .otf, copied directly from the ZRE asset folder. |
| Tokens | `src/tokens.css` | Audited values, grouped semantically. |
| Components | `src/components.css` | `.zre-*` class implementations. |

No Figma file was available - the system is reverse-engineered from the live CSS, the JS-bundle content, and screenshots of the rendered site.

> **A note on the type families.** Plantin is a Monotype face; Reservation is a Latinotype face. Both are commercial. The files bundled here are taken directly from zincre.com's live asset folder for parity with the source. **Do not redistribute** the font files, and acquire your own licence before shipping any artefact built with this system to a client. (David has an active engagement with ZRE; check whether their own font licence covers your derivative work before producing anything for distribution.)

---

## Index

```
README.md                       - this file
SKILL.md                        - agent skill manifest
fonts.css                       - @font-face declarations
fonts/                          - 5 type files (Reservation Wide x2, Plantin x3)
src/
  tokens.css                    - colour, type, spacing, radius, motion (canonical)
  components.css                - .zre-* component CSS
colors_and_type.css             - semantic CSS variable aliases (fg1, bg1, accent...)
reference/
  original_styleguide.css       - live stylesheet, untouched
  original_homepage.html        - homepage SPA shell
preview/                        - one-concept-per-file design system cards
ui_kits/
  homepage/                     - working ZRE-style homepage recreation
assets/                         - logos / wordmark
```

---

## Voice in one paragraph

ZRE speaks like a private bank's letter to its oldest client. Sentences are short, declarative, never decorative. The verbs are *deliver*, *manage*, *partner*, *commit* - never *unlock*, *empower*, *transform*. Numbers do most of the work: *£600m AuM*, *over 35 years' experience*, *9 offices*. The site never raises its voice and never asks for anything except a contact form. The whole experience is a long, confident exhale - dark forest green, cream paper, and one big serif headline at a time.

---

## CONTENT FUNDAMENTALS

### Casing

- **Headlines** - Title Case set in **Reservation Wide Bold**, often a single declarative sentence. *"At Zinc, we are driven to deliver exceptional returns for our valued investors."*
- **Eyebrow labels** - `ALL CAPS, WIDELY TRACKED` (~0.18em), set in Reservation Wide. Used for section names (`INVESTMENTS`, `OUR APPROACH`, `LEADERSHIP`) and meta strips.
- **Buttons** - `ALL CAPS, TRACKED`, in Reservation Wide. *"VIEW OUR INVESTMENTS"*, *"CONTACT US"*. Never sentence-case.
- **Body prose** - sentence case, set in **Plantin Light** at 18px / 1.7. British English spelling.
- **Person names** - `ALL CAPS` in Reservation Wide; their role beneath in *italic Plantin*. (*BOB VAN DEN BICHELAER* / *Partner | CEO*.)

### Tone

- **First-person plural in ZRE's voice; second-person reserved for the contact form.** "We pair a dynamic capital allocation framework with committed capital, operational agility and empowered teams."
- **Specificity is the system.** Name the asset class, the geography, the AuM. Real-estate readers buy specifics, not adjectives.
- **Quietly assertive.** *"Driven to deliver exceptional returns."* The tone is confident enough to use the word *exceptional* exactly once, not five times.
- **No marketing-speak.** No "synergies", no "ecosystem", no "unlock value", no "best-in-class". The category does this badly; ZRE deliberately doesn't.
- **End with a phone number, an address, a name.** The contact section is contact, not capture.

### Mechanics

- **Smart quotes always.** `"`/`'`, never `"`/`'`.
- **Em-dashes** for asides; en-dashes for ranges.
- **Numbers as numerals when load-bearing**: *£600m*, *9 offices*, *35 years*. Words for one-to-nine in flowing prose only.
- **Currency** - *£*, *€*, *$* before the figure with no space. *£600m* not *£ 600m*.
- **Hyperlinks** are subtle: a 1-px underline at 6-px offset, in the forest green, never blue.

### Voice exemplars (lifted from the live site)

> "At Zinc, we are driven to deliver exceptional returns for our valued investors. Committed to a relentless pursuit of excellence."
> "We pair a dynamic capital allocation framework with committed capital, operational agility and empowered teams."
> "Assets under management"
> "View our investments →"
> "About ZINC Real Estate"
> "Contact ZINC Real Estate"

### What the voice is NOT

- Not modern-startup, not breezy, not exclamation-led.
- **No emoji.** None.
- No "Get started", no "Sign up", no "Learn more". The CTA verbs are *VIEW*, *CONTACT*, *DOWNLOAD*.
- No abbreviations of the firm name in copy: it's *ZINC Real Estate*, not *Zinc RE*. (The folder name `zre` is internal shorthand only.)

---

## VISUAL FOUNDATIONS

### The shape of the brand

ZRE is **dark forest green, cream paper, classical serif body, wide-set display headlines, almost no rounding, no shadows, generous white space**. Photography is full-bleed architectural and grayscale-portrait. The hero is a deep-green plate with a single short Title-Case sentence. The page reads like a private-bank brochure - everything tasteful, nothing loud. Hierarchy comes from type pairing (Reservation Wide vs Plantin) and from surface colour (cream vs forest), never from depth.

### Palette in use

| Role | Token | Hex | Where it shows up |
|---|---|---|---|
| Page paper | `--zre-paper` | `#f8f8f8` | Default page background |
| White | `--zre-white` | `#ffffff` | Cards on cream, form panels |
| Bone | `--zre-bone` | `#e5e3df` | Secondary plate, image placeholders |
| Stone | `--zre-stone` | `#ededed` | Hairline rule alternative |
| Hairline | `--zre-rule` | `#d3d1d3` | All dividers |
| **Forest (brand)** | `--zre-forest` | `#0a241a` | Buttons, headings, primary brand surface |
| Forest deep | `--zre-forest-deep` | `#080f0f` | Hero, footer, deepest reverse-out |
| Forest mid | `--zre-forest-mid` | `#0d3123` | Variant darks (modal, secondary section) |
| Forest shade | `--zre-forest-shade` | `#091510` | Between deep and forest |
| Ink | `--zre-ink` | `#111111` | Body text on paper |
| Grey | `--zre-grey` | `#374151` | Muted prose |
| Grey soft | `--zre-grey-soft` | `#9ca3af` | Footer eyebrow text |
| Grey mute | `--zre-grey-mute` | `#979797` | Stat labels, captions |

**There is no second brand colour.** The forest-green family is the entire palette. If a chart needs ranking, use opacity stops or grey - never introduce a new hue.

### Typography in use

Two families, no more. The discipline is the design.

- **Reservation Wide** - display only. Wordmark, headlines, eyebrows, button labels, person names, stat values, nav. Set tight (-0.005em on display, +0.18em as small-caps tracking on labels). Bold for everything that matters; Regular reserved for nav and ambient labels.
- **Plantin** - body, lead paragraphs, italic for person roles and pull quotes. Light is the default body weight - the page is meant to read as a printed brochure, not a UI screen.
- **Default body is 18px / 1.7** in Plantin Light. Headlines step from 30 → 48 → 60 → 72px+.
- **No third family.** No mono. No geometric sans. The two-family pairing *is* the system.

### Buttons - the two shapes

The system has exactly two button shapes. Both are sharp-cornered (or near-square at 2px).

1. **Solid** (`.zre-btn`) - forest fill, cream text, wide-tracked uppercase Reservation. *VIEW OUR INVESTMENTS*. Hovers to the deeper forest tone.
2. **Ghost** (`.zre-btn--ghost`) - transparent fill, forest border + text. Hovers to the solid form.

`.zre-btn--reverse` and `.zre-btn--ghost-reverse` are the variants for use on the dark forest sections.

### Photography

ZRE photography is **architectural and editorial**: full-bleed building exteriors at the magic hour, interiors in soft natural light, portraiture of leadership in **black-and-white**. The grayscale portrait is a system rule, not a stylistic option - it forces visual unity across a leadership grid where headshots come from a dozen sources. Imagery is never decoratively cropped, never has an overlay text other than the hero's, and is never tinted to a brand colour. Surface colour does the brand work; photography stays neutral.

### Iconography

ZRE uses **almost no icons**. The site's only marks are a hamburger menu glyph, social glyphs in the footer, and a right-arrow `→` inside the eyebrow-style "Read more" link. That is the entire vocabulary. When you need a mark, prefer a Unicode glyph (`→ · ●`) set in Reservation. **Never** add Lucide / Heroicons / Phosphor.

### Layout

- Container max-width: **1320px**.
- Container side padding: **56px** desktop, **20px** mobile.
- Grid: **12 columns**, gutter **28px**.
- Reading column tops out around **68ch**.
- Vertical rhythm runs on a 4-px grid: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128.
- Section padding is generous: **128px** vertical on desktop hero / leadership / portfolio sections.

### Borders, corners, shadows

- **The system is square.** `--zre-radius-0: 0`. The micro-radius `--zre-radius-sm: 2px` is used only on buttons and inputs to soften the laser-cut edge.
- **Hairline only** on dividers - `1px solid var(--zre-rule)`. On dark surfaces, `rgba(255,255,255,0.18)`.
- **No shadows.** Anywhere. Layering uses the deeper forest tier, the bone tier, or a hairline.

### Animation

Minimal. Two durations (`0.15s`, `0.30s`) on a single ease (`cubic-bezier(0.2, 0.7, 0.2, 1)`). Animated properties are **opacity, colour, background, image filter on hover, and a 4-px translate on the read-more arrow**. The hero may carry a slow Ken-Burns on the background image (`transform: scale(1.05)` over 12s) - that is the only motion on the page beyond hover. `prefers-reduced-motion` zeroes both durations.

### Hover

- **Buttons** - forest deepens to `--zre-forest-deep`.
- **Links** - opacity drops to 0.7. Underline stays.
- **Read-more arrow** - the `→` translates 4px to the right.
- **Asset / portfolio cards** - the cover image dims to ~92% brightness. No lift, no shadow.
- **Nav links** - opacity drops to 0.7.

### Transparency, blur

- **The header uses a soft backdrop-blur** when sticky over content - `saturate(140%) blur(8px)` on a 92%-opacity paper plate. This is the only blur in the system.
- **No glassmorphism panels.** No translucent capsules over imagery.

### Cards

A ZRE card is a **flat, square, hairline-bordered white plate on cream**, or - more often - no card at all. The page lays out content directly on the page surface, separated by space and rules, not by container. When a card is needed (e.g. an investment-card grid), it is borderless: image plate on top, eyebrow + title + body underneath, separated only by a thin top rule.

---

## How to use this system

```html
<link rel="stylesheet" href="zre/fonts.css">
<link rel="stylesheet" href="zre/src/tokens.css">
<link rel="stylesheet" href="zre/src/components.css">
<link rel="stylesheet" href="zre/colors_and_type.css">

<body class="zre">
  <header class="zre-header">
    <div class="zre-container zre-header__inner">
      <a class="zre-header__brand" href="/">ZINC RE</a>
      <nav class="zre-nav">
        <a href="#about">About</a>
        <a href="#investments">Investments</a>
        <a href="#approach">Our Approach</a>
        <a href="#people">People</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <section class="zre-hero">
    <div class="zre-container zre-hero__inner">
      <span class="zre-eyebrow zre-eyebrow--reverse">A Real Estate Asset Manager</span>
      <h1>Driven to deliver exceptional returns for our valued investors.</h1>
      <p>Committed to a relentless pursuit of excellence.</p>
      <a href="#investments" class="zre-btn zre-btn--reverse">View our investments</a>
    </div>
  </section>
</body>
```

## Do / don't

- **Do** keep the palette to forest green + cream + grey. One brand colour family is the brand.
- **Do** lead every section with a Title-Case Reservation headline.
- **Do** desaturate portrait photography to true black-and-white.
- **Do** keep buttons all-caps and tracked. They are signage, not chat.
- **Don't** introduce a second accent colour. Use opacity or grey instead.
- **Don't** apply drop shadows. Use a hairline rule or a deeper green tier.
- **Don't** mix Plantin with another serif, or Reservation with another display.
- **Don't** ship the bundled font files in client work without the appropriate Plantin / Reservation licence.
