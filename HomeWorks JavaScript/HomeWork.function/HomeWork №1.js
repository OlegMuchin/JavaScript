"use strict mode"
function isNumberInRange(num) {
    return num > 0 && num < 10
}
const numbers = [-1,2,5,3,9,10,11, 1, -4]
let newNumbers = []
for (let index = 0; index < numbers.length; index++) {
    if (isNumberInRange(numbers[index])) newNumbers.push(numbers[index])
}
console.log(newNumbers);