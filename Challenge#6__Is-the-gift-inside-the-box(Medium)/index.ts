function inBox(box: string[]): boolean {
  let accumulated = ''
  for (const [i, el] of box.entries()) {
    if ((i === 0 || i === (box.length - 1)) && el.includes('*')) return false
    if (el.indexOf('*') >= (el.length - 1)) return false
    if (el.indexOf('*') !== -1 && el.indexOf('*') <= el.indexOf('#')) return false
    accumulated += el
  }
  return accumulated.includes('*')
}

const test1 = inBox([
  "###",
  "#*#",
  "###"
])
console.log(test1) // ➞ true

const test2 = inBox([
  "####",
  "#* #",
  "#  #",
  "####"
])
console.log(test2) // ➞ true

const test3 = inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
])
console.log(test3) // ➞ false

const test4 = inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
])
console.log(test4) // ➞ false

const test5 = inBox([
  "####",
  "#  #",
  "##*#"
])
console.log(test5) // ➞ false
