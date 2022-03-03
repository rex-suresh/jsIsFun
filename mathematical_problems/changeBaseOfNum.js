// function array(operation, argument) {
//   if (operation == "length") {
//     return 5;
//   };
//   if (operation == "get") {
//     switch (argument) {
//       case 0:
//         return 10;
//       case 1:
//         return 1010;
//       case 2:
//         return 101;
//       case 3:
//         return 11;
//       case 4:
//         return 1;
//       default:
//         break;
//     };
//   };
// };

// function getLastDigit(number) {
//   return number % 10;
// };

// function getRemainingNumber(number) {
//   return Math.floor(number / 10);
// };

// function changeToBase(number, baseValue) {
//   let numberCandidate = number;
//   let baseNumber = 0;

//   for (let placePower = 0; numberCandidate > 0; placePower++) {
    
//     let digit = getLastDigit(numberCandidate);
//     numberCandidate = getRemainingNumber(numberCandidate);
    
//     if (Math.floor(digit / baseValue) !== 0) {
//       return "Given number has a digit external to base " + baseValue;
//     };
    
//     baseNumber += digit * Math.pow(baseValue, placePower);
//   };

//   return baseNumber;
// };

// function main() {
//   const base = 2;
//   const number = 10;
//   console.log(changeToBase(2, 2));
//   console.log(changeToBase(3, 3));
//   console.log(changeToBase(2, 4));
//   console.log(changeToBase(2, 5));
//   console.log(changeToBase(2, 6));
// };

// main();


/*
function highestBaseExponent(number, base) {
  let exponent = 0;
  let basePower = 0;

  do {
    exponent++;
    basePower = Math.pow(base, exponent);
  } while (number > basePower) ;

  return (exponent - 1) ;
};

function calcPower(number, exponent) {
  return Math.pow(number, exponent);
};

function maxFullSubtractions(number, subtrahend) {
  return Math.floor(number/subtrahend);
};

function subtractBasePower(number, multiple, base, exponent) {
  return number - (multiple * Math.pow(base, exponent));
};

function baseCharEquivalent(number) {
  switch (number) {
    case 10:
      return "A";
    case 11:
      return "B";
    case 12:
      return "C";
    case 13:
      return "D";
    case 14:
      return "E";
    case 15:
      return "F";
    case 16:
      return "G";
    case 17:
      return "H";
    case 18:
      return "I";
    case 19:
      return "J";
    case 20:
      return "K";
    default:
      return "" + number;
  };
};

function changeBase(number, base) {
  let numberCandidate = number;
  let convertedBaseNumber = "";
  let exponent = highestBaseExponent(number, base);

  do {
    const basePower = calcPower(base, exponent);
    const multipleOfBasePower = maxFullSubtractions(numberCandidate, basePower);
    
    numberCandidate = subtractBasePower(numberCandidate, multipleOfBasePower, base, exponent);

    convertedBaseNumber += baseCharEquivalent(multipleOfBasePower);
    exponent--;
  } while (numberCandidate > 0);
  
  return convertedBaseNumber;
};

function main() {
  console.log("number base 2", changeBase(0, 2));
  console.log("number base 10", changeBase(1234, 10));
  console.log("number base 2", changeBase(1234, 2));
  console.log("number base 4", changeBase(1234, 4));
  console.log("number base 8", changeBase(1234, 8));
  console.log("number base 16", changeBase(1234, 16));
};

main();
*/
