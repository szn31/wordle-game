
export const WORDS = [
  "APPLE", "BRAIN", "CHAIR", "CLOUD", "DREAM",
  "EARTH", "FLAME", "GRAPE", "HEART", "HOUSE",
  "JUICE", "LIGHT", "MONEY", "NIGHT", "OCEAN",
  "PEACE", "PLANT", "QUICK", "RADIO", "SMILE",
  "STONE", "TRAIN", "WATER", "WORLD", "YOUTH",
  "BRAVE", "CRANE", "PLANE", "SHARE", "SOUND",
  "TABLE", "TIGER", "MOUSE", "BEACH", "MUSIC",
  "GREEN", "BLACK", "WHITE", "SWEET", "HAPPY"
];

export const getRandomWord = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
};
