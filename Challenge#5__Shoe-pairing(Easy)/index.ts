type Shoe = {
  type: string
  size: number
}

function organizeShoes(shoes: Shoe[]): number[] {
  const inventory = {}
  return shoes
    .map(({size, type}) => {
      const counterpartKey = `${size}${type === 'I' ? 'R' : 'I'}`
      const currentKey = `${size}${type}`

      if (inventory[counterpartKey] > 0) {
        inventory[counterpartKey]--
        return size
      } else {
        inventory[currentKey] = (inventory[currentKey] || 0) + 1
        return 0
      }
    })
    .filter(size => size > 0)
}

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

console.log(organizeShoes(shoes))
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
console.log(organizeShoes(shoes2))
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

console.log(organizeShoes(shoes3))
// []