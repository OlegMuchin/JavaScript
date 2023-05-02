"use strict";
// Задание 12
let table = document.createElement("table")
document.body.append(table)
function createLine(line) {
    let tr = document.createElement("tr");
    tr.className = "lines"
    table.append(tr);
    for (const key in line) {
        let td = document.createElement("td");
        td.style.border = "2px solid";
        td.style.borderColor = "black";
        td.textContent = line[key];
        tr.append(td);
    }
}
const th = {
    num:"№",
    surName:"Фамилия",
    name:"Имя",
    age:"Возраст",
}
let trColums = document.createElement("tr");
table.append(trColums);
for (const key in th) {
    let td = document.createElement("td");
    td.className = "collum"
    td.style.border = "2px solid";
    td.style.borderColor = "black";
    td.style.backgroundColor = "grey"
    td.innerHTML = th[key].bold();
    trColums.append(td);
}
let lines = [{
    num: 1,
    surName:"Мухин",
    name:"Олег",
    age:18,
},{
    num: 5,
    surName:"Лаптев",
    name:"Дима",
    age:20,
},{
    num: 3,
    surName:"Пантюхин",
    name:"Илья",
    age:19,
},{
    num: 10,
    surName:"Толкачёв",
    name:"Ваня",
    age:19,
}]
for (let index = 0; index < lines.length; index++) {
    createLine(lines[index])
}
let collums = document.querySelectorAll(".collum")
collums[0].addEventListener("click",()=>{
    lines = lines.sort((a,b)=>{
        return a.num-b.num
    });
})
collums[1].addEventListener("click",()=>{
    lines = lines.sort((a,b)=>{
        let surName1 = a.surName.toLocaleLowerCase(), surName2 = b.surName.toLocaleLowerCase()
        if (surName1 < surName2) {
            return -1
        } else if (surName1 > surName2) {
            return 1
        }
        return 0
    })
})
collums[2].addEventListener("click",()=>{
    lines = lines.sort((a,b)=>{
        let name1 = a.name.toLocaleLowerCase(), name2 = b.name.toLocaleLowerCase()
        if (name1 < name2) {
            return -1
        } else if (name1 > name2) {
            return 1
        }
        return 0
    })
})
collums[3].addEventListener("click",()=>{
    lines = lines.sort((a,b)=>{
        return a.age-b.age
    });
})
collums[0].parentElement.addEventListener("click",()=>{
    let delitLines = document.querySelectorAll(".lines")
    for (let index = 0; index < delitLines.length; index++) {
        delitLines[index].remove()
    }
    for (let index = 0; index < lines.length; index++) {
        createLine(lines[index])
    }
})