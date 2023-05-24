import { createTitle } from "./modules/createTitle.js";
import { createTable } from "./modules/createTable.js";
import { createLine } from "./modules/createLine.js";
import { changeObj } from "./modules/changeObj.js";
import { createInputs } from "./modules/createInputs.js";

function pushMemory(memory = []) {
  if (memory) {
    for (let index = 0; index < memory.length; index++) {
      let line = changeObj(memory[index]);
      createLine(line, "line");
    }
  }
}
function pushLocalStorage(newArray = [], array = []) {
  if (array) {
    for (let index = 0; index < array.length; index++) {
      newArray.push(array[index]);
    }
  }
  return newArray;
}

// Главная функция
function studentDashboard() {
  // Создание заголовка
  createTitle("Панель управления студентами");
  // Создание кнопки перехода на страницу добавления
  let button = document.createElement("button");
  button.innerHTML = "Добавить";
  button.addEventListener("click", () => {
    window.location.href = "./webInputStudents.html";
  });
  document.body.append(button);
  createTitle("Фильтры", 3);
  const filters = {
    surname: "Фамилия",
    name: "Имя",
    patronymic: "Очество",
    faculty: "Факультет",
    birth: "День рождения",
    ageStartEducation: "Годы учёбы",
  };
  createTable();
  createLine(filters, "line");
  let filtersInput = createInputs()
  console.log(filtersInput.birth);
  [filtersInput.birth,filtersInput.ageStartEducation] = [filtersInput.ageStartEducation,filtersInput.birth]
  console.log(filtersInput);
  console.log(filtersInput.birth);
  [filtersInput.faculty,filtersInput.birth] = [filtersInput.birth,filtersInput.faculty]
  createLine(filtersInput, "input");
  createTitle("Таблица студентов", 3);
  // Создание таблицы
  createTable();
  // Название столбцов
  const menu = {
    fullName: "ФИО",
    faculty: "Факультет",
    birthDateAndAge: "Дата рождения и возраст",
    StartEducationAndWell: "Годы учёбы и курс",
  };
  let defaultArray = [];
  if (!JSON.parse(localStorage.getItem("students"))) {
    const students = [
      {
        name: "АОлег",
        surname: "БМухин",
        patronymic: "ВАндреевич",
        birth: "2000-01-01",
        ageStartEducation: "2019",
        faculty: "ИСиП",
      },
      {
        name: "БНикифор",
        surname: "ВКазаков",
        patronymic: "АДонатович",
        birth: "2001-08-20",
        ageStartEducation: "2020",
        faculty: "РП",
      },
      {
        name: "ВМодест",
        surname: "АСоболев",
        patronymic: "БКонстантинович",
        birth: "1999-06-10",
        ageStartEducation: "2021",
        faculty: "МТОР",
      },
    ];
    defaultArray = pushLocalStorage([], students);
  }
  let array = pushLocalStorage(
    defaultArray,
    JSON.parse(localStorage.getItem("students"))
  );
  localStorage.setItem("students", JSON.stringify(array));
  // Создание полей таблицы
  createLine(menu, "line");
  // Загрузка записей
  let memory = JSON.parse(localStorage.getItem("students"));
  // Добавление записей
  pushMemory(memory)
  let table = document.querySelectorAll(".table")
  table[0].childNodes[1].childNodes[0].className = "surname"
  table[0].childNodes[1].childNodes[1].className = "name"
  table[0].childNodes[1].childNodes[3].className = "faculty"
  table[0].childNodes[1].childNodes[4].className = "birth"
  table[0].childNodes[1].childNodes[5].className = "ageStartEducation"
  const removeLines = table[1].childNodes
  table[0].childNodes[0].addEventListener("click",()=>{
    let target = event.target
    let arrayName = ["name", "surname", "patronymic", "birth", "ageStartEducation", "faculty"]
    let td = arrayName.some((element)=>{
      return element == target.className
    })
    if (!(td)) {
      return
    }
    let i = 0
    for (const key in filters) {
      table[0].childNodes[0].childNodes[i].innerHTML = filters[key]
      i++
    }
    while (!(removeLines.length == 1)) {
      removeLines[removeLines.length-1].remove()
    }
    for (let index = 0; index < arrayName.length; index++) {
      if (target.className == arrayName[index]) {
        table[0].childNodes[0].childNodes[index].innerHTML = `${target.textContent} &uarr;`
        memory = memory.sort((a,b)=>{
          if (arrayName[index] == arrayName[0] || arrayName[index] == arrayName[1] || arrayName[index] == arrayName[2] || arrayName[index] == arrayName[3]) {
            let name1 = a[arrayName[index]].toLocaleLowerCase(), name2 = b[arrayName[index]].toLocaleLowerCase()
            if (name1 < name2) {
                return -1
            } else if (name1 > name2) {
                return 1
            }
            return 0
          }
          if (arrayName[index] == arrayName[4] || arrayName[index] == arrayName[5]) {
            return a[arrayName[index]] - b[arrayName[index]]
          }
        })
      }
    }
    
    pushMemory(memory)
  })
  table[0].childNodes[1].addEventListener("input",()=>{
    let target = event.target
    let arrayName = ["surname","name", "patronymic", "birth", "ageStartEducation", "faculty"]
    let memoryFilter = []
    while (!(removeLines.length == 1)) {
      removeLines[removeLines.length-1].remove()
    }
    console.log();
    for (let index = 0; index < arrayName.length; index++) {
      if (target.parentElement.className == arrayName[index]) {
        memoryFilter = memory.filter((element)=>{
          return (element[arrayName[index]].indexOf(target.value) >= 0 )
        })
      }
    }
    pushMemory(memoryFilter)
  })
}
studentDashboard();