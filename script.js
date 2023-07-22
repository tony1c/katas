'use strict';

// Today's exercise
// Write a function splitOddAndEven, that accepts one parameter: numbers, an array of positive numbers.

// The function should return an object with two arrays in it, one for all odd numbers and one for all even numbers.

// Input: an array of numbers.

// Output: an object with two arrays of numbers, one for the odd ones, one for the even ones.

function splitOddAndEven(numbers) {
  let odd = [];
  let even = [];

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    number % 2 === 0 ? even.push(number) : odd.push(number);
  }

  const returnedObject = {
    even,
    odd,
  };

  return returnedObject;
}

console.log(splitOddAndEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

////////////////////////////////////////////////
// Today's exercise
/*
Write a function countAmountOfEachCharacter, that accepts one parameter: inputString, a valid string.

The function should return an object. The object has a key for every character that exists at least once in the string.
The value for each key is how many times that character exists in the string.

Input: a string.

Output: an object with keys for the existing characters and values for how many times that character exists in the string.
*/

function countAmountOfEachCharacter(inputString) {
  const object = {};

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    object.hasOwnProperty(char) ? (object[char] += 1) : (object[char] = 1);
  }

  return object;
}

console.log(countAmountOfEachCharacter('mississippi'));

/*
Write a function removeExclamationMarksFromEnd, that accepts one parameter: inputString, a valid string.

The function should return a string. The string contains the inputString, but without an exclamation mark at the end.
*/

function removeExclamationMarksFromEnd(inputString) {
  return inputString.replace(/!+$/, '');
}

console.log(removeExclamationMarksFromEnd('Hellooooo!!!!!!!!!!!!!'));

/*
Today's exercise
Character recognition software is widely used to digitize printed texts. When documents are digitized character recognition softwares often make mistakes. Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
Write a function correctMistakes, that accepts one parameter: inputString, a valid string.

The function should return a string. The string contains the inputString with the corrections.
*/

function correctMistakes(inputString) {
  const corrections = {
    5: 'S',
    0: 'O',
    1: 'I',
  };

  return inputString
    .split('')
    .map((char) =>
      corrections.hasOwnProperty(char) ? corrections[char] : char
    )
    .join('');
}

console.log(correctMistakes('501BONO0O'));
