const divisibleBy = require('../src/divisibleBy');

test('Yes, those numbers are divisible by the given divisor', () => {
    const arr = [1, 2, 3, 4];
    const divisor = 2;
    expect(divisibleBy(arr, divisor)).toEqual([2, 4]);
});
