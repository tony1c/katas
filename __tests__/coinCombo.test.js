const coinCombo = require('../src/coinCombo');

describe('Write a function coinCombo that accepts one parameter, cents. The function should return the minimum number of the coin combination of the same value.', () => {
  test('The returned combination is correct.', () => {
    const cents = 51;
    expect(coinCombo(cents)).toEqual([1, 0, 0, 2]);
  });
});
