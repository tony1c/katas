'use strict';

/*
Today's exercise
Today, another 7 kyu kata,
meaning we slightly increase the difficulty.

Source: Codewars

Write a function coinCombo, that accepts one parameter: cents.

Given a number of cents, e.g. 51,
return the minimum number of coins combination of the same value, e.g. [1, 0, 0, 2].

The function should return an array where:
coins[0] = 1 cent
coins[1] = 5 cents
coins[2] = 10 cents
coins[3] = 25 cents
Example: coinCombo(51) needs two 25 cents and one 1 cent => [1, 0, 0, 2]

Input: a number.

Output: an array of numbers.
*/

module.exports = coinCombo;

console.log(coinCombo(51));
