import { createTitle } from "./modules/createTitle.js";
import { createTable } from "./modules/createTable.js";
import { createLine } from "./modules/createLine.js";
import { createInputs } from "./modules/createInputs.js";
function restrictionTrim(element, nameElement, restrictionsColumn = "") {
  if (nameElement == `${element.id}`) {
    if (!element.value.trim()) {
      restrictionsColumn = "Поле не должно быть пустым"
      return { nameElement: false, restrictionsColumn};
    }
    return { nameElement: true, restrictionsColumn };
  }
}
function restrictions() {
  let line = document.querySelectorAll(".line")
  if (line.length == 3) {
    line[2].remove()
  }
  let arrayInput = document.querySelectorAll(".input");
  let push = [];
  let columns = {}
  for (let index = 0; index < arrayInput.length; index++) {
    let arrayName = ["name", "surname", "patronymic", "birth", "ageStartEducation", "faculty"]
    let {nameElement, restrictionsColumn} = restrictionTrim(arrayInput[index], arrayName[index]);
    columns[arrayName[index]] = restrictionsColumn
    push.push(nameElement)
  }
  push = !push.some((element)=>{ return (element == false)})
  if (push) {
    let [year, mount, day] = arrayInput[3].value.split("-");
    let age = Math.floor(
      (Date.now() - new Date(year, mount, day)) /
        (1000 * 60 * 60 * 24 * 30 * 12)
    );
    if (age < 16) {
      columns["birth"] = "Студенту должно быть больше 16 лет"
      push = false;
    }
    let course = Math.floor(
      (Date.now() - new Date(Number(arrayInput[4].value), 1, 1)) /
        (1000 * 60 * 60 * 24 * 30 * 12)
    );
    if (age - course < 16) {
      columns["ageStartEducation"] = "Поступление в техникум с 16 лет"
      push = false;
    }
  }
  let table = document.querySelector("table").childNodes
  for (let index = 0; index < table.length; index++) {
    for (let j = 0; j < table[index].childNodes.length; j++) {
      table[index].childNodes[j].style.borderColor = "green";
    }
  }
  if (!push) {
    createLine(columns, "line");
    for (const key in columns) {
      if (!(columns[key] == "")) {
        console.log(key);
      }
    }
    let restrictionsTr = table[2].childNodes
    for (let j = 0; j < restrictionsTr.length; j++) {
      if (!(columns[restrictionsTr[j].className] == "")) {
        restrictionsTr[j].style.borderColor = "red";
        for (let index = 0; index < table.length-1; index++) {
          table[index].childNodes[j].style.borderColor = "red";
        }
      }
    }
  }
  console.log(columns);
  if (push) {
    pushStudent(arrayInput);
  }
}
function pushStudent(arrayInput) {
  let obj = {};
  for (let index = 0; index < arrayInput.length; index++) {
    obj[arrayInput[index].id] = arrayInput[index].value;
    arrayInput[index].value = "";
  }
  let ar = JSON.parse(localStorage.getItem("students"));
  ar.push(obj);
  localStorage.setItem("students", JSON.stringify(ar));
}
function studentInput() {
  createTitle("Заполнение данных о студенте");
  let button = document.createElement("button");
  button.innerHTML = "Назад";
  button.addEventListener("click", () => {
    window.location.href = "./webTableStudents.html";
  });
  document.body.append(button);
  let push = document.createElement("button");
  push.innerHTML = "Добавить";
  document.body.append(push);
  push.addEventListener("click", restrictions);
  createTable();
  const columnsInput = {
    name: "Имя",
    surname: "Фамилия",
    patronymic: "Отчество",
    birth: "День рождения",
    ageStartEducation: "Начало поступления",
    faculty: "Факультет",
  };
  createLine(columnsInput, "line");
  createLine(createInputs(), "input");
}
studentInput();
