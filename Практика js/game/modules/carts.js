export function carts(number, div) {
  let cart = document.createElement("img");
  cart.style.width = "51px";
  cart.style.height = "85px";
  cart.src = "img/cart.jpg";
  cart.id = "cart";
  cart.className = number;
  div.append(cart);
}
