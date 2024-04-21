const removeDuplicates = require('../src/removeDuplicates');

describe('removeDuplicates', () => {
  it('should remove duplicates from the array while maintaining the order', () => {
    expect(removeDuplicates([1, 1, 2])).toEqual([1, 2]);
  });

  it('should handle arrays with multiple duplicates', () => {
    expect(removeDuplicates([3, 3, 2, 2, 1])).toEqual([3, 2, 1]);
  });

  it('should handle arrays with no duplicates', () => {
    expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should handle arrays with all duplicates', () => {
    expect(removeDuplicates([1, 1, 1, 1])).toEqual([1]);
  });

  it('should handle empty arrays', () => {
    expect(removeDuplicates([])).toEqual([]);
  });
});
