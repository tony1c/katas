// const splitOddAndEven = require('../src/splitOddAndEven');

// test('There are no odd and even values', () => {
//     const arr = [];
//     expect(splitOddAndEven(arr)).toEqual({ even: [], odd: [] });
// });

// test('Push even values in the even array, push odd values in the odd array', () => {
//     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     expect(splitOddAndEven(arr)).toEqual({
//         even: [2, 4, 6, 8, 10],
//         odd: [1, 3, 5, 7, 9],
//     });
// });

// splitOddAndEven.test.js
const splitOddAndEven = require('../src/splitOddAndEven');

describe('splitOddAndEven', () => {
    test('should split odd and even numbers correctly', () => {
        const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const expectedResult = {
            even: [2, 4, 6, 8],
            odd: [1, 3, 5, 7, 9],
        };

        const result = splitOddAndEven(inputArray);

        expect(result).toEqual(expectedResult);
    });

    // Add more test cases as needed
});
