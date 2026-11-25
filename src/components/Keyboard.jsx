
const keyboardRows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"]
];

function Keyboard({ onKeyPress, keyStatuses, disabled }) {
  return (
    <div className="keyboard">
      {keyboardRows.map((row, rowIndex) => (
        <div className="keyboard-row" key={rowIndex}>
          {row.map((key) => (
            <button
              key={key}
              className={`key ${
                keyStatuses[key] || ""
              } ${
                key === "ENTER" || key === "BACKSPACE"
                  ? "wide-key"
                  : ""
              }`}
              onClick={() => onKeyPress(key)}
              disabled={disabled}
              aria-label={
                key === "BACKSPACE"
                  ? "Delete letter"
                  : key === "ENTER"
                  ? "Submit guess"
                  : key
              }
            >
              {key === "BACKSPACE" ? "⌫" : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
