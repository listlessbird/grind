/**
 *
 * @param {character[][]} board
 * @returns {boolean}
 */
function isValidSudoku(board) {
  const row = Array.from({ length: 9 }, () => new Set())
  const col = Array.from({ length: 9 }, () => new Set())
  const sqr = Array.from({ length: 9 }, () => new Set())

  //   console.log({ row, col, sqr })
  //   return

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // index to a unique set to validate 3x3 grids
      const grid = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      const cell = board[i][j]
      if (cell === ".") continue

      if (row[i].has(cell) || col[j].has(cell) || sqr[grid].has(cell)) {
        console.log({ row, col, sqr })
        return false
      }

      row[i].add(cell)
      col[j].add(cell)
      sqr[grid].add(cell)
      //   sqr[Math.floor(i / 3)].add(board[i][j])
    }
  }

  console.log({ col, row, sqr })

  return true
}

const board1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]

console.log(isValidSudoku(board1))
