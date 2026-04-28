// Frame.jsx — the engraved double-frame wrapper
function Frame({ children }) {
  return (
    <div className="v6-frame">
      <div className="v6-frame__inner">
        <span className="v6-frame__corner-bl"></span>
        <span className="v6-frame__corner-br"></span>
        {children}
      </div>
    </div>
  );
}
window.Frame = Frame;
