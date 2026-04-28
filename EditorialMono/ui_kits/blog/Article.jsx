// The post view. Iterates body blocks; uses the same .v2-* classes the
// original style guide ships with.
function Article({ post, openPost }) {
  return (
    <article className="v2-article">
      <MetaStrip post={post} />

      <h1 className="v2-h1">{post.title}</h1>
      <p className="v2-dek">{post.dek}</p>
      <Author author={post.author} dateLong={post.dateLong} read={post.read} />

      <div className="v2-hero">
        <div className="v2-hero__plate" style={{ background: "linear-gradient(120deg, #d8cfb8, #efece4)" }}></div>
        <div className="v2-figcaption">{post.title}</div>
      </div>

      <div className="v2-prose">
        {post.body.map((b, i) => {
          if (b.type === "p")     return <p key={i} dangerouslySetInnerHTML={{ __html: b.text }} />;
          if (b.type === "h2")    return <h2 key={i} className="v2-h2"><span>{b.text}</span></h2>;
          if (b.type === "h3")    return <h3 key={i} className="v2-h3">{b.text}</h3>;
          if (b.type === "quote") return <blockquote key={i} className="v2-quote">"{b.text}"</blockquote>;
          if (b.type === "code")  return (
            <pre key={i} className="v2-code">
              <div className="v2-code__lang">{b.lang}</div>
              <code>{b.text}</code>
            </pre>
          );
          if (b.type === "fig")   return <Figure key={i} caption={b.caption} />;
          return null;
        })}
      </div>

      <EndRule date={post.date} />
    </article>
  );
}

window.Article = Article;
