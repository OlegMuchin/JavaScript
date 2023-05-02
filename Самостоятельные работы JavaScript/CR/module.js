export function elementsDOM() {
  let input = document.createElement("input");
  input.value = "blue";
  document.body.append(input);
  let color = document.createElement("button");
  color.innerHTML = "Изменить цвет";
  document.body.append(color);
  let clear = document.createElement("button");
  clear.innerHTML = "Очистить";
  document.body.append(clear);
  let sq = document.createElement("div");
  sq.className = "sq";
  sq.style.width = "100px";
  sq.style.height = "100px";
  sq.style.backgroundColor = "blue";
  document.body.append(sq);
  return { input, color, clear, sq };
}
