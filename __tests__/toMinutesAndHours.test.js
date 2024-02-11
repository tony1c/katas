// toMinutesAndHours.test.js
const toMinutesAndHours = require('../src/toMinutesAndHours');

describe('toMinutesAndHours function', () => {
    test('should return 1 hour and 0 minute for 3601 seconds', () => {
        const result = toMinutesAndHours(3601);
        expect(result).toBe('1 hour(s) and 0 minute(s)');
    });

    test('should return 2 hours and 30 minutes for 9030 seconds', () => {
        const result = toMinutesAndHours(9030);
        expect(result).toBe('2 hour(s) and 30 minute(s)');
    });

    // Add more test cases as needed

    test('should handle 0 seconds correctly', () => {
        const result = toMinutesAndHours(0);
        expect(result).toBe('0 hour(s) and 0 minute(s)');
    });
});
