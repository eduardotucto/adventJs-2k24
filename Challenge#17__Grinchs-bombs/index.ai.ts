function detectBombsByAI(grid: boolean[][]): number[][] {
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [ 0, -1],          [ 0, 1],
    [ 1, -1], [ 1, 0], [ 1, 1]
  ]

  return grid.map((row, i) =>
    row.map((_, j) =>
      directions.reduce((count, [di, dj]) =>
        count + (grid[i + di]?.[j + dj] ? 1 : 0)
      , 0)
    )
  )
}

console.log(detectBombsByAI([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]))
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(detectBombsByAI([
  [true, false],
  [false, false]
]))
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(detectBombsByAI([
  [true, true],
  [false, false],
  [true, true]
]))

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
