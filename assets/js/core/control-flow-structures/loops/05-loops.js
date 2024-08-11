// The for...in loop iterates a specified variable over all the enumerable properties of an object.

console.log('%cThe for...in loop', 'color: #1e3a8a; font-weight: bold;');

const achilles = {
  name: 'Achilles',
  father: 'Peleus',
  mother: 'Thetis',
};

for (let key in achilles) {
  // Check if the property is directly defined on the object (not inherited)
  if (achilles.hasOwnProperty.call(achilles, key)) {
    console.log(`${key}: ${achilles[key]}`);
  }
}
