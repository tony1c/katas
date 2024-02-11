const missingValues = require('../src/missingValues');

test('The values are defined correctly', () => {
  const result = 18;
  const arr = [1, 1, 1, 2, 2, 3];

  expect(missingValues(arr)).toBe(result);
});
