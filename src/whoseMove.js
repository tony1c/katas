'use strict';
/*
Today's exercise
Write a function whoseMove, that accepts two parameters: lastPlayer and isWin.

Given a string of the last player, e.g. "white",
and a string if s/he won, e.g. true,
return a string whose turn it is, e.g. "white":

if the last player has won, then it's his/her turn
if the last player has lost, then it's the opponent's turn
Input: two strings.

Output: a string.
*/

module.exports = whoseMove;

console.log(whoseMove('white', true));
// "white" ✅

console.log(whoseMove('black', false));
// "white" ✅
