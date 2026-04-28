// The Archive / Tags view. Year-grouped, dense rows, vermilion only on hover.
function Archive({ openPost }) {
  // group by year
  const byYear = {};
  POSTS.forEach((p) => {
    const y = p.date.slice(0, 4);
    (byYear[y] = byYear[y] || []).push(p);
  });
  const years = Object.keys(byYear).sort().reverse();

  const [hover, setHover] = React.useState(null);

  return (
    <article className="v2-article">
      <ArchiveMetaStrip count={POSTS.length} updated="FEB 15" />
      <h1 className="v2-h1">Archive.</h1>
      <p className="v2-dek">Everything, by year.</p>

      {years.map((y) => (
        <div key={y} style={{ marginTop: 56 }}>
          <h2 className="v2-h2"><span>{y}</span></h2>
          {byYear[y].map((p) => {
            const isHover = hover === p.slug;
            return (
              <div
                key={p.slug}
                onMouseEnter={() => setHover(p.slug)}
                onMouseLeave={() => setHover(null)}
                onClick={() => openPost(p.slug)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr auto",
                  gap: 24,
                  alignItems: "baseline",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(15,15,14,0.10)",
                  cursor: "pointer",
                  fontFamily: "var(--v2-font-mono)",
                  fontSize: 13,
                  letterSpacing: "0.4px",
                  background: isHover ? "rgba(216,84,61,0.06)" : "transparent",
                  transition: "background 120ms cubic-bezier(0.2, 0.7, 0.2, 1)",
                }}
              >
                <span style={{ color: "var(--v2-ink-mute)", textTransform: "uppercase" }}>{p.dateLong}</span>
                <span style={{ color: "var(--v2-ink)", fontFamily: "var(--v2-font-serif)", fontSize: 18 }}>{p.title}</span>
                <span style={{ color: isHover ? "var(--v2-accent)" : "var(--v2-ink-mute)", textTransform: "uppercase" }}>
                  {p.read} {isHover ? "→" : ""}
                </span>
              </div>
            );
          })}
        </div>
      ))}

      <EndRule date="2026-02-15" />
    </article>
  );
}

window.Archive = Archive;
