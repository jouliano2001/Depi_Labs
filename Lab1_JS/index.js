// Question 1
function getType(variable) {
  return typeof variable;
}

// Question 2
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: Division by zero";
  }
}

// Question 3
function isNaNValue(value) {
  return isNaN(value);
}

// Question 4
function isEven(number) {
  return number % 2 === 0;
}

// Question 5
function concatenateStrings(str1, str2) {
  return str1 + " " + str2;
}

// Question 6
function toUpperCase(str) {
  return str.toUpperCase();
}

// Question 7
function getCharacterAtIndex(str, index) {
  return str.charAt(index);
}

// Question 8
function greet(name) {
  return `Hello, ${name}`;
}

// Question 9
function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

// Question 10
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Question 11
function checkNumberSign(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

// Question 12
function safeEval(expression) {
  try {
    return eval(expression);
  } catch (error) {
    return "Error: Invalid Expression";
  }
}
