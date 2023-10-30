'use strict';

/*
Today's exercise
Write a function getStatusOfWellOfIdeas, that accepts one parameter: inputArray.

Given an array of strings, e.g. ["bad", "good", "bad"], return a message string of the status of the well of ideas:

if the well of ideas includes 0 "good": "Fail!"
if the well of ideas includes 1 or 2 "good": "Publish!"
if the well of ideas includes more than 2 "good" => "I smell a series!"
Input: an array of strings.

Output: a string.
*/

console.log(getStatusOfWellOfIdeas(['bad', 'good', 'bad']));
// "Publish!" ✅
