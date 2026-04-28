// Motto.jsx — oxblood small-caps bracketed by ❦
function Motto({ children }) {
  return <div className="v6-motto">{children}</div>;
}
window.Motto = Motto;

// Headings.jsx — H2 (rule-bracketed) and H3 (em-dash bracketed)
function H2({ children }) {
  return <h2 className="v6-h2"><span>{children}</span></h2>;
}
function H3({ children }) {
  return <h3 className="v6-h3">{children}</h3>;
}
window.H2 = H2;
window.H3 = H3;

// Quote
function Quote({ children }) {
  return <blockquote className="v6-quote">{children}</blockquote>;
}
window.Quote = Quote;

// CodeFrame
function CodeFrame({ language, children }) {
  return (
    <div className="v6-code-frame">
      <div className="v6-code-frame__label">{(language || "PYTHON")}</div>
      <pre><code>{children}</code></pre>
    </div>
  );
}
window.CodeFrame = CodeFrame;

// EndMark
function EndMark({ chapter }) {
  return (
    <div className="v6-end">
      <div className="v6-end__rule"></div>
      <div className="v6-end__label">HERE ENDS {chapter || "CHAPTER THE FIRST"}</div>
    </div>
  );
}
window.EndMark = EndMark;
