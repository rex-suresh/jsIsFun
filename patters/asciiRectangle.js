const isEven = function (number) {
  return (number % 2) === 0;
};

const generateRow = function (width, symbol) {
  return symbol.repeat(width);
};

const printRow = function (width,currentLine) {
  const symbol = isEven(currentLine) ? "-" : "*";
  // const symbol = "*";
  console.log(generateRow(width,symbol));
};

const generateRectangle = function (width, height) {
  for (let currentLine = 1; currentLine <= height; currentLine++) {
    printRow(width,currentLine);
  };
};

const main = function () {
  generateRectangle(10,3);
};

main();