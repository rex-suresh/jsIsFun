function fibonacciTerm(term) {
  let currentTerm = 0;
  let nextTerm = 1;

  for (let termCount = 0; term > termCount; termCount++) {
    const priorTerm = currentTerm;
    currentTerm = nextTerm;
    nextTerm = currentTerm + priorTerm;
  };

  return currentTerm;
};

function formatFibonacciTermResult(term) {
  return term + " term value is " + fibonacciTerm(term);
}

function fibonacciSeries(count) {
  let term = 0;
  while (term <= count) {
    console.log(formatFibonacciTermResult(term));
    term++;
  };
};

function main() {
  fibonacciSeries(1477);
};

main();