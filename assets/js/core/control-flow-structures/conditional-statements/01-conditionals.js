// The if statement checks a condition and executes a block of code if the condition is true.
console.log('%cExample of an if statement', 'color: #1e3a8a; font-weight: bold;');

const availableBalance = 2000;
const withdrawalAmount = 500;

console.log('Available balance:', availableBalance);
console.log('Requested withdrawal amount:', withdrawalAmount);

// Verify if the available balance is sufficient for the requested withdrawal
if (availableBalance >= withdrawalAmount) {
  console.log('Transaction successful');
  console.log('New available balance:', availableBalance - withdrawalAmount);
}
