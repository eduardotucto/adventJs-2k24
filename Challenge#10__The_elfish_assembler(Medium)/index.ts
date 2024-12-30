function compile (instructions: string[]): number | undefined {
  const values: Record<string, number> = {}
  let continues = false, instructionsToFollow = instructions

  do {
    for (const instruction of instructionsToFollow) {
      const [cmd, x, y] = instruction.split(' ')

      if (cmd === 'MOV') {
        if (isNaN(Number(x))) {
          values[y] = values[x]
        } else {
          values[y] = Number(x)
        }
      }

      if (cmd === 'INC') {
        values[x] = (values[x] || 0) + 1
      }

      if (cmd === 'DEC') {
        values[x] = (values[x] || 0) - 1
      }

      if (cmd === 'JMP') {
        if ((values[x] || 0) === 0) {
          instructionsToFollow = instructions.slice(Number(y))
          continues = true
          break
        }
      }
      continues = false
    }
  } while (continues)
  return values['A']
}

console.log(compile([
  "MOV 0 A",
  "INC A"
])) // -> 1

console.log(compile([
  "INC A",
  "INC A",
  "DEC A",
  "MOV A B",
])) // -> 1

console.log(compile([
  "MOV 5 B",
  "DEC B",
  "MOV B A",
  "INC A"
])) // -> 5

console.log(compile([
  "INC C",
  "DEC B",
  "MOV C Y",
  "INC Y",
])) // -> undefined

console.log(compile([
  "MOV 2 X",
  "DEC X",
  "DEC X",
  "JMP X 1",
  "MOV X A"
])) // -> -2

console.log(compile([
  "MOV 3 C",
  "DEC C",
  "DEC C",
  "DEC C",
  "JMP C 3",
  "MOV C A"
])) // -> -1



console.log(compile([
  'MOV -1 C',
  'INC C',
  'JMP C 1',
  'MOV C A',
  'INC A'
])) // -> 2
