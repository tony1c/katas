const positionInAlphabet = require('../src/positionInAlphabet');

describe('positionInAlphabet', () => {
  it('should return the correct position for lowercase characters', () => {
    expect(positionInAlphabet('a')).toBe('Position in Alphabet: 1');
  });

  it('should return the correct position for uppercase characters', () => {
    expect(positionInAlphabet('Z')).toBe('Position in Alphabet: 26');
  });

  it('should handle other characters as well', () => {
    expect(positionInAlphabet('c')).toBe('Position in Alphabet: 3');
  });

  it('should handle non-alphabet characters', () => {
    expect(positionInAlphabet('!')).toBe(
      'Position in Alphabet: Not an alphabet character'
    );
  });
});
