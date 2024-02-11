'use strict';
/*
Today's exercise
Today, another 7 kyu kata,
meaning we slightly increase the difficulty.

Source: Codewars

Write a function toMinutesAndHours, that accepts one parameter: seconds.

Given a number, e.g. 3601,
return a string describing how many hours and minutes comprise that many seconds, any remaining seconds left over are ignored,
e.g. 1 hour(s) and 0 minute(s).

Input: a number.

Output: a string.
*/

module.exports = toMinutesAndHours;

console.log(toMinutesAndHours(3600));
// "1 hour(s) and 0 minute(s)" ✅

console.log(toMinutesAndHours(3720));
// "1 hour(s) and 0 minute(s)" ✅
