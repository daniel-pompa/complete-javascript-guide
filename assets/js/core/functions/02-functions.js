console.log('%cFuntion expression', 'color: #1e3a8a; font-weight: bold;');

/**
 * Greets the user with a customizable message and name.
 * @param {string} [message='Hello world!'] - The greeting message.
 * @param {string} [name=''] - The name of the person to greet.
 */
const greetUser = function (message = 'Hello world!', name = '') {
  console.log(`${message} ${name}`);
};

greetUser();
greetUser('Hello', 'Gael');

/**
 * Returns the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
const sum = function (a, b) {
  return a + b;
};

/**
 * Returns the difference between two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The difference between a and b.
 */
const subtract = function (a, b) {
  return a - b;
};

/**
 * Returns the product of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 */
const multiply = function (a, b) {
  return a * b;
};

/**
 * Returns the quotient of two numbers.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient of a divided by b.
 * @throws {Error} If the divisor is zero.
 */
const divide = function (a, b) {
  if (b === 0) {
    throw new Error('Divisor cannot be zero');
  }
  return a / b;
};

/**
 * Returns the remainder of two numbers.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The remainder of a divided by b.
 * @throws {Error} If the divisor is zero.
 */
const modulus = function (a, b) {
  if (b === 0) {
    throw new Error('Divisor cannot be zero');
  }
  return a % b;
};

/**
 * Returns the power of a number.
 * @param {number} a - The base.
 * @param {number} b - The exponent.
 * @returns {number} The result of raising a to the power of b.
 */
const pow = function (a, b) {
  return a ** b;
};

/**
 * Returns the square root of a number.
 * @param {number} a - The number.
 * @returns {number} The square root of a.
 */
const squareRoot = function (a) {
  return Math.sqrt(a);
};

/**
 * Calculate the percentage of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The calculated percentage.
 */
function calculatePercentage(a, b) {
  return (a * b) / 100;
}

/**
 * Returns the absolute value of a number.
 * @param {number} a - The number.
 * @returns {number} The absolute value of a.
 */
const absolute = function (a) {
  return Math.abs(a);
};

/**
 * Returns the factorial of a number.
 * @param {number} a - The number.
 * @returns {number} The factorial of a.
 * @throws {Error} If the number is negative.
 */
const factorial = function (a) {
  if (a < 0) {
    throw new Error('Number cannot be negative');
  }
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
};

// Test the functions
const a = 15;
const b = 5;
const c = -10;

console.log(`${a} + ${b} =`, sum(a, b));
console.log(`${a} - ${b} =`, subtract(a, b));
console.log(`${a} * ${b} =`, multiply(a, b));
console.log(`${a} / ${b} =`, divide(a, b));
console.log(`√${b} =`, squareRoot(b));
console.log(`${a} ^ ${b} =`, pow(a, b));
console.log(`${b}% of ${a} =`, calculatePercentage(b, a));
console.log(`|${c}| =`, absolute(c));
console.log(`${b}! =`, factorial(b));
