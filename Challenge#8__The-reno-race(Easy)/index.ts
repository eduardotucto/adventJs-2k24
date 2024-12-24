function drawRace(indices: number[], length: number): string {
  let result = ''
  indices.forEach((position, i) => {
    result += ' '.repeat(indices.length - i - 1)

    const track = Array.from({ length }, () => '~')

    if (position > 0) track[position] = 'r'
    if (position < 0) track[length + position] = 'r'

    result += track.join('') + ` /${i + 1}\n`
  })
  return result.trimEnd()
}

console.log(drawRace([0, 5, -3], 10))
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8))
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12))
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~~r~ /3
*/
