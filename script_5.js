const arr1 = [5, 10, 15, 20]
const arr2 = [10, 20, 30]
let total = 0;
let total2 = 0;
let total3 = 0;
for(let value of arr1){
    total2 +=value
}

for(let value of arr2){
    total3 +=value
}

const numbers = arr1.concat(arr2)

for(number of numbers){
    total += number;
}

console.log(total3);

console.log(total2);

console.log(total3+=total2);

console.log(total);