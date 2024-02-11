const abbreviateName = require('../src/abbreviateName');

describe('Abbreviate the name with dots', () => {
  test('The name is correctly abbreviated', () => {
    expect(abbreviateName('John Doe')).toBe('J.D');
  });

  test('The output of the first two characters have to be capitalized', () => {
    expect(abbreviateName('john doe')).toBe('J.D');
  });
});
