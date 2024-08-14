//* DOM Events - Input
// The input event fires when the value of an input element changes.

// Select all 'a' elements and convert to array
const links = Array.from(document.querySelectorAll('a'));

// Define an array of objects containing link data
const linkData = [
  { text: 'MongoDB', url: 'https://www.mongodb.com/docs/' },
  { text: 'Express', url: 'https://expressjs.com/' },
  { text: 'React', url: 'https://es.react.dev/' },
  { text: 'NodeJS', url: 'https://nodejs.org/en' },
];

// Set attributes and text content for each link
links.forEach((link, index) => {
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
  link.textContent = linkData[index].text;
  link.setAttribute('href', linkData[index].url);
});

// Function to toggle password visibility
const togglePasswordVisibility = () => {
  const password = document.querySelector('#password');
  password.type = 'text';

  setTimeout(() => {
    password.type = 'password';
  }, 200);
};

// Function to validate email format using a regular expression
const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Select the email and password input elements from the DOM
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Add input event listener to email input element
emailInput.addEventListener('input', event => {
  const email = event.target.value.trim();
  console.log(email);

  if (!validateEmail(email)) {
    console.error('Invalid email. Please enter a valid email address');
  } else {
    console.log('%cThe email address you provided is valid', 'color: #16a34a');
  }
});

// Add input event listener to password input element
passwordInput.addEventListener('input', togglePasswordVisibility);
