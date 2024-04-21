const buy = require('../src/giftWellSpent');

describe('buy', () => {
  it('returns the array indices that sum up to the gift card value', () => {
    expect(buy(5, [5, 2, 3, 4, 5])).toEqual([1, 2]);
    expect(buy(10, [3, 1, 5, 5, 8])).toEqual([2, 3]);
  });

  it('returns an empty array if no combination of prices add up to the gift card value', () => {
    expect(buy(3, [1, 1])).toBe(null);

    expect(buy(10, [1, 1, 3, 2, 2])).toBe(null);
  });
});
