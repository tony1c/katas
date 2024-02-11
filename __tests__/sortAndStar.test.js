const sortAndStar = require('../src/sortAndStar');

describe(`Sort the array of strings and take the first word, then between every char there has to be '***'`, () => {
  test('The array is sorted and the string is correctly joined by ***', () => {
    const arr = ['We', 'solve', 'Katas'];
    expect(sortAndStar(arr)).toEqual('K***a***t***a***s');
  });
});
