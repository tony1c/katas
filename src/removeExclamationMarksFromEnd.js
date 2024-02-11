'use strict';

/*
Today's exercise
Write a function removeExclamationMarksFromEnd, that accepts one parameter: inputString, a valid string.

The function should return a string. The string contains the inputString, but without an exclamation mark at the end.

Input: a string.

Output: a string that has no exclamation mark at the end.
*/

module.exports = removeExclamationMarksFromEnd;

console.log(removeExclamationMarksFromEnd('bee!!'));
// // "bee"

console.log(removeExclamationMarksFromEnd('Hey! Bee🧶!'));
// // "Hey! Bee🧶!"
