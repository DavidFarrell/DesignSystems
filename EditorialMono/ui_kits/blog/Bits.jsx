// Small shared pieces.
const { useState } = React;

function MetaStrip({ post }) {
  return (
    <div className="v2-meta-strip">
      <span>POST · {post.date}</span>
      <span className="v2-meta-strip__live">● PUBLISHED</span>
      <span>{post.read}</span>
    </div>
  );
}

function ArchiveMetaStrip({ count, updated }) {
  return (
    <div className="v2-meta-strip">
      <span>ARCHIVE · {count} POSTS</span>
      <span>UPDATED {updated}</span>
    </div>
  );
}

function Author({ author, dateLong, read }) {
  return (
    <div className="v2-author">
      <div className="v2-author__avatar" style={{ background: "#888" }}></div>
      <div>
        <div className="v2-author__name">{author.name}</div>
        <div className="v2-author__meta">{dateLong} · {read}</div>
      </div>
    </div>
  );
}

function Tag({ children }) {
  return <span className="v2-tag-chip">{children}</span>;
}

function Button({ children, ghost, onClick }) {
  return (
    <button className={"v2-button" + (ghost ? " v2-button--ghost" : "")} onClick={onClick}>{children}</button>
  );
}

function Figure({ caption, children }) {
  return (
    <figure className="v2-figure">
      <div className="v2-figure__plate" style={{ background: "linear-gradient(120deg, #d8cfb8, #efece4)" }}>{children}</div>
      <figcaption className="v2-figcaption">{caption}</figcaption>
    </figure>
  );
}

function EndRule({ date }) {
  return (
    <div className="v2-end">
      <span>END · {date}</span>
      <span>thingsithinkithink / v2</span>
    </div>
  );
}

Object.assign(window, { MetaStrip, ArchiveMetaStrip, Author, Tag, Button, Figure, EndRule });
