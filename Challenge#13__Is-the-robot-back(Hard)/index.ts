function isRobotBack(moves: string): true | [number, number] {
  const modifiers = ['*', '!', '?']
  const inverseOf = {
    'L': 'R',
    'R': 'L',
    'U': 'D',
    'D': 'U',
  }

  const coordinates: [number, number] = [0, 0]
  const movesSplitted = moves.split('')
  const movementDone = {}

  for (let i = 0; i < movesSplitted.length; i++) {
    let move = movesSplitted[i]
    let intensity = 1

    if (modifiers.includes(move)) {
      const modifier = move
      move = movesSplitted[i + 1]
      i++

      switch (modifier) {
        case '*':
          intensity = 2
          break
        case '!':
          move = inverseOf[move]
          break
        case '?':
          if (movementDone[move]) continue
          break
      }
    }

    switch (move) {
      case 'L':
        coordinates[0] -= intensity
        break
      case 'R':
        coordinates[0] += intensity
        break
      case 'U':
        coordinates[1] += intensity
        break
      case 'D':
        coordinates[1] -= intensity
        break
    }
    movementDone[move] = move

  }
  return coordinates[0] === 0 && coordinates[1] === 0 ? true : coordinates
}

console.log(isRobotBack('R'))     // [1, 0]
console.log(isRobotBack('RL'))    // true
console.log(isRobotBack('RLUD'))  // true
console.log(isRobotBack('*RU'))   // [2, 1]
console.log(isRobotBack('R*U'))   // [1, 2]
console.log(isRobotBack('LLL!R')) // [-4, 0]
console.log(isRobotBack('R?R'))   // [1, 0]
console.log(isRobotBack('U?D'))   // true
console.log(isRobotBack('R!L'))   // [2,0]
console.log(isRobotBack('U!D'))   // [0,2]
console.log(isRobotBack('R?L'))   // true
console.log(isRobotBack('U?U'))   // [0,1]
console.log(isRobotBack('*U?U'))  // [0,2]
console.log(isRobotBack('U?D?U')) // true

console.log(isRobotBack('R!U?U')) // [1,0]
console.log(isRobotBack('UU!U?D')) // [0,1]
