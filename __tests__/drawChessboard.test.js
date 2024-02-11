const drawChessboard = require('../src/drawChessboard');

test('The chessboard is successfully built', () => {
    const row = 3;
    const col = 3;
    expect(drawChessboard(row, col)).toEqual([
        ['O', 'X', 'O'],
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
    ]);
});
