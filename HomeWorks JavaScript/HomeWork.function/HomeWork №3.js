"use strict mode"
function cleaning(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === false || array[index] === undefined || array[index] === '' || array[index] === 0 || array[index] === null) {
            array.splice(index, 1)
        }
    }
}
let array = [ 1, false, "Привет", undefined, 0, "хлам", null]
cleaning(array)
console.log(array);