const correctMistakes = require('../src/correctMistakes');

describe('Correct the mistakes within the string', () => {
  test('The returned string contains the corrections', () => {
    expect(correctMistakes('0h!')).toBe('Oh!');
  });
  test('The returned string contains the corrections', () => {
    expect(correctMistakes('1 l0ve m1ss1ss1pp1🧶!')).toBe(
      'I lOve mIssIssIppI🧶!'
    );
  });
});
