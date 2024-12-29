type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

function moveTrain(board: Board, mov: Movement): Result {
  let enginePositionX = -1, enginePositionY = -1
  for (const [i, row] of board.entries()) {
    if (row.includes('@')) {
      enginePositionX = i
      enginePositionY = row.indexOf('@')
      break
    }
  }
  switch (mov) {
    case 'L':
      if (enginePositionY === 0) return 'crash'
      const nexPositionL = board[enginePositionX].at(enginePositionY - 1)
      if (nexPositionL === '.') return 'none'
      if (nexPositionL === '*') return 'eat'
      if (nexPositionL === 'o') return 'crash'
      break
    case 'R':
      const nexPositionR = board[enginePositionX].at(enginePositionY + 1)
      if (!nexPositionR || nexPositionR === 'o') return 'crash'
      if (nexPositionR === '.') return 'none'
      if (nexPositionR === '*') return 'eat'
      break
    case 'U':
      if (enginePositionX === 0) return 'crash'
      const nexPositionU = board[enginePositionX - 1].at(enginePositionY)
      if (nexPositionU === '.') return 'none'
      if (nexPositionU === '*') return 'eat'
      if (nexPositionU === 'o') return 'crash'
      break
    case 'D':
      const nexPositionD = board[enginePositionX + 1]?.at(enginePositionY)
      if (!nexPositionD || nexPositionD === 'o') return 'crash'
      if (nexPositionD === '.') return 'none'
      if (nexPositionD === '*') return 'eat'
      if (nexPositionD === 'o') return 'crash'
      break
  }
  return 'none'
}

const board = [
  "·····",
  "··*··",
  "··.··",
  "··o··",
  "··@··"
]
console.log(moveTrain(board, 'L'))// ➞ 'crash'
console.log(moveTrain(board, 'R'))// ➞ 'none'
console.log(moveTrain(board, 'U'))// ➞ 'eat'
console.log(moveTrain(board, 'D'))// ➞ 'crash'