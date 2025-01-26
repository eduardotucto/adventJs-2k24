function drawTable(data: Array<Record<string, string | number>>): string {
  const dataFormatted: Record<string, any[]> = {}
  const columnsSize: Record<string, number> = {}

  let intersection = ''
  let table = ''

  for (const row of data) {
    Object.entries(row).forEach(entry => {
      const [key, value] = entry
      const keyTitleCase = key.charAt(0).toUpperCase() + key.slice(1)
      if (!dataFormatted[keyTitleCase]) dataFormatted[keyTitleCase] = []
      if (!columnsSize[keyTitleCase]) columnsSize[keyTitleCase] = 0
      const valueStr = String(value)
      dataFormatted[keyTitleCase].push(valueStr)
      columnsSize[keyTitleCase] = Math.max(valueStr.length, columnsSize[keyTitleCase], key.length)
    })
  }

  Object.values(columnsSize).forEach(value => intersection += '+' + '-'.repeat(value + 2))
  intersection += '+'
  table = intersection + '\n'

  Object.keys(dataFormatted).forEach(key => {
    table += `| ${key}` + ' '.repeat(columnsSize[key] - key.length + 1)
  })
  table += '|\n' + intersection + '\n'

  let i = 0
  let continues: boolean
  do {
    let rowCount = 0
    Object.entries(dataFormatted).forEach(entry => {
      const [key, value] = entry
      rowCount = value.length

      table += `| ${value[i]}` + ' '.repeat(columnsSize[key] - value[i].length + 1)
    })
    table += '|\n'
    i++
    continues = rowCount !== i
  } while (continues)

  table += intersection

  return table
}

console.log(
  drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
  ])
)
console.log(
  drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
  ])
)

console.log(
  drawTable([
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "San Francisco" },
    { name: "Charlie", age: 35, city: "Los Angeles" }
  ])
)
