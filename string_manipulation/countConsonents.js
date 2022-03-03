const isVowel = function (letter) {
  return "aeiou".includes(letter.toLowerCase());
};

const countConsonents = function (word) {
  let vowelCount = 0;

  for (let index = 0; index < word.length; index++) {
    // if (isVowel(word[index])) {
    //   vowelCount++;
    // };
    vowelCount += (isVowel(word[index])) ? 1 : 0;
  };
  return word.length - vowelCount;
};

const testIsVowel = function (letter, expectedReturn, message) {
  const passResult = (isVowel(letter) === expectedReturn);
  const mark = passResult ? "✓" : "x";
  
  console.log(mark, " - ", message);
  return passResult;
};

const testCountConsonents = function (word, expectedReturn, message) {
  const passResult = (countConsonents(word) === expectedReturn);
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

const countConsonentsTests = function () {
  console.log("\ncountConsonents function Test : ");
  
  testCountConsonents("aa",0,"No consonents,a vowel repeated twice 'aa'");
  testCountConsonents("be",1,"A consonent, and a vowel 'be'");
  testCountConsonents("sky",3,"String with 3 consonents 'sky'");
  testCountConsonents("audio",1,"String with 1 consonent, remaining vowels 'audio'");
};

isVowelTests();
countConsonentsTests();