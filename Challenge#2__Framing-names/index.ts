function createFrame(names: string[]): string {
  const maxLength = Math.max(...names.map(name => name.length))
  let testToPrint = '*'.repeat(maxLength + 4) + '\n'
  for (const name of names) {
    testToPrint += '* ' + name  + ' '.repeat(maxLength - name.length) + ' *\n'
  }
  return testToPrint += '*'.repeat(maxLength + 4)
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']))
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(['midu']))
// ********
// * midu *
// ********

console.log(createFrame(['a', 'bb', 'ccc']))
// *******
// * a   *
// * bb  *
// * ccc *
// *******
