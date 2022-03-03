function restOfNumber(number) {
  return Math.floor(number / 10);
}

function lastDigit(num) {
  return num % 10;
}

function isDigitUnique(frequencies, digit) {
  const occurrences = lastDigit(Math.floor(frequencies / Math.pow(10, digit)));
  return occurrences === 0;
}

function countDigit(frequencies, digit) {
  return frequencies + Math.pow(10, digit);
}

function areDigitsUnique(number) {
  let frequencies = 0;
  
  while (number >= 10) {
    if (!isDigitUnique(frequencies, lastDigit(number))) {
      return false;
    }
    frequencies = countDigit(frequencies, lastDigit(number));
    number = restOfNumber(number);
  }
  return true;
}

console.log(areDigitsUnique(123));