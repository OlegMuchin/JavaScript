import { GET } from "./moduleFetch/GET.js";
import { POST } from "./moduleFetch/POST.js";
import { GETID } from "./moduleFetch/GETID.js";
import { PATCH } from "./moduleFetch/PATCH.js";
import { DELETE } from "./moduleFetch/DELETE.js";
import {PUT} from "./moduleFetch/PUT.js"
function createButton(text) {
    let but = document.createElement("button")
    but.innerHTML = text
    but.className = "input"
    but.style.width = "100px"
    but.style.height = "100px"
    document.body.append(but)
}
const nameButs = ["GET","POST","GETID","PATCH","DELETE"]
for (let index = 0; index < nameButs.length; index++) {
    createButton(nameButs[index])
}
const buts = document.querySelectorAll(".input");
buts[0].addEventListener("click", ()=>{
  GET()
});
buts[1].addEventListener("click", ()=>{
  POST()
});
buts[2].addEventListener("click", ()=>{
  GETID(1684797185772)
});
buts[3].addEventListener("click", ()=>{
  PATCH(1684797185772)
});
buts[4].addEventListener("click", ()=>{
  DELETE(1684797185772)
});
