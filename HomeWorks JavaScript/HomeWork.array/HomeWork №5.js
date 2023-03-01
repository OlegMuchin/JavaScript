"use strict mode"
let numbers = [2, 3, 7, 1, 4, 9, 29, 51, 21],
    sort = [],
    len = numbers.length
for (let index1 = 0; index1 < len; index1++) {
    let numberMax = 0, maxId = 0
    for (let index = 0; index < len; index++) {
        if (numberMax < numbers[index]) {
            numberMax = numbers[index]
            maxId = index
        }
    }
    sort.push(numberMax)
    numbers.splice(maxId, 1)
}
console.log(sort.reverse());