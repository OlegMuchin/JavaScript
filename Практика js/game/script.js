(() => {
  // DOM элементы
  function createTitle(titleName) {
    let main = document.createElement("main");
    main.className = "main";
    main.style.margin = "0 auto";
    main.style.width = "200px";
    main.style.padding = "20px";
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
    divLineAndColumn.style.display = "flex";
    divLineAndColumn.style.gap = "10px";
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
    callTime.type = "Number";
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
      line,
    };
  }
  // Линии и строки
  function createLineAndColumn(defValue, dom) {
    const lineAndColumn = [
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
    ];
    const select = document.createElement("select");
    select.className = "net";
    dom.append(select);
    for (let index = 0; index < lineAndColumn.length; index++) {
      const option = document.createElement("option");
      option.label = lineAndColumn[index].label;
      option.value = lineAndColumn[index].value;
      select.append(option);
      if (lineAndColumn[index].value == defValue) {
        select.value = defValue;
      }
    }
    return select;
  }
  // Создание массива
  function createArray(column, line) {
    let ar = [];
    let index = 0;
    for (let i = 0; i < column; i++) {
      let line1 = [];
      for (let j = 0; j < line; j++) {
        if (index < (column * line) / 2) {
          line1.push(index + 1);
          index++;
        } else {
          index = 0;
          j--;
        }
      }
      ar.push(line1);
    }
    return ar;
  }
  // Перемешивание элементов массива
  function shuffle(ar) {
    for (let i = 0; i < ar.length; i++) {
      for (let index = 0; index < ar[i].length; index++) {
        let j = Math.floor(Math.random() * (i + 1));
        let x = Math.floor(Math.random() * (index + 1));
        [ar[i][index], ar[j][x]] = [ar[j][x], ar[i][index]];
      }
    }
    let array = [];
    for (let i = 0; i < ar.length; i++) {
      let line = [];
      for (let index = 0; index < ar[i].length; index++) {
        let obj = { numberCart: ar[i][index], roll: false };
        line.push(obj);
      }
      array.push(line);
    }
    return array;
  }

  // Перебор массива для определения карт
  function alignmentCart(st, container, ar) {
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
  // Таймер
  function createTime(stopwatch, container, main, timerId = null) {
    function startTime() {
      clearInterval(timerId);
      timerId = setInterval(interval, 1000);
      return timerId;
    }
    function interval() {
      stopwatch.innerHTML -= 1;
      if (stopwatch.innerHTML <= 0) {
        clearInterval(timerId);
        container.remove();
        setTimeout(() => {
          alert("Вы проиграли"), repeat(main);
        }, 1000);
      }
    }
    let stop = startTime();
    return stop;
  }
  // Создания карт на странице
  function carts(number, div) {
    let cart = document.createElement("img");
    cart.style.width = "51px";
    cart.style.height = "85px";
    cart.src = "img/cart.jpg";
    cart.id = "cart";
    cart.className = number;
    div.append(cart);
  }
  // Переворот карты
  function rollCart(cartFirstAndSecond) {
    if (!event.target.roll) {
      event.target.roll = true;
      cartFirstAndSecond.push(event.target.className);
      event.target.src = `img/${event.target.className}.jpg`;
      // Проверка, открыты или нет одинаковые карты
      let arrayCarts = document.querySelectorAll("#cart");
      if (cartFirstAndSecond.length == 2) {
        if (cartFirstAndSecond[0] == cartFirstAndSecond[1]) {
          console.log(cartFirstAndSecond);
        } else if (cartFirstAndSecond[0] != cartFirstAndSecond[1]) {
          for (let index = 0; index < arrayCarts.length; index++) {
            if (
              arrayCarts[index].className == cartFirstAndSecond[0] ||
              arrayCarts[index].className == cartFirstAndSecond[1]
            ) {
              setTimeout(() => {
                arrayCarts[index].roll = false;
                arrayCarts[index].src = "img/cart.jpg";
              }, 500);
            }
          }
        }
        cartFirstAndSecond = [];
      }
      return { cartFirstAndSecond, arrayCarts };
    }
  }
  // Конец
  function win(carts, main, time) {
    let x = 0;
    for (let index = 0; index < carts.length; index++) {
      if (carts[index].roll == true) {
        x++;
        if (x == carts.length) {
          clearInterval(time);
          setTimeout(() => {
            alert("Вы выйграли"), repeat(main);
          }, 1000);
        }
      }
    }
  }
  // Ещё раз
  function repeat(main) {
    let re = document.createElement("button");
    re.className = "re";
    re.textContent = "Ещё раз";
    main.append(re);
    re.addEventListener("click", () => {
      window.location.reload();
    });
    return re;
  }
  // Граница Граница Граница Граница Граница Граница Граница Граница Граница Граница Граница

  // Страница игры

  function webGame() {
    // Название
    let elements = createTitle("Игра");
    let stop;

    // Событие "Начать игру"
    elements.start.addEventListener("click", () => {
      if (!((elements.column.value * elements.line.value) % 2 == 0)) {
        alert("Колличество карт должно быть чётным");
        return;
      }
      if (Math.floor(elements.callTime.value) <= 0) {
        alert("Таймер должен быть равен или больше 1");
        return;
      }
      elements.column.setAttribute("disabled", "disabled");
      elements.line.setAttribute("disabled", "disabled");
      elements.callTime.setAttribute("disabled", "disabled");
      let array = createArray(elements.column.value, elements.line.value);
      array = shuffle(array);
      elements.timer.textContent = Math.floor(elements.callTime.value);
      elements.main.append(elements.timer);
      stop = createTime(elements.timer, elements.game, elements.main);
      alignmentCart(elements.start, elements.game, array);
    });
    // Событие "Перевернуть карту"
    let carts = [];
    elements.game.addEventListener("click", () => {
      arrays = rollCart(carts);
      carts = arrays.cartFirstAndSecond;
      win(arrays.arrayCarts, elements.main, stop);
    });
  }
  webGame();
})();
