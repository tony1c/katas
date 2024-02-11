/*
Today's exercise
Write a function countSheep, that accepts one parameter: amountOfSheep.

Given a non-negative number, e.g. 3, return a string with "1 sheep...2 sheep...3 sheep...".

Input: a number (of sheep).

Output: a string.
*/

const countSheep = require('../src/countSheep');

test('The loop return correctly the sheeps amount.', () => {
    const sheeps = 3;
    expect(countSheep(sheeps)).toBe('1 sheep...2 sheep...3 sheep...');
});
