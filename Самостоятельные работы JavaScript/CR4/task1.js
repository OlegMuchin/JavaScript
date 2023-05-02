"use strict";
// Задание 1
let array = [1,2,3,4,5]
console.log(array);
let pushArray = ["a","b","c"]
for (let index = 0; index < pushArray.length; index++) {
    array.splice(3+index,0,pushArray[index])
}
console.log(array);