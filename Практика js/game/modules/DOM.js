import { createLineAndColumn } from "./lineAndColumn.js"

export function createTitle(titleName) {
    let main = document.createElement("main");
    main.className = "main";
    main.style.margin = "0 auto";
    main.style.width = "200px"
    main.style.padding = "20px"
    document.body.append(main);
    // Название игры
    let title = document.createElement("h1");
    title.textContent = titleName;
    title.className = "title";
    main.append(title);
    // Исчезающий контейнер
    let divDiv = document.createElement("container");
    main.append(divDiv);
    // Строки и столбцы
    let divLineAndColumn = document.createElement("div");
    divLineAndColumn.className = "lineAndColumn";
    divLineAndColumn.style.display = "flex"
    divLineAndColumn.style.gap = "10px"
    divDiv.append(divLineAndColumn);
    // Столбцы
    let column = createLineAndColumn("4", divLineAndColumn);
    // X
    let x = document.createElement("p");
    x.style.fontSize = "10px";
    x.textContent = "X";
    divLineAndColumn.append(x);
    // Строки
    let line = createLineAndColumn("4", divLineAndColumn);
    let net = document.querySelectorAll(".net");
    // Таймер
    let divTime = document.createElement("div");
    divDiv.append(divTime);
    let nameTime = document.createElement("h4");
    nameTime.textContent = "Таймер";
    divTime.append(nameTime);
    let callTime = document.createElement("input");
    callTime.type = "Number"
    callTime.value = 60;
    divTime.append(callTime);
    // Старт
    let start = document.createElement("button");
    start.innerHTML = "Начать игру";
    main.append(start);
    let timer = document.createElement("div");
    timer.className = "timer";
    timer.textContent = 60;
    //
    let game = document.createElement("container");
    game.className = "game";
    document.body.append(game);
    return {
      start,
      game,
      title,
      main,
      timer,
      callTime,
      divDiv,
      net,
      column,
      line
    };
  }
  