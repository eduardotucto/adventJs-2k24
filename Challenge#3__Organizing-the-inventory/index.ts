type Inventory = Array<{ name: string, quantity: number, category: string }>

function organizeInventory(inventory: Inventory): object {
  if (inventory.length === 0) return {}
  const resp = {}
  for (const toy of inventory) {
    resp[toy.category] ??= {}
    resp[toy.category][toy.name] = toy.quantity + (resp[toy.category][toy.name] || 0)
  }
  return resp
}

const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

console.log(organizeInventory(inventory))

const inventory2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]

console.log(organizeInventory(inventory2))

// Expected result:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }