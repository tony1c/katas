'use strict';
/*
Today's exercise
Source: Codewars

Write a function positionInAlphabet, that accepts one parameter: myChar.

Given a one-char string, e.g. "a",
return the message "Position in Alphabet: [position]", e.g. "Position in Alphabet: 1".
If the input is uppercase, handle it like a lowercase character.
If the input is not an alphabetical character, return 'Position in Alphabet: Not an alphabet character'

Input: a string.

Output: a string.
*/

module.exports = positionInAlphabet;

console.log(positionInAlphabet('a'));
// 1 ✅

console.log(positionInAlphabet('Z'));
// 26  ✅
