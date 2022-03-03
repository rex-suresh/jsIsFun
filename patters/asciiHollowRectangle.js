const isBetween = function (number, start, end) {
  return (number > start) && (number < end);
};

const generateHollowRow = function (symbol, width) {
  const rowStart = symbol;
  const rowEnd = symbol;
  const spaces = " ".repeat(width - (symbol.length * 2));

  return rowStart + spaces + rowEnd;
};

const generateRow = function (currentLine, width, height) {
  const symbol = "*";
  
  if (isBetween(currentLine,1,height)) {
    return generateHollowRow(symbol,width);
  };

  return symbol.repeat(width);
};

const printRow = function (currentLine, width, height) {
  console.log(generateRow(currentLine, width, height));
};

const generateHollowRectangle = function (width,height) {
  for (let currentLine = 1; currentLine <= height; currentLine++) {
    printRow(currentLine, width, height);
  };
};

const main = function () {
  generateHollowRectangle(10,5);
};

main();