const str = "Hello world";
let str2 = "",
  index = 0;
for (index; index < str.length; index++) {
  str2 = str2 + str[str.length - index - 1];
}
console.log(str2);
