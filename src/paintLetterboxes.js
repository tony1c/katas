'use strict';
/*
Today's exercise
Write a function paintLetterboxes, that accepts two parameter: start and end.

Given a start number, e.g. 125,
and an end number, e.g. 132,
return the frequency of all 10 digits painted,
e.g. [1, 9, 6, 3, 0, 1, 1, 1, 1, 1].
125: 1 x 1, 1 x 2, 1 x 5
126: 1 x 1, 1 x 2, 1 x 6
...
132: 1 x 1, 1 x 3, 1 x 2
Input: two numbers.

Output: an array of numbers.
*/

module.exports = paintLetterboxes;

console.log(paintLetterboxes(125, 132));
// [ 1, 9, 6, 3, 0, 1, 1, 1, 1, 1 ] ✅

console.log(paintLetterboxes(2, 4));
// [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ] ✅
