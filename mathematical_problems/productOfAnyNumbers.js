function productOfNNumbers(start, end) {
  if (end <= start) {
    return start;
  };

  return end * productOfNNumbers(start, end - 1);
};

function main() {
  console.log(productOfNNumbers(1, 5));
};

main();