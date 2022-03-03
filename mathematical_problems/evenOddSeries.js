function isEven(number) {
  return (number % 2) === 0;
};

function isOdd(number) {
  return !isEven(number);
};

function generateEvenSeries(limit) {
  if (limit < 1) {
    return;
  } else {
    generateEvenSeries(limit - 1);
  };

  if (isEven(limit)) {
    console.log(limit);
  };
};

function generateOddSeries(limit) {
  if (limit < 1) {
    return;
  } else {
    generateOddSeries(limit - 1);
  };

  if (isOdd(limit)) {
    console.log(limit);
  };
};

function main() {
  console.log("Even Series");
  generateEvenSeries(10); // max limit 10830
  
  console.log("Odd Series");
  generateOddSeries(10); // max limit 10830
};

main();