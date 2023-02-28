// Функции
// Задание №1
function filter(email = [], blackEmail = []) {
  for (let index = 0; index < email.length; index++) {
    for (let index1 = 0; index1 < blackEmail.length; index1++) {
      if (email[index] === blackEmail[index1]) {
        break;
      } else if (index1 === blackEmail.length - 1) {
        whiteEmails.push(email[index]);
      }
    }
  }
}
const emails = ["адрес1", "адрес2", "адрес3", "адрес4"],
  blackEmails = ["адрес1", "адрес3"],
  whiteEmails = [];
filter(emails, blackEmails);
console.log(whiteEmails);
// Задание №2
function calculate(sum, quantity, promoСode = null) {
  if (promoСode === "ДАРИМ300") (sum < 300) ? sum = 0: sum = sum - 300;
  if (quantity >= 10) sum = sum - (sum / 100) * 5;
  if (sum > 50000) sum = sum - ((sum - 50000) / 100) * 20;
  if (promoСode === "СКИДКА15") sum = sum - (sum / 100) * 15;
  console.log(Math.trunc(sum));
}
const summa = 55123,
  quantitys = 10,
  promoСodes = "СКИДКА15";
calculate(summa, quantitys, promoСodes);
