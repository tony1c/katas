const whoseMove = require('../src/whoseMove');

test('Last player who won is white', () => {
    expect(whoseMove('white', true)).toBe('white');
});

test('Last player who won is black', () => {
    expect(whoseMove('white', false)).toBe('black');
});
