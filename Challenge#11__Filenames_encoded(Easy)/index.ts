function decodeFilename(filename: string): string {
  const textToWorkIn = filename.slice(filename.indexOf('_') + 1)
  const [name, extension] = textToWorkIn.split('.')
  return `${name}.${extension}`
}

console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'))
console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'))
console.log(decodeFilename('987654321_elf-roster.csv.tempfile'))
