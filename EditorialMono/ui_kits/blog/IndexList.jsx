// The Index view. Lists all posts in the same content frame as Article.
function IndexList({ openPost }) {
  return (
    <article className="v2-article">
      <ArchiveMetaStrip count={POSTS.length} updated="FEB 15" />

      <h1 className="v2-h1">A working notebook.</h1>
      <p className="v2-dek">Essays on AI, design, and the craft of software — at the speed I can think.</p>

      <div style={{ display: "flex", gap: 12, marginBottom: 64 }}>
        <Button>SUBSCRIBE →</Button>
        <Button ghost>VIEW ARCHIVE</Button>
      </div>

      <div className="v2-h2"><span>Recent</span></div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {POSTS.map((p) => (
          <div
            key={p.slug}
            onClick={() => openPost(p.slug)}
            style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr auto",
              gap: 24,
              alignItems: "baseline",
              padding: "22px 0",
              borderBottom: "1px solid rgba(15,15,14,0.15)",
              cursor: "pointer",
            }}
          >
            <div style={{ fontFamily: "var(--v2-font-mono)", fontSize: 11, letterSpacing: "1.4px", textTransform: "uppercase", color: "var(--v2-ink-mute)" }}>
              {p.dateLong}
            </div>
            <div>
              <div style={{ fontFamily: "var(--v2-font-serif)", fontSize: 28, lineHeight: 1.15, fontWeight: 500, letterSpacing: "-0.4px", color: "var(--v2-ink)", marginBottom: 6 }}>
                {p.title}
              </div>
              <div style={{ fontFamily: "var(--v2-font-serif)", fontStyle: "italic", fontSize: 17, lineHeight: 1.4, color: "#3a3a37", maxWidth: 580 }}>
                {p.dek}
              </div>
              <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
            <div style={{ fontFamily: "var(--v2-font-mono)", fontSize: 11, color: "var(--v2-ink-mute)", letterSpacing: "1px" }}>
              {p.read}
            </div>
          </div>
        ))}
      </div>

      <EndRule date="2026-02-15" />
    </article>
  );
}

window.IndexList = IndexList;
