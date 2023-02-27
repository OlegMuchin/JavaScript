"Use strict";
const password = "a2-";
password.length >= 4 && (password.includes("-") || password.includes("_"))
  ? console.log("Пароль надёжный")
  : console.log("Пароль недостаточно надёжный");
