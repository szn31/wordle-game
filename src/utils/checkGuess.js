export function checkGuess(guess, solution) {
  const result = Array(5).fill("absent");
  const solutionLetters = solution.split("");
  const used = Array(5).fill(false);

  // First pass: find correct letters and positions.
  for (let i = 0; i < 5; i++) {
    if (guess[i] === solution[i]) {
      result[i] = "correct";
      used[i] = true;
    }
  }

  // Second pass: find letters that exist in another position.
  for (let i = 0; i < 5; i++) {
    if (result[i] === "correct") continue;

    const matchIndex = solutionLetters.findIndex(
      (letter, j) => letter === guess[i] && !used[j]
    );

    if (matchIndex !== -1) {
      result[i] = "present";
      used[matchIndex] = true;
    }
  }

  return result;
}