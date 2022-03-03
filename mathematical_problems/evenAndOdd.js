function isEven(number) {
  return (number % 2) === 0;
}

function isOdd(number) {
  return !isEven(number);
}

console.log(isOdd(3))
console.log(isEven(3))