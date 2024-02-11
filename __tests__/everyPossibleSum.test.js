const everyPossibleSum = require('../src/everyPossibleSum');

test('All the numbers in the array are summed correctly', () => {
    const num = 23;
    expect(everyPossibleSum(num)).toEqual([5]);
});
