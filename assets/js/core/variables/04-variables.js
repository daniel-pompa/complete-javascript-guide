//* Scope of variables
// The scope of a variable is the part of the code where it can be accessed and modified
// The scope of a variable is determined by where it is declared and where it is used

console.log('%cAlcance de las variables', 'color: #1e3a8a; font-weight: bold;');

//* Global scope
// This variable is available everywhere in the code
const message = 'Global variable';

console.log({ message }); // Print the value of the global variable

//* Local scope
// This variable is only available inside the function
function localScope() {
  // This variable is only available inside the function
  const message = 'Local variable';
  // Print the value of the local variable
  console.log({ message });
}

localScope();

//* Block scope
// This variable is only available inside the block
function blockScope() {
  // This variable is only available inside the block
  if (true) {
    const message = 'Block variable';
    // Print the value of the block-scoped variable
    console.log({ message });
  }
}

blockScope();
