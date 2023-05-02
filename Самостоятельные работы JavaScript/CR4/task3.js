"use strict";
// Задание 3
let string1 = "http://one"
let string2 = "htt://two"
let string3 = "the http://"
function check(string, subStr) {
    if (string.slice(0,subStr.length).includes(subStr)) {
        console.log(`Строка (${string}) начинается с (${subStr}).`);
    } else {
        console.log(`Строка (${string}) не начинается с (${subStr}).`);
    }
}
check(string1, "http://")
check(string2, "http://")
check(string3, "http://")