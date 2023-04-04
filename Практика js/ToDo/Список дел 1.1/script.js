(() => {
  function createTitle(titleName) {
    let title = document.createElement("h1");
    title.textContent = titleName;
    title.className = "title";
    document.body.append(title);
    return title;
  }
  function createMainForm() {
    //
    let mainForm = document.createElement("mainForm");
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
    // Кнопака удалить всё
    let allDelete = document.createElement("button");
    allDelete.className = "allDelete";
    allDelete.innerHTML = "Удалить всё";
    allDelete.style.backgroundColor = "grey";
    mainForm.append(allDelete);
    //
    let container = document.createElement("container");
    container.className = "container";
    document.body.append(container);

    return {
      input,
      push,
      allDelete,
      container,
    };
  }
  function newForm(name, done, main) {
    event.preventDefault();
    //
    let form = document.createElement("form");
    form.className = "form";
    main.container.append(form);
    //
    let task = document.createElement("p");
    task.textContent = name;
    form.append(task);
    //
    let buttons = document.createElement("div");
    buttons.className = "buts";
    form.append(buttons);
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
      form.style.backgroundColor = "green";
    } else {
      complite.innerHTML = "&#x2716";
      complite.style.backgroundColor = "red";
      form.style.backgroundColor = "red";
    }
    buttons.append(complite);
    //
    main.input.value = "";
    main.push.setAttribute("disabled", "disabled");
  }
  function deleteForm() {
    event.preventDefault();
    if (event.target.className == "delete") {
      event.target.parentElement.parentElement.remove();
    }
  }
  function yesAndNo() {
    event.preventDefault();
    if (event.target.className == "complite") {
      if (event.target.style.backgroundColor === "red") {
        event.target.innerHTML = "&#x2714";
        event.target.parentElement.parentElement.style.backgroundColor =
          "green";
        event.target.style.backgroundColor = "green";
      } else {
        event.target.innerHTML = "&#x2716";
        event.target.parentElement.parentElement.style.backgroundColor = "red";
        event.target.style.backgroundColor = "red";
      }
    }
  }
  function allDeleteForm(main) {
    main.container.remove();
    main.container = document.createElement("container");
    document.body.append(main.container);
  }
  function loadForms(arrayObj, main, num) {
    main.push.setAttribute("disabled", "disabled");
    if (arrayObj.length !== 0) {
      for (let index = 0; index < arrayObj.length; index++) {
        newForm(arrayObj[index].name, arrayObj[index].done, main);
      }
    }
  }
  function arrayLoadForms(num) {
    let array = [
      [
        { name: "to-do1", done: true },
        { name: "to-do2", done: false },
        { name: "to-do3", done: true },
      ],
      [
        { name: "to-do1", done: true },
        { name: "to-do2", done: true },
        { name: "to-do3", done: false },
      ],
      [
        { name: "to-do1", done: false },
        { name: "to-do2", done: true },
        { name: "to-do3", done: true },
      ],
    ];
    return array[num];
  }
  function web1(array, titleWeb, number) {
    let ar = [];
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
    MainForm.push.addEventListener("click", () => {
      newForm(MainForm.input.value, false, MainForm);
    });
    MainForm.container.addEventListener("click", deleteForm);
    MainForm.container.addEventListener("click", yesAndNo);
    MainForm.allDelete.addEventListener("click", () => {
      allDeleteForm(MainForm);
    });
  }
  web1(arrayLoadForms(0), "Список дел меня", "1");
  web1(arrayLoadForms(1), "Список дел мамы", "2");
  web1(arrayLoadForms(2), "Список дел папы", "3");
})();
