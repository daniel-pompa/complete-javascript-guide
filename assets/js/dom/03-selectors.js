//* Manipulating DOM Elements with JavaScript
// Change title text
const title = document.querySelector('.title');
title.textContent = 'DOM - Selectors';

// Change CSS properties
title.style.cssText = `
  background-color: #e8f0fe;
  border-radius: 4px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 10px;
`;

// Set the value of the e-mail field
const email = document.querySelector('#email');
email.value = 'daniel.pompa@gmail.com';

// Set the value of the password field
const password = document.querySelector('#password');
password.value = '123456';

// Select all elements with the tag name 'a' and store them in the variable 'links'
const elements = document.querySelectorAll('a');

// Define an array of links
const linkTexts = ['MongoDB', 'Express', 'React', 'NodeJS'];

elements.forEach((element, index) => {
  // Set the 'target' attribute of each element to '_blank'
  element.setAttribute('target', '_blank');
  // Set the 'rel' attribute of each element to 'noopener noreferrer'
  element.setAttribute('rel', 'noopener noreferrer');
  // Set the text content of each element
  element.textContent = linkTexts[index];
});

// Select all elements with the class name 'link' and store them in the 'links' variable
const links = document.querySelectorAll('.link');

// Define an array of URLs
const urls = [
  'https://www.mongodb.com/docs/',
  'https://expressjs.com/',
  'https://es.react.dev/',
  'https://nodejs.org/en',
];

// Loop through the 'links' array and set the 'href' attribute of each element
links.forEach((link, index) => {
  if (index < urls.length) {
    link.setAttribute('href', urls[index]);
  }
});
