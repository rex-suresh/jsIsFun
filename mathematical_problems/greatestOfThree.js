function greatestOfTwo(num1,num2) {
  return (num1 > num2) ? num1 : num2;
}

function greatestOfThree(num1, num2, num3) {
  largestNum = greatestOfTwo(num1, num2);

  return greatestOfTwo(largestNum, num3);
};

function main() {
  console.log(greatestOfThree(2,2,3));
};

main();