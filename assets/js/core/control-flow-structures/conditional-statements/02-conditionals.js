// The if...else statement is used to execute a block of code if a condition is true.
// If the condition evaluates to false, another block of code can be executed.

console.log('%cExample of an if...else statement', 'color: #1e3a8a; font-weight: bold;');

let availableBalance = 100;
const membershipCost = 200;
const creditCardActive = true;
const isPremiumCustomer = true;

console.log('Balance:', availableBalance);
console.log('Membership fee:', membershipCost);
console.log('Credit card active:', creditCardActive);
console.log('Premium customer:', isPremiumCustomer);

console.log('%cIf...else statement', 'color: #1e3a8a; font-weight: bold;');

if (availableBalance > membershipCost) {
  console.log('You can pay with your balance');
} else {
  console.log('You do not have enough balance');
}

console.log('%cIf statement with || operator', 'color: #1e3a8a; font-weight: bold;');

if (availableBalance >= membershipCost || creditCardActive) {
  // Nested if-else statements
  // An if statement inside another if statement
  if (availableBalance >= membershipCost) {
    console.log('You can pay with your balance');
  } else {
    console.log('You can pay with your credit card');
  }
} else {
  console.log('You do not have enough balance');
}

console.log('%cIf statement with && operator', 'color: #1e3a8a; font-weight: bold;');

if (availableBalance >= membershipCost && creditCardActive) {
  console.log('You can pay with your balance or credit card');
} else {
  console.log('You do not have enough balance');
}

console.log(
  '%cUse parentheses to control the order of evaluation',
  'color: #1e3a8a; font-weight: bold;'
);

if (isPremiumCustomer && (availableBalance >= membershipCost || creditCardActive)) {
  console.log('You can access the premium service');
} else {
  console.log('You cannot access the premium service');
}
