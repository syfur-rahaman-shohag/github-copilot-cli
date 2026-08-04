const calculator = require('../calculator');

describe('calculator (async)', () => {
  test('add resolves to correct sum', async () => {
    await expect(calculator.add(5, 3)).resolves.toBe(8);
  });

  test('subtract resolves to correct difference', async () => {
    await expect(calculator.subtract(10, 4)).resolves.toBe(6);
  });

  test('multiply resolves to correct product', async () => {
    await expect(calculator.multiply(6, 7)).resolves.toBe(42);
  });

  test('divide resolves to correct quotient', async () => {
    await expect(calculator.divide(20, 4)).resolves.toBe(5);
  });

  test('divide rejects on division by zero', async () => {
    await expect(calculator.divide(1, 0)).rejects.toThrow('Division by zero');
  });
});
