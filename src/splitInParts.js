'use strict';
/*
Write a function splitInParts, that accepts two parameters: myString and partLength.

Given a string, e.g. "HelloDev",
and a number, e.g. 3,
return the input string split into partLength-long parts separated by a space, e.g. Hel loD ev.

Input: a string and a number.

Output: a string.
*/

module.exports = splitInParts;

console.log(splitInParts('HelloDev', 3));
// "Hel loD ev" ✅

console.log(splitInParts('HelloDev', 1));
// "H e l l o D e v" ✅

///////////////////////
//////////////////////
// function splitInParts(str, partLength) {
//     if (str.length <= partLength) return str;

//     let output = '';
//     for (let i = 0; i < str.length; i += partLength) {
//         output += str.substring(i, i + partLength) + ' ';
//     }
//     return output.slice(0, -1);
// }
