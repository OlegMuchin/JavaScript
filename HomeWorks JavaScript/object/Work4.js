"use strict mode"
// Задание 4
let obj = {
  name: "Петя",
  surname: "Иванов",
  nameAndSurname() {
    console.log(this.name, this.surname);
  }
};
obj.nameAndSurname();
function namePrint() {
    console.log("My name", this.name)
}
obj.namePrint = namePrint
obj.namePrint();
delete obj.nameAndSurname;