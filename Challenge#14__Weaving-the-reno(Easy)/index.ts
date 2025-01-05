function minMovesToStables(reindeer: number[], stables: number[]): number {
  const reindeersSorted = reindeer.sort((a, b) => a - b)
  const stablesSorted = stables.sort((a, b) => a - b)
  let totalMoves = 0
  for (let i = 0; i < reindeersSorted.length; i++) {
    totalMoves += Math.abs(reindeersSorted[i] - stablesSorted[i])
  }
  return totalMoves
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5]))
console.log(minMovesToStables([1, 1, 3], [1, 8, 4]))
