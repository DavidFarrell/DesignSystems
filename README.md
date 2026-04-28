# Design Systems

David Gérouville-Farrell's personal collection of design systems, each in its own subfolder.

| System | Folder | Description |
|---|---|---|
| **Broadsheet** | [`Broadsheet/`](./Broadsheet/) | The Alasdair Gray broadsheet system. A blog set as a Glaswegian broadsheet of the imagination - engraved frames, sepia plates, fell-letter display, a single oxblood accent. Used for *thingsithinkithink*. |
| **EditorialMono** | [`EditorialMono/`](./EditorialMono/) | A Swiss editorial system. Three families (Source Serif 4 / Inter / JetBrains Mono), one accent (vermilion), sharp corners. Reads like a working notebook - hierarchy through space and weight, mono carries structure. Alternative cut for *thingsithinkithink*. |
| **OpenSwim** | [`OpenSwim/`](./OpenSwim/) | The Workbench design system for an offline-first podcast app paired with Shokz OpenSwim bone-conduction headphones. Dark coffee on pale tea, amber for "happening right now", flat rectangles, Space Grotesk + JetBrains Mono. Includes a living style guide, tokens, `.ct-*` components, and a decisions log. |

## Conventions

Each design system folder is self-contained and includes:

- `README.md` - the canonical write-up (voice, palette, type, components, do/don't)
- `SKILL.md` - an agent-invocable skill manifest for use with Claude Code
- `index.html` - a top-level navigator into the system's reference, UI kits, and preview cards
- `fonts.css` + `fonts/` - locally-bundled `.woff2` files (no CDN)
- `src/tokens.css` + `src/components.css` - canonical tokens and components
- `colors_and_type.css` - semantic CSS-variable aliases over the tokens
- `reference/` - the original hand-set styleguide
- `preview/` - one-concept-per-file design system cards
- `ui_kits/` - working prototypes built from the system

## Adding a system

Drop a new folder at the root, follow the structure above, and add a row to the table.
