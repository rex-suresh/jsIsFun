const isEven = function (number) {
  return (number % 2) === 0;
};

const addTwo = function (number) {
  return number + 2;
};

const subtractTwo = function (number) {
  return number - 2;
};

const changeToOdd = function (number) {
  if (isEven(number)) {
    return (number + 1);
  };
  return number;
};

const generateLine = function (currentWidth, maxWidth) {
  const symbol = "*";
  const spaces = " ".repeat((maxWidth - currentWidth) / 2);
  
  return spaces + symbol.repeat(currentWidth) + spaces;
};

const printRow = function (currentWidth,maxWidth) {
  console.log(generateLine(currentWidth,maxWidth));
};

const generateDiamond = function (width) {
  const maxWidth = changeToOdd(width);
  let operation = addTwo;

  for (let currentWidth = 1; currentWidth >= 0; currentWidth = operation(currentWidth)) {
    printRow(currentWidth, maxWidth);

    if (currentWidth >= maxWidth) {
      operation = subtractTwo;
    };
  };
};

const main = function () {
  generateDiamond(6);
};

main();