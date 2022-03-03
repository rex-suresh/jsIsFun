const isEven = function (number) {
  return (number % 2) === 0;
};

const addTwo = function (number) {
  return number + 2;
};

const subtractTwo = function (number) {
  return number - 2;
};

const isBetween = function (number, start, end) {
  return (number > start) && (number <= end);
};

const changeToOdd = function (number) {
  if (isEven(number)) {
    return (number + 1);
  };
  return number;
};

const generateHollowLine = function (currentWidth, symbol) {
  const spacesInside = " ".repeat(currentWidth - (symbol.length * 2));
  
  return symbol + spacesInside + symbol;
};

const formatGeneratedLine = function (content, spaces) {
  return spaces + content + spaces;
};

const generateLine = function (currentWidth, maxWidth) {
  const symbol = "*";
  const spaces = " ".repeat((maxWidth - currentWidth) / 2);

  let content = symbol;
  if (isBetween(currentWidth,1,maxWidth)) {
    content = generateHollowLine(currentWidth,symbol);
  };
  
  return formatGeneratedLine(content,spaces);
};

const printRow = function (currentWidth,maxWidth) {
  console.log(generateLine(currentWidth,maxWidth));
};

const generateHollowDiamond = function (width) {
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
  generateHollowDiamond(10);
};

main();