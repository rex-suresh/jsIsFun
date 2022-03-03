function sumOfNumbers(start,end) {
  if (end <= start) {
    return end;
  };
  
  return end + sumOfNumbers(start,end - 1);
};

function main() {
  console.log(sumOfNumbers(2,10));
};

main();