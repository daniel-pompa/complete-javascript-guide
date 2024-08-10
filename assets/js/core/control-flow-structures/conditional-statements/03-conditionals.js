// The else...if statement is used to specify a new condition if the first condition is false.
// You can use else if to test multiple conditions.

console.log('%cExample of an else...if statement', 'color: #1e3a8a; font-weight: bold;');

let availableBalance = 100;
const membershipCost = 200;
const creditCardActive = true;

console.log('Balance:', availableBalance);
console.log('Membership fee:', membershipCost);
console.log('Credit card active:', creditCardActive);

if (availableBalance >= membershipCost) {
  console.log('You can pay the membership fee');
} else if (creditCardActive) {
  console.log('You can pay with the credit card');
} else {
  console.log('You cannot pay the membership fee');
}
