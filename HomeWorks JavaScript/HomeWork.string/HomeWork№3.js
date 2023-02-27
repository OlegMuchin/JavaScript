"use strict"
let str = "Я сделал очень большую строку"
const maxlen = 10, len = maxlen < str.length
str = str.slice(0,maxlen)
if(len === true){str = str + "…"}
console.log(str);