const paintLetterboxes = require('../src/paintLetterboxes');

test('Numbers are painted correctly', () => {
  expect(paintLetterboxes(2, 4)).toEqual([0, 0, 1, 1, 1, 0, 0, 0, 0, 0]);
});
// [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ] ✅
