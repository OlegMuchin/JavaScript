"use strict mode"
// Задание 5
function Calc(num1, num2, operator) {
  (calculator.number1 = num1), (calculator.number2 = num2);
  console.log(calculator[operator]());
}

let calculator = {
  number1: null,
  number2: null,
  sum() {
    return this.number1 + this.number2;
  },
  mul() {
    return this.number1 * this.number2;
  },
};
Calc(5, 10, "sum");