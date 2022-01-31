const primeFactor = (numToFactor) => {
  let num = numToFactor;
  const primeFactors = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      primeFactors.push(i);
      num /= i;
    }
  }
  return primeFactors;
};
