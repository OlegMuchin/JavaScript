"use strict";
// Задание 10
let array1 = ["a","b"]
let array2 = ["a","c"]
function comparison(ar1, ar2) {
    let num = 0
    if (ar1.length == ar2.length) {
        for (let index = 0; index < ar1.length; index++) {
            if (ar1[index] == ar2[index]) {
                num++
                if (num == ar1.length) {
                    return true
                }
            }
        }
    }
    return false
}
console.log(comparison(array1,array2));