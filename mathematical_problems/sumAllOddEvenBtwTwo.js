function isEven(number) {
  return (number % 2) === 0;
};

function isOdd(number) {
  return !isEven(number);
};

function sumAllOddsBtwTwo(startNum, endNum) {
  if (startNum > endNum) {
    return 0;
  };
  let sum = sumAllOddsBtwTwo(startNum + 1, endNum);

  if (isOdd(startNum)) {
    sum = startNum + sum;
  };
  return sum;
};

function sumAllEvensBtwTwo(startNum, endNum) {
  if (startNum > endNum) {
    return 0;
  };
  let sum = sumAllEvensBtwTwo(startNum + 1, endNum);

  if (isEven(startNum)) {
    sum = startNum + sum;
  };
  return sum;
};

function main() {
  console.log("Sum of odds between two numbers : ");
  console.log(sumAllOddsBtwTwo(1, 10));

  console.log("Sum of evens between two numbers : ");
  console.log(sumAllEvensBtwTwo(1, 10));
};

main();