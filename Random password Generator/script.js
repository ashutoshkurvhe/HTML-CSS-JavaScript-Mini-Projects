// Selectors
const outputEl = document.querySelector(".output");
const generateBtnEl = document.querySelector(".generate-btn");
const copyBtnEl = document.querySelector(".copy-btn");


const length = 12;
const characterSets = {
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  lowerCase: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  upperCase: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  symbols: [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "=",
    "+",
    "[",
    "]",
    "{",
    "}",
    "|",
    ";",
    ":",
    "<",
    ">",
    ",",
    ".",
    "?",
    "/",
  ],
};


const allCharacters = [
  ...characterSets.numbers,
  ...characterSets.lowerCase,
  ...characterSets.upperCase,
  ...characterSets.symbols,
];

const getRandomCharacter = (set) => set[Math.floor(Math.random() * set.length)];

const generatePassword = () => {
  let password = "";

  password += getRandomCharacter(characterSets.numbers);
  password += getRandomCharacter(characterSets.lowerCase);
  password += getRandomCharacter(characterSets.upperCase);
  password += getRandomCharacter(characterSets.symbols);

  while (password.length < length) {
    password += getRandomCharacter(allCharacters);
  }

  outputEl.value = password;
};

generateBtnEl.addEventListener("click", generatePassword);

const copyPassword = () => {
    navigator.clipboard.writeText(outputEl.value);
    outputEl.value = '';
};

copyBtnEl.addEventListener("click", copyPassword);
