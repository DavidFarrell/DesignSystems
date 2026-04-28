// Nav.jsx — small-caps row beneath the masthead
function Nav({ current, go }) {
  const items = [
    { id: "index", label: "INDEX" },
    { id: "post", label: "CHAPTER THE FIRST" },
    { id: "about", label: "FRONTISPIECE" },
  ];
  return (
    <nav style={{
      display: "flex", justifyContent: "center", gap: 28,
      margin: "12px 0 28px",
      fontFamily: "var(--v6-font-display-sc)",
      fontSize: 11, letterSpacing: 4, textTransform: "uppercase",
    }}>
      {items.map((it, i) => (
        <span key={it.id}>
          {i > 0 && <span style={{ color: "var(--v6-ink-faint)", marginRight: 28 }}>·</span>}
          <a href="#" onClick={(e) => { e.preventDefault(); go(it.id); }}
            style={{
              color: current === it.id ? "var(--v6-accent)" : "var(--v6-ink)",
              borderBottom: current === it.id ? "1px solid var(--v6-accent)" : "1px dotted var(--v6-ink-faint)",
              textDecoration: "none", paddingBottom: 2,
            }}>{it.label}</a>
        </span>
      ))}
    </nav>
  );
}
window.Nav = Nav;
