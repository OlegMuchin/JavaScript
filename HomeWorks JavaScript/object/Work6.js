"use strict mode"
// Задание 6
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0
for (let prop in salaries) {
   sum = sum + salaries[prop]
}
console.log(sum);
// // Другой способ
// console.log((Object.values(salaries)).reduce((a,b,c)=>a+b+c)-(Object.values(salaries)).length);