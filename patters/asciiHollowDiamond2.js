const isEven = function (number) {
  return (number % 2) === 0;
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


const hollowLine = function (currentWidth, maxWidth, intersectSymb,rowStart,rowEnd) {
  const spacesInside = " ".repeat(currentWidth - (intersectSymb.length * 2));

  if (currentWidth === maxWidth) {
    return intersectSymb + spacesInside + intersectSymb;
  };

  return rowStart + spacesInside + rowEnd;
};


const formatGeneratedLine = function (content, spaces) {
  return spaces + content + spaces;
};


const generateLine = function (currentWidth, maxWidth, symbol, rowStart, rowEnd) {
  const spaces = " ".repeat((maxWidth - currentWidth) / 2);
  
  let content = symbol;
  if (isBetween(currentWidth,1,maxWidth)) {
    content = hollowLine(currentWidth,maxWidth,symbol,rowStart,rowEnd);
  };
  
  return formatGeneratedLine(content,spaces);
};



const printRow = function (currentWidth, maxWidth, symbol, rowStart, rowEnd) {
  console.log(generateLine(currentWidth,maxWidth,symbol,rowStart,rowEnd));
};


const generateHollowDiamond = function (width) {
  const maxWidth = changeToOdd(width);
  
  const openingSymb = "/";
  const closingSymb = "\\";
  const intersectSymb = "*";

  for (let currentWidth = 1; currentWidth <= maxWidth; currentWidth+=2) {
    printRow(currentWidth, maxWidth, intersectSymb, openingSymb, closingSymb);
  };

  for (let currentWidth = (maxWidth - 2); currentWidth > 0;currentWidth-=2) {
    printRow(currentWidth, maxWidth, intersectSymb, closingSymb, openingSymb);
  };
};

const main = function () {
  generateHollowDiamond(6);
};

main();