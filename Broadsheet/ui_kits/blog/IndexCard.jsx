// IndexCard.jsx — a single entry in the 3-column broadsheet listing
function IndexCard({ chapter, title, dek, date, read, gradient, onOpen }) {
  return (
    <article style={{ marginBottom: 28, breakInside: "avoid", cursor: "pointer" }} onClick={onOpen}>
      <div style={{
        fontFamily: "var(--v6-font-display-sc)",
        fontSize: 11, letterSpacing: 5, color: "var(--v6-accent)",
        textAlign: "center", marginBottom: 6,
      }}>{chapter}</div>
      <div style={{ border: "1px solid var(--v6-ink)", padding: 4, marginBottom: 10 }}>
        <div style={{
          width: "100%", aspectRatio: "16/9",
          background: gradient || "linear-gradient(135deg, #c8b89a, #b8a888)",
          filter: "var(--v6-plate-tint)",
          border: "1px solid var(--v6-ink)",
        }}></div>
      </div>
      <h3 style={{
        fontFamily: "var(--v6-font-display)",
        fontWeight: 400, fontSize: 26, lineHeight: 1.05,
        margin: "0 0 6px", textAlign: "center",
        letterSpacing: "-0.2px",
      }}>{title}</h3>
      <p style={{
        fontFamily: "var(--v6-font-body)", fontStyle: "italic",
        fontSize: 14.5, lineHeight: 1.4, textAlign: "center",
        margin: "0 0 10px", color: "var(--v6-ink-soft)",
      }}>— {dek} —</p>
      <div style={{
        display: "flex", justifyContent: "center", gap: 12,
        fontFamily: "var(--v6-font-display-sc)",
        fontSize: 10, letterSpacing: 3, color: "var(--v6-ink-mute)",
      }}>
        <span>{date}</span><span>·</span><span>{read}</span>
      </div>
    </article>
  );
}
window.IndexCard = IndexCard;
