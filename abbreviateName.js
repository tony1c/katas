'use strict';

/*
Today's exercise
Write a function abbreviateName, that accepts one parameter: name.

name is a string that includes two words, with one space in between them, e.g. "John Doe".

The output should be the two first characters, both capitalized with a dot separating them, e.g. "J.D".

"John Doe" => "J.D"

"john doe" => "J.D"

Input: a string.

Output: a string.
*/

function abbreviateName(name) {
  return name
    .split(' ')
    .map((fChar) => fChar.toUpperCase()[0])
    .join('.');
}

console.log(abbreviateName('John Doe'));
console.log(abbreviateName('john doe'));
