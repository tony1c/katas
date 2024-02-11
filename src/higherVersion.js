'use strict';
/*
Write a function higherVersion, that accepts two parameters: version1 and version2.

Given two strings, e.g. "1.2.3" and "1.2.0", return if the first string is higher than the second, e.g. true.

There are no leading zeros, e.g. 100.020.003 is given as 100.20.3.

Input: two strings.

Output: a boolean.
*/

module.exports = higherVersion;

console.log(higherVersion('1.2.3', '1.2.0'));
// true ✅

console.log(higherVersion('9', '10'));
// false ✅
