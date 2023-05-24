const users = [
  { name: "Олег", login: "oleg.nun@mail.ru", password: "11" },
  { name: "Миша", login: "misha.nun@mail.ru", password: "22" },
  { name: "Ваня", login: "vany.nun@mail.ru", password: "33" },
  { name: "Саша", login: "shasha.nun@mail.ru", password: "44" },
];
let log = prompt("Введите логин");
let pas = prompt("Введите пароль");
for (let index = 0; index < users.length; index++) {
  if (log !== users[index].login && pas !== users[index].password) {
    alert("Ошибка авторизации, неправильный логин и пароль");
    break;
  } else {
    if (log === users[index].login) {
      if (pas === users[index].password) {
        alert(`Привет ${users[index].name}`);
        break;
      } else {
        alert("Ошибка авторизации, неправильный пароль");
        break;
      }
    } else {
      alert("Ошибка авторизации, неправильный логин");
      break;
    }
  }
}
