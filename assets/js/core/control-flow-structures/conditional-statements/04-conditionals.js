// Ternary operator
// condition ? expression1 : expression2
// If the condition is true, expression1 is executed
// If the condition is false, expression2 is executed

console.log('%cExample of ternary operator', 'color: #1e3a8a; font-weight: bold;');

const authenticated = true;

authenticated ? console.log('User authenticated') : console.log('Not authenticated');

console.log('%cDouble ternary operator', 'color: #1e3a8a; font-weight: bold;');

const availableBalance = 2000;
const purchase = 500;
const creditCardActive = true;
const isActiveMember = true;

console.log('Balance:', availableBalance);
console.log('Purchase:', purchase);
console.log('Credit card active:', creditCardActive);
console.log('Active member:', isActiveMember);

availableBalance >= purchase
  ? console.log('You can pay with your balance')
  : creditCardActive
  ? console.log('You can pay with a credit card')
  : console.log('Insufficient balance');

console.log('%cFunctions and nested ternaries', 'color: #1e3a8a; font-weight: bold;');

const canAccessPremiumService = (balance, cost, creditCard, member) => {
  return member
    ? balance >= cost || creditCard
      ? 'You can access the premium service'
      : 'You cannot access the premium service due to insufficient funds'
    : 'You cannot access the premium service because you are not an active member';
};

const membershipCost = 500;

console.log('Membership fee:', membershipCost);

// Result of the complex ternary operation
const accessMessage = canAccessPremiumService(
  availableBalance,
  membershipCost,
  creditCardActive,
  isActiveMember
);

console.log(accessMessage);

console.log(
  '%cAdditional example with multiple ternary operators',
  'color: #1e3a8a; font-weight: bold;'
);

const userRole = 'admin'; // Possible values: 'admin', 'user', 'guest'

const roleMessage =
  userRole === 'admin'
    ? 'You have full access to the system'
    : userRole === 'user'
    ? 'You have limited access to the system'
    : 'You have guest access';

console.log('User role:', userRole);
console.log(roleMessage);
