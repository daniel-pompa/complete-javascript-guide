//* Primitive Data Types
// Undefined: a value that is not defined
// Boolean: a logical value that can be true or false
// Number: an integer or a floating-point number
// BigInt: an integer with arbitrary precision
// String: a sequence of characters representing a text value
// Symbol: a data type whose instances are unique and immutable
// Null: a special value that represents the absence of a value

console.log('%cTipos de datos primitivos', 'color: #1e3a8a; font-weight: bold;');

// Undefined
let undefinedData;
console.log({ undefinedData }, typeof undefinedData);

// Boolean
const isTrue = true;
console.log({ isTrue }, typeof isTrue);

const isFalse = false;
console.log({ isFalse }, typeof isFalse);

// Number
const integer = 10;
console.log({ integer }, typeof integer);

const negativeNumber = -10;
console.log({ negativeNumber }, typeof negativeNumber);

const float = 10.5;
console.log({ float }, typeof float);

const number = Number('31');
console.log({ number }, typeof number);

// BigInt
const bigInt = 9856145631432732145588458632799n;
console.log({ bigInt }, typeof bigInt);

// String
const firstName = 'Daniel';
const age = '49';
console.log({ firstName }, typeof firstName);
console.log({ age }, typeof age);

// Symbol
const firstSymbol = Symbol(20);
const secondSymbol = Symbol(20);
console.log({ firstSymbol, secondSymbol });
console.log('firstSymbol === secondSymbol', firstSymbol === secondSymbol); // Symbols are always unique
console.log('firstSymbol.valueOf()', firstSymbol.valueOf());
console.log('secondSymbol.valueOf()', secondSymbol.valueOf());

// Null
// Note: typeof null is 'object', which is a known JavaScript quirk
const nullData = null;
console.log({ nullData }, typeof nullData);
