"use strict mode"
// Задание 2
let obj = { Коля: "1000", Вася: "500", Петя: "200" };
console.log(obj["Коля"]);
// Задание 2.1
let workers = [
  { name: "Коля", age: "20" },
  { name: "Петя", age: "21" },
  { name: "Иван", age: "23" },
  { name: "Вася", age: "30" }
];
function worker(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index].age % 10 == 1) {
        console.log(array[index].name, array[index].age, "год")
    }
    else if (array[index].age % 10 > 1 && array[index].age % 10 < 6) {
        console.log(array[index].name, array[index].age, "года")
    }
    else {
        console.log(array[index].name, array[index].age, "лет")
    }
  }
}
worker(workers);