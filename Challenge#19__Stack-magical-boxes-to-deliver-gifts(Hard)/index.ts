function distributeWeight(weight: number): string {
  const boxRepresentations = {
    1: [" _ ", "|_|"] ,
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  }

  // Determinate what boxes we gonna use
  const boxWeights = [10, 5, 2, 1]
  const boxesToUse: number[] = []
  while (weight > 0) {
    for (const boxWeight of boxWeights) {
      if (weight >= boxWeight) {
        weight -= boxWeight
        boxesToUse.unshift(boxWeight)
        break
      }
    }
  }

  // Let's draw
  let drawingLines: string[] = []
  let lastPart = ''
  boxesToUse.forEach((boxWeight, i) => {
    const boxParts = boxRepresentations[boxWeight]
    if (i === 0) {
      boxParts.forEach((part, j) => {
        if (j === boxParts.length - 1) lastPart = part
        drawingLines.push(part)
      })
    } else {
      boxParts.forEach((part, k) => {
        if (k === 0) {
          drawingLines[drawingLines.length - 1] = (drawingLines[drawingLines.length - 1] + part.slice(lastPart.length)).trim()
        } else {
          if (k === 0) part = part.slice(lastPart.length)
          if (k === boxParts.length - 1) lastPart = part
          drawingLines.push(part)
        }
      })
    }
  })
  return drawingLines.join('\n')
}

console.log(distributeWeight(8))
console.log(distributeWeight(14))
console.log(distributeWeight(10))
console.log(distributeWeight(18))
console.log(distributeWeight(23))
console.log(distributeWeight(45))
console.log(distributeWeight(121))
