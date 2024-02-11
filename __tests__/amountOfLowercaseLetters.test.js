const amountOfLowercaseLetters = require('../src/amountOfLowercaseLetters');

describe('Counts the amount of lowercase letters in a string', () => {
  test('The count is correctly displayed', () => {
    const word = 'aB1c';
    expect(amountOfLowercaseLetters(word)).toEqual(2);
  });
  test('Numbers as string should return 0', () => {
    const num = '123';
    expect(amountOfLowercaseLetters(num)).toEqual(0);
  });
});
