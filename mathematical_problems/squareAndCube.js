function squareOfNum(number) {
  return number ** 2;
};

function cubeOfNum(number) {
  return number * squareOfNum(number);
};

console.log(squareOfNum(2));
console.log(cubeOfNum(2));