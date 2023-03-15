"use strict mode"
// Задание 3
let user = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Bob",
    age: 21,
  },
  {
    name: "Anna",
    age: 19,
  },
];
for (let index = 0; index < user.length; index++) {
  if (user[index].name == "Bob") {
    var obj = user[index];
  }
  if (user[index].name == "Anna") {
    user.splice(index, 1);
  }
}
console.log(obj);
console.log(user);