function getLastDigit(number) {
  return number % 10;
};

function getRemaining(number) {
  return Math.floor(number / 10);
};

function isNotContained(digit, number) {
  if (number <= 0) {
    return true;
  };

  const numberCandidate = getRemaining(number);
  const lastDigit = getLastDigit(number);

  const matchResult = isNotContained(digit,numberCandidate);
  return matchResult && (lastDigit !== digit);
};

function areDigitsUnique(number) {
  if (number <= 9) {
    return true;
  };
  const digit = getLastDigit(number);

  return areDigitsUnique(getRemaining(number)) && isNotContained(digit,getRemaining(number));
};

// function formatResult(number) {
//   const matchCount = areDigitsUnique(number);

//   let message = number + " // " + "true : all unique"
//   if (matchCount !== 0) {
//     message = number + " // " + "false : " + matchCount + " repeats"
//   };

//   return message;
// };
// function getLength(number) {
//   if (number <= 0) {
//     return 0;
//   };
  
//   const remainder = number % 10;
//   return 1 + getLength((number - remainder) / 10);
// };

function main() {
  console.log("0",areDigitsUnique(0));
  console.log("1",areDigitsUnique(1));
  console.log("2",areDigitsUnique(2));
  console.log("3",areDigitsUnique(3));
  console.log("4",areDigitsUnique(4));
  console.log("11",areDigitsUnique(11));
  console.log("12",areDigitsUnique(12));
  console.log("13",areDigitsUnique(13));
  console.log("100",areDigitsUnique(100));
  console.log("1199",areDigitsUnique(1199));
};

main();

// console.log(isNotContained(0,123));