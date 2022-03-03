function productOfNNumbers(n) {
  // let product = 1;

  if (n <= 1) {
    // return product;
    return n;
  };

  // product = n * productOfNNumbers(n - 1);
  // return product;
  return n * productOfNNumbers(n - 1);
};

function main() {
  console.log(productOfNNumbers(0));
};

main();