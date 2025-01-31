// matrixTransformations.js
const math = require('mathjs');

// Function to transpose a matrix
function transpose(matrix) {
  return math.transpose(matrix);
}

// Function to invert a matrix
function invert(matrix) {
  return math.inv(matrix);
}

// Example usage
const matrix = [[1, 2], [3, 4]];
console.log(`Transpose: ${transpose(matrix)}`); // Output: [[1, 3], [2, 4]]
console.log(`Inverse: ${invert(matrix)}`); // Output: [[-2, 1], [1.5, -0.5]]

module.exports = { transpose, invert };
