/**
 * The switch statement is used to perform different actions based on different conditions.
 * The switch statement evaluates an expression and matches the expression's value to a case clause.
 * If a match is found, the code block following the case clause is executed.
 * If no match is found, the default code block is executed.
 */

console.log('%cExample of switch statement', 'color: #1e3a8a; font-weight: bold;');

// Enumeration of operation types
const OperationType = Object.freeze({
  ADD: 'add',
  SUBTRACT: 'subtract',
  MULTIPLY: 'multiply',
  DIVIDE: 'divide',
  POWER: 'power',
  SQUARE_ROOT: 'square_root',
  FACTORIAL: 'factorial',
});

// Helper functions to handle each operation
const handleAddition = (a, b) => console.log(`${a} + ${b} =`, a + b);
const handleSubtraction = (a, b) => console.log(`${a} - ${b} =`, a - b);
const handleMultiplication = (a, b) => console.log(`${a} * ${b} =`, a * b);
const handleDivision = (a, b) =>
  b === 0
    ? console.error('Error: Division by zero')
    : console.log(`${a} / ${b} =`, a / b);

const handlePower = (a, b) => console.log(`${a} ^ ${b} =`, Math.pow(a, b));
const handleSquareRoot = a =>
  a < 0
    ? console.error('Error: Cannot calculate the square root of a negative number')
    : console.log(`√${a} =`, Math.sqrt(a));

const handleFactorial = a => {
  if (a < 0) {
    console.error('Error: Factorial of a negative number is undefined');
    return;
  }
  const factorial = n => (n === 0 || n === 1 ? 1 : n * factorial(n - 1));
  console.log(`${a}! =`, factorial(a));
};

// Main function to perform the calculation
const calculate = (operation, a, b = null) => {
  switch (operation) {
    case OperationType.ADD:
      handleAddition(a, b);
      break;
    case OperationType.SUBTRACT:
      handleSubtraction(a, b);
      break;
    case OperationType.MULTIPLY:
      handleMultiplication(a, b);
      break;
    case OperationType.DIVIDE:
      handleDivision(a, b);
      break;
    case OperationType.POWER:
      handlePower(a, b);
      break;
    case OperationType.SQUARE_ROOT:
      handleSquareRoot(a);
      break;
    case OperationType.FACTORIAL:
      handleFactorial(a);
      break;
    default:
      console.error('Unknown operation type:', operation);
  }
};

// Usage examples
calculate(OperationType.ADD, 10, 5); // Logs: 10 + 5 = 15
calculate(OperationType.SUBTRACT, 10, 5); // Logs: 10 - 5 = 5
calculate(OperationType.MULTIPLY, 10, 5); // Logs: 10 * 5 = 50
calculate(OperationType.DIVIDE, 10, 5); // Logs: 10 / 5 = 2
calculate(OperationType.POWER, 2, 3); // Logs: 2 ^ 3 = 8
calculate(OperationType.SQUARE_ROOT, 16); // Logs: √16 = 4
calculate(OperationType.FACTORIAL, 5); // Logs: 5! = 120
calculate(OperationType.DIVIDE, 10, 0); // Error: Division by zero
calculate(OperationType.SQUARE_ROOT, -4); // Error: Cannot calculate square root of a negative number
calculate(OperationType.FACTORIAL, -4); // Error: Factorial of a negative number is undefined
calculate('unknown', 10, 5); // Error: Unknown operation type: unknown
