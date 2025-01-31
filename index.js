// index.js

const math = require('mathjs');

// Example usage of Math.js
const a = math.matrix([[1, 2], [3, 4]]);
const b = math.matrix([[5, 6], [7, 8]]);
const result = math.add(a, b);

console.log('Result of matrix addition:');
console.log(result);

// index.js
const math = require('mathjs');

function addMatrices(a, b) {
  try {
    return math.add(a, b);
  } catch (error) {
    console.error('Error adding matrices:', error.message);
    return null;
  }
}

const a = math.matrix([[1, 2], [3, 4]]);
const b = math.matrix([[5, 6], [7, 8]]);
const result = addMatrices(a, b);

if (result) {
  console.log('Result of matrix addition:');
  console.log(result);
}
