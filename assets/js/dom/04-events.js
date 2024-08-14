//* DOM Events - Click
// The click event fires when the user clicks on an element.

// Change the content of the <h1> element when clicked
const headingElement = document.querySelector('h1');
const initialText = 'Click on this text';
const alternateText = 'Document Object Model (DOM)';
let isToggled = false;

headingElement.textContent = initialText;
headingElement.style.cursor = 'pointer';

headingElement.addEventListener('click', () => {
  headingElement.textContent = isToggled ? initialText : alternateText;
  isToggled = !isToggled;
});

// Select all anchor elements inside the element with class 'nav'
const links = document.querySelectorAll('.nav a');

// Define an array of link texts
const linkTexts = ['MongoDB', 'Express', 'React', 'NodeJS'];

links.forEach((linkElement, index) => {
  if (index < linkTexts.length) {
    // Set the 'target' attribute of each element to '_blank'
    linkElement.setAttribute('target', '_blank');
    // Set the 'rel' attribute of each element to 'noopener noreferrer'
    linkElement.setAttribute('rel', 'noopener noreferrer');
    // Set the text content of each element
    linkElement.textContent = linkTexts[index];
  }
});

// Add a click event listener to each anchor element
links.forEach(linkElement => {
  linkElement.addEventListener('click', event => {
    event.preventDefault();
    console.log('You have clicked the link', linkElement.textContent);
  });
});
