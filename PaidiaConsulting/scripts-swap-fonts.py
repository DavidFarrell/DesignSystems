#!/usr/bin/env python3
"""Replace Google Fonts <link> tags in every HTML file with a local fonts.css link."""
import re
from pathlib import Path

ROOT = Path("/Users/david/projects/DesignSystems/PaidiaConsulting")

# Pattern matches the whole Google Fonts block:
#   <link rel="preconnect" href="https://fonts.googleapis.com">
#   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
#   <link href="https://fonts.googleapis.com/css2?..." rel="stylesheet">
GF_BLOCK = re.compile(
    r'<link\s+rel="preconnect"\s+href="https://fonts\.googleapis\.com">\s*'
    r'<link\s+rel="preconnect"\s+href="https://fonts\.gstatic\.com"\s+crossorigin>\s*'
    r'<link\s+href="https://fonts\.googleapis\.com/css2[^"]*"\s+rel="stylesheet">',
    re.MULTILINE
)

def relative_path_to_fonts_css(html_path: Path) -> str:
    depth = len(html_path.relative_to(ROOT).parents) - 1
    return ("../" * depth) + "fonts.css" if depth > 0 else "fonts.css"

targets = [
    ROOT / "index.html",
    ROOT / "Paidia-Design-Systems.html",
    ROOT / "Paidia-Redesign.html",
    *(ROOT / "systems").rglob("example.html"),
]

for t in targets:
    html = t.read_text()
    rel = relative_path_to_fonts_css(t)
    replacement = f'<link rel="stylesheet" href="{rel}">'
    new_html, n = GF_BLOCK.subn(replacement, html)
    if n:
        t.write_text(new_html)
        print(f"✓ {t.relative_to(ROOT)} → {rel}  ({n} block(s) swapped)")
    else:
        print(f"  (no Google Fonts block found) {t.relative_to(ROOT)}")
