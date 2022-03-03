function generateRow(multiplicand,multiplier) {
  return multiplicand + " * " + multiplier + " = " + multiplicand * multiplier;
};

function generateTable(multiplicand,limit) {
  for (let number = 1; number <= limit; number++) {
    console.log(generateRow(multiplicand, number));
  };
};

function main() {
  generateTable(2, 10);
};

main();