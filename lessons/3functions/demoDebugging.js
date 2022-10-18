const people = [
  { name: 'John', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'USA' },
  { name: 'Jimmy', cool: false, country: 'Rajapalayam' }
]
console.table(people)

people.forEach((person, index) => {
    console.table(index, person.name, person.cool, person.country)
})

function certify (name) {
  console.count(`Certifying Doctor degree for ${name}`)
  return `Dr. ${name}`
}
