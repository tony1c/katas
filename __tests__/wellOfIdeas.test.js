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
const getStatusOfWellOfIdeas = require('../src/wellOfIdeas');

test(`There isn't any good ideas.`, () => {
    const arr = ['bad', 'bad', 'bad'];
    expect(getStatusOfWellOfIdeas(arr)).toBe('Fail!');
});

test(`There are one or two good ideas.`, () => {
    const arr = ['bad', 'good', 'bad'];
    expect(getStatusOfWellOfIdeas(arr)).toBe('Publish!');
});

test(`There are more than two good ideas.`, () => {
    const arr = ['good', 'good', 'good'];
    expect(getStatusOfWellOfIdeas(arr)).toBe('I smell a series!');
});
