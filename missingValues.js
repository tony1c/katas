'use strict';
/*
Today's exercise
Today, another 7 kyu kata,
meaning we slightly increase the difficulty.

Source: Codewars

Write a function missingValues, that accepts one parameter: myArray.

Given an array of number, e.g. [1, 1, 1, 2, 2, 3],

find:

the number x, that appears once, e.g. 3
the number y, that appears twice, e.g. 2
and return the product x * x * y, e.g. 18 (=> 3 x 3 x 2).

Input: an array of numbers.

Output: a number.
*/

// console.log(missingValues([1, 1, 1, 2, 2, 3]));
// 18 ✅

// console.log(missingValues([6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200]));
// 4000000 ✅

////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////

// function missingValues(myArray) {
//   // const x = myArray.filter(
//   //   (num) => myArray.indexOf(num) === myArray.lastIndexOf(num)
//   // );

//   const frequencyMap = myArray.reduce((map, num) => {
//     map[num] = (map[num] || 0) + 1;
//     return map;
//   }, {});

//   const y = myArray.filter((num) => frequencyMap[num] === 2)[0];
//   const x = myArray.filter((num) => frequencyMap[num] === 1);

//   // console.log(frequencyMap);

//   return x * x * y;
// }
