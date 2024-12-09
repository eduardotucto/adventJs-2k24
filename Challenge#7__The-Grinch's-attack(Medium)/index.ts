function fixPackages(packages: string): string {
  while (packages.includes('(') && packages.includes(')')) {
    const lastOpen = packages.lastIndexOf('(')
    const nextClosed = packages.indexOf(')', lastOpen)
    const section = packages.slice(lastOpen + 1, nextClosed)
    packages = packages.replace(`(${section})`, section.split('').reverse().join(''))
  }
  return packages
}

console.log(fixPackages('a(cb)de'))
// ➞ "abcde"

console.log(fixPackages('a(bc(def)g)h'))
// ➞ "agdefcbh"

console.log(fixPackages('abc(def(gh)i)jk'))
// ➞ "abcighfedjk"

console.log(fixPackages('a(b(c))e'))
// ➞ "acbe"