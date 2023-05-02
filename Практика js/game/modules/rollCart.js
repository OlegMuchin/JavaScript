export function rollCart(cartFirstAndSecond) {
  if (!event.target.roll) {
    event.target.roll = true;
    cartFirstAndSecond.push(event.target.className);
    event.target.src = `img/${event.target.className}.jpg`;
    // Проверка, открыты или нет одинаковые карты
    let arrayCarts = document.querySelectorAll("#cart");
    if (cartFirstAndSecond.length == 2) {
      if (cartFirstAndSecond[0] == cartFirstAndSecond[1]) {
        console.log(cartFirstAndSecond);
      } else if (cartFirstAndSecond[0] != cartFirstAndSecond[1]) {
        for (let index = 0; index < arrayCarts.length; index++) {
          if (
            arrayCarts[index].className == cartFirstAndSecond[0] ||
            arrayCarts[index].className == cartFirstAndSecond[1]
          ) {
            setTimeout(() => {
              arrayCarts[index].roll = false;
              arrayCarts[index].src = "img/cart.jpg";
            }, 500);
          }
        }
      }
      cartFirstAndSecond = [];
    }
    return { cartFirstAndSecond, arrayCarts };
  }
}
