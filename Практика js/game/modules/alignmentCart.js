import { carts } from "./carts.js";
export function alignmentCart(st, container, ar) {
  st.remove();
  for (let i = 0; i < ar.length; i++) {
    let divLine = document.createElement("div");
    divLine.className = "div";
    divLine.style.display = "flex";
    divLine.style.gap = "10px";
    container.append(divLine);
    for (let index = 0; index < ar[i].length; index++) {
      carts(`number${ar[i][index].numberCart}`, divLine);
    }
  }
}
