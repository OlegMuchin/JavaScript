"use strict";
// Задание 6
let string = "var_test_text"
console.log(string);
string = string.split("_").map((str) => str[0].toLocaleUpperCase()+str.slice(1)).join("")
string = string[0].toLocaleLowerCase()+string.slice(1)
console.log(string);