const defineSuit = require('../src/defineSuit');

test('defineSuit should return the correct suit', () => {
    expect(defineSuit('3♣')).toBe('clubs');
    expect(defineSuit('Q♠')).toBe('spades');
    expect(defineSuit('K♥')).toBe('hearts');
    expect(defineSuit('A♦')).toBe('diamonds');
});
