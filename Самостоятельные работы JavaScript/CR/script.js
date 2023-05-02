import { elementsDOM } from "./module.js";
let elements = elementsDOM();
elements.color.addEventListener("click", () => {
  elements.sq.style.backgroundColor = elements.input.value;
});
elements.clear.addEventListener("click", () => {
  elements.sq.style.backgroundColor = "white";
  elements.input.value = "";
});
