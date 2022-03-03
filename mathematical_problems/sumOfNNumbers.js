function sumOfNumbers(n) {
  if (n <= 0) {
    return n;
  };
  
  return n + sumOfNumbers(n - 1);
};

function main() {
  console.log(sumOfNumbers(10));
};

main();