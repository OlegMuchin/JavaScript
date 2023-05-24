const otvet = 5;
let input = prompt("Введите число");
function game() {
  if (input === null) {
    return;
  } else if (parseInt(input) > otvet) {
    input = prompt("Меньше!");
    game();
  } else if (parseInt(input) < otvet) {
    input = prompt("Больше!");
    game();
  } else if (isNaN(parseInt(input))) {
    input = prompt("Не число!");
    game();
  } else if (parseInt(input) === otvet) {
    alert("Правильно!");
  }
}
game();
