"Use strict";
const name = "Oleg",
  surname = "mukHin";
const newname = name[0].toUpperCase() + name.slice(1).toLowerCase(),
  newsurname = surname[0].toUpperCase() + surname.slice(1).toLowerCase();
if (name === newname) {
  console.log("Имя осталось без изменений");
} else {
  console.log("Имя было преобразовано");
}
if (surname === newsurname) {
  console.log("Фамилия осталась без изменений");
} else {
  console.log("Фамилия была преобразована");
}
