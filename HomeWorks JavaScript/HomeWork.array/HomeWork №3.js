"use strict mode"
const students = ["Петя  ","Саша  ","Коля  ","Серёжа","Вика  "]
const math = [5,3,1,2,4]
let average = 0
if (students.length === math.length) {
    for (let index = 0; index < students.length; index++) {
        average = math[index] + average
    }
    console.log("Средняя оценка студентов =", average / math.length);
    for (let index = 0; index < students.length; index++) {
        if (math[index] === 5) {
            console.log(`${students[index]} : оценка A`);
        }
        else if (math[index] === 4) {
            console.log(`${students[index]} : оценка B`);
        }
         else if (math[index] === 3) {
            console.log(`${students[index]} : оценка C`);
        }
         else if (math[index] === 2) {
            console.log(`${students[index]} : оценка D`);
        }
         else {
            console.log(`${students[index]} : оценка F`);
        }
    }
}