// splitInParts.test.js
const splitInParts = require('../src/splitInParts');

describe('splitInParts function', () => {
    it('should split the string into parts of the specified length', () => {
        expect(splitInParts('HelloDev', 3)).toBe('Hel loD ev');
    });

    it('should handle empty string input', () => {
        expect(splitInParts('', 2)).toBe('');
    });

    it('should handle partLength greater than the string length', () => {
        expect(splitInParts('Hello', 10)).toBe('Hello');
    });

    it('should handle partLength equal to the string length', () => {
        expect(splitInParts('Hi', 2)).toBe('Hi');
    });

    it('should handle partLength of 1', () => {
        expect(splitInParts('Testing', 1)).toBe('T e s t i n g');
    });

    // Add more test cases as needed
});
