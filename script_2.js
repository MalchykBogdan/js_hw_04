const numbers1 = [51, 18, 13, 24, 7, 85, 19];

let mostNumber = numbers1[0]

for (const number of numbers1) {
  if (number > mostNumber) {
    mostNumber = number
  }
}
console.log(mostNumber);