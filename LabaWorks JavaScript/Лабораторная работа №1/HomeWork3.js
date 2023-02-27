"use strict";
const n = 0,
  m = 100;
const num = Math.trunc(Math.random() * (Math.max(m, n) - Math.min(m, n)) + Math.min(m, n));
console.log(num +( num % 2) +1);