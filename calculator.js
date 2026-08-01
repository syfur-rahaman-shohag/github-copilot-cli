/**
 * Calculator module with basic arithmetic operations (async)
 */

/**
 * Add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {Promise<number>} Sum of a and b
 */
async function add(a, b) {
  return a + b;
}

/**
 * Subtract two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {Promise<number>} Difference of a and b
 */
async function subtract(a, b) {
  return a - b;
}

/**
 * Multiply two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {Promise<number>} Product of a and b
 */
async function multiply(a, b) {
  return a * b;
}

/**
 * Divide two numbers
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {Promise<number>} Quotient of a and b
 * @throws {Error} If divisor is zero
 */
async function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
