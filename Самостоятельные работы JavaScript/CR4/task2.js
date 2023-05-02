"use strict";
// Задание 2
let object = {js:"test",jq:"hello",css:"world"}
console.log(object);
let keyArray = []
for (const key in object) {
    keyArray.push(key)
}
console.log(keyArray);