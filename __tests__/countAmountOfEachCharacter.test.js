const countAmountOfEachCharacter = require('../src/countAmountOfEachCharacter');

describe('Count the amount of each character in a string', () => {
  test('The object of the amount of characters in a string is created correctly', () => {
    expect(countAmountOfEachCharacter('bee')).toStrictEqual({ b: 1, e: 2 });
  });
  test('The string should be in lowercase', () => {
    expect(countAmountOfEachCharacter('BEE')).toStrictEqual({ b: 1, e: 2 });
  });
});
