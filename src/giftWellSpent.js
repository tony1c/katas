/*
Today's exercise
Today, another 7 kyu kata,
meaning we slightly increase the difficulty.

Source: Codewars

You got a gift card for your local store. It has some credit you can use to buy things, but it may be used only for up to two items, and any credit you don't use is lost. You want something for a friend and yourself. Therefore, you want to buy two items which add up the entire gift card value.

Write a function buy, that accepts two parameters: giftCard and prices.

Given a gift card value, e.g. 5, and a prices array, e.g. [5, 2, 3, 4, 5]
return the array indices that sum up to the gift card value out of the prices array, e.g. [1, 2].

In this example, we can add up the prices 2 and 3 to our gift card value of 5 (=> 2 + 3 = 5). Their indices are 1 and 2.

Input: a number and an array of numbers.

Output: an array of numbers.
*/

module.exports = buy;

console.log(buy(5, [5, 2, 3, 4, 5]));
// [1, 2] ✅

console.log(buy(3, [1, 1]));
// null ✅
