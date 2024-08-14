//* DOM Selectors
// The selectors are used to select the HTML elements in JavaScript.
// They are used to manipulate the HTML elements using JavaScript.
// There are various types of selectors in JavaScript.
// These are as follows:
// 1. Single Element Selector
// 2. Multiple Element Selector

//* Multiple Element Selectors
let result;

console.log('%cGet elements by class name', 'color: #1e3a8a; font-weight: bold;');

// Get all elements with class name 'link' and store them in the 'elements' array
const elements = [...document.getElementsByClassName('link')];
console.log({ elements });

result = elements.map(element => element.textContent).join(' - ');
console.log(result);

console.log('%cGet elements by tag name', 'color: #1e3a8a; font-weight: bold;');

// Get all elements with tag name 'a' and store them in the 'links' array
const links = [...document.getElementsByTagName('a')];
console.log({ links });

result = links.map(link => link.textContent).join(' - ');
console.log(result);

console.log('%cQuery selector all', 'color: #1e3a8a; font-weight: bold;');

// Get all elements with class name 'link' and store them in the 'navLinks' array
const navLinks = [...document.querySelectorAll('.link')];
console.log({ navLinks });

result = navLinks.map(element => element.textContent).join(' - ');
console.log(result);
