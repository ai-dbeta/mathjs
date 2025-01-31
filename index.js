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
// index.js
const { addComplex, multiplyComplex } = require('./complex');
const { differentiate, integrate } = require('./calculus');
const { mean, std } = require('./statistics');
const { transpose, invert } = require('./matrixTransformations');

// Example usage of complex number functions
console.log(`Addition of complex numbers: ${addComplex('2 + 3i', '1 - 4i')}`);
console.log(`Multiplication of complex numbers: ${multiplyComplex('2 + 3i', '1 - 4i')}`);

// Example usage of calculus functions
console.log(`Derivative of x^2 + x: ${differentiate('x^2 + x', 'x')}`);
console.log(`Integral of x from 0 to 1: ${integrate('x', 'x', 0, 1)}`);

// Example usage of statistics functions
const data = [1, 2, 3, 4, 5];
console.log(`Mean: ${mean(data)}`);
console.log(`Standard Deviation: ${std(data)}`);

// Example usage of matrix transformation functions
const matrix = [[1, 2], [3, 4]];
console.log(`Transpose: ${transpose(matrix)}`);
console.log(`Inverse: ${invert(matrix)}`);
