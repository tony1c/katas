'use strict';
/*
Today's exercise
Write a function calculateAmountOfPoints, that accepts one parameter: games, a valid array of strings, e.g. ["3:1", "2:2"].

Points:

x > y: 3 points
x = y: 1 point
x < y: 0 point
The function should return a number. The number is the sum of the point(s) of every single game.

Input: an array of strings.

Output: a number.
*/

// function calculateAmountOfPoints(games) {
//     let points = 0;
//     for (const game of games) {
//         const [x, y] = game.split(':');

//         if (x > y) points += 3;
//         if (x === y) points += 1;
//     }
//     return points;
// }

module.exports = calculateAmountOfPoints;

console.log(calculateAmountOfPoints(['3:1', '2:2']));
// 4

console.log(calculateAmountOfPoints(['1:0', '2:0', '3:0', '4:0', '2:1']));
// 15