// Masthead.jsx
function Masthead({ chapter, date, read }) {
  return (
    <header className="v6-masthead">
      <div className="v6-masthead__sub">THINGSITHINKITHINK · A BLOG IN BROADSHEET FORM</div>
      <div className="v6-masthead__rule"></div>
      <div className="v6-masthead__chapter">
        <span>{chapter || "INDEX"}</span>
        <span>{date || "2026-02-15"}</span>
        <span>{read || "GLASGOW EDITION"}</span>
      </div>
    </header>
  );
}
window.Masthead = Masthead;
