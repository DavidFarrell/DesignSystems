# Public Digital Design System

> *Plain language, big type, one accent of red, calm warm paper. A consultancy that looks like a quietly-confident magazine.*

This is a faithful re-creation of the visual system used on **public.digital** - the website of Public Digital, the radical-transformation consultancy. Tokens, components and fonts have been audited from the live Next.js bundle on **3 May 2026** and re-organised into the same convention used by Broadsheet, EditorialMono, OpenSwim and GOSH.

The system is intended for client-facing artefacts produced in a Public Digital house style - decks, reports, microsites, prototypes, internal tools. It is **not** an official PD asset; it is a working approximation built from the public site so deliverables can sit comfortably alongside their own materials.

---

## Sources

| Source | Path | Notes |
|---|---|---|
| Live stylesheet (audited) | `reference/original_styleguide.css` | 55 KB Tailwind-on-Next.js bundle copied verbatim from `/_next/static/css/99d0b66fe1b01b62.css`. |
| Homepage source | `reference/original_homepage.html` | Top-level page used as the structural reference. |
| Fonts | `fonts/`, `fonts.css` | **Brown** (Lineto) in 4 cuts (Regular, Italic, Bold, Bold Italic). Self-hosted woff2, copied directly from the PD bundle. |
| Tokens | `src/tokens.css` | Audited values, grouped semantically. |
| Components | `src/components.css` | `.pd-*` class implementations. |

No Figma file was available - the system is fully expressed in code and reverse-engineered from the live CSS.

> **A note on the Brown typeface.** Brown is a commercial face from Lineto. The woff2 files served by public.digital are **subsetted** for their own use under their own licence. They are bundled here only so this system can render exactly like the source for review and prototyping. **Do not redistribute** the font files, and acquire your own Lineto licence before shipping any artefact built with this system to a client.

---

## Index

```
README.md                       - this file
SKILL.md                        - agent skill manifest
fonts.css                       - @font-face declarations for Brown
fonts/                          - 4 .woff2 files (Regular, Italic, Bold, Bold Italic)
src/
  tokens.css                    - colour, type, spacing, radius, motion (canonical)
  components.css                - .pd-* component CSS
colors_and_type.css             - semantic CSS variable aliases (fg1, bg1, accent...)
reference/
  original_styleguide.css       - live stylesheet, untouched
  original_homepage.html        - homepage HTML reference
preview/                        - one-concept-per-file design system cards
ui_kits/
  homepage/                     - working PD-style homepage recreation
assets/                         - logos / wordmark
```

---

## Voice in one paragraph

Public Digital writes like a senior practitioner explaining the work over a cup of tea. The voice is **plain, concrete, slightly British, never breathless**. Sentences are short and load-bearing. Phrases like *"radical transformation"* are used because they mean something specific - "we change how an organisation operates, not just what it ships." The system never reaches for emoji, never uses three colours where one will do, and never confuses a hero plate with a billboard. The whole site reads as one calm conversation between people who have done the work and want to be useful, not impressive.

---

## CONTENT FUNDAMENTALS

### Casing

- **Headlines** - sentence case, almost without exception. *"Supporting organisations through radical transformation."* Title Case is reserved for proper nouns and PD's own product / programme names (*Test, Learn and Grow*, *Cyber Incident Grab Bag*).
- **Eyebrow labels** - `ALL CAPS, lightly tracked` (~0.04em), set in Brown bold. Used to mark a section type (`THOUGHT LEADERSHIP`, `CLIENT STORIES`, `LATEST UPDATES`) or a card chip.
- **CTA buttons** - sentence case (*Read more*, *Get in touch*, *Subscribe*). Never all-caps.
- **Body prose** - sentence case throughout, **British English** spelling (*organisation*, *behaviour*, *programme*).

### Tone

- **First-person plural in PD's voice; second-person for the reader.** "We help…", "you'll see…", never "the client" in third person.
- **Specificity is the system.** *"Delivering the UK Government's Test, Learn and Grow programme"* not *"working with central government on a delivery initiative."* Name the programme, name the client, name the outcome.
- **Quietly confident.** PD has done a lot. The site doesn't shout about it. No "world-class", no "best-in-breed", no "synergies." The track record is the voice.
- **No hype around AI, digital, transformation.** The words are used because they are accurate, not because they are fashionable. If anything the tone leans the other way - calm in a category that is usually loud.
- **End with the ask, plainly.** A subscribe form. A contact email. A book to read. Nothing dressed up as a "journey".

### Mechanics

- **Smart quotes always.** `"`/`'`, never `"`/`'`.
- **Em-dashes** for asides; en-dashes for ranges; spaced en-dashes for thought-breaks. (PD's own copy on the live site uses unspaced em-dashes inside headlines.)
- **Numbers as words for one to nine; numerals for 10 and above.**
- **Dates in long form**: "3 May 2026", not "5/3/26". British, not American.
- **Hyperlinks** are in-line, underlined with a 4px offset, and shift to **PD red** on hover. Never a different colour at rest.

### Voice exemplars (lifted from the live site)

> "Supporting organisations through radical transformation."
> "Digital Sovereignty: Choosing your Future in a Competitive World."
> "A service-led approach to improving customer outcomes, productivity, and team alignment."
> "PD selected by Bloomberg Philanthropies to help supercharge the impact of UK metro mayors."
> "Our values expressed in action and outcomes. Read them here."

### What the voice is NOT

- Not jokey, not snarky, not winking.
- **No emoji.** None.
- No "TL;DR" / "Hot take" / "thread incoming." If the reader needs a summary, write one - in a sentence.
- No "leveraging", "ecosystem", "unlock", "stakeholder", "synergy."
- No multi-step funnels disguised as journeys. The contact form is the contact form.

---

## VISUAL FOUNDATIONS

### The shape of the brand

PD is **warm off-white paper, near-black ink, oversized type, one red accent, generous white space, 32-px rounded plates of colour for client stories**. There are no shadows. The system uses two corner radii: **square** for almost everything, and **fully pill / 32-px** for the hero plates and pill chips. The page reads as a calm, well-set magazine - hierarchy comes from type weight, scale and surface colour, never from depth.

### Palette in use

| Role | Token | Hex | Where it shows up |
|---|---|---|---|
| Page paper | `--pd-paper` | `#f7f4f4` | Default page background |
| White | `--pd-white` | `#ffffff` | Story cards, inputs |
| Stone | `--pd-paper-stone` | `#edeaea` | Newsletter strip, secondary plates |
| Bone | `--pd-paper-bone` | `#e3e0e0` | Hairlines, subtle borders |
| Ink | `--pd-black` | `#2d2d2c` | All body, headings, button labels |
| Blacker | `--pd-blacker` | `#1b1b1a` | Footer, dark hero sections |
| Grey | `--pd-grey` | `#708494` | Muted UI text (card supporting copy) |
| **Signature red** | `--pd-red` | `#ea5342` | Link hover, errors, eyebrow flashes, single CTA |
| Orange | `--pd-orange` | `#ff8854` | Card plate variant |
| Yellow | `--pd-yellow` | `#ecbd2b` | Card plate variant |
| Green | `--pd-green` | `#0e7d75` | Card plate variant |
| Turquoise | `--pd-turquoise` | `#23928a` | Card plate variant |
| Sky | `--pd-sky` | `#7cc7d6` | Card plate variant |
| Ice | `--pd-ice` | `#bed1d4` | Card plate variant |
| Blue | `--pd-blue` | `#325b92` | Card plate variant |
| Pink | `--pd-pink` | `#e2bacc` | Card plate variant |
| Taupe | `--pd-taupe` | `#bdaea4` | Card plate variant |

**Use one accent per surface.** Red is the *system* accent - it appears in body links, errors, button hover states. The other nine hues are *plate* accents - one per client-story card, never blended into a gradient, never on type.

### Typography in use

- **One family does everything: Brown.** Display, body, UI chrome, button labels. The visual rhythm comes from weight (400 / 700) and size, not from family contrast.
- **Headlines are bold (700).** Body is regular (400). There is no medium weight.
- **Italics are used sparingly** - for editorial emphasis and the rare pull-quote.
- **Default body is 16px / 1.5.** Lead-in paragraphs and pull quotes step up to 32px / 45px (`.pd-f-lead`).
- **Hero headlines max out at 88px / 96px** on desktop (`.pd-f-hero`); 48px / 56px on mobile.
- **Section H2s** sit at 64px / 70px desktop, 32px / 38px mobile (`.pd-f-page`).

### Buttons - the two shapes

The system has exactly two button shapes. Don't invent a third.

1. **Solid pill** (`.pd-btn`) - black fill, white text, 700 weight, 9999px radius. This is *Get in touch* / *Read more* / form submits. **Hovers to PD red.**
2. **Ghost pill** (`.pd-btn--ghost`) - transparent fill, black border + ink text. Used as the secondary action in a pair. Hovers to a solid black fill with reverse text.

There is also `.pd-btn--reverse` for use on dark sections - white fill on the dark plate, hovers to red.

### Photography

PD photography is **documentary editorial**: real people in real working contexts (council chambers, hospital corridors, government offices, classrooms). Often slightly desaturated, never filtered to a single mood. Treated as document, not stock. **No isometric illustration. No 3D renders. No abstract gradient meshes.** When a story doesn't have a photo, a flat coloured plate from the palette stands in its place - this is structural, not decorative.

### Iconography

PD uses **almost no icons**. The site has a hamburger glyph, social marks (LinkedIn, X, RSS) in the footer, and a single right arrow `→` inside CTA pills. That is the entire vocabulary. When you need a mark, prefer a Unicode glyph (`→ · · ●`) set in Brown over an SVG icon set. **Never** add Lucide / Heroicons / Phosphor.

### Layout

- Container max-width: **1440px**.
- Container side padding: **64px** desktop, **16px** mobile.
- Grid: **12 columns**, gutter `min(2rem, 50vw / 12)`.
- Reading column tops out around **72ch** (`--pd-prose-max`).
- Vertical rhythm runs on a 4-px grid: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 96.

### Borders, corners, shadows

- **Two radii in active use**: `0` (square plates, pull-quote rule, prose) and `9999px` (pill buttons, tag chips, inputs). Hero / story cards use `32px`.
- **Hairline only** on dividers - `1px solid var(--pd-grey-rule)`. No 2px borders, no 3px borders except the 4px red rule on `.pd-prose blockquote`.
- **No shadows.** Anywhere. Hierarchy comes from surface colour and rule weight.

### Animation

Minimal. Two durations (`0.15s`, `0.20s`) on a single ease (`cubic-bezier(0.2, 0.7, 0.2, 1)`). The animated properties are **colour, background, border, text-decoration-color, opacity, and a 2px translate-Y on cards on hover**. No fades-in-on-scroll. No parallax. No springs. `prefers-reduced-motion` zeroes both durations.

### Hover

- **Buttons** - black flips to PD red.
- **Links** - text colour shifts to PD red, underline shifts with it.
- **Cards** - lift 2px on the Y axis. No shadow added.
- **Footer links** - shift from white → PD red, gain an underline.

### Transparency, blur, capsules

- **No backdrop-blur.** Anywhere.
- **No translucent capsules over imagery.** No "scrim" gradients - because there is almost never an image with text laid over it.
- **No glassmorphism.** None.

### Cards

A PD card is a **filled, 32-px-rounded plate** - either white (default) or one of the nine accent hues. Inside: small eyebrow label → headline (`.pd-f-small-hdr`) → one or two lines of supporting copy (`--pd-grey` on white, inherit-with-opacity on coloured plates). Cards are content, not buttons - the entire plate is clickable but reads as a calm rectangle, not a UI control.

---

## How to use this system

```html
<link rel="stylesheet" href="pd/fonts.css">
<link rel="stylesheet" href="pd/src/tokens.css">
<link rel="stylesheet" href="pd/src/components.css">
<link rel="stylesheet" href="pd/colors_and_type.css">

<body class="pd">
  <header class="pd-header">
    <div class="pd-container pd-header__inner">
      <a class="pd-header__brand" href="/">public digital</a>
      <nav class="pd-nav">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#thinking">Thinking</a>
        <a href="#contact" class="pd-btn">Get in touch</a>
      </nav>
    </div>
  </header>

  <section class="pd-hero pd-container">
    <h1>Supporting organisations through radical transformation.</h1>
    <p>We help public-interest organisations build the capabilities they need to thrive in the internet era.</p>
  </section>
</body>
```

## Do / don't

- **Do** keep one signature accent (PD red) and one plate accent per surface.
- **Do** lead with sentence-case headlines; reserve Title Case for proper nouns.
- **Do** use Brown for everything - body, UI, headlines.
- **Do** keep hero typography genuinely large (88px desktop). Half-measure size is what makes a PD-style page look small.
- **Don't** mix two plate accents in one section.
- **Don't** apply drop shadows. Use a deeper paper tier or a hairline rule instead.
- **Don't** add an icon set. Brown plus a `→` is the system.
- **Don't** ship the bundled woff2 files in client work without a Lineto Brown licence.
