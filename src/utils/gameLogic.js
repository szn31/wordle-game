
export const evaluateGuess = (guess, solution) => {
  const result = Array(5).fill("absent");
  const remainingLetters = {};

  // First pass: Identify correct letters.
  for (let i = 0; i < 5; i++) {
    if (guess[i] === solution[i]) {
      result[i] = "correct";
    } else {
      remainingLetters[solution[i]] =
        (remainingLetters[solution[i]] || 0) + 1;
    }
  }

  // Second pass: Identify present letters.
  for (let i = 0; i < 5; i++) {
    if (result[i] === "correct") continue;

    const letter = guess[i];

    if (remainingLetters[letter] > 0) {
      result[i] = "present";
      remainingLetters[letter]--;
    }
  }

  return result;
};
