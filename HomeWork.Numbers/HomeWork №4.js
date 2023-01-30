"use strict mode"
const number1 = 5, number2 = 6, number3 = 9
console.log("Даны три числа:",number1,",",number2,",",number3);
console.log("Среднее арифметическое модулей квадратов трёх чисел:",((number1**3 + number2**3 + number3**3) / 3).toFixed(3),"\n\Среднее геометрическое квадратов трёх чисел:",((number1**2*number2**2*number3**2)**(1/3)).toFixed(3));