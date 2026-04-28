// Title.jsx — title + dek + byline rule
function Title({ title, dek, by, date }) {
  return (
    <>
      <h1 className="v6-title">{title}</h1>
      {dek && <p className="v6-dek">— {dek} —</p>}
      <div className="v6-byline">
        <div className="v6-byline__rule"></div>
        <div className="v6-byline__text">By {by} · {date}</div>
        <div className="v6-byline__rule"></div>
      </div>
    </>
  );
}
window.Title = Title;
