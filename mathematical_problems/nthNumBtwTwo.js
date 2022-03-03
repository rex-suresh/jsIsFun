function nthNumBetweenTwo(differnce,fromNumber, toNumber) {
  if (fromNumber > toNumber) {
    return ;
  };
  console.log(fromNumber);

  nthNumBetweenTwo(differnce, fromNumber + differnce, toNumber);
};


function main() {
  console.log("nth number between 2 numbers : ");
  nthNumBetweenTwo(2, 1, 10);
};

main();