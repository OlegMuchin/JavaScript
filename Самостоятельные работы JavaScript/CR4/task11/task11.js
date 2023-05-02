"use strict";
// Задание 11
let input = document.createElement("input")
document.body.append(input)
let datalist = document.createElement("datalist")
datalist.id = "countries"
document.body.append(datalist)
const countries = ["Россия","США","Китай","Япония","Венгрия","Великобритания"]
for (let index = 0; index < countries.length; index++) {
    const option = document.createElement("option");
    option.value = countries[index];
    datalist.append(option);
}
input.addEventListener("input",()=>{
    if (event.target.value != "") {
        input.setAttribute("list","countries")
    }else{
        input.setAttribute("list","No")
    }
})