function factorial(number) {
  let product = 1;
  for (let term = number; term > 1; term--) {
    product = product * term;
  };
  return product;
};

function factRecursive(number) {
  let product = 1;
  if (number <= 1) {
    return product;
  };
  return number * factRecursive(number - 1);
};

function main() {
  console.log(factorial(4));
  console.log(factRecursive(4));
};

main();