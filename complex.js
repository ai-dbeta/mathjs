// complex.js
const math = require('mathjs');

// Function to add two complex numbers
function addComplex(a, b) {
  return math.add(math.complex(a), math.complex(b));
}

// Function to multiply two complex numbers
function multiplyComplex(a, b) {
  return math.multiply(math.complex(a), math.complex(b));
}

// Example usage
const c1 = '2 + 3i';
const c2 = '1 - 4i';
console.log(`Addition: ${addComplex(c1, c2)}`); // Output: 3 - 1i
console.log(`Multiplication: ${multiplyComplex(c1, c2)}`); // Output: 14 - 5i

module.exports = { addComplex, multiplyComplex };
