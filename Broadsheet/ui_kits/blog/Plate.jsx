// Plate.jsx — sepia-tinted framed image (placeholder gradient)
function Plate({ caption, hero, gradient }) {
  const cls = "v6-plate" + (hero ? " v6-plate--hero" : "");
  const bg = gradient || "linear-gradient(120deg, #c8b89a 0%, #b8a888 50%, #d8cfb8 100%)";
  return (
    <figure className={cls}>
      <div className="v6-plate__image" style={{ background: bg }}></div>
      {caption && <figcaption className="v6-figcaption">{caption}</figcaption>}
    </figure>
  );
}
window.Plate = Plate;
