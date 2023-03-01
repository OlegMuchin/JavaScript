"use strict mode"
const array = [2, 3, 6, 77, 24, 63, 81, 62, 111, 36]
let numberMax = 0
for (let index = 0; index < array.length; index++) {
    if (numberMax < array[index]) numberMax = array[index]
}
console.log(numberMax);