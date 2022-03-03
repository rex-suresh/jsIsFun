function simpleInterest(principle,rate,time) {
  return (principle * rate * time) / 100;
};

function compoundInterest(principle, rate, time, compFreq) {
  let compRate = rate / compFreq;
  let amount = principle;
  
  for (let compounds = time * compFreq; (compounds > 0); compounds--) {
    amount = simpleInterest(amount, compRate, 1) + amount;
  }
  return amount - principle;
};

function main() {
  console.log("Simple interest",simpleInterest(1000, 10, 1));
  console.log("Compound interest",compoundInterest(1000, 10, 1,2));
};

main();