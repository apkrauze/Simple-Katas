const fizzBuzz = (number) => {
  const num = parseInt(number);
  if (num < 0 || num > 100) {
    return "Please provide a positive number between 1-100";
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }
  if (num % 3 === 0) {
    return "fizz";
  }
  if (num % 5 === 0) {
    return "buzz";
  }
  if (typeof num !== "number") {
    return "Please provide a number. Try again";
  }
  return num;
};
