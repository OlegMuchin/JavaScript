"use strict";
const a = 13.890123,
  b = 2.891564,
  n = 3,
  an = Math.trunc((a % 1) * 10 ** n),
  bn = Math.trunc((b % 1) * 10 ** n);
console.log(
  `${an}, ${bn}\n${an} > ${bn} ${an > bn}\n${an} < ${bn} ${
    an < bn
  }\n${an} >= ${bn} ${an >= bn}\n${an} <= ${bn} ${an <= bn}\n${an} === ${bn} ${
    an === bn
  }\n${an} != ${bn} ${an != bn}`
);
