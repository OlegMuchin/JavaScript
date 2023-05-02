"use strict";
// Задание 4
let string1 = ".html http://one"
let string2 = "htt://tw.htmlo"
let string3 = "the http://.html"
function check(string, subStr) {
    if (string.slice(string.length-subStr.length,string.length).includes(subStr)) {
        console.log(`Строка (${string}) заканчивается на (${subStr}).`);
    } else {
        console.log(`Строка (${string}) не заканчивается на (${subStr}).`);
    }
}
check(string1, ".html")
check(string2, ".html")
check(string3, ".html")