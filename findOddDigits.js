'use strict';
/*
Today's exercise
Today, another 7 kyu kata,
meaning we slightly increase the difficulty.

Source: Codewars

Write a function findOddDigits, that accepts two parameter: n a number and k a number.

Given n, e.g. 123456789111, and k, e.g. 5, return the first k odd digits in n, e.g. 13579.

In the following cases the function should return 0:

there are no odd digits in n;
k is bigger than n;
k is 0;
k is bigger than the number of odd digits in n.
Input: two numbers.

Output: one number.
*/

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
/*
function findOddDigits(n, k) {
  const nArr = n
    .toString()
    .split('')
    .filter((num) => num % 2);

  let oddNums = [];
  for (let i = 0; i < nArr.length; ++i) {
    if (nArr[i] % 2 !== 0) oddNums.push(nArr[i]);
    if (oddNums.length === k) {
      let result = parseInt(oddNums.join(''));
      return result;
    }
  }
  return 0;
}

console.log(findOddDigits(123456789111, 5));
// 13579 ✅

console.log(findOddDigits(0, 100));
// 0 ✅
*/
