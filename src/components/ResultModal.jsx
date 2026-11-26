function ResultModal({ gameStatus, solutionWord, onRestart }) {
  if (gameStatus === "IN_PROGRESS") {
    return null;
  }

  const won = gameStatus === "WON";

  return (
    <div className="modal-overlay">
      <div className="modal result-modal">
        <h2>{won ? "Congratulations!" : "Game Over!"}</h2>

        <p>
          {won
            ? "You guessed the correct word!"
            : "You used all six attempts."}
        </p>

        {!won && (
          <p>
            The correct word was:{" "}
            <strong>{solutionWord}</strong>
          </p>
        )}

        <button onClick={onRestart} type="button">
          Play Again
        </button>
      </div>
    </div>
  );
}

export default ResultModal;