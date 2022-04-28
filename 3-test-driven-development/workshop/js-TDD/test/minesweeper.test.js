const { Grid } = require("../src/mineswepper");

describe("Grid basic", function () {
  test("Mines match", function () {
    var mines = [
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", "*", ".", "."],
      [".", ".", ".", "*"],
    ];
    const grid = new Grid(4, 4, mines);
    expect(grid.mines.length).toEqual(grid.rows);
    for (let i = 0; i < grid.mines.length; i++) {
      expect(grid.mines[i].length).toEqual(grid.columns);
    }
  });

  test("Columns & Rows between 0-100", function () {
    let mines = [
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", "*", ".", "."],
      [".", ".", ".", "*"],
    ];

    const grid = new Grid(101, 101, mines);
    expect(grid.rows).toBeLessThanOrEqual(100);
    expect(grid.columns).toBeLessThanOrEqual(100);
  });

  test("Mines shoulb be less than 100", function () {
    let map = [
      [".", ".", ".", ".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],
      [".", ".", ".", "."],
      [".", "*", ".", "."],
      [".", ".", ".", "*"],
    ];

    const grid = new Grid(101, 101, map);
    expect(grid.mines.length).toBeLessThanOrEqual(100);
    for (let i = 0; i < grid.mines.length; i++) {
      expect(grid.mines[i].length).toBeLessThanOrEqual(100);
    }
  });

  test("Grid[0,0] create Grid[1,1] ", function () {
    var mines = [
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", "*", ".", "."],
      [".", ".", ".", "*"],
    ];
    const grid = new Grid(0, 0, mines);
    expect(grid.mines.length).toEqual(grid.rows);
  });

  test("Show grid", function () {
    let mines = [
      [".", ".", ".", "."],
      [".", ".", ".", "."],
      [".", "*", ".", "."],
      [".", ".", ".", "*"],
    ];

    let result = [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [1, "*", 2, 1],
      [1, 1, 2, "*"],
    ];

    const grid = new Grid(4, 4, mines);
    expect(grid.showResult()).toEqual(result);
  });
});
