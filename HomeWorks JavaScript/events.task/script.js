// Задание 1
let btn = document.querySelectorAll(".btn");
function eventbtn1() {
  alert("Привет мир");
}
btn[0].addEventListener("click", eventbtn1);
// Задание 2
let inp = document.querySelectorAll(".text");
function eventbtn2() {
  inp[0].value = "test@email.ru";
}
btn[1].addEventListener("click", eventbtn2);
// Задание 3
function examination() {
  if (inp[1].value == "") {
    alert("Вы ничего не ввели в функцию");
  } else {
    alert(`Вы ввели в функцию ${inp[1].value}`);
  }
}
btn[2].addEventListener("click", examination);
// Задание 4
function exchange() {
  let text1 = inp[2].value;
  let text2 = inp[3].value;
  inp[2].value = text2;
  inp[3].value = text1;
}
btn[3].addEventListener("click", exchange);
// Задание 5
function block() {
  inp[4].disabled = true;
}
function addblock() {
  inp[4].disabled = false;
}
btn[4].addEventListener("click", block);
btn[5].addEventListener("click", addblock);
// Задание 6
let square = document.querySelector(".square");
function disappearance() {
  if (btn[6].innerHTML == "Скрыть квадрат") {
    btn[6].innerHTML = "Покозать квадрат";
    square.style.display = "none";
  } else {
    btn[6].innerHTML = "Скрыть квадрат";
    square.style.display = "block";
  }
}
btn[6].addEventListener("click", disappearance);
// Задание 7
let squareRedGreen = document.querySelector(".squareRedGreen");
function over() {
  squareRedGreen.style.backgroundColor = "green";
}
function out() {
  squareRedGreen.style.backgroundColor = "red";
}
squareRedGreen.addEventListener("mouseover", over);
squareRedGreen.addEventListener("mouseout", out);
// Задание 8
// Задание 8.1
let kubs = document.querySelectorAll("#kub");
function clickGreen(green) {
  for (let index = 0; index < kubs.length; index++) {
    if (index == green) {
      kubs[index].style.backgroundColor = "green"
    }
    else {
      kubs[index].style.backgroundColor = "red"
    }
  }
}
function kub1() {
  clickGreen(0)
}
function kub2() {
  clickGreen(1)
}
function kub3() {
  clickGreen(2)
}
function kub4() {
  clickGreen(3)
}
kubs[0].addEventListener("click", kub1);
kubs[1].addEventListener("click", kub2);
kubs[2].addEventListener("click", kub3);
kubs[3].addEventListener("click", kub4);
// Задание 8.2
let delegationON = document.querySelector("#delegationON")
let sq = document.querySelectorAll("#kubs")
function delegation() {
  if (event.target.className == "squares") {
    for (let index = 0; index < sq.length; index++) {
      sq[index].style.backgroundColor = "red"
    }
    event.target.style.backgroundColor = "green"
  }
}
delegationON.addEventListener("click", delegation)
// Задание 9
const numbers = document.querySelector("#number"),
input = document. querySelector(".input"),
deleting = document.querySelector("#del")
let calculating = 0
function number(params) {
  if (event.target.className == "btn") {
    input.value += event.target.innerHTML
    calculating += event.target.innerHTML
  }
}
function del() {
  input.value = ""
  calculating = 0
}
numbers.addEventListener("click", number)
deleting.addEventListener("click", del)