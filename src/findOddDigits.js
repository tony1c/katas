'use strict';
/*
Today's exercise
Today, another 7 kyu kata,
meaning we slightly increase the difficulty.

Source: Codewars

Write a function findOddDigits, that accepts two parameter: n a number and k a number.

Given n, e.g. 123456789111, and k, e.g. 5, return the first k odd digits in n, e.g. 13579.

In the following cases the function should return 0:

there are no odd digits in n;
k is bigger than n;
k is 0;
k is bigger than the number of odd digits in n.
Input: two numbers.

Output: one number.
*/

module.exports = findOddDigits;

console.log(findOddDigits(123456789111, 5));
// 13579 ✅

console.log(findOddDigits(0, 100));
// 0 ✅
