// Запись
export function createLine(line = {}, text = "") {
  let tr = document.createElement("tr");
  tr.className = "line";
  let table = document.querySelectorAll(".table");
  table[table.length - 1].append(tr);
  for (const key in line) {
    let td = document.createElement("td");
    let arrayName = ["name", "surname", "patronymic", "birth", "ageStartEducation", "faculty"]
    td.className = arrayName[tr.childNodes.length]
    td.style.border = "1px solid";
    td.style.borderColor = "green";
    if (text == "line") {
      td.textContent = line[key];
    } else if (text == "input") {
      td.append(line[key]);
    }
    tr.append(td);
  }
}
