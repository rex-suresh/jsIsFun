const line = function (width) {
  const asciiSymbol = "*";
  return asciiSymbol.repeat(width);
};

const printLineLeft = function (lineNumber, size) {
  console.log(line(lineNumber).padEnd(size));
};

const printLineRight = function (lineNumber, size) {
  console.log(line(lineNumber).padStart(size));
};

const leftSidedTriangle = function (size) {
  for (let lineNumber = 1; lineNumber <= size; lineNumber++) {
    printLineLeft(lineNumber, size);
  };
};

const rightSidedTriangle = function (size) {
  for (let lineNumber = 1; lineNumber <= size; lineNumber++) {
    printLineRight(lineNumber, size);
  };
};

const main = function () {
  console.log("Right angle right sided triangle :");
  rightSidedTriangle(10);
  
  console.log("Right angle left sided triangle :");
  leftSidedTriangle(10);
};

main();