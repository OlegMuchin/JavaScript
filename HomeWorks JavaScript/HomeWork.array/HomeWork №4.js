"use strict mode"
const str = "Сегодня была распродажа товаров по $10, $20 и $30"
let number = ""
number = (str.slice(str.indexOf("$")+1, str.indexOf(" ",str.indexOf("$")+1)))
console.log(number.slice(0,number.indexOf(",")));
/* 
Я не придумал, как сделать цикл,
который будет знать,
сколько у меня раз появляется $
и каждый раз вырезать новый $ до конца str.
*/