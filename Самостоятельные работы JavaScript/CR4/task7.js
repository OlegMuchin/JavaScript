"use strict";
// Задание 7
let array = ["я","учу","javascript","!"]
console.log(array);
// Я не понял, нужно ли удалить пробела перед "!"?
console.log(array.join(" ").toLocaleUpperCase());
let sing = array.splice(3,1)
console.log(array.join(" ").toLocaleUpperCase()+sing);