/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s: string): string {
  let continues = true
  let start = 0
  let end = 0
  let snow = s
  do {
    for (let i = 0; i < snow.split('').length; i++) {
      const prevLetter = snow[i - 1]
      const letter = snow[i]
      if (!prevLetter) continue
      if (prevLetter === letter) {
        start = i - 1
        end = i
        break
      }

      if (i === snow.length - 1) continues = false
    }
    if (snow.length <= 1) continues = false
    if (continues) snow = snow.slice(0, start) + snow.slice(end + 1)
  } while (continues)
  return snow
}

console.log(removeSnow('zxxzoz'))
console.log(removeSnow('abcdd'))
console.log(removeSnow('zzz'))
console.log(removeSnow('a'))
