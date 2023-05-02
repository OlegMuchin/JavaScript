"use strict";
// Задание 9
let fullName = "Иван Иванович Иванов"
console.log(fullName);
let surName = "Иванов"
if (fullName.slice(fullName.length - surName.length, fullName.length) == surName) {
    fullName = `${surName} ${fullName.slice(0,fullName.length - surName.length)}`
}
console.log(fullName);