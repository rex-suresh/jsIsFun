function isEven(number) {
  return (number % 2) === 0;
};

function isOdd(number) {
  return !isEven(number);
};

function evensBetweenTwo(fromNumber, toNumber) {
  if (fromNumber > toNumber) {
    return ;
  };

  if (isEven(fromNumber)) {
    console.log(fromNumber);
  };
  evensBetweenTwo(fromNumber + 1, toNumber);
};

function oddsBetweenTwo(fromNumber, toNumber) {
  if (fromNumber > toNumber) {
    return ;
  };

  if (isOdd(fromNumber)) {
    console.log(fromNumber);
  };
  oddsBetweenTwo(fromNumber + 1, toNumber);
};

function evensBetweenTwoBackwards(fromNumber, toNumber) {
  if (fromNumber > toNumber) {
    return ;
  };

  evensBetweenTwoBackwards(fromNumber + 1, toNumber);

  if (isEven(fromNumber)) {
    console.log(fromNumber);
  };
};

function oddsBetweenTwoBackwards(fromNumber, toNumber) {
  if (fromNumber > toNumber) {
    return ;
  };
  
  oddsBetweenTwoBackwards(fromNumber + 1, toNumber);

  if (isOdd(fromNumber)) {
    console.log(fromNumber);
  };
};

function main() {
  console.log("Even numbers between 2 numbers");
  evensBetweenTwo(1, 10);
  
  console.log("Odd numbers between 2 numbers");
  oddsBetweenTwo(1, 10);
  
  console.log("Even numbers between 2 numbers Backwards");
  evensBetweenTwoBackwards(1, 10);
  
  console.log("Odd numbers between 2 numbers Backwards");
  oddsBetweenTwoBackwards(1,10);
};

main();