"use strict mode"
// Задание 7
const user = {
    name: "John",
    age: 30
};
let check = false
for (let x in user) {
    console.log("Этот обьект не пустой");
    check = true
    break
}
if (!check) {
    console.log("Этот обьект пустой");
    return
}
if("age" in user) {
    console.log("В обьекте user есть ключ age");
}
else {
    console.log("В обьекте user нет ключа age");
}