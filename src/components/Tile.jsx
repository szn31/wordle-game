
function Tile({ letter, status, isCurrent }) {
  return (
    <div
      className={`tile ${status || ""} ${
        letter ? "filled" : ""
      } ${isCurrent ? "current" : ""}`}
    >
      {letter}
    </div>
  );
}

export default Tile;
