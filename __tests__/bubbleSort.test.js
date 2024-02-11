const bubbleSort = require('../src/bubbleSort');

// Test cases
test('empty array remains unchanged', () => {
  const arr = [];
  expect(bubbleSort(arr)).toEqual([]);
});

test('array with one element remains unchanged', () => {
  const arr = [5];
  expect(bubbleSort(arr)).toEqual([5]);
});

test('sort an array in ascending order', () => {
  const arr = [4, 2, 7, 1, 5];
  expect(bubbleSort(arr)).toEqual([1, 2, 4, 5, 7]);
});

// Add more test cases as needed
