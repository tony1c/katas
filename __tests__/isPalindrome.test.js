// palindromeChecker.test.js
const isPalindrome = require('../src/isPalindrome');

// Test cases
test('empty string is a palindrome', () => {
    expect(isPalindrome('')).toBe(true);
});

test('single character is a palindrome', () => {
    expect(isPalindrome('a')).toBe(true);
});

test('non-palindrome string', () => {
    expect(isPalindrome('hello')).toBe(false);
});

test('palindrome string', () => {
    expect(isPalindrome('racecar')).toBe(true);
});
