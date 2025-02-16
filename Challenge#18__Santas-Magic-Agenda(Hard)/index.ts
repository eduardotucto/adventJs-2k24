function findInAgenda (agenda: string, phone: string): { name: string; address: string } | null {
  const contacts = agenda.split('\n')
  /**
   * I use IA to generate regex expressions
   */
  const phoneRegex = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/
  const nameRegex = /<([^>]+)>/

  const contactsFormatted = contacts.map(contact => {
    const nameMatch = contact.match(nameRegex)
    const name = nameMatch ? nameMatch[1] : ''

    const phoneMatch = contact.match(phoneRegex)
    const phone = phoneMatch ? phoneMatch[0] : ''

    return {
      name,
      phone,
      address: contact.replace(phone, '').replace(`<${name}>`, '').trim()
    }
  })

  const contactFound = contactsFormatted.filter(contact => contact.phone.includes(phone))
  if (contactFound.length === 1) {
    return {
      name: contactFound[0].name,
      address: contactFound[0].address
    }
  }
  return null
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda(agenda, '34-600-123-456'))
// { name: "Juan Perez", address: "Calle Gran Via 12" }

console.log(findInAgenda(agenda, '600-987'))
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

console.log(findInAgenda(agenda, '111'))
// null
// Explanation: No results

console.log(findInAgenda(agenda, '1'))
// null
// Explanation: Too many results
