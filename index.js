#!/usr/bin/env node

const calculator = require('./calculator');

(async function main() {
  // Example usage
  console.log('Calculator Examples:');
  console.log('===================');
  console.log(`5 + 3 = ${await calculator.add(5, 3)}`);
  console.log(`10 - 4 = ${await calculator.subtract(10, 4)}`);
  console.log(`6 × 7 = ${await calculator.multiply(6, 7)}`);
  console.log(`20 ÷ 4 = ${await calculator.divide(20, 4)}`);

  // Handle command-line arguments
  const args = process.argv.slice(2);

  if (args.length === 3) {
    const [operation, num1, num2] = args;
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    try {
      let result;
      switch (operation.toLowerCase()) {
        case 'add':
        case '+':
          result = await calculator.add(a, b);
          console.log(`\nResult: ${a} + ${b} = ${result}`);
          break;
        case 'subtract':
        case '-':
          result = await calculator.subtract(a, b);
          console.log(`\nResult: ${a} - ${b} = ${result}`);
          break;
        case 'multiply':
        case '*':
          result = await calculator.multiply(a, b);
          console.log(`\nResult: ${a} × ${b} = ${result}`);
          break;
        case 'divide':
        case '/':
          result = await calculator.divide(a, b);
          console.log(`\nResult: ${a} ÷ ${b} = ${result}`);
          break;
        default:
          console.error('Invalid operation. Use: add, subtract, multiply, or divide');
          process.exit(1);
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  } else if (args.length > 0) {
    console.error('Usage: node index.js [operation] [num1] [num2]');
    console.error('Operations: add (+), subtract (-), multiply (*), divide (/)');
    process.exit(1);
  }
})();
