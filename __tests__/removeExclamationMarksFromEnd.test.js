// const ExclamationRemoval = require('../src/removeExclamationMarksFromEnd');

// describe('ExclamationRemoval', () => {
//     test('remove method should remove exclamation marks from the string', () => {
//         const removeMarks = new ExclamationRemoval('bee!!');
//         removeMarks.remove();
//         expect(removeMarks.str).toBe('bee');
//     });

//     test('remove method should handle strings without exclamation marks', () => {
//         const removeMarks = new ExclamationRemoval('no_exclamation');
//         removeMarks.remove();
//         expect(removeMarks.str).toBe('no_exclamation');
//     });

//     test('remove method should handle empty strings', () => {
//         const removeMarks = new ExclamationRemoval('');
//         removeMarks.remove();
//         expect(removeMarks.str).toBe('');
//     });
// });

const removeExclamationMarksFromEnd = require('../src/removeExclamationMarksFromEnd');

test('Should remove all exclamation marks from the sting', () => {
    expect(removeExclamationMarksFromEnd('Hello!!!!')).toBe('Hello');
});
