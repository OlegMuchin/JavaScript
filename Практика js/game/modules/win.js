import { repeat } from "./repeat.js";
export function win(carts, main, time) {
  let x = 0;
  for (let index = 0; index < carts.length; index++) {
    if (carts[index].roll == true) {
      x++;
      if (x == carts.length) {
        clearInterval(time);
        setTimeout(() => {
          alert("Вы выйграли"), repeat(main);
        }, 1000);
      }
    }
  }
}
