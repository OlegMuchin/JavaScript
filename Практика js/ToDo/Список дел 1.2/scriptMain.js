function scripts(arrayObjForm, titleNameWeb, Key) {
  function createTitle(titleName) {
    let title = document.createElement("h1");
    title.textContent = titleName;
    title.className = "title";
    document.body.append(title);
    return title;
  }
  function createMainForm() {
    //
    let mainForm = document.createElement("form");
    mainForm.className = "main";
    document.body.append(mainForm);
    // Строка ввода
    let input = document.createElement("input");
    input.className = "text";
    input.placeholder = "Введите новое дело";
    mainForm.append(input);
    // Кнопка добавить
    let push = document.createElement("button");
    push.className = "btn";
    push.innerHTML = "Добавить";
    push.style.backgroundColor = "lime";
    mainForm.append(push);
    //
    let ul = document.createElement("container");
    ul.className = "container";
    document.body.append(ul);

    return {
      mainForm,
      input,
      push,
      ul,
    };
  }
  function newForm(name, done, main) {
    event.preventDefault();
    //
    let li = document.createElement("div");
    li.className = "form";
    main.ul.append(li);
    //
    let task = document.createElement("p");
    task.className = "p";
    task.textContent = name;
    li.append(task);
    //
    let buttons = document.createElement("div");
    buttons.className = "buts";
    li.append(buttons);
    //
    let deleteForm = document.createElement("button");
    deleteForm.className = "delete";
    deleteForm.innerHTML = "Удалить";
    deleteForm.style.backgroundColor = "grey";
    buttons.append(deleteForm);
    //
    let complite = document.createElement("button");
    complite.className = "complite";
    if (done) {
      complite.innerHTML = "&#x2714";
      complite.style.backgroundColor = "green";
      li.style.backgroundColor = "green";
    } else {
      complite.innerHTML = "&#x2716";
      complite.style.backgroundColor = "red";
      li.style.backgroundColor = "red";
    }
    buttons.append(complite);
    //
    main.input.value = "";
    main.push.setAttribute("disabled", "disabled");
    return task;
  }
  function deleteForm(number) {
    event.preventDefault();
    if (event.target.className == "delete") {
      let vopros = confirm("Удалить?");
      if (vopros) {
        event.target.parentElement.parentElement.remove();
        for (let index = 0; index < ar.length; index++) {
          if (
            ar[index].name ==
            event.target.parentElement.parentElement.querySelector(".p")
              .textContent
          ) {
            console.log(ar[index]);
            ar.splice(index, 1);
            localStorage.setItem(number, JSON.stringify(ar));
          }
        }
      }
    }
  }
  function yesAndNo(number) {
    event.preventDefault();
    if (event.target.className == "complite") {
      for (let index = 0; index < ar.length; index++) {
        if (
          ar[index].name ==
          event.target.parentElement.parentElement.querySelector(".p")
            .textContent
        ) {
          if (event.target.style.backgroundColor === "red") {
            event.target.innerHTML = "&#x2714";
            event.target.parentElement.parentElement.style.backgroundColor =
              "green";
            event.target.style.backgroundColor = "green";
            ar[index].done = true;
          } else {
            event.target.innerHTML = "&#x2716";
            event.target.parentElement.parentElement.style.backgroundColor =
              "red";
            event.target.style.backgroundColor = "red";
            ar[index].done = false;
          }
          localStorage.setItem(number, JSON.stringify(ar));
        }
      }
    }
  }
  function loadForms(arrayObj, main, num) {
    main.push.setAttribute("disabled", "disabled");
    if (arrayObj.length !== 0) {
      for (let index = 0; index < arrayObj.length; index++) {
        newForm(arrayObj[index].name, arrayObj[index].done, main);
      }
    }
    let localStItem = JSON.parse(localStorage.getItem(num));
    if (localStItem) {
      for (let index = 0; index < localStItem.length; index++) {
        newForm(localStItem[index].name, localStItem[index].done, main);
        ar.push(localStItem[index]);
      }
    }
    return localStItem;
  }
  function web(array, titleWeb, number) {
    createTitle(titleWeb);
    let MainForm = createMainForm();
    document.addEventListener("DOMContentLoaded", () => {
      loadForms(array, MainForm, number);
    });
    document.addEventListener("input", () => {
      if (MainForm.input.value) {
        MainForm.push.removeAttribute("disabled");
      } else {
        MainForm.push.setAttribute("disabled", "disabled");
      }
    });
    MainForm.mainForm.addEventListener("submit", () => {
      event.preventDefault();
      let textName = newForm(MainForm.input.value, false, MainForm).textContent;
      let obj = { name: textName, done: false };
      ar.push(obj);
      localStorage.setItem(number, JSON.stringify(ar));
    });
    MainForm.ul.addEventListener("click", () => {
      deleteForm(number);
    });
    MainForm.ul.addEventListener("click", () => {
      yesAndNo(number);
    });
  }
  web(arrayObjForm, titleNameWeb, Key);
}
function arrayLoadForms(num) {
  let array = [
    [
      { name: "to-do1", done: true },
      { name: "to-do2", done: false },
    ],
    [
      { name: "to-do1", done: true },
      { name: "to-do2", done: true },
    ],
    [
      { name: "to-do1", done: false },
      { name: "to-do2", done: true },
    ],
  ];
  return array[num];
}
let ar = [];
let title = document.querySelectorAll(".titleWeb");
let key = document.querySelectorAll(".keyWeb");
let number1 = document.querySelectorAll(".loadWeb");
for (let index = 0; index < title.length; index++) {
  scripts(arrayLoadForms(number1[index].id), title[index].id, key[index].id);
}



// localStorage.setItem(JSON.stringify([1,2,3,4,5]))