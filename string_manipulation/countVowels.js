const isVowel = function (letter) {
  return "aeiou".includes(letter.toLowerCase());
};

const countVowels = function (word) {
  let vowelCount = 0;

  for (let index = 0; index < word.length; index++) {
    vowelCount += (isVowel(word[index])) ? 1 : 0;
  };
  return vowelCount;
};

const testIsVowel = function (letter, expectedReturn, message) {
  const passResult = (isVowel(letter) === expectedReturn);
  const mark = passResult ? "✓" : "x";
  
  console.log(mark, " - ", message);
  return passResult;
};

const testCountVowels = function (word, expectedReturn, message) {
  const passResult = (countVowels(word) === expectedReturn);
  const mark = passResult ? "✓" : "x";

  console.log(mark, " - ", message);
  return passResult;
};


const isVowelTests = function () {
  console.log("\nisVowel function Test : ");

  testIsVowel("a",true,"A Vowel a");
  testIsVowel("e",true,"A Vowel e");
  testIsVowel("i",true,"A Vowel i");
  testIsVowel("o",true,"A Vowel o");
  testIsVowel("u",true,"A Vowel u");
  testIsVowel("b",false,"A consonet b");
  testIsVowel("z", false, "A consonet z");
};

const countVowelsTests = function () {
  console.log("\ncountVowels function Test : ");
  
  testCountVowels("aa",2,"Vowel repeated twice 'aa'");
  testCountVowels("be",1,"A vowel and a consonent 'be'");
  testCountVowels("sky",0,"No vowels 'sky'");
  testCountVowels("audio",4,"4 vowels and a consonent 'audio'");
};

isVowelTests();
countVowelsTests();