//* DOM Events - Submit Event
// The submit event fires when a form is submitted.

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

// Select the form element using its id
const form = document.querySelector('#form');

// Function to validate email format using a regular expression
const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Function to handle form submission
const handleFormSubmit = event => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the email and password inputs
  const emailInput = form.querySelector('input[type="email"]').value;
  const passwordInput = form.querySelector('input[type="password"]').value;

  // Check if either email or password input is empty
  if (!emailInput || !passwordInput) {
    // Log an error message if any field is empty
    console.error('All fields are required');
    return; // Exit early if any field is empty
  }

  // Validate the format of the email
  if (!validateEmail(emailInput)) {
    // Log an error message if email format is invalid
    console.error('Invalid email format');
    return; // Exit early if email format is invalid
  }

  // If all checks pass, log the email and password inputs
  console.log('Email address:', emailInput);
  console.log('Password:', passwordInput);

  // Log a success message for form submission
  console.log('Form submitted successfully');

  // Reset the form
  form.reset();
};

// Add an event listener to the form for the submit event
form.addEventListener('submit', handleFormSubmit);
