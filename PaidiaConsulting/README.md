# Paidia Consulting — Design Systems

Seven design systems from the May 2026 Paidia website redesign, packaged so you can grab any one of them for later use. Originally produced as React/Babel prototypes via Claude Design (claude.ai/design); preserved here as runnable HTML so the systems stay browsable without a build step.

The four "Brutalist Editorial" takes share DNA — bold type, max contrast, editorial energy. The three "Manifesto Poster" takes share DNA — italic Fraunces display, warm cream paper, asymmetric blocks of colour.

---

## Quick start

```bash
cd ~/projects/DesignSystems/PaidiaConsulting
open index.html                       # the landing page (links to all 7 systems)
open Paidia-Design-Systems.html       # the master spec sheet — palettes / type scale / components / rules-of-use for all 8
open Paidia-Redesign.html             # the original 10-direction canvas (with Tweaks panel)
open systems/A1-Tabloid/example.html  # one system rendered as a full page
```

Everything is static HTML + React/Babel via CDN. No build, no install. Open in any modern browser.

---

## What's in here

```
PaidiaConsulting/
├── README.md                       — this file
├── index.html                      — landing page: 7 cards, click through to each system
├── Paidia-Design-Systems.html      — master spec: 8 systems on one long scroll (palette / type / components / motifs / do-don't)
├── Paidia-Redesign.html            — full 10-direction canvas with Tweaks panel (accent colours, headline variants, density, motifs)
├── chats/
│   └── chat1.md                    — original design conversation transcript (read for intent)
├── shared/                         — JSX components shared across all systems
│   ├── design-canvas.jsx           — the canvas wrapper
│   ├── tweaks-panel.jsx            — the per-direction tweaks sidebar
│   ├── app.jsx                     — wires everything together
│   ├── direction-a.jsx             — A1 Tabloid
│   ├── direction-a2.jsx            — A2 The Quarterly
│   ├── direction-a3.jsx            — A3 Riso Zine
│   ├── direction-a4.jsx            — A4 Sports Tabloid
│   ├── direction-a5.jsx            — A5 Stamp / Monolith (kept for canvas; no example)
│   ├── direction-c.jsx             — C1 Colour Blocks
│   ├── direction-c2.jsx            — C2 Broadsheet (kept for canvas; no example)
│   ├── direction-c3.jsx            — C3 Saturated Blocks
│   ├── direction-c4.jsx            — C4 Postered & Playful
│   └── direction-c5.jsx            — C5 Editorial Spread (kept for canvas; no example)
├── systems/                        — one folder per implemented system
│   ├── A1-Tabloid/example.html
│   ├── A2-Quarterly/example.html
│   ├── A3-RisoZine/example.html
│   ├── A4-SportsTabloid/example.html
│   ├── C1-ColourBlocks/example.html      ← original terracotta restored
│   ├── C3-Saturated/example.html
│   └── C4-Postered/example.html
└── uploads/                        — image references from the original handoff
```

---

## The seven systems

| # | System | Family | Palette | What's it for |
|---|--------|--------|---------|---------------|
| 01 | **A1 · Tabloid** | Brutalist Editorial | `#0d0d0d` ink + `#e7ff52` electric yellow + `#f6f5f0` bone | Newspaper-masthead energy. Yellowball-adjacent. Most direct, most impact. |
| 02 | **A2 · The Quarterly** | Brutalist Editorial | `#f0eae0` cream + `#ff3d6e` hot magenta + `#161311` ink | Cream paper stock with magenta highlights. Asymmetric magazine grid. FT Weekend supplement vibe. |
| 03 | **A3 · Riso Zine** | Brutalist Editorial | `#2b1f4f` purple + `#fff200` fluoro yellow + `#ff2e88` pink + `#fbf3d8` cream | Two-spot-colour overprint. Halftone textures, registration marks, oversized numbers. |
| 04 | **A4 · Sports Tabloid** | Brutalist Editorial | `#fafafa` paper + `#0a0a0a` ink + `#ff3b1f` red | White paper, single hot red, diagonal slash. Condensed Archivo Black set in caps. Track-and-field. |
| 05 | **C1 · Colour Blocks** | Manifesto Poster | `#f4efe6` bone + `#d96f3b` terracotta + `#e8d5a8` lemon + `#7a9eb8` sky + `#1a1814` ink | Italic Fraunces display on warm bone. Coloured tiles, manifesto on ink. **Original terracotta palette retained** per spec. |
| 06 | **C3 · Saturated Blocks** | Manifesto Poster | `#f4efe6` bone + `#e30b5c` magenta + `#1a4ed8` cobalt + `#c5ff3d` acid lime + `#1a1814` ink | C1's layout pushed punchier. Maximum flair without crossing into novelty. |
| 07 | **C4 · Postered & Playful** | Manifesto Poster | `#f6f1e7` bone + `#ff5c1f` tangerine + `#5a2eb8` violet + `#0d0a08` ink | Ransom-note collage. Mixes italic Fraunces with Archivo Black. Diagonal headlines, sticker badges. |

> **Note on C1 and the terracotta palette.** Mid-conversation the terracotta accent was swapped to forest green per feedback ("too AI-coding-agent coded"). The final design-system spec then *restored* the original terracotta for take 1 specifically. The C1 example here uses the original `#d96f3b` — the in-canvas `direction-c.jsx` still defaults to forest green for parity with the canvas, but the example HTML overrides that.

---

## Typography stack

All fonts are **bundled locally** under `fonts/` and exposed via a single `fonts.css`:

- **Archivo** + **Archivo Black** — display sans for the Brutalist family
- **Fraunces** (variable, italic + roman, opsz 9–144) — display serif for the Manifesto family
- **Geist** + **Geist Mono** — body / UI / metadata across all systems
- **JetBrains Mono** (italic + roman) — alternate mono for the Manifesto family
- **Space Grotesk** — alternate sans
- **Instrument Serif** (italic + roman) — used in some Redesign canvas variants

39 woff2 files, ~933 KB total. Sourced from Google Fonts and rewritten to relative paths so everything works under `file://` with no network connection. If you need to refresh or extend the bundle, re-run `/tmp/download-fonts.py` (script kept alongside this bundle's history).

> **PP Editorial New** is referenced inside `Paidia-Redesign.html` but is a commercial face from PangramPangram and is not bundled. It falls back to Fraunces / system serif.

---

## How a per-system example.html is wired

Each `systems/X/example.html` does the same five things:

1. Loads `../../fonts.css` (local woff2 — no network needed)
2. Includes the small set of root CSS classes that the relevant component expects (most are self-contained inline; A1 and C1 need a `.a-root` / `.c-root` style block at page level)
3. Pulls React 18.3.1, ReactDOM 18.3.1, and Babel Standalone 7.29.0 from unpkg
4. **Inlines the relevant `direction-X.jsx` directly into a `<script type="text/babel">` block** — required because Babel Standalone can't fetch external `.jsx` files when the page is opened via `file://`. The original JSX still lives in `shared/` for reference, but the example is fully self-contained.
5. Renders the `DirectionX` component into `#root` with the system's signature accent

A small fixed strip across the top gives you back-navigation to the index, the master spec, and the canvas.

> If you ever edit one of the `shared/direction-*.jsx` files, you'll need to re-inline it into the corresponding `example.html` (and into `Paidia-Redesign.html` for the canvas). The tiny script at `/tmp/inline-jsx.py` can do this — it's a one-line invocation if the JSX `<script src=>` tags are present.

---

## How to recreate one of these in production

The JSX prototypes are **prototypes, not production code** (per the handoff README). To ship one of these designs in a real codebase:

1. Read the master spec sheet (`Paidia-Design-Systems.html`) for the canonical palette, type scale, and component vocabulary
2. Read the relevant `direction-X.jsx` for the actual layout / section structure
3. Recreate using the target stack (React, Vue, Astro, plain HTML — whatever fits)
4. Match the visual output; don't copy the prototype's internal structure verbatim
5. Keep the rules-of-use from the master spec (e.g. "reserve yellow for ONE element per viewport", "don't mix two plate accents in one section")

---

## Original handoff

This bundle was exported from claude.ai/design via the standard Anthropic design handoff. The conversation transcript in `chats/chat1.md` is the authoritative record of intent — read it first if you're picking up the work fresh.
