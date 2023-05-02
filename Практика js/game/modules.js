import { createTitle } from "./modules/DOM.js";
import { createArray } from "./modules/createArray.js";
import { shuffle } from "./modules/shuffle.js";
import { alignmentCart } from "./modules/alignmentCart.js";
import { createTime } from "./modules/createTime.js";
import { rollCart } from "./modules/rollCart.js";
import { win } from "./modules/win.js";
let elements = createTitle("Игра");
let stop;
elements.start.addEventListener("click", () => {
  if (!((elements.column.value * elements.line.value) % 2 == 0)) {
    alert("Колличество карт должно быть чётным");
    return;
  }
  if (Math.floor(elements.callTime.value) <= 0) {
    alert("Таймер должен быть равен или больше 1");
    return;
  }
  elements.column.setAttribute("disabled", "disabled");
  elements.line.setAttribute("disabled", "disabled");
  elements.callTime.setAttribute("disabled", "disabled");
  let array = createArray(elements.column.value, elements.line.value);
  array = shuffle(array);
  elements.timer.textContent = Math.floor(elements.callTime.value);
  elements.main.append(elements.timer);
  stop = createTime(elements.timer, elements.game, elements.main);
  alignmentCart(elements.start, elements.game, array);
});
// Событие "Перевернуть карту"
let carts = [];
elements.game.addEventListener("click", () => {
  arrays = rollCart(carts);
  carts = arrays.cartFirstAndSecond;
  win(arrays.arrayCarts, elements.main, stop);
});
