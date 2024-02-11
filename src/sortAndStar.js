'use strict';

/*
Today's exercise
Source: Codewars

Write a function sortAndStar, that accepts one parameter: stringArray.

Given an array, e.g. ["We", "solve", "Katas"],
sort it alphabetically (case-sensitive) and return the first string of the sorted array, with all characters separated by *** between each other, e.g. "K***a***t***a***s".

Input: an array of strings.

Output: a string.
*/

module.exports = sortAndStar;

console.log(sortAndStar(['We', 'solve', 'Katas']));
// "K***a***t***a***s" ✅
