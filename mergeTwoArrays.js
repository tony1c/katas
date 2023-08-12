'use strict';
/*
Today's exercise
Today, another 7 kyu kata,
meaning we slightly increase the difficulty.

Source: Codewars

Write a function mergeArrays, that accepts two parameters: a and b.

Given two arrays, e.g. [9, 10, 11] and ["a"], return an array that combines both arrays by alternatingly taking elements from each array in turn, e.g. [9, "a", 10, 11].

Every element in the arrays is either a string or a number.

Input: two arrays.

Output: one array.
*/

//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////

/*
function mergeArrays(a, b) {
  const output = [];

  const maxLength = Math.max(a.length, b.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < a.length) {
      output.push(a[i]);
    }
    if (i < b.length) {
      output.push(b[i]);
    }
  }
  return output;
}

console.log(mergeArrays([9, 10, 11], ['a']));
// [9, "a", 10, 11] ✅

console.log(mergeArrays([1], ['a', 'b']));
// [1, "a", "b"] ✅
*/
