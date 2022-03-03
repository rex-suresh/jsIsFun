function isDivisor(number,divisor) {
  return number % divisor === 0;
};

function minOfTwo(num1,num2) {
  return (num1 < num2) ? num1 : num2;
};

function getProduct(num1, num2) {
  return num1 * num2
}

function gcd(num1, num2) {
  for (let divisor = minOfTwo(num1, num2); (divisor >= 1) ; divisor--) {
    if (isDivisor(num1, divisor) && isDivisor(num2, divisor)) {
      return divisor;
    }
  }
};

function lcm(num1,num2) {
  return num1 * num2 / gcd(num1, num2);
};

function main() {
  console.log(gcd(2, 7));
  console.log(lcm(2, 7));
};

main();