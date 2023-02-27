"use strict"
let str = "Html footer SECTION"
str = str.toLowerCase()
for(let i=0;i<(str.split(" ").length);i++)
    {str = str.slice(0,str.indexOf(" ")+1) + str[str.indexOf(" ")+1].toUpperCase() + str.slice(str.indexOf(" ")+2)
    str = str.slice(0,str.indexOf(" ")) + str.slice(str.indexOf(" ")+1)}
console.log(str);