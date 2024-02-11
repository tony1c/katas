// calculateAmountOfPoints.test.js
const calculateAmountOfPoints = require('../src/totalAmountOfPoints');

// test('The total amount of points are calculated correctly', () => {
//     expect(calculateAmountOfPoints(['3:1', '2:2'])).toBe(4);
// });

describe('calculateAmountOfPoints', () => {
    test('calculates points correctly for a given array of game results', () => {
        // Test case 1
        const games1 = ['3:1', '2:2', '0:2'];
        const result1 = calculateAmountOfPoints(games1);
        expect(result1).toBe(4);

        // Test case 2
        const games2 = ['1:0', '2:1', '0:0'];
        const result2 = calculateAmountOfPoints(games2);
        expect(result2).toBe(7);

        // Test case 3
        const games3 = ['1:1', '0:3', '2:0'];
        const result3 = calculateAmountOfPoints(games3);
        expect(result3).toBe(4);
    });

    // Add more test cases if needed
});
