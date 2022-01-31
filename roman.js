const romanNumeral = (numToSolve) => {
  let num = parseInt(numToSolve);

  if (num <= 0 || num > 3000) {
    return "Please provide a positive number between 1 and 3000";
  }
  if (typeof num === "string") {
    return "Please insert a number instead of string type";
  }
  const keys = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanValues = {};
  keys.forEach((key, i) => {
    romanValues[key] = values[i];
  });

  let romanNumber = "";
  for (const property in romanValues) {
    romanNumber += property.repeat(Math.floor(num / romanValues[property]));
    num %= romanValues[property];
  }
  return romanNumber;
};
