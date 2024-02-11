// toFreud.test.js
const toFreud = require('../src/toFreud');

describe('toFreud function', () => {
    it('should replace every word with "sex"', () => {
        const inputString = 'Sigmund Freud';
        const expectedResult = 'sex sex';

        const result = toFreud(inputString);

        expect(result).toBe(expectedResult);
    });

    it('should return an empty string for empty input', () => {
        const result = toFreud('');

        expect(result).toBe('');
    });

    it('should return an empty string for undefined input', () => {
        const result = toFreud();

        expect(result).toBe('');
    });

    it('should handle multiple spaces between words', () => {
        const inputString = 'Sigmund   Freud';
        const expectedResult = 'sex sex';

        const result = toFreud(inputString);

        expect(result).toBe(expectedResult);
    });
});
