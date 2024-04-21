const findOddDigits = require('../src/findOddDigits');

describe('findOddDigits', () => {
  it('returns the first k odd digits in n', () => {
    expect(findOddDigits(123456789111, 5)).toBe(13579);
    expect(findOddDigits(24680, 3)).toBe(0);
    expect(findOddDigits(1111111111, 10)).toBe(1111111111);
    expect(findOddDigits(1357924680, 5)).toBe(13579);
  });

  it('returns 0 when there are no odd digits in n', () => {
    expect(findOddDigits(24680, 5)).toBe(0);
    expect(findOddDigits(0, 3)).toBe(0);
  });

  it('returns 0 when k is bigger than n or the number of odd digits', () => {
    expect(findOddDigits(123456789, 10)).toBe(0);
    expect(findOddDigits(13579, 6)).toBe(0);
    expect(findOddDigits(13579, 0)).toBe(0);
  });
});
