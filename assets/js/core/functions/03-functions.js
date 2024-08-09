'color: #1e3a8a; font-weight: bold;';

console.log('%cArrow functions', 'color: #1e3a8a; font-weight: bold;');

/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
const sum = (a, b) => a + b;

/**
 * Subtracts two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The difference between a and b.
 */
const subtract = (a, b) => a - b;

/**
 * Multiplies two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 */
const multiply = (a, b) => a * b;

/**
 * Divides two numbers and returns the result rounded to a fixed number of decimal places.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @param {number} [decimalPlaces=2] - The number of decimal places to round the result to.
 * @returns {number} The quotient of the division, rounded to the specified number of decimal places.
 * @throws {Error} If the divisor is zero.
 */
const divide = (a, b, decimalPlaces = 2) => {
  if (b === 0) {
    throw new Error('Divisor cannot be zero');
  }
  return Number((a / b).toFixed(decimalPlaces));
};

/**
 * Calculates the square root of a number.
 * @param {number} n - The number.
 * @returns {number} The square root of n.
 */
const squareRoot = n => Math.sqrt(n);

/**
 * Calculates the percentage of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The calculated percentage.
 */
const calculatePercentage = (a, b) => {
  return (a * b) / 100;
};

/**
 * Calculates the power of a number.
 * @param {number} n - The base number.
 * @param {number} p - The power.
 * @returns {number} The result of raising n to the power of p.
 */
const pow = (n, p) => Math.pow(n, p);

/**
 * Calculates the square of a number.
 * @param {number} n - The number.
 * @returns {number} The square of n.
 */
const square = n => n * n;

/**
 * Returns the absolute value of a number.
 * @param {number} a - The number.
 * @returns {number} The absolute value of a.
 */
const absolute = a => Math.abs(a);

/**
 * Calculates the factorial of a given number.
 * @param {number} n - The number to calculate the factorial of.
 * @returns {number} The factorial of the given number.
 * @throws {Error} - If the number is negative.
 */
const factorial = n => {
  if (n < 0) {
    throw new Error('Number cannot be negative');
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Test the functions
const a = 10;
const b = 3;
const c = -20;

console.log(`${a} + ${b} =`, sum(a, b));
console.log(`${a} - ${b} =`, subtract(a, b));
console.log(`${a} * ${b} =`, multiply(a, b));
console.log(`${a} / ${b} =`, divide(a, b));
console.log(`√${b} =`, squareRoot(b));
console.log(`${b}% of ${a} =`, calculatePercentage(b, a));
console.log(`${a} ** 2 =`, square(a));
console.log(`${a} ^ ${b} =`, pow(a, b));
console.log(`|${c}| =`, absolute(c));
console.log(`${a}! =`, factorial(a));
