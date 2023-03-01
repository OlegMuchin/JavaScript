"use strict mode"
function dontRepetition(array) {
    for (let index = 0; index < array.length; index++) {
        for (let index1 = 0; index1 < array.length; index1++) {
            if (array[index] === array[index1] && index !== index1) array.splice(index1, 1)
        }
    }
}
let array = [1, 2, 1, "раз", "два", "два", 1]
dontRepetition(array)
console.log(array);