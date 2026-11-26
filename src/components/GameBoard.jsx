
import Row from "./Row";
import { evaluateGuess } from "../utils/gameLogic";

function GameBoard({
  pastGuesses,
  currentGuess,
  solutionWord,
  gameStatus
}) {
  return (
    <div className="game-board">
      {Array.from({ length: 6 }, (_, index) => {
        const isPastGuess = index < pastGuesses.length;
        const isCurrentRow =
          index === pastGuesses.length &&
          gameStatus === "IN_PROGRESS";

        const guess = isPastGuess
          ? pastGuesses[index]
          : isCurrentRow
          ? currentGuess
          : "";

        const evaluation = isPastGuess
          ? evaluateGuess(guess, solutionWord)
          : [];

        return (
          <Row
            key={index}
            guess={guess}
            evaluation={evaluation}
            isCurrent={isCurrentRow}
          />
        );
      })}
    </div>
  );
}

export default GameBoard;
