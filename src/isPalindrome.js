'use strict';
/*
Today's exercise
Source: Codewars

Write a function isPalindrome, that accepts one parameter: myString.

Given a string, e.g. "Abba",
return if this string is a palindrome (case-insensitive), e.g. true.

A palindrome is a word [...] which reads the same backward as forward, such as racecar.

Input: a string.

Output: a boolean.
*/

console.log(isPalindrome('Abba'));
// true ✅

console.log(isPalindrome('hello'));
// false ✅

// Export the isPalindrome function
module.exports = isPalindrome;
