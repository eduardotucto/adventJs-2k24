function calculatePrice(ornaments: string): number | undefined {
  const valueOf = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100,
  }
  let acc = 0

  for (let i = 0; i < ornaments.length; i++) {
    const current = valueOf[ornaments[i]]
    const next = valueOf[ornaments[i + 1]] || 0
    if (!current) return undefined

    acc += current >= next ? current : -current
  }

  return acc
}

console.log(calculatePrice('***') ) // 3
console.log(calculatePrice('*o')  ) // 4
console.log(calculatePrice('o*')  ) // 6
console.log(calculatePrice('*o*') ) // 5
console.log(calculatePrice('**o*')) // 6
console.log(calculatePrice('o***')) // 8
console.log(calculatePrice('*o@') ) // 94
console.log(calculatePrice('*#')  ) // 49
console.log(calculatePrice('@@@') ) // 300
console.log(calculatePrice('#@')  ) // 50
console.log(calculatePrice('#@Z') ) // undefined