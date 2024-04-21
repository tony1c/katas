const mergeArrays = require('../src/mergeTwoArrays');

describe('mergeArrays', () => {
  it('should merge two arrays by alternatingly taking elements from each array in turn', () => {
    expect(mergeArrays([9, 10, 11], ['a'])).toEqual([9, 'a', 10, 11]);
  });

  it('should handle arrays of different lengths', () => {
    expect(mergeArrays([1], ['a', 'b'])).toEqual([1, 'a', 'b']);
  });

  it('should handle empty arrays', () => {
    expect(mergeArrays([], [])).toEqual([]);
  });

  it('should handle arrays with multiple types of elements', () => {
    expect(mergeArrays([1, 'a', 2], ['b', 3])).toEqual([1, 'b', 'a', 3, 2]);
  });
});
