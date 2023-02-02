"use strict"
const mail = "oleg.muhin9@mail.ru", address = mail.slice(mail.indexOf("@"));
let nickname = mail.slice(0, mail.indexOf("@"));
nickname = nickname.slice(0, (Math.trunc(nickname.length/2)))
console.log(nickname + "…" + address);