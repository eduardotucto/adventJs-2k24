function detectBombs(grid: boolean[][]): number[][] {
  return grid.map((row, i) => {
    return row.map((cell, j) => {
      return (
        Number(grid[i - 1]?.[j - 1] ?? 0) +
        Number(grid[i - 1]?.[j] ?? 0) +
        Number(grid[i - 1]?.[j + 1] ?? 0) +
        Number(grid[i]?.[j - 1] ?? 0) +
        Number(grid[i]?.[j + 1] ?? 0) +
        Number(grid[i + 1]?.[j - 1] ?? 0) +
        Number(grid[i + 1]?.[j] ?? 0) +
        Number(grid[i + 1]?.[j + 1] ?? 0)
      )
    })
  })
}

console.log(detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]))
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(detectBombs([
  [true, false],
  [false, false]
]))
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(detectBombs([
  [true, true],
  [false, false],
  [true, true]
]))

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
