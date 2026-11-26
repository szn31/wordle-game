
export const WORDS = [
  "ABOUT", "ABOVE", "ADULT", "AFTER", "AGAIN",
  "ALARM", "ALBUM", "ANGEL", "ANGER", "APPLE",
  "BASIC", "BIRTH", "BLEND", "BLOCK", "BOARD",
  "CANDY", "CARRY", "CATCH", "CAUSE", "CHEST",
  "CHIEF", "CLEAN", "CLEAR", "CLOCK", "COAST",
  "COUNT", "COVER", "CYCLE", "DAILY", "DANCE",
  "DEATH", "DEPTH", "DOUBT", "DOZEN", "DRINK",
  "ENJOY", "ENTRY", "ERROR", "EVENT", "FAITH"
];

export const getRandomWord = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
};
