//* Object Destructuring
// Destructuring is a way to extract values from objects or arrays and assign them to variables

console.log('%cObject Destructuring', 'color: #1e3a8a; font-weight: bold;');

// Original code
const learning = {
  technology: 'JavaScript',
  framework: 'React',
  duration: '3 months',
};

console.log('Original object:', learning);

// Refactored code
const { technology, framework } = learning;

console.log('Extracted values:', { technology, framework });

//* Destructuring with two or more objects
// Original code
const product = {
  name: 'PC Workstation',
  price: 2500,
  available: true,
};

console.log('Product object:', product);

const customer = {
  name: 'Daniel',
  email: 'daniel.pompa@example.com',
  premium: false,
};

console.log('Customer object:', customer);

// Refactored code
const { name: productName, price, available } = product;
const { name: customerName, email, premium } = customer;

console.log('Product values:', { productName, price, available });
console.log('Customer values:', { customerName, email, premium });
