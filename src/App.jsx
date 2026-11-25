
import { useState, useEffect } from "react";

import GameBoard from "./components/GameBoard";
import Keyboard from "./components/Keyboard";
import GameOverModal from "./components/GameOverModal";

import { evaluateGuess } from "./utils/gameLogic";
import { WORDS, getRandomWord } from "./utils/words";

import "./App.css";

function App() {
  const [solutionWord, setSolutionWord] = useState(getRandomWord);
  const [currentGuess, setCurrentGuess] = useState("");
  const [pastGuesses, setPastGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("IN_PROGRESS");
  const [keyStatuses, setKeyStatuses] = useState({});
  const [message, setMessage] = useState("");

  const handleKeyPress = (key) => {
    if (gameStatus !== "IN_PROGRESS") return;

    setMessage("");

    // Backspace: Remove the last letter.
    if (key === "BACKSPACE" || key === "BACKSPACE") {
      setCurrentGuess((previous) => previous.slice(0, -1));
      return;
    }

    // Enter: Submit the current guess.
    if (key === "ENTER") {
      submitGuess();
      return;
    }

    // Accept only alphabetical characters.
    if (/^[A-Z]$/.test(key)) {
      setCurrentGuess((previous) => {
        if (previous.length >= 5) return previous;
        return previous + key;
      });
    }
  };

  const submitGuess = () => {
    if (currentGuess.length !== 5) {
      setMessage("Word must contain exactly 5 letters!");
      return;
    }

    // Validate the entered word.
    if (!WORDS.includes(currentGuess)) {
      setMessage("Not a valid word. Try another!");
      return;
    }

    const updatedGuesses = [...pastGuesses, currentGuess];

    setPastGuesses(updatedGuesses);
    setCurrentGuess("");

    // Update virtual keyboard colors.
    const evaluation = evaluateGuess(
      currentGuess,
      solutionWord
    );

    setKeyStatuses((previous) => {
      const updated = { ...previous };

      currentGuess.split("").forEach((letter, index) => {
        const status = evaluation[index];
        const priority = {
          absent: 1,
          present: 2,
          correct: 3
        };

        if (
          !updated[letter] ||
          priority[status] > priority[updated[letter]]
        ) {
          updated[letter] = status;
        }
      });

      return updated;
    });

    // Win condition.
    if (currentGuess === solutionWord) {
      setGameStatus("WON");
      return;
    }

    // Loss condition.
    if (updatedGuesses.length === 6) {
      setGameStatus("LOST");
    }
  };

  // Listen for physical keyboard events.
  useEffect(() => {
    const handlePhysicalKeyboard = (event) => {
      if (event.ctrlKey || event.altKey || event.metaKey) return;

      if (event.key === "Backspace") {
        event.preventDefault();
        handleKeyPress("BACKSPACE");
      } else if (event.key === "Enter") {
        handleKeyPress("ENTER");
      } else if (/^[a-zA-Z]$/.test(event.key)) {
        handleKeyPress(event.key.toUpperCase());
      }
    };

    window.addEventListener("keydown", handlePhysicalKeyboard);

    return () => {
      window.removeEventListener(
        "keydown",
        handlePhysicalKeyboard
      );
    };
  }, [currentGuess, pastGuesses, gameStatus, solutionWord]);

  // Restart the game.
  const restartGame = () => {
    setSolutionWord(getRandomWord());
    setCurrentGuess("");
    setPastGuesses([]);
    setGameStatus("IN_PROGRESS");
    setKeyStatuses({});
    setMessage("");
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">WORDLE</div>
        <p>GUESS THE FIVE-LETTER WORD</p>
      </header>

      <main className="game-container">
        <div className="game-info">
          <span>ATTEMPTS</span>
          <strong>{pastGuesses.length} / 6</strong>
        </div>

        <GameBoard
          pastGuesses={pastGuesses}
          currentGuess={currentGuess}
          solutionWord={solutionWord}
          gameStatus={gameStatus}
        />

        <div className="message">
          {message}
        </div>

        <Keyboard
          onKeyPress={handleKeyPress}
          keyStatuses={keyStatuses}
          disabled={gameStatus !== "IN_PROGRESS"}
        />

        <p className="instructions">
          Use your keyboard or click the letters below.
        </p>
      </main>

      <footer>
        <p>WORDLE CLONE | REACT PROJECT</p>
      </footer>

      <GameOverModal
        gameStatus={gameStatus}
        solutionWord={solutionWord}
        onRestart={restartGame}
      />
    </div>
  );
}

export default App;
