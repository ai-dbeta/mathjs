// statistics.js
const math = require('mathjs');

// Function to calculate the mean of an array
function mean(data) {
  return math.mean(data);
}

// Function to calculate the standard deviation of an array
function std(data) {
  return math.std(data);
}

// Example usage
const data = [1, 2, 3, 4, 5];
console.log(`Mean: ${mean(data)}`); // Output: 3
console.log(`Standard Deviation: ${std(data)}`); // Output: 1.4142135623730951

module.exports = { mean, std };
