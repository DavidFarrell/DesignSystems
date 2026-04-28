// The persistent 260px dark rail. Adapts content to the current view.
function Rail({ view, post, navigate }) {
  const navItems = [
    { id: "index", label: "Index" },
    { id: "archive", label: "Archive" },
    { id: "tags", label: "Tags" },
    { id: "about", label: "About" },
  ];
  return (
    <aside className="v2-rail">
      <div className="v2-rail__brand">
        <div className="v2-rail__brand-name">thingsithinkithink</div>
        <div className="v2-rail__brand-version">v2.0</div>
      </div>

      <nav className="v2-rail__nav">
        {navItems.map((it) => {
          const active = view === it.id || (it.id === "index" && view === "post");
          return (
            <div
              key={it.id}
              onClick={() => navigate(it.id)}
              style={{
                cursor: "pointer",
                color: active ? "var(--v2-rail-fg)" : "var(--v2-rail-soft)",
                fontWeight: active ? 500 : 400,
              }}
            >
              ›&nbsp;{it.label}
            </div>
          );
        })}
      </nav>

      <div className="v2-rail__rule"></div>

      {view === "post" && post ? (
        <>
          <div className="v2-rail__label">POST · {post.date}</div>
          <div className="v2-rail__title">{post.title}</div>
          <div className="v2-rail__row"><span>READ</span><b>{post.readShort}</b></div>
          <div className="v2-rail__row"><span>BY</span><b>{post.author.initials}</b></div>
          <div className="v2-rail__rule"></div>
          <div className="v2-rail__label">IN THIS POST</div>
          <ol className="v2-rail__toc">
            {post.toc.map((t, i) => (
              <li key={i}>
                <span className="v2-rail__toc-num">{String(i + 1).padStart(2, "0")}</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
          <div className="v2-rail__rule"></div>
          <div className="v2-rail__label">TAGS</div>
          <div className="v2-rail__tags">
            {post.tags.map((t) => <span key={t} className="v2-rail__tag">{t}</span>)}
          </div>
        </>
      ) : (
        <>
          <div className="v2-rail__label">ARCHIVE</div>
          <div className="v2-rail__title">{POSTS.length} posts</div>
          <div className="v2-rail__row"><span>UPDATED</span><b>FEB 15</b></div>
          <div className="v2-rail__row"><span>SINCE</span><b>2024</b></div>
        </>
      )}
    </aside>
  );
}

window.Rail = Rail;
