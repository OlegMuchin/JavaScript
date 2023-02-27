"use strict mode"
const number1 = 8.2864, number2 = 64.8964
console.log("Даны положительные вещественные числа",number1,"и",number2);
console.log("Дробная часть среднего арифметического между",number1,"и",number2,"=",((number1 + number2) / 2 % 1).toFixed(3))