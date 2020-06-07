let game = require('../game.mjs')

// 1) write a function to initialize an empty board
//  3x3 size
// () -> board



// 2) write a function that writes a board to the console
// (board) -> ()



// 3) add ability for adding pieces to the board

// 4) write a function that evaluates the given board state, e.g. 3 x's in a row = win
// (board) -> evaluation

// 5) can we hook up to ui/console?

test("it should return 1", () => {
    expect(game.createBoard()).toEqual(1)
})