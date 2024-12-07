function createXmasTree(height: number, ornament: string): string {
  let tree = ''
  for (let i = 1; i <= height; i++) {
    tree += '_'.repeat(height - i) + ornament.repeat((2 * i) - 1)  + '_'.repeat(height - i) + '\n'
  }
  const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1)
  return `${tree}${trunk}\n${trunk}`
}

const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
