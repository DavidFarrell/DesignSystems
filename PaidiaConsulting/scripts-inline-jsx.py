#!/usr/bin/env python3
"""Inline JSX file contents into HTML <script src> tags so they work via file://."""
import re, os
from pathlib import Path

ROOT = Path("/Users/david/projects/DesignSystems/PaidiaConsulting")
SHARED = ROOT / "shared"

def inline_jsx_in_file(html_path: Path):
    html = html_path.read_text()
    # Match: <script type="text/babel" src="...path...jsx"></script>
    pattern = re.compile(r'<script\s+type="text/babel"\s+src="([^"]+\.jsx)"\s*>\s*</script>')

    def replace(m):
        src = m.group(1)
        # Resolve relative to the html file's dir
        candidates = [
            (html_path.parent / src).resolve(),
            (ROOT / src.lstrip("./")).resolve() if not src.startswith("/") else Path(src),
        ]
        for c in candidates:
            if c.exists():
                code = c.read_text()
                # Strip the trailing window.X = X line - not needed inline
                code = re.sub(r'\nwindow\.\w+\s*=\s*\w+;\s*$', '', code.strip())
                return f'<script type="text/babel" data-presets="react">\n/* inlined from {src} */\n{code}\n</script>'
        print(f"  WARN: couldn't resolve {src}")
        return m.group(0)

    new_html, n = pattern.subn(replace, html)
    if n:
        html_path.write_text(new_html)
        print(f"✓ {html_path.relative_to(ROOT)} — inlined {n} JSX file(s)")
    else:
        print(f"  (no JSX includes) {html_path.relative_to(ROOT)}")

# All HTML files that need fixing
targets = [
    ROOT / "Paidia-Redesign.html",
    *(ROOT / "systems").rglob("example.html"),
]
for t in targets:
    inline_jsx_in_file(t)
