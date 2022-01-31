const fizzInput = document.querySelector("#fizz-input");
const primeInput = document.querySelector("#prime-input");
const romanInput = document.querySelector("#roman-input");

const fizzButton = document.querySelector("#fizz-button");
const primeButton = document.querySelector("#prime-button");
const romanButton = document.querySelector("#roman-button");

const fizzResult = document.querySelector("#fizz-result");
const primeResult = document.querySelector("#prime-result");
const romanResult = document.querySelector("#roman-result");

fizzButton.addEventListener("click", () => {
  fizzResult.innerHTML = fizzBuzz(fizzInput.value);
});

primeButton.addEventListener("click", () => {
  primeResult.innerHTML = `[${primeFactor(primeInput.value)}]`;
  primeInput;
});

romanButton.addEventListener("click", () => {
  romanResult.innerHTML = romanNumeral(romanInput.value);
});
