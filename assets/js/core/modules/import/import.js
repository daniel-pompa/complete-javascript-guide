//* Import
// The import statement is used to import bindings which are exported by another module.

//* Import the customers data from an external file
import customers from '../../../../data/customers.js';

// Log all customers
console.log(`%cCustomers`, 'color: #1e3a8a; font-weight: bold;');

console.log(customers);

/**
 * Find a customer by their ID.
 * @param {string} id - The ID of the customer to find.
 * @returns {Object|undefined} The customer object if found, undefined otherwise.
 */
const getCustomerById = id => {
  // Iterate over the customers array and find the customer with a matching ID
  return customers.find(customer => customer.id === id);
};

// Log the customer found by ID 'a1d40e6a-bd34-4281-99dc-141eadb19c01'
console.log(`%cCustomer by ID`, 'color: #1e3a8a; font-weight: bold;');

console.log(getCustomerById('a1d40e6a-bd34-4281-99dc-141eadb19c01'));

/**
 * Find a customer by their email.
 * @param {string} email - The e-mail of the customer to find.
 * @returns {Object|undefined} The customer object if found, undefined otherwise.
 */
const getCustomerByEmail = email => {
  // Iterate over the customers array and find the customer with a matching email
  return customers.find(customer => customer.email === email);
};

// Log the customer found by email 'oscar.pompa@gmail.com'
console.log(`%cCustomer by email`, 'color: #1e3a8a; font-weight: bold;');

console.log(getCustomerByEmail('oscar.pompa@gmail.com'));

/**
 * Retrieves all the customers who are premium.
 * @return {Array} An array of customer objects who are premium.
 */
const getCustomersPremium = () => {
  // Filters the customers array to only include customers who are premium.
  // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
  return customers.filter(customer => customer.premium);
};

// Log all premium customers
console.log(`%cPremium customers`, 'color: #1e3a8a; font-weight: bold;');

console.log(getCustomersPremium());
