function averageOfThree(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
};

function percentAverageOfThree(num1, num2, num3, totalParts) {
  return (averageOfThree(num1, num2, num3) / totalParts) * 100 + "%";
};

function main() {
  console.log(averageOfThree(3,5,7));
  console.log(percentAverageOfThree(3,5,10,10));
};

main();