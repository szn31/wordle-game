
function GameOverModal({ gameStatus, solutionWord, onRestart }) {
  if (gameStatus === "IN_PROGRESS") return null;

  const isWon = gameStatus === "WON";

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-icon">
          {isWon ? "🎉" : "😔"}
        </div>

        <h2>{isWon ? "Excellent!" : "Game Over!"}</h2>

        <p>
          {isWon
            ? "Congratulations! You discovered the correct word."
            : "You have used all six attempts."}
        </p>

        <div className="solution">
          <span>THE WORD WAS</span>
          <strong>{solutionWord}</strong>
        </div>

        <button className="restart-button" onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default GameOverModal;
