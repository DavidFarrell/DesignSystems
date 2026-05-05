# Awin Design System

> *A friendly partnership platform with two voices: gradient orange that moves, deep violet that holds.*

This is a faithful re-creation of the visual system used on **awin.com** - the website of Awin, the global affiliate / partnership marketing platform. Tokens, components and fonts have been audited from the live Tailwind v4 stylesheet bundle on **5 May 2026** and re-organised into the same convention used by Broadsheet, EditorialMono, OpenSwim, GOSH, pd and zre.

The system is intended for client-facing artefacts produced in an Awin house style - decks, reports, microsites, prototypes, internal tools, RFP responses. It is **not** an official Awin asset; it is a working approximation built from the public site so deliverables can sit comfortably alongside their own materials.

---

## Sources

| Source | Path | Notes |
|---|---|---|
| Live stylesheet (audited) | `reference/original_styleguide.css` | 156 KB Tailwind v4 bundle copied verbatim from `/assets/global2.css`. Authored entirely in OKLCH. |
| Homepage source | `reference/original_homepage.html` | Top-level page used as the structural reference. |
| Fonts | `fonts/`, `fonts.css` | **Inter** (Rasmus Andersson, OFL) in 6 cuts: 200 / 300 / 400 / 500 / 600 / 700. Self-hosted woff2, copied directly from the Awin bundle. |
| Tokens | `src/tokens.css` | Audited values, grouped semantically. OKLCH preserved as canonical. |
| Components | `src/components.css` | `.awn-*` class implementations. |

No Figma file was available - the system is fully expressed in code and reverse-engineered from the live CSS.

> **A note on Inter.** Inter is open-source under the SIL Open Font Licence (OFL), so the bundled woff2 files can travel with this system without restriction. Keep the licence file with the fonts if you redistribute them in a build artefact.

> **A note on OKLCH.** Awin's source CSS is authored in OKLCH (a perceptually-uniform colour space). The OKLCH values in `tokens.css` are canonical - they round-trip without loss in any modern browser. The hex equivalents annotated in comments are eyeball approximations for designers using legacy tools.

---

## Index

```
README.md                       - this file
SKILL.md                        - agent skill manifest
fonts.css                       - @font-face declarations for Inter
fonts/                          - 6 .woff2 files (200 / 300 / 400 / 500 / 600 / 700)
src/
  tokens.css                    - colour, type, spacing, radius, motion, shadows (canonical)
  components.css                - .awn-* component CSS
colors_and_type.css             - semantic CSS variable aliases (fg1, bg1, accent...)
reference/
  original_styleguide.css       - live stylesheet, untouched
  original_homepage.html        - homepage HTML reference
preview/                        - one-concept-per-file design system cards
ui_kits/
  homepage/                     - working Awin-style homepage recreation
assets/                         - logos / wordmark
```

---

## Voice in one paragraph

Awin's voice is **capable and friendly**. Sentences are short. Headlines lean on subject-plus-verb (*"Your growth, your way"*; *"The right connections change everything"*; *"Think global, boost local, succeed everywhere"*). The site uses informal-but-direct language: *"Start growing"*, *"Tell us who you are"*, *"Join our global affiliate platform"*. The tone never gets shouty about AI, growth or transformation - claims are concrete and number-backed (*30K+ brands, 1M+ partners, £15B+ revenue, 25+ years*) rather than aspirational. When the company speaks about itself it says **"we"**, when it speaks to the reader it says **"you"**, and when it summarises the mutual benefit it says *"everyone wins bigger."*

---

## CONTENT FUNDAMENTALS

### Casing

- **Headlines** - sentence case throughout. *"Your growth, your way."* Title Case is reserved for proper nouns and product / programme names.
- **Italic emphasis** - the second half of a two-part headline is often italicised to soften the landing (*"Your growth, **your way.**"*).
- **Eyebrow labels** - `ALL CAPS, lightly tracked` (~0.04em), set in Inter semibold. Mark the section type (`GET STARTED`, `WHY CHOOSE AWIN`, `CUSTOMER STORIES`).
- **CTA buttons** - sentence case (*Start growing*, *Read full story*, *Subscribe*, *Get started*). Never all-caps.
- **Body prose** - sentence case throughout, **British English** spelling (*organisation*, *behaviour*, *programme*) - though Awin's own copy uses American spelling in places.

### Tone

- **First-person plural in Awin's voice; second-person for the reader.** *"We help…"*, *"you'll see…"*.
- **Specificity is the system.** *"Samsung increases affiliate marketing ROI by +67% with Awin tools"* not *"some clients see uplift."* Name the brand, name the metric, name the outcome.
- **Quietly confident.** No *"world-class"*, no *"best-in-breed"*, no *"synergies"*. The track record is the voice.
- **Number-backed.** *30K+ brands, 1M+ partners, £15B+ revenue, +67%, +404%, 14 countries.* Specific numerals do the heavy lifting.
- **End with the ask, plainly.** A subscribe form. A *Start growing* CTA. A *Read full story* link. No multi-step funnels disguised as journeys.

### Mechanics

- **Smart quotes always.** `"`/`'`, never `"`/`'`.
- **Spaced en-dashes** for thought-breaks ( - ), not em-dashes. (Both are technically valid; awn follows the global Paidia house style.)
- **Numbers as `30K+`, `1M+`, `£15B+`** in stat callouts. Spell out small whole numbers in body prose; numerals from 10 up.
- **Dates in long form**: *"5 May 2026"*, not *"5/5/26"*. British, not American.
- **Hyperlinks** are inline, semibold, underlined with a 3px offset, and shift to `--awn-orange-600` on hover.

### What the voice is NOT

- Not jokey, not winking. Friendly, but professional.
- **No emoji.** None.
- No *"TL;DR"*, *"hot take"*, *"thread incoming"*, *"the unlock"*, *"lands hard"*. If the reader needs a summary, write one.
- No *"leveraging"*, *"ecosystem"*, *"synergy"*, *"holistic"*.

---

## VISUAL FOUNDATIONS

### The shape of the brand

Awin is **near-white-and-lilac surfaces, oversized italic-accented headlines, gradient-orange CTAs, deep violet for footers and dividers, and a single floating pill header that lets the page breathe**. Pill-shaped everything. Almost no shadows (the floating header is the one named exception). Two corner radii in active use: `1rem` for cards and `9999px` for buttons / chips / nav bar. The page reads as a calm, friendly platform - hierarchy comes from semibold weight and gradient fills, never from drop shadows or colourful strokes.

### Palette in use

The full palette lives in `preview/colors.html`. Key tokens:

| Role | Token | Approx. hex | Where it shows up |
|---|---|---|---|
| Page paper | `--awn-white` | `#ffffff` | Default page background |
| Default tertiary surface | `--awn-lilac-50` | `~#f8f4fa` | Section breaks, dropdown bg, lilac plates |
| Hover lilac | `--awn-lilac` | `~#f1eaf5` | Hover state on lilac surfaces |
| Active lilac | `--awn-lilac-alt` | `~#dfd1ea` | Pressed / active state |
| Warm cream tint | `--awn-soft-orange` | `~#fbf2e9` | Secondary warm surface |
| Body / heading ink | `--awn-text` | `~#525252` | All body type. Warm dark grey, **never pure black**. |
| Secondary ink | `--awn-medium` | `~#7a7a7a` | Supporting copy on cards |
| **Signature orange** | `--awn-orange-default` | `~#ff5d2b` | CTAs, links, eyebrows, stat numerals |
| Active orange | `--awn-orange-600` | `~#e1411b` | Pressed / hover |
| **Brand violet** | `--awn-purple-solid` | `~#3a1d8b` | Footer, section dividers, dark hero |
| Lilac on dark | `--awn-vodka` | `~#bba2cb` | Footer headers, chips on dark |

**Use orange as accent, not surface.** Orange is the *signal* colour - it appears on CTAs, body links, eyebrows, and stat numerals. Purple is the *holding* colour - footer, alt-hero, dark dividers. The two never share a surface.

### Signature gradients

Awin's brand has six named gradients. Use the tokens, don't compose new ones:

- `--awn-gradient-orange` - the primary CTA gradient (orange → red-orange).
- `--awn-gradient-orange-hover` / `--awn-gradient-orange-active` - hover and pressed states.
- `--awn-gradient-pulse` - reserved for tooling / "live" moments.
- `--awn-gradient-purple` / `--awn-gradient-flow` - dark hero plates, divider sections.
- `--awn-gradient-lilac` - subtle wash on tertiary surfaces.
- `--awn-gradient-ava-glow` - reserved for AI-assistant moments (Awin's "Ava").

### Typography in use

- **One family does everything: Inter.** Display, body, UI chrome, button labels. Hierarchy comes from weight (400 / 500 / 600 / 700) and size, not from family contrast.
- **Headlines are bold (700).** Body emphasis lives in semibold (600), regular body is 400. Light (300) and ExtraLight (200) are loaded but rarely used.
- **Italics are used sparingly** - usually for the second half of a headline (*"Your growth, **your way.**"*).
- **Default body is 16px / 1.5.** Lead-in paragraphs step up to 20px (`.awn-f-lead`).
- **Hero headlines max out at 4.5rem / 72px** on desktop (`.awn-f-hero`); 2.5rem on mobile.
- **Section H2s** sit at 2.375rem desktop (`.awn-f-page`).
- **Stat figures** use 3rem (48px), bold, with the orange gradient text-fill (`.awn-stat__value`).

### Buttons - the four variants

The system has exactly four button variants. Don't invent a fifth.

1. **Solid orange pill** (`.awn-btn`) - the everyday primary. Solid orange fill, white text, 600 weight, pill radius. Hovers to deeper orange (`--awn-orange-600`).
2. **Gradient pill** (`.awn-btn.awn-btn--gradient`) - the showcase variant. Used on the homepage hero CTA, the floating header CTA, and any moment where the brand should sing. Hovers to `--awn-gradient-orange-hover`.
3. **Ghost pill** (`.awn-btn--ghost`) - transparent fill, orange ring + orange text. The secondary action in a pair. Hovers to a soft-orange fill.
4. **Quiet pill** (`.awn-btn--quiet`) - lilac-50 fill, ink text. Used in dropdowns and dense UI - the "calm" button.

Plus `.awn-btn--reverse` for use on dark sections (white fill on the purple plate, hovers to soft-orange) and `.awn-btn--sm` / `.awn-btn--lg` for size variants.

### Photography

Awin photography is **product-and-person editorial** - real product shots, real customer logos, partnership-themed lifestyle imagery. The signature visual element of the homepage is the **animated orbit / sphere illustration** in the hero. **No isometric illustration. No 3D AI-shiny renders. No abstract gradient meshes** beyond the named brand gradients. When a card doesn't have a photo, a flat coloured plate (lilac-50, soft-orange, or one of the gradient plates) stands in - this is structural, not decorative.

### Iconography

Awin uses **almost no icons**. The system has the Awin fire-mark glyph (▲ in a wordmark lockup), a small set of social marks (LinkedIn, X, RSS) in the footer, and a single right arrow `→` inside CTA pills and inline links. Beyond that, when an icon is required, prefer Font Awesome's regular weight at small sizes inside a soft-orange circle (`.pill .pill-icon` shows the pattern). **Never** add Lucide / Heroicons / Phosphor as a system-wide set.

### Layout

- Container max-width: **1426px** (`--container-xl` from the source).
- Container side padding: **24px** desktop and mobile (the live site uses a tighter padding than most consultancy systems).
- Grid: **12 columns**, 24px gutter (`--awn-grid-gap`).
- Reading column tops out around **68ch** (`--awn-prose-max`).
- Header: **floating pill** sticky at top (`60px` tall on desktop, sits 56px from the viewport top with 24px side margin).
- Vertical rhythm runs on a 4-px grid: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96.

### Borders, corners, shadows

- **Three radii in active use**: `1rem` (cards, dropdowns), `1.5rem` (newsletter strip, large plates), `9999px` (buttons, tags, header bar, nav chips, inputs).
- **Hairline only** on dividers - `1px solid var(--awn-grey-100)` or `--awn-lilac-alt`.
- **One named shadow** - `--awn-shadow-popover` on the floating header bar. Cards get a softer `--awn-shadow-card` only on hover.
- **No shadow on buttons.** Hierarchy comes from gradient fill, not depth.

### Backdrop blur

- **Used on the floating header bar** (`--awn-blur-xxs` = 4px) so the page beneath the bar shows through.
- Not used elsewhere. **No glassmorphism panels.** No translucent capsules over imagery.

### Animation

Minimal. Three durations (`0.15s`, `0.20s`, `0.40s`) on a single ease (`cubic-bezier(0.4, 0, 0.2, 1)`). The animated properties are colour, background, border, transform (translate-Y on cards, scale on press), and the hero orbit illustration. `prefers-reduced-motion` zeroes all three durations.

### Hover

- **Solid buttons** - orange flips to orange-600.
- **Gradient buttons** - swap to the hover gradient.
- **Links** - colour shifts to orange-600.
- **Cards** - lift 2px on the Y axis, gain a soft shadow, border darkens to `--awn-american-silver`.
- **Inline CTA links** (`→`) - the arrow translates 4px to the right.
- **Footer links** - white shifts to vodka lilac.

### Cards

An Awin card is a **filled, 16-px-rounded plate** with a 1px hairline border - either white (default), `--awn-lilac-50`, `--awn-soft-orange`, or one of the gradient plates. Inside: small eyebrow label → headline (`.awn-f-card`) → one or two lines of supporting copy (`--awn-medium` on white, inherit-with-opacity on coloured plates) → an optional inline CTA link with a `→`. Cards are content, not buttons - the entire plate is clickable but reads as a calm rectangle.

---

## How to use this system

```html
<link rel="stylesheet" href="awn/fonts.css">
<link rel="stylesheet" href="awn/src/tokens.css">
<link rel="stylesheet" href="awn/src/components.css">
<link rel="stylesheet" href="awn/colors_and_type.css">

<body class="awn">
  <header class="awn-header">
    <div class="awn-header__inner">
      <div class="awn-header__bar">
        <a class="awn-header__brand" href="/">awin</a>
        <nav class="awn-nav">
          <a href="#solutions">Solutions</a>
          <a href="#partners">Partners</a>
          <a href="#resources">Resources</a>
        </nav>
        <div class="awn-header__cta">
          <a class="awn-link--minimal" href="#">Sign in</a>
          <a class="awn-btn awn-btn--gradient awn-btn--sm" href="#">Start growing</a>
        </div>
      </div>
    </div>
  </header>

  <section class="awn-hero">
    <div class="awn-container">
      <h1>Your growth, <em>your way.</em></h1>
      <p>Connect with 30K+ trusted brands and 1M+ approved partners.</p>
      <a class="awn-btn" href="#start">Start growing</a>
    </div>
  </section>
</body>
```

A complete working example is at `ui_kits/homepage/index.html`.

## Do / don't

- **Do** keep one signature accent (Awin orange) and one plate hue per surface.
- **Do** lead with sentence-case headlines; reserve Title Case for proper nouns.
- **Do** use Inter for everything - body, UI, headlines.
- **Do** keep hero typography genuinely large (4.5rem desktop). Half-measure size is what makes an Awin-style page look small.
- **Do** trust semibold (600) for body emphasis - it's stronger than colour for in-prose lift.
- **Don't** put orange on broad surfaces. It's an accent, not a wall colour.
- **Don't** mix gradient-orange and gradient-purple in one section - pick one voice per surface.
- **Don't** apply drop shadows to anything except the floating header (and the soft hover lift on cards). Use a deeper paper tier or a hairline rule instead.
- **Don't** add an icon set system-wide. The fire wordmark plus `→` is the vocabulary.
- **Don't** use Title Case for headlines. Sentence case throughout.
