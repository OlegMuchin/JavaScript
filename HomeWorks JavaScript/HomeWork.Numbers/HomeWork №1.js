"use strict mode"
const number = 567
console.log("Дано трёхзначное число: ",number)
let a, b, c
a = parseInt(number / 100)      //Находим сотни
b = parseInt(number % 100 / 10) //Находим десятки
c = parseInt(number % 10)       //Находим единицы
console.log("Произведение ",number,"=", a*b*c, "\n\Сумма ",number,"=", a+b+c);