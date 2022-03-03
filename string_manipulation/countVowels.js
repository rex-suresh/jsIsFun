const isVowel = function (letter) {
  return (letter === "a") || (letter === "e") || (letter === "i") || (letter === "o") || (letter === "u");
};

const countVowels = function (word) {
  let vowelCount = 0;

  if (isVowel(letter)) {
    vowelCount++;
  };
};

const main = function () {
  countVowels("blue");
};


const testIsVowel = function (letter, expectedReturn, message) {
  let mark = "✓";

  if (isVowel(letter) !== expectedReturn) {
    mark = "x";
  };

  console.log(mark, " - ", message);
};

const isVowelTests = function () {
  console.log("** isVowel function Test : **");
  testIsVowel("a",true,"isVowel letter a");
  testIsVowel("e",true,"isVowel letter e");
  testIsVowel("i",true,"isVowel letter i");
  testIsVowel("o",true,"isVowel letter o");
  testIsVowel("u",true,"isVowel letter u");
  testIsVowel("b",false,"isVowel letter b");
  testIsVowel("x",false,"isVowel letter z");
};

isVowelTests();