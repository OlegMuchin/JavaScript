"use strict mode"
// Задание 9
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(obj) {
    for (let prop in menu) {
        if (typeof menu[prop] == "number") {
            menu[prop] = menu[prop]*2
        }
    }
}
multiplyNumeric(menu)
console.log(menu);