function Instructions({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal instructions-modal">
        <h2>How to Play</h2>

        <p>
          Guess the hidden five-letter word in six attempts.
        </p>

        <ul>
          <li>Each guess must contain five letters.</li>
          <li>Press Enter to submit your guess.</li>
          <li>Press Backspace to remove a letter.</li>
          <li>
            Green means the letter is correct and in the
            correct position.
          </li>
          <li>
            Yellow means the letter is in the word but in
            the wrong position.
          </li>
          <li>
            Gray means the letter is not in the word.
          </li>
        </ul>

        <button onClick={onClose} type="button">
          Start Playing
        </button>
      </div>
    </div>
  );
}

export default Instructions;