// higherVersion.test.js
const higherVersion = require('../src/higherVersion');

describe('higherVersion', () => {
  test('should return true for higher version', () => {
    const result = higherVersion('1.2.3', '1.2.0');
    expect(result).toBe(true);
  });

  test('should return false for lower version', () => {
    const result = higherVersion('1.2.0', '1.2.3');
    expect(result).toBe(false);
  });

  test('should return false for equal versions', () => {
    const result = higherVersion('1.2.3', '1.2.3');
    expect(result).toBe(false);
  });

  test('should handle different lengths', () => {
    const result = higherVersion('1.2.3.4', '1.2.3');
    expect(result).toBe(true);
  });
});

// test('should handle leading zeros', () => {
//   const result = higherVersion('1.02.003', '1.2.3');
//   expect(result).toBe(false);
// });
