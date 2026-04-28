# Editorial Mono · Blog UI kit

A click-thru recreation of `thingsithinkithink` — the only product the system supports. Three core templates exist:

1. **Index** (`/`) — list of recent posts.
2. **Post** (`/posts/like-a-ragged-prayer`) — the long-form essay view, with prose, drop cap, pull quote, code, figure, and end rule.
3. **Archive / Tags** (`/archive`) — year-grouped list of every post.

`index.html` is interactive — click a post on the index to read it, click the rail to navigate, click "Archive" to see the year list. Routing is fake (state-only) and stays in-page.

## Components

- `Rail.jsx` — the persistent 260px dark rail (brand, nav, post meta, TOC, tags, prev/next).
- `Article.jsx` — the post view: meta strip, hero (h1 + dek + author), prose, quote, code, figure, end rule.
- `IndexList.jsx` — the post-list view used on `/`.
- `Archive.jsx` — the year-grouped tag/archive view.
- `Bits.jsx` — small shared pieces: `MetaStrip`, `Author`, `Tag`, `Button`, `Figure`, `EndRule`.
- `posts.js` — the three sample posts (data only).

## Why a recreation, not a rebuild

The original ships as static HTML demonstrating components. We rebuild it as React components for reuse in mocks, while preserving every class and every value. **No new visual decisions.** If a treatment isn't in `components.css`, it isn't here.
