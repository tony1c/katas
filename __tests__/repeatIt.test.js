const repeatIt = require('../src/repeatIt');

describe('repeatIt', () => {
  it('should repeat the input string n number of times', () => {
    expect(repeatIt('Hi', 2)).toBe('HiHi');
  });

  it('should handle repetitions of 1', () => {
    expect(repeatIt('Hello', 1)).toBe('Hello');
  });

  it('should handle repetitions of 0', () => {
    expect(repeatIt('Hi', 0)).toBe('');
  });

  it('should handle non-string inputs', () => {
    expect(repeatIt(999, 1)).toBe('Not a string');
  });

  it('should handle empty strings', () => {
    expect(repeatIt('', 5)).toBe('');
  });
});
