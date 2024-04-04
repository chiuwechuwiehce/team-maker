let chek = 0
let temp = []
function generate() {
  let txt = ''
  let full = []
  let people = document.getElementById('people').value.split(',')
  let teams = parseInt(document.getElementById('teams').value)
  let output = document.getElementById('output')
  for (let i = 0; i < people; i++) {
    if (chek == teams) {
      full.push(temp)
      chek = 0
      temp = []
    }
    chek++
    let random = randint(people.length)
    let person = people[random]
    temp.push(person)
    people.splice(random,1)
  }
  for (let i = 0; i < full.length; i++) {
    let thing = full[i]
    for (let x = 0; x < thing.length; x++) {
      txt += thing[x] + ','
    }
    txt += ':'
  }
  output.innerHTML = txt
}
function randint(val) {
  return Math.floor(Math.random() * val - 1)
}
