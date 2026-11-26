
import Tile from "./Tile";

function Row({ guess = "", evaluation = [], isCurrent = false }) {
  const letters = Array.from({ length: 5 }, (_, index) =>
    guess[index] || ""
  );

  return (
    <div className="row">
      {letters.map((letter, index) => (
        <Tile
          key={index}
          letter={letter}
          status={evaluation[index] || ""}
          isCurrent={isCurrent}
        />
      ))}
    </div>
  );
}

export default Row;
