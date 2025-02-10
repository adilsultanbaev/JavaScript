const word = "День";

let lastChar = word[word.length - 1];

if (lastChar === "ь") {
  lastChar = word[word.length - 2];
}

console.log("Последняя буква слова:", lastChar);
