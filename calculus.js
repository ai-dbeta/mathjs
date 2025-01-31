// calculus.js
const math = require('mathjs');

// Function to differentiate an expression
function differentiate(expression, variable) {
  return math.derivative(expression, variable).toString();
}

// Function to integrate an expression (numerical integration)
function integrate(expression, variable, lower, upper) {
  return math.integrate(expression, variable, lower, upper);
}

// Example usage
console.log(`Derivative of x^2 + x: ${differentiate('x^2 + x', 'x')}`); // Output: 2*x + 1
console.log(`Integral of x from 0 to 1: ${integrate('x', 'x', 0, 1)}`); // Output: 0.5

module.exports = { differentiate, integrate };
