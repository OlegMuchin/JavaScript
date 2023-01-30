"use strict mode"
const number = 39
console.log("Дано двухзначное число:",number);
let numberStr = String(number) // Переводим число в строку
/*
Используем .split, который разбивает строку на элементы массива
С помощью .reverse мы переварачиваем массив
И в конце используя .join мы объединяем массив вместе, получая строку,
которую мы преобразуем в число.
*/
console.log("Перевёрнутое число:",parseInt(numberStr.split("").reverse().join("")))